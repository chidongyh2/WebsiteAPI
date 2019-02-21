using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Commands.News;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Repository
{
    public class NewsRepository : RepositoryBase, INewsRepository
    {
        private readonly IRepository<News> _newsRepository;
        public NewsRepository(IDbContext context) : base(context)
        {
            _newsRepository = Context.GetRepository<News>();
        }

        public async Task<ActionResultResponse> Insert(News news)
        {
            _newsRepository.Create(news);
            var result = await Context.SaveChangesAsync();
            return new ActionResultResponse(result,
                result > 0
                    ? $"Thêm mới tin tức: \"{news.Title}\" thành công."
                    : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên.");
        }

        public async Task<ActionResultResponse> Update(News news)
        {
            var info = await GetInfo(news.Id);
            if (info == null)
                return new ActionResultResponse(-1, "Thông tin bản tin cần cập nhật không tồn tại. Vui lòng kiểm tra lại.");

            info.Title = news.Title.Trim();
            info.Attachments = news.Attachments;
            info.UnsignName = info.Title.ToUpper().StripVietnameseChars();
            info.Content = news.Content.Trim();
            info.LastUpdate = DateTime.Now;
            info.Image = news.Image;
            info.Description = news.Description.Trim();
            info.IsActive = news.IsActive;
            info.IsHomePage = news.IsHomePage;
            info.IsHot = news.IsHot;
            info.Source = news.Source;
            var result = await Context.SaveChangesAsync();
            return new ActionResultResponse(result, result > 0 ? $"Cập nhật thông tin tin tức: \"{news.Title}\" thành công."
                : "Có gì đó hoạt động chưa đúng. Vui lòng kiểm tra lại hoặc liên hệ với Quản trị viên.");
        }

        public async Task<ActionResultResponse> Delete(int id)
        {
            var info = await GetInfo(id);
            if (info == null)
                return new ActionResultResponse(-1, "Thông tin bản tin cần cập nhật không tồn tại. Vui lòng kiểm tra lại.");

            info.IsDelete = true;
            var result = await Context.SaveChangesAsync();
            return new ActionResultResponse(result, result > 0 ? $"xóa tin tức: \"{info.Title}\" thành công."
                : "Có gì đó hoạt động chưa đúng. Vui lòng kiểm tra lại hoặc liên hệ với Quản trị viên.");
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

        public async Task<ActionResultResponse> UpdateActiveStatus(int id, bool isActive)
        {
            var info = await GetInfo(id);
            if (info == null)
                return new ActionResultResponse(-1, "Thông tin bản tin cần cập nhật không tồn tại. Vui lòng kiểm tra lại.");

            //var result = await _newsRepository.UpdateAsync(x => x.Id == id,
            //    Builders<News>.Update.Set(x => x.IsActive, isActive));
            info.IsActive = isActive;
            var result = await Context.SaveChangesAsync();
            return new ActionResultResponse(result, result > 0 ? $"{(isActive ? "Kích hoạt" : "Hủy kích hoạt")} tin tức thành công." : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên.");
        }

        public async Task<ActionResultResponse> UpdateIsHotStatus(int id, bool isHot)
        {
            var info = await GetInfo(id);
            if (info == null)
                return new ActionResultResponse(-1, "Thông tin bản tin cần cập nhật không tồn tại. Vui lòng kiểm tra lại.");

            info.IsHot = isHot;
            var result = await Context.SaveChangesAsync();
            //var result = await _newsRepository.UpdateAsync(x => x.Id == id,
            //    Builders<News>.Update.Set(x => x.IsActive, isHot));
            return new ActionResultResponse(result, result > 0 ? $"{(isHot ? "Thiết lập" : "Hủy bỏt")} tin tức nổi bật thành công." : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên.");
        }

        public async Task<ActionResultResponse> UpdateIsHomePage(int id, bool isHomePage)
        {
            var info = await GetInfo(id);
            if (info == null)
                return new ActionResultResponse(-1, "Thông tin bản tin cần cập nhật không tồn tại. Vui lòng kiểm tra lại.");

            info.IsHomePage = isHomePage;
            var result = await Context.SaveChangesAsync();
            return new ActionResultResponse(result, result > 0 ? $"{(isHomePage ? "Thiết lập hiển thị" : "Hủy bỏ hiển thị")} trang chủ thành công." : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên.");
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

        public Task<List<T>> SearchPicker<T>(Expression<Func<News, T>> projector, string keyword, int? categoryId, int page, int pageSize, out int totalRows)
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
            return _newsRepository.GetsAsAsync(projector, spec, sort, paging);
        }
    }
}
