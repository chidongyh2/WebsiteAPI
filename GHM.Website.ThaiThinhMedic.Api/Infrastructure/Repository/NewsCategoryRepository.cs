using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Repository
{
    public class NewsCategoryRepository : RepositoryBase, INewsCategoryRepository
    {
        private readonly IRepository<NewsCategory> _newsCategoryRepository;
        public NewsCategoryRepository(IDbContext context) : base(context)
        {
            _newsCategoryRepository = Context.GetRepository<NewsCategory>();
        }

        public async Task<long> Insert(NewsCategory newsCategory)
        {
            var isExits = await CheckExists(newsCategory.NewsId, newsCategory.CategoryId);
            if (isExits)
                return -1;

            _newsCategoryRepository.Create(newsCategory);
            return await Context.SaveChangesAsync();
        }

        public async Task<long> Inserts(List<NewsCategory> newsCategories)
        {
            _newsCategoryRepository.Creates(newsCategories);
            return await Context.SaveChangesAsync();
        }

        public async Task<long> Delete(int newsId, int categoryId)
        {
            var info = await GetInfo(newsId, categoryId);
            if (info == null)
                return -1;

            _newsCategoryRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<long> UpdateCategoryInfo(int id, string name, string seoLink, bool isActive)
        {
            //return await _newsCategoryRepository.UpdateAsync(x => x.CategoryId == id, Builders<NewsCategory>.Update
            //    .Set(x => x.CategoryName, name)
            //    .Set(x => x.CategorySeoLink, seoLink)
            //    .Set(x => x.CategoryIsActive, isActive));
            var listNewsCategory = await _newsCategoryRepository.GetsAsync(false, x => x.CategoryId == id);
            if (!listNewsCategory.Any())
                return -1;

            foreach (var newsCategory in listNewsCategory)
            {
                newsCategory.CategoryName = name;
                newsCategory.CategorySeoLink = seoLink;
                newsCategory.CategoryIsActive = isActive;
            }
            return await Context.SaveChangesAsync();
        }

        public async Task<long> DeleteByNewsId(int newsId)
        {
            var listNewsCategory = await _newsCategoryRepository.GetsAsync(false, x => x.NewsId == newsId);
            if (!listNewsCategory.Any())
                return -1;

            _newsCategoryRepository.Deletes(listNewsCategory);
            return await Context.SaveChangesAsync();
        }

        public async Task<long> DeleteByCategoryId(int categoryId)
        {
            var listNewsCategory = await _newsCategoryRepository.GetsAsync(false, x => x.CategoryId == categoryId);
            if (listNewsCategory == null || !listNewsCategory.Any())
                return -1;

            _newsCategoryRepository.Deletes(listNewsCategory);
            return await Context.SaveChangesAsync();
        }

        public async Task<List<int>> GetListCategoryIdsByNewsId(int newsId)
        {
            return await _newsCategoryRepository.GetsAsAsync(x => x.CategoryId, x => x.NewsId == newsId);
        }

        private async Task<NewsCategory> GetInfo(int newsId, int categoryId, bool isReadOnly = false)
        {
            return await _newsCategoryRepository.GetAsync(isReadOnly, x => x.NewsId == newsId && x.CategoryId == categoryId);
        }

        private async Task<bool> CheckExists(int newsId, int categoryId)
        {
            return await _newsCategoryRepository.ExistAsync(x => x.NewsId == newsId && x.CategoryId == categoryId);
        }
    }
}
