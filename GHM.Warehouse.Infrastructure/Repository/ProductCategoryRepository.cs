using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class ProductCategoryRepository : RepositoryBase, IProductCategoryRepository
    {

        private readonly IRepository<ProductCategory> _productCategoryRepository;

        public ProductCategoryRepository(IDbContext context) : base(context)
        {
            _productCategoryRepository = Context.GetRepository<ProductCategory>();
        }

        public async Task<bool> CheckExists(int id)
        {
            return await _productCategoryRepository.ExistAsync(x => x.Id == id && !x.IsDelete && x.IsActive);
        }

        public async Task<bool> CheckExists(string tenantId, int id)
        {
            return await _productCategoryRepository.ExistAsync(x => x.Id == id && !x.IsDelete && x.IsActive && x.TenantId == tenantId);
        }
        

        public async Task<int> Delete(int productCategoryId)
        {
            var info = await GetInfo(productCategoryId);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(int productCategoryId)
        {
            var info = await GetInfo(productCategoryId);
            if (info == null)
                return -1;

            _productCategoryRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<List<ProductCategorySearchViewModel>> GetActivedProductCategory(string tenantId, string languageId)
        {
            var query = Context.Set<ProductCategory>().Where(x => x.IsActive && !x.IsDelete && x.TenantId == tenantId)
                .Join(Context.Set<ProductCategoryTranslation>().Where(x => x.LanguageId == languageId), o => o.Id,
                    ot => ot.ProductCategoryId, (o, ot) => new ProductCategorySearchViewModel
                    {
                        Id = o.Id,
                        Name = ot.Name,
                        Description = ot.Description,
                        IsActive = o.IsActive,
                        ParentId = o.ParentId,
                        IdPath = o.IdPath,
                        ChildCount = o.ChildCount
                    });
            return await query
                .AsNoTracking()
                .ToListAsync();
        }

        public async Task<List<ProductCategorySearchViewModel>> GetAllActivatedProductCategory(string tenantId, string languageId)
        {
            var query = Context.Set<ProductCategory>().Where(x => x.IsActive && !x.IsDelete && x.TenantId == tenantId)
                .Join(Context.Set<ProductCategoryTranslation>().Where(x => x.LanguageId == languageId), o => o.Id,
                    ot => ot.ProductCategoryId, (o, ot) => new ProductCategorySearchViewModel
                    {
                        Id = o.Id,
                        Name = ot.Name,
                        Description = ot.Description,
                        IsActive = o.IsActive,
                        ParentId = o.ParentId,
                        IdPath = o.IdPath,
                        ChildCount = o.ChildCount
                    });
            return await query
                .AsNoTracking()
                .ToListAsync();
        }

        public async Task<List<ProductCategory>> GetAllChild(int productCategoryParentId, bool isReadOnly = false)
        {
            var query = Context.Set<ProductCategory>().Where(x => x.ParentId == productCategoryParentId && !x.IsDelete);

            return await query
                .ToListAsync();
        }

        public Task<List<ProductCategoryForSelectViewModel>> GetAllProductCategoryForSelect(string tenantId, string languageId, string keyword, int page, int pageSize, out int totalRows)
        {
            Expression<Func<ProductCategory, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId && x.IsActive;
            Expression<Func<ProductCategoryTranslation, bool>> specTranslation = x => x.LanguageId == languageId;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            var query = Context.Set<ProductCategory>().Where(spec)
                .Join(Context.Set<ProductCategoryTranslation>().Where(specTranslation), o => o.Id,
                    ot => ot.ProductCategoryId, (o, ot) => new ProductCategoryForSelectViewModel
                    {
                        Id = o.Id,
                        Name = ot.Name,
                    });

            totalRows = query.Count();

            return query
                .AsNoTracking()
                .OrderBy(c => c.Name)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> GetChildCount(int id)
        {
            return await _productCategoryRepository.CountAsync(x => x.ParentId == id && !x.IsDelete);
        }

        public async Task<ProductCategory> GetInfo(int productCategoryId, bool isReadOnly = false)
        {
            return await _productCategoryRepository.GetAsync(isReadOnly, x => x.Id == productCategoryId && !x.IsDelete);
        }

        public async Task<ProductCategory> GetInfo(string productCategoryIdPath, bool isReadOnly = false)
        {
            return await _productCategoryRepository.GetAsync(isReadOnly, x => x.IdPath == productCategoryIdPath && !x.IsDelete);
        }

        public async Task<int> Insert(ProductCategory productCategory)
        {
            _productCategoryRepository.Create(productCategory);
            return await Context.SaveChangesAsync();
        }

        public Task<List<ProductCategorySearchViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive,
                    int page, int pageSize, out int totalRows)
        {
            Expression<Func<ProductCategory, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId;
            Expression<Func<ProductCategoryTranslation, bool>> specTranslation = x => x.LanguageId == languageId;
            if (isActive.HasValue)
                spec = spec.And(x => x.IsActive == isActive.Value);

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            var query = Context.Set<ProductCategory>().Where(spec)
                .Join(Context.Set<ProductCategoryTranslation>().Where(specTranslation), o => o.Id, ot => ot.ProductCategoryId,
                (o, ot) => new ProductCategorySearchViewModel
                {
                    Id = o.Id,
                    IdPath = o.IdPath,
                    Name = ot.Name,
                    Image = o.Image,
                    Description = ot.Description,
                    IsActive = o.IsActive,
                    IsHot = o.IsHot,
                    IsSolution = o.IsSolution,
                    IsHomePage = o.IsHomePage,
                    ParentId = o.ParentId,
                    ChildCount = o.ChildCount,
                    Order = o.Order
                });

            totalRows = query.Count();
            return query
                .AsNoTracking()
                .OrderBy(x => x.IdPath).Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public Task<List<ProductCategorySearchViewModel>> SearchProductCategory(string tenantId, string languageId, string keyword, bool? isActive,
                    int page, int pageSize, out int totalRows)
        {
            Expression<Func<ProductCategory, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId;
            Expression<Func<ProductCategoryTranslation, bool>> specTranslation = x => x.LanguageId == languageId;
            if (isActive.HasValue)
                spec = spec.And(x => x.IsActive == isActive.Value);

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            var query = Context.Set<ProductCategory>().Where(spec)
                .Join(Context.Set<ProductCategoryTranslation>().Where(specTranslation), o => o.Id, ot => ot.ProductCategoryId,
                (o, ot) => new ProductCategorySearchViewModel
                {
                    Id = o.Id,
                    IdPath = o.IdPath,
                    Name = ot.Name,
                    Description = ot.Description,
                    IsActive = o.IsActive,
                    ChildCount = o.ChildCount
                });

            totalRows = query.Count();
            return query
                .AsNoTracking()
                .OrderByDescending(x => x.Name)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Update(ProductCategory productCategory)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateChildCount(int id, int childCount)
        {
            var info = await GetInfo(id);
            if (info == null)
                return -1;

            info.ChildCount = childCount;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateChildrenIdPath(string oldIdPath, string newIdPath)
        {
            var childrenProductCategory = await _productCategoryRepository.GetsAsync(false, x => !x.IsDelete && x.IdPath.StartsWith(oldIdPath + "."));
            if (childrenProductCategory == null || !childrenProductCategory.Any())
                return -1;

            foreach (var productCategory in childrenProductCategory)
            {
                productCategory.IdPath = $"{newIdPath}.{productCategory.Id}";
            }
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateProductCategoryIdPath(int id, string idPath)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateStatusInListCategory(string tenantId, string idPath, bool isActive)
        {
            var childrenProductCategory =
                isActive ? await _productCategoryRepository.GetsAsync(false, x => !x.IsDelete && x.TenantId == tenantId && idPath.StartsWith(x.IdPath + "."))
                : await _productCategoryRepository.GetsAsync(false, x => !x.IsDelete && x.TenantId == tenantId && x.IdPath.StartsWith(idPath + "."));

            if (childrenProductCategory == null || !childrenProductCategory.Any())
                return -1;

            foreach (var productCategory in childrenProductCategory)
            {
                productCategory.IsActive = isActive;
            }
            return await Context.SaveChangesAsync();
        }
    }
}
