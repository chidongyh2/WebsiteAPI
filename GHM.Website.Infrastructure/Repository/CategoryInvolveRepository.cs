using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using System.Threading.Tasks.Dataflow;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace GHM.Website.Infrastructure.Repository
{
    public class CategoryInvolveRepository : RepositoryBase, ICategoryInvolveRepository
    {
        private readonly IRepository<CategoryInvolve> _categoryInvolveRepository;

        public CategoryInvolveRepository(IDbContext context) : base(context)
        {
            _categoryInvolveRepository = Context.GetRepository<CategoryInvolve>();
        }

        public Task<List<CategoryInvolveNewViewModel>> SearchNews(string tenantId, string languageId, int categoryId, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Category, bool>> spea = t => !t.IsDelete && t.TenantId == tenantId && t.Id == categoryId;
            Expression<Func<CategoryTranslation, bool>> speb = t => !t.IsDelete && t.TenantId == tenantId && t.LanguageId == languageId;
            Expression<Func<News, bool>> spec = t => !t.IsDelete && t.TenantId == tenantId && t.IsActive;
            Expression<Func<NewsTranslation, bool>> sped = t => !t.IsDelete && t.TenantId == tenantId && t.LanguageId == languageId;

            var query = from category in Context.Set<Category>().Where(spea)
                        join categoryTranslation in Context.Set<CategoryTranslation>().Where(speb) on category.Id equals categoryTranslation.CategoryId
                        join categoriesNew in Context.Set<CategoriesNews>() on category.Id equals categoriesNew.CategoryId
                        join news in Context.Set<News>().Where(spec) on categoriesNew.NewsId equals news.Id
                        join newsTranslation in Context.Set<NewsTranslation>().Where(sped) on news.Id equals newsTranslation.NewsId
                        select new CategoryInvolveNewViewModel()
                        {
                            Id = news.Id,
                            Description = categoryTranslation.Description,
                            Name = categoryTranslation.Name,
                            Title = newsTranslation.Title,
                            Content = newsTranslation.Content,
                            MetaDescription = newsTranslation.MetaDescription,
                            MetaKeyword = newsTranslation.MetaKeyword,
                            MetaTitle = newsTranslation.MetaTitle,
                            NewsDescription = newsTranslation.Description,
                            SeoLink = newsTranslation.SeoLink
                        };

            totalRows = query.ToList().Count;

            return query.OrderByDescending(x => x.Title)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Insert(CategoryInvolve categoryInvolve)
        {
            _categoryInvolveRepository.Create(categoryInvolve);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(CategoryInvolve categoryInvolve)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(int categoryId, int categoryInvolveId)
        {
            var info = await _categoryInvolveRepository.GetsAsync(false, x => x.CategoryInvolveId == categoryInvolveId && x.CategoryId == categoryId);
            if (info == null || !info.Any())
                return -1;

            _categoryInvolveRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> DeleteByCategoryInvolveId(int categoryId, int categoryInvolveId)
        {
            var info = await _categoryInvolveRepository.GetsAsync(false, x => x.CategoryInvolveId == categoryInvolveId && x.CategoryId == categoryId);
            if (info == null || !info.Any())
                return -1;

            _categoryInvolveRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<CategoryInvolve> categoryInvolves)
        {
            _categoryInvolveRepository.Creates(categoryInvolves);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Deletes(List<CategoryInvolve> categoryInvolves)
        {
            if (categoryInvolves == null || !categoryInvolves.Any())
                return -1;

            _categoryInvolveRepository.Deletes(categoryInvolves);
            return await Context.SaveChangesAsync();
        }

        public async Task<bool> CheckExists(int categoryId, int categoryInvolveId)
        {
            return await _categoryInvolveRepository.ExistAsync(x => x.CategoryInvolveId == categoryInvolveId && x.CategoryId == categoryId);
        }

        public async Task<CategoryInvolve> GetInfo(int categoryId, int categoryInvolveId, bool isReadOnly = false)
        {
            return await _categoryInvolveRepository.GetAsync(isReadOnly, x => x.CategoryId == categoryId && x.CategoryInvolveId == categoryInvolveId);
        }

        public Task<List<CategoryInvolveCategoryViewModel>> GetListCategoryInvolveId(string tenantId, string languageId, int categoryId, int page, int pageSize, out int totalRows)
        {
            Expression<Func<CategoryInvolve, bool>> spec = t => t.CategoryId == categoryId;
            Expression<Func<CategoryTranslation, bool>> speccategoryTranslation = tt => tt.LanguageId == languageId && tt.TenantId == tenantId;

            var query = Context.Set<CategoryInvolve>().Where(spec)
                .Join(Context.Set<CategoryTranslation>().Where(speccategoryTranslation), t => t.CategoryInvolveId, tt => tt.CategoryId, (t, tt) =>
                    new CategoryInvolveCategoryViewModel
                    {
                        Name = tt.Name,
                        Description = tt.Description,
                        CategoryId = categoryId,
                        SeoLink = tt.SeoLink,
                        MetaTitle = tt.MetaTitle,
                        MetaDescription = tt.MetaDescription
                    });

            totalRows = query.ToList().Count;

            return query.OrderByDescending(x => x.Name)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

    }
}
