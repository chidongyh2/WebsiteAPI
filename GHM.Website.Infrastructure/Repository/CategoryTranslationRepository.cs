using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace GHM.Website.Infrastructure.Repository
{
    public class CategoryTranslationRepository : RepositoryBase, ICategoryTranslationRepository
    {
        private readonly IRepository<CategoryTranslation> _categoryTranslationRepository;
        public CategoryTranslationRepository(IDbContext context) : base(context)
        {
            _categoryTranslationRepository = Context.GetRepository<CategoryTranslation>();
        }

        public async Task<int> Insert(CategoryTranslation categoryTranslation)
        {
            _categoryTranslationRepository.Create(categoryTranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<CategoryTranslation> categoryTranslations)
        {
            _categoryTranslationRepository.Creates(categoryTranslations);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(CategoryTranslation categoryTranslation)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> DeleteByCategoryId(int categoryId)
        {
            var categoryTranslations =
                await _categoryTranslationRepository.GetsAsync(false, x => x.CategoryId == categoryId && !x.IsDelete);

            if (categoryTranslations == null || !categoryTranslations.Any())
                return -1;

            foreach (var categoryTranslation in categoryTranslations)
            {
                categoryTranslation.IsDelete = true;
            }
            return await Context.SaveChangesAsync();
        }

        public async Task<CategoryTranslation> GetInfo(int categoryId, string languageId)
        {
            return await _categoryTranslationRepository.GetAsync(false,
                x => x.CategoryId == categoryId && x.LanguageId == languageId && !x.IsDelete);
        }

        public async Task<int> ForceDeleteByCategoryId(int categoryId)
        {
            var categoryTranslations =
                await _categoryTranslationRepository.GetsAsync(false, x => x.CategoryId == categoryId && !x.IsDelete);
            if (categoryTranslations == null || !categoryTranslations.Any())
                return -1;

            _categoryTranslationRepository.Deletes(categoryTranslations);
            return await Context.SaveChangesAsync();
        }

        public async Task<bool> CheckExists(string tenantId, string languageId, int categoryId, string name)
        {
            name = name.Trim();
            return await _categoryTranslationRepository.ExistAsync(x =>
            x.TenantId == tenantId && x.CategoryId != categoryId && x.LanguageId == languageId && x.Name == name && !x.IsDelete);
        }

        public async Task<bool> CheckSeoLinkExists(string tenantId, string languageId, int categoryId, string seolink)
        {
            seolink = seolink.Trim();
            return await _categoryTranslationRepository.ExistAsync(x =>
                x.TenantId == tenantId && x.CategoryId != categoryId && x.LanguageId == languageId && x.SeoLink == seolink && !x.IsDelete);
        }

        public async Task<List<CategoryTranslation>> GetByCategoryId(int categoryId)
        {
            return await _categoryTranslationRepository.GetsAsync(true,
                x => x.CategoryId == categoryId && !x.IsDelete);
        }

        public async Task<CategoryTranslation> GetActiveInfo(string tenantId, string languageId, int categoryId)
        {
            return await _categoryTranslationRepository.GetAsync(true, x =>
                x.TenantId == tenantId && x.LanguageId == languageId
                && x.CategoryId == categoryId && !x.IsDelete);
        }

        public async Task<CategoryTranslation> GetActiveBySeoLink(string tenantId, string languageId, string seoLink)
        {
            return await _categoryTranslationRepository.GetAsync(true, x =>
                x.TenantId == tenantId && x.LanguageId == languageId
                && x.SeoLink == seoLink && !x.IsDelete);
        }

        public async Task<bool> CheckExistsBySeoLink(string tenantId, string seoLink, string languageId)
        {
            return await _categoryTranslationRepository.ExistAsync(x => x.TenantId == tenantId && x.SeoLink == seoLink && x.LanguageId == languageId);
        }

        public async Task<MenuItemSelectedViewModel> GetCategoryDetailForMenu(string tenantId, string subjectId, string languageId, bool v)
        {
            Expression<Func<Category, bool>> specC = x => x.TenantId == tenantId && x.Id == int.Parse(subjectId) && x.IsActive && !x.IsDelete;
            Expression<Func<CategoryTranslation, bool>> specCT = x => x.TenantId == tenantId && x.CategoryId == int.Parse(subjectId);

            var query = Context.Set<Category>().Where(specC)
                .Join(Context.Set<CategoryTranslation>().Where(specCT), c => c.Id, ct => ct.CategoryId, (c, ct) => new MenuItemSelectedViewModel
                {
                    Id = c.Id.ToString(),
                    Image = c.BannerImage,
                    Name = ct.Name
                });
            return await query.FirstOrDefaultAsync();
        }
    }
}
