using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Product.Domain.IRepository;
using GHM.Product.Domain.Models;
using GHM.Product.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using Microsoft.EntityFrameworkCore;
namespace GHM.Product.Infrastructure.Repository
{
    public class ProductRepository : RepositoryBase, IProductRepository
    {
        private readonly IRepository<Products> _productRepository;
        public ProductRepository(IDbContext context) : base(context)
        {
            _productRepository = Context.GetRepository<Products>();
        }

        public Task<List<ProductSearchViewModel>> Search(string tenantId, string languageId, string keyword, int? categoryId, bool? isManagementByLot,
            bool? isActive, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Products, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId;
            Expression<Func<ProductTranslation, bool>> specTranslation = pt => pt.LanguageId == languageId && !pt.IsDelete;
            Expression<Func<ProductsCategorie, bool>> specCategory = x => true;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            if (isManagementByLot.HasValue)
            {
                spec = spec.And(x => x.IsManagementByLot == isManagementByLot.Value);
            }

            if (isActive.HasValue)
            {
                spec = spec.And(x => x.IsActive == isActive.Value);
            }

            if (categoryId.HasValue)
            {
                specCategory = specCategory.And(x => x.CategoryId == categoryId.Value);
            }

            var queryProduct = Context.Set<Products>().Where(spec)
                .Join(Context.Set<ProductTranslation>().Where(specTranslation), x => x.Id, pt => pt.ProductId, (x, pt) =>
                    new
                    {
                        x.Id,
                        x.IsActive,
                        x.IsManagementByLot,
                        x.Thumbnail,
                        x.IsHot,
                        x.IsHomePage,
                        pt.Name,
                    }).Join(Context.Set<ProductsCategorie>().Where(specCategory), p => p.Id, pc => pc.ProductId, (p, pc) => new
                    {
                        p.Id,
                        p.IsActive,
                        p.IsManagementByLot,
                        p.Thumbnail,
                        p.IsHot,
                        p.IsHomePage,
                        p.Name,
                        pc.CategoryId
                    }).Join(Context.Set<ProductCategoryTranslation>().Where(x => !x.IsDelete && x.LanguageId == languageId && x.TenantId == tenantId),
                pca => pca.CategoryId, pcat => pcat.ProductCategoryId, (pca, pcat) => new
                {
                    pca.Id,
                    pca.IsActive,
                    pca.IsManagementByLot,
                    pca.Thumbnail,
                    pca.Name,
                    pca.IsHot,
                    pca.IsHomePage,
                    pca.CategoryId,
                    ProductCategoryName = pcat.Name,
                });

            var queryProductCategory = queryProduct.GroupBy(x => new { x.Id, x.IsActive, x.IsManagementByLot, x.Name, x.Thumbnail, x.IsHomePage, x.IsHot },
                (key, g) => new
                {
                    key.Id,
                    key.IsActive,
                    key.IsManagementByLot,
                    key.Name,
                    key.Thumbnail,
                    key.IsHot,
                    key.IsHomePage,
                    ProductCategoryNames = g.Select(x => x.ProductCategoryName).ToList()
                });

            totalRows = queryProductCategory.Count();
            queryProductCategory = queryProductCategory.OrderByDescending(x => x.Name)
                .Skip((page - 1) * pageSize)
                .Take(pageSize);

            var queryProductUnit = Context.Set<ProductUnit>().Where(x => x.IsDefault && !x.ToDate.HasValue && x.IsDefault)
                                  .Join(Context.Set<UnitTranslation>().Where(x => !x.IsDelete && x.LanguageId == languageId),
                                   pu => pu.UnitId, ut => ut.UnitId, (pu, ut) => new
                                   {
                                       pu.ProductId,
                                       pu.UnitId,
                                       ut.Name
                                   });

            var query = queryProductCategory.GroupJoin(queryProductUnit, p => p.Id, pu => pu.ProductId, (p, pu) => new { p, pu })
                .SelectMany(x => x.pu.DefaultIfEmpty(), (x, pu) => new ProductSearchViewModel
                {
                    Id = x.p.Id,
                    IsActive = x.p.IsActive,
                    IsManagementByLot = x.p.IsManagementByLot,
                    Thumbnail = x.p.Thumbnail,
                    Name = x.p.Name,
                    DefaultUnit = pu.Name,
                    IsHomePage = x.p.IsHomePage,
                    IsHot = x.p.IsHot,
                    //CategoryId = x.p.CategoryId,
                    CategoryNames = x.p.ProductCategoryNames
                }).AsNoTracking().Distinct();

            return query
                .ToListAsync();
        }

        public async Task<int> Insert(Products product)
        {
            _productRepository.Create(product);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(Products product)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string productId)
        {
            var info = await GetInfo(productId);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string productId)
        {
            var info = await GetInfo(productId);
            if (info == null)
                return -1;

            _productRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<Products> GetInfo(string productId, bool isReadonly = false)
        {
            return await _productRepository.GetAsync(isReadonly, x => x.Id == productId && !x.IsDelete);
        }

        public async Task<int> UpdateExWarehousePrice(string tenantId, string productId, decimal exWarehousePrice)
        {
            var info = await GetInfo(tenantId, productId);
            if (info == null)
                return -1;

            info.ExWarehousePrice = exWarehousePrice;
            return await Context.SaveChangesAsync();
        }

        public async Task<Products> GetInfo(string tenantId, string productId, bool isReadonly = false)
        {
            return await _productRepository.GetAsync(isReadonly, x => x.TenantId == tenantId && x.Id == productId && !x.IsDelete);
        }

        public Task<List<ProductSuggestionViewModel>> Suggestion(string tenantId, string languageId, string keyword, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Products, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId && x.IsActive;
            Expression<Func<ProductTranslation, bool>> specTranslation = pt => pt.LanguageId == languageId && !pt.IsDelete;
            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            var query = Context.Set<Products>().Where(spec)
                .Join(Context.Set<ProductTranslation>().Where(specTranslation), x => x.Id, pt => pt.ProductId, (x, pt) =>
                    new ProductSuggestionViewModel
                    {
                        Id = x.Id,
                        Name = pt.Name,
                        ExWarehousePrice = x.ExWarehousePrice,
                        IsManageByLot = x.IsManagementByLot
                    }).AsNoTracking();
            totalRows = query.Count();
            return query
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<bool> CheckExists(string productId, string tenantId)
        {
            return await _productRepository.ExistAsync(x =>
                x.Id == productId && x.TenantId == tenantId && !x.IsDelete);
        }

        public async Task<int> GetTotal(string tenantId)
        {
            return await _productRepository.CountAsync(x => x.TenantId == tenantId);
        }

        public async Task<bool> CheckExistsByProductId(string tenantId, string id)
        {
            return await _productRepository.ExistAsync(x => x.TenantId == tenantId && x.Id == id);
        }

        public async Task<decimal> GetExWarheousePrice(string tenantId, string productId)
        {
            return await _productRepository.GetAsAsync(x => x.ExWarehousePrice,
                x => x.Id == productId && x.TenantId == tenantId && !x.IsDelete);
        }       

    }
}
