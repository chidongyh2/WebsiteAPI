using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;
using Microsoft.EntityFrameworkCore;

namespace GHM.Website.Infrastructure.Repository
{
    public class CategoriesNewsRepository : RepositoryBase, ICategoriesNewsRepository
    {
        private readonly IRepository<CategoriesNews> _categoriesNewsRepository;

        public CategoriesNewsRepository(IDbContext context) : base(context)
        {
            _categoriesNewsRepository = Context.GetRepository<CategoriesNews>();
        }

        public async Task<int> Insert(CategoriesNews categoriesNews)
        {
            _categoriesNewsRepository.Create(categoriesNews);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string newsId, int categoryId)
        {
            var info = await _categoriesNewsRepository.GetsAsync(false, x => x.NewsId == newsId && x.CategoryId == categoryId);
            if (info == null || !info.Any())
                return -1;

            _categoriesNewsRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> DeleteByNewsId(string newsId)
        {
            var info = await _categoriesNewsRepository.GetsAsync(false, x => x.NewsId == newsId);
            if (info == null || !info.Any())
                return -1;
            _categoriesNewsRepository.Deletes(info);

            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<CategoriesNews> categoriesNews)
        {
            _categoriesNewsRepository.Creates(categoriesNews);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Deletes(List<CategoriesNews> categoriesNews)
        {
            if (categoriesNews == null || !categoriesNews.Any())
                return -1;

            _categoriesNewsRepository.Deletes(categoriesNews);
            return await Context.SaveChangesAsync();
        }

        public async Task<bool> CheckExistsByNewsIdAndCategoryId(string newsId, int categoryId)
        {
            return await _categoriesNewsRepository.ExistAsync(x => x.NewsId == newsId && x.CategoryId == categoryId);
        }

        public async Task<List<CategoriesNewsViewModel>> GetListNewsIds(string newsId, bool isReadOnly = false)
        {
            var query = Context.Set<CategoriesNews>().Where(x => x.NewsId == newsId)
                        .Join(Context.Set<Category>(), categoriesNews => categoriesNews.CategoryId, category => category.Id,
                        (categoriesNews, category) => new
                        {
                            categoriesNews.CategoryId,
                            categoriesNews.NewsId
                        })
                        .Join(Context.Set<CategoryTranslation>(), c => c.CategoryId, ct => ct.CategoryId, (c, ct) => new CategoriesNewsViewModel
                        {
                            CategoryId = c.CategoryId,
                            NewsId = c.NewsId,
                            CategoryName = ct.Name,
                            LanguageId = ct.LanguageId
                        }).AsNoTracking().ToList();

            return query;
        }

        public async Task<bool> CheckExistsByCategoryId(int categoryId)
        {
            return await _categoriesNewsRepository.ExistAsync(x => x.CategoryId == categoryId);
        }
    }
}
