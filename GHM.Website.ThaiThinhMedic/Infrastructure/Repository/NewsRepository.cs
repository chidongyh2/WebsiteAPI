using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Infrastructure.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Repository
{
    public class NewsRepository : RepositoryBase, INewsRepository
    {
        private readonly IRepository<News> _newsRepository;
        public NewsRepository(IDbContext context) : base(context)
        {
            _newsRepository = Context.GetRepository<News>();
        }
       
        public async Task<News> GetInfo(int id, bool? isActive = null, bool isReadOnly = false)
        {
            if (isActive.HasValue)
                return await _newsRepository.GetAsync(isReadOnly, x => !x.IsDelete && x.Id == id && x.IsActive == isActive.Value);

            return await _newsRepository.GetAsync(isReadOnly, x => !x.IsDelete && x.Id == id);
        }

        public async Task<NewsDetailViewModel> GetDetail(int id)
        {
            return await _newsRepository.GetAsAsync(x => new NewsDetailViewModel(x.Id, x.Title, x.Description, x.CreateTime, x.Image, x.IsActive, x.IsHot, x.IsHomePage, x.Content, x.Source)
                , x => !x.IsDelete && x.Id == id);
        }
   
        public async Task<int> GetMaxPriorityValue()
        {
            return await Context.Set<News>().Where(x => !x.IsDelete && x.IsActive).MaxAsync(x => x.Priority) + 1 ?? 0;
        }

        public Task<List<NewsSearchViewModel>> Search(string keyword, int? categoryId, bool? isActive, bool? isHot, bool? isHomePage, int page, int pageSize,
            out int totalRows)
        {
            Expression<Func<News, bool>> spec = n => !n.IsDelete;
            Expression<Func<NewsCategory, bool>> specNewsCategory = nc => true;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.StripVietnameseChars();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            if (isActive.HasValue)
                spec = spec.And(x => x.IsActive == isActive.Value);

            if (isHot.HasValue)
                spec = spec.And(x => x.IsHot == isHot.Value);

            if (isHomePage.HasValue)
                spec = spec.And(x => x.IsHomePage == isHomePage.Value);

            if (categoryId.HasValue)
                specNewsCategory = specNewsCategory.And(nc => nc.CategoryId == categoryId);

            var sort = Context.Filters.Sort<News, int>(n => n.Id, true);
            var paging = Context.Filters.Page<News>(page, pageSize);

            totalRows = _newsRepository.Count(spec);
            return _newsRepository.GetsAsAsync(x => new NewsSearchViewModel(x.Id, x.Title, x.Description, x.CreateTime, x.Image, x.IsActive, x.IsHot, x.IsHomePage), spec, sort, paging);
        }

        public Task<List<NewsSearchViewModel>> SearchForSelect(string keyword, int? categoryId, int page, int pageSize, out int totalRows)
        {
            Expression<Func<News, bool>> spec = n => !n.IsDelete && n.IsActive;
            Expression<Func<NewsCategory, bool>> specNewsCategory = nc => true;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.StripVietnameseChars();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            if (categoryId.HasValue)
                specNewsCategory = specNewsCategory.And(x => x.CategoryId == categoryId);

            var sort = Context.Filters.Sort<News, int>(n => n.Id, true);
            var paging = Context.Filters.Page<News>(page, pageSize);

            totalRows = _newsRepository.Count(spec);
            return _newsRepository.GetsAsAsync(x => new NewsSearchViewModel(x.Id, x.Title, x.Description, x.CreateTime, x.Image, x.IsActive, x.IsHot, x.IsHomePage), spec, sort, paging);
        }
    }
}
