using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.EntityFrameworkCore;

namespace GHM.Website.Infrastructure.Repository
{
    public class CategoryRepository : RepositoryBase, ICategoryRepository
    {
        private readonly IRepository<Category> _categoryRepository;

        public CategoryRepository(IDbContext context) : base(context)
        {
            _categoryRepository = Context.GetRepository<Category>();
        }

        public async Task<int> Insert(Category category)
        {
            _categoryRepository.Create(category);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(Category category)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateCategoryIdPath(string tenantId, int id, string idPath)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateChildrenIdPath(string oldParentIdPath, string newParentIdPath)
        {
            var childrens = await _categoryRepository.GetsAsync(false, x => x.IdPath.StartsWith($"{oldParentIdPath}."));
            if (!childrens.Any())
                return -1;

            foreach (var children in childrens)
            {
                var oldIdPath = children.IdPath;
                children.IdPath = $"{newParentIdPath}.{children.Id}";
                await UpdateChildrenIdPath(oldIdPath, $"{children.IdPath}");
            }
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string tenantId, int id)
        {
            var info = await GetInfo(tenantId, id);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> CountByParentId(int? id)
        {
            return await _categoryRepository.CountAsync(x => x.ParentId == id && !x.IsDelete);
        }

        public async Task<int> ForceDelete(string tenantId, int id)
        {
            var info = await GetInfo(tenantId, id);
            if (info == null)
                return -1;

            _categoryRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<Category> GetInfo(string tenantId, int id, bool isReadonly = false)
        {
            return await _categoryRepository.GetAsync(isReadonly, x => x.Id == id && x.TenantId == tenantId && !x.IsDelete);
        }

        public async Task<Category> GetActiveInfo(string tenantId, int id)
        {
            return await _categoryRepository.GetAsync(true,
                x => x.Id == id && x.TenantId == tenantId && x.IsActive && !x.IsDelete);
        }

        public async Task<bool> CheckExistsById(string tenantId, int id)
        {
            return await _categoryRepository.ExistAsync(x =>
                x.TenantId == tenantId && x.Id == id && x.IsActive && !x.IsDelete);
        }

        public Task<List<CategoryViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive,
            int page, int pageSize,
            out int totalRows)
        {
            Expression<Func<Category, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId;
            Expression<Func<CategoryTranslation, bool>> specTranslation = x => x.LanguageId == languageId;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            if (isActive.HasValue)
                spec = spec.And(x => x.IsActive == isActive);

            var query = Context.Set<Category>().Where(spec)
                .Join(Context.Set<CategoryTranslation>().Where(specTranslation), c => c.Id, ct => ct.CategoryId,
                    (c, ct) => new CategoryViewModel
                    {
                        Id = c.Id,
                        Name = ct.Name,
                        IsActive = c.IsActive,
                        ParentId = c.ParentId,
                        IdPath = c.IdPath,
                        Order = c.Order
                    }).AsNoTracking();

            totalRows = query.Count();
            return query
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<List<CategoryViewModel>> SearchAll(string tenantId, string languageId, string keyword, bool? isActive)
        {
            Expression<Func<Category, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId;
            Expression<Func<CategoryTranslation, bool>> specTranslation = x => x.LanguageId == languageId;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            if (isActive.HasValue)
                spec = spec.And(x => x.IsActive == isActive);

            var query = Context.Set<Category>().Where(spec)
                .Join(Context.Set<CategoryTranslation>().Where(specTranslation), c => c.Id, ct => ct.CategoryId,
                    (c, ct) => new CategoryViewModel
                    {
                        Id = c.Id,
                        Name = ct.Name,
                        IsActive = c.IsActive,
                        ParentId = c.ParentId,
                        IdPath = c.IdPath,
                        Order = c.Order
                    }).AsNoTracking();

            return await query.ToListAsync();
        }

        public Task<List<Suggestion<int>>> Suggestions(string tenantId, string languageId, string keyword, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Category, bool>> spec = x => x.IsActive && !x.IsDelete && x.TenantId == tenantId;
            Expression<Func<CategoryTranslation, bool>> specTranslation = x => x.LanguageId == languageId;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            var query = Context.Set<Category>().Where(spec)
                .Join(Context.Set<CategoryTranslation>().Where(specTranslation), c => c.Id, ct => ct.CategoryId,
                    (c, ct) => new Suggestion<int>()
                    {
                        Id = c.Id,
                        Name = ct.Name
                    }).AsNoTracking();

            totalRows = query.Count();
            return query
                .OrderByDescending(x => x.Name)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public Task<List<CategorySearchForSelectViewModel>> SearchForSelect(string tenantId, string languageId, string keyword, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Category, bool>> spec = x => x.IsActive && !x.IsDelete && x.TenantId == tenantId && x.IsActive;
            Expression<Func<CategoryTranslation, bool>> specTranslation = x => x.LanguageId == languageId;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            var query = Context.Set<Category>().Where(spec)
                .Join(Context.Set<CategoryTranslation>().Where(specTranslation), c => c.Id, ct => ct.CategoryId,
                    (c, ct) => new CategorySearchForSelectViewModel()
                    {
                        Id = c.Id,
                        Name = ct.Name,
                        SeoLink = ct.SeoLink,
                    }).AsNoTracking();

            totalRows = query.Count();
            return query
                .OrderByDescending(x => x.Name)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public CategoryTranslationViewModel GetCategoryRelations(string tenantId, string languageId, int categoryId, int? parrentId)
        {
            return Context.Set<Category>().Where(x => x.TenantId == tenantId && x.IsActive && !x.IsDelete && x.ParentId == parrentId && x.Id != categoryId)
                .Join(Context.Set<CategoryTranslation>().Where(x => x.TenantId == tenantId && x.LanguageId == languageId && !x.IsDelete && !x.SeoLink.Equals("tin-tuc") && !x.SeoLink.Equals("san-pham")),
                category => category.Id, categoryTranslation => categoryTranslation.CategoryId, (category, categoryTranslation) => new CategoryTranslationViewModel
                {
                    TenantId = tenantId,
                    CategoryId = categoryTranslation.CategoryId,
                    LanguageId = languageId,
                    Name = categoryTranslation.Name,
                    MetaTitle = categoryTranslation.MetaTitle,
                    Description = categoryTranslation.Description,
                    MetaDescription = categoryTranslation.MetaDescription,
                    SeoLink = categoryTranslation.SeoLink
                }).AsNoTracking().FirstOrDefault();
        }

        public async Task<List<string>> GetAllSeoLinkForSitemap(string tenantId, string languageId)
        {
            return Context.Set<Category>().Where(x => x.IsActive && !x.IsDelete && x.TenantId == tenantId)
               .Join(Context.Set<CategoryTranslation>().Where(x => x.LanguageId == languageId && !x.IsDelete),
               category => category.Id, categoryTranslation => categoryTranslation.CategoryId, (category, categoryTranslation) =>
                   categoryTranslation.SeoLink
               ).AsNoTracking().ToList();
        }

        public async Task<List<CategorySearchForSelectViewModel>> SearchForHomePage(string tenantId, string languageId)
        {
            Expression<Func<Category, bool>> spec = x => x.TenantId == tenantId && x.IsHomePage == true;
            Expression<Func<CategoryTranslation, bool>> specTranslate = x => x.TenantId == tenantId && x.LanguageId == languageId;

            var query = Context.Set<Category>().Where(spec)
                .Join(Context.Set<CategoryTranslation>().Where(specTranslate),
                category => category.Id, categoryTranslaion => categoryTranslaion.CategoryId,
                (category, CategoryTranslation) => new CategorySearchForSelectViewModel
                {
                    Id = category.Id,
                    BannerImage = category.BannerImage,
                    Name = CategoryTranslation.Name,
                    SeoLink = CategoryTranslation.SeoLink
                });
            return await query.AsNoTracking().ToListAsync();
        }

        public async Task<CategoryWidthNewsViewModel> GetCategoryForWithNews(string tenantId, string categoryId, string languageId)
        {
            Expression<Func<Category, bool>> spec = x => x.TenantId == tenantId && x.Id == int.Parse(categoryId) && !x.IsDelete && x.IsActive;
            Expression<Func<CategoryTranslation, bool>> specT = x => x.TenantId == tenantId && x.CategoryId == int.Parse(categoryId) && x.LanguageId == languageId;
            var query = Context.Set<Category>().Where(spec)
                .Join(Context.Set<CategoryTranslation>().Where(specT), c => c.Id, ct => ct.CategoryId, (c, ct) => new CategoryWidthNewsViewModel
                {
                    CategoryId = c.Id,
                    BannerImage = c.BannerImage,
                    CategoryName = ct.Name,
                    SeoLink = ct.SeoLink,
                });
            return await query.AsNoTracking().FirstOrDefaultAsync();
        }
    }
}
