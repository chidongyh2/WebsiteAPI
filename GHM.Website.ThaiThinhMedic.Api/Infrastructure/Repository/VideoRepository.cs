using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Constants;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.ModelMetas;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.ViewModels;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Repository
{
    public class VideoRepository : RepositoryBase, IVideoRepository
    {
        private readonly IRepository<Video> _videoRepository;
        public VideoRepository(IDbContext context) : base(context)
        {
            _videoRepository = Context.GetRepository<Video>();
        }

        public async Task<ActionResultResponse> Insert(VideoMeta videoMeta)
        {
            var isUrlExists = await CheckUrlExists(-1, videoMeta.Url);
            if (isUrlExists)
                return new ActionResultResponse(-2, "Đường dẫn video đã tồn tại. Vui lòng kiểm tra lại.");

            var video = new Video(videoMeta.VideoId, videoMeta.Url, videoMeta.Title, videoMeta.Description, videoMeta.Thumbnail, videoMeta.IsActive, videoMeta.Order, VideoType.YouTube);
            _videoRepository.Create(video);
            var result = await Context.SaveChangesAsync();
            return new ActionResultResponse(result, result > 0 ? "Thêm mới video thành công" : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên.");
        }

        public async Task<ActionResultResponse> Update(VideoMeta videoMeta)
        {
            if (!videoMeta.Id.HasValue)
                return new ActionResultResponse(-1, "Thông tin video cần chỉnh sửa không tồn tại hoặc đã bị xóa. Vui lòng kiểm tra lại.", "Rất tiếc");

            var info = await GetInfo(videoMeta.Id.Value);
            if (info == null)
                return new ActionResultResponse(-1, "Thông tin video cần chỉnh sửa không tồn tại hoặc đã bị xóa. Vui lòng kiểm tra lại.", "Rất tiếc");

            var isUrlExists = await CheckUrlExists(videoMeta.Id.Value, videoMeta.Url);
            if (isUrlExists)
                return new ActionResultResponse(-2, "Đường dẫn video đã tồn tại. Vui lòng kiểm tra lại.");

            info.Url = videoMeta.Url.Trim();
            info.Title = videoMeta.Title.Trim();
            info.Description = videoMeta.Description?.Trim();
            info.IsActive = videoMeta.IsActive;
            info.UnsignName = info.Title.StripVietnameseChars().ToUpper();
            info.Order = videoMeta.Order;
            info.VideoId = videoMeta.VideoId;
            info.Type = videoMeta.Type;
            var result = await Context.SaveChangesAsync();
            return new ActionResultResponse(result, result > 0 ? "Thêm mới video thành công" : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên.");
        }

        public async Task<ActionResultResponse> Delete(int id)
        {
            var info = await GetInfo(id);
            if (info == null)
                return new ActionResultResponse(-1, "Thông tin video cần chỉnh sửa không tồn tại hoặc đã bị xóa. Vui lòng kiểm tra lại.", "Rất tiếc");

            info.IsDelete = true;
            var result = await Context.SaveChangesAsync();
            return new ActionResultResponse(result, result > 0 ? "Xóa video thành công" : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên.");
        }

        public Task<List<VideoViewModel>> Search(string keyword, bool? isActive, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Video, bool>> spec = x => !x.IsDelete;
            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.StripVietnameseChars().Trim().ToUpper();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            if (isActive.HasValue)
                spec = spec.And(x => x.IsActive == isActive);

            var sort = Context.Filters.CreateSort<Video>(true, "Order", "Id");
            var paging = Context.Filters.Page<Video>(page, pageSize);
            totalRows = _videoRepository.Count(spec);
            return _videoRepository.GetsAsAsync(x => new VideoViewModel(x.Id, x.VideoId, x.Url, x.Title, x.Description, x.Thumbnail, x.IsActive, x.CreateTime, x.Order, x.Type), spec, sort, paging);
        }

        private async Task<bool> CheckUrlExists(int id, string url)
        {
            url = url.Trim();
            return await _videoRepository.ExistAsync(x => x.Id != id && x.Url.Equals(url));
        }

        private async Task<Video> GetInfo(int id, bool isReadOnly = false)
        {
            return await _videoRepository.GetAsync(isReadOnly, x => x.Id == id && !x.IsDelete);
        }
    }
}
