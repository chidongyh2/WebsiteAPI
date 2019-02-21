using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Domain.Constants;
using Microsoft.EntityFrameworkCore;
namespace GHM.Website.Infrastructure.Repository
{
    public class VideoRepository : RepositoryBase, IVideoRepository
    {
        private readonly IRepository<Video> _videoRepository;
        public VideoRepository(IDbContext context) : base(context)
        {
            _videoRepository = Context.GetRepository<Video>();
        }

        public Task<List<VideoViewModel>> Search(string tenantId, string languageId, string keyword, VideoType? type, bool? isActive, int page, int pageSize,
            out int totalRows)
        {
            Expression<Func<Video, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId;
            Expression<Func<VideoTranslation, bool>> specTranslation = pt => pt.LanguageId == languageId && !pt.IsDelete;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            if (type.HasValue)
            {
                spec = spec.And(x => x.Type == type.Value);
            }

            if (isActive.HasValue)
            {
                spec = spec.And(x => x.IsActive == isActive.Value);
            }

            var query = Context.Set<Video>().Where(spec)
                .Join(Context.Set<VideoTranslation>().Where(specTranslation), x => x.Id, pt => pt.VideoId, (x, pt) =>
                    new VideoViewModel
                    {
                        Id = x.Id,
                        AlbumId = x.AlbumId,
                        Thumbnail = x.Thumbnail,
                        Url = x.Url,
                        Order = x.Order,
                        Type = x.Type,
                        VideoLinkId = x.VideoLinkId,
                        Title = pt.Title,
                        Description = pt.Description,
                        IsActive = x.IsActive,
                        IsHomePage = x.IsHomePage,
                        LastUpdateIsHomePage = x.LastUpdateIsHomePage,
                        LastUpdate = x.LastUpdate,
                    }).AsNoTracking();

            totalRows = query.Count();

            return query
                .OrderByDescending(x => x.LastUpdate)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Insert(Video video)
        {
            _videoRepository.Create(video);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(Video video)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string videoId)
        {
            var info = await GetInfo(videoId);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> DeleteByIds(List<string> videoIds)
        {
            var listVideo = await _videoRepository.GetsAsync(false, x => videoIds.Contains(x.Id));
            if (listVideo == null || !listVideo.Any())
                return -1;

            foreach (var video in listVideo)
            {
                video.IsDelete = true;
            }
            return await Context.SaveChangesAsync();
        }

        public async Task<int> DeleteListVideo(List<Video> listVideo)
        {
            if (listVideo != null && listVideo.Any())
            {
                foreach (var video in listVideo)
                {
                    video.IsDelete = true;
                }
                return await Context.SaveChangesAsync();
            }

            return 0;
        }

        public async Task<int> ForceDelete(string videoId)
        {
            var info = await GetInfo(videoId);
            if (info == null)
                return -1;

            _videoRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<Video> GetInfo(string videoId, bool isReadonly = false)
        {
            return await _videoRepository.GetAsync(isReadonly, x => x.Id == videoId && !x.IsDelete);
        }

        public async Task<Video> GetInfo(string tenantId, string videoId, bool isReadonly = false)
        {
            return await _videoRepository.GetAsync(isReadonly, x => x.TenantId == tenantId && x.Id == videoId && !x.IsDelete);
        }

        public async Task<List<Video>> GetsByAlbumId(string albumId, bool isReadOnly = false)
        {
            return await _videoRepository.GetsAsync(isReadOnly, x => x.AlbumId == albumId && !x.IsDelete);
        }

        public Task<List<VideoViewModel>> GetsByAlbumId(string languageId, string albumId, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Video, bool>> spec = x => !x.IsDelete && x.IsActive && x.AlbumId == albumId;
            var query = Context.Set<Video>().Where(spec)
                .Join(Context.Set<VideoTranslation>().Where(x => x.LanguageId == languageId), v => v.Id,
                    vt => vt.VideoId,
                    (v, vt) => new VideoViewModel
                    {
                        Id = v.Id,
                        CreateTime = v.CreateTime,
                        Type = v.Type,
                        Thumbnail = v.Thumbnail,
                        AlbumId = v.AlbumId,
                        Url = v.Url,
                        Description = vt.Description,
                        Title = vt.Title,
                        IsActive = v.IsActive,
                        IsHomePage = v.IsHomePage,
                        LastUpdateIsHomePage = v.LastUpdateIsHomePage,
                        Order = v.Order,
                        VideoLinkId = v.VideoLinkId
                    }).AsNoTracking();

            totalRows = query.Count();
            return query.OrderByDescending(x => x.CreateTime).Skip(pageSize * (page -1)).Take(pageSize).ToListAsync();
        }

        public async Task<List<string>> GetListVideoIdByAlbumId(string albumId)
        {
            return await _videoRepository.GetsAsAsync(x => x.Id, x => !x.IsDelete && x.AlbumId == albumId);
        }

        public async Task<List<VideoViewModel>> ListTopVideo(string tenantId, string languageId, int selectTop)
        {
            Expression<Func<Video, bool>> spec = x => !x.IsDelete && x.IsActive && x.TenantId == tenantId && x.IsHomePage.Value;
            Expression<Func<VideoTranslation, bool>> specTranslation = pt => pt.LanguageId == languageId && !pt.IsDelete;
            var query = Context.Set<Video>().Where(spec)
                .Join(Context.Set<VideoTranslation>().Where(specTranslation), x => x.Id, pt => pt.VideoId, (x, pt) =>
                    new VideoViewModel
                    {
                        Id = x.Id,
                        AlbumId = x.AlbumId,
                        Thumbnail = x.Thumbnail,
                        Url = x.Url,
                        Order = x.Order,
                        Type = x.Type,
                        VideoLinkId = x.VideoLinkId,
                        Title = pt.Title,
                        Description = pt.Description,
                        IsActive = x.IsActive,
                        CreateTime = x.CreateTime,
                        IsHomePage = x.IsHomePage,
                        LastUpdateIsHomePage = x.LastUpdateIsHomePage
                    }).AsNoTracking();

            return await query
              .OrderByDescending(x => x.LastUpdateIsHomePage)
                .Take(selectTop)
                .ToListAsync();
        }

        public Task<List<VideoViewModel>> ListVideo(string tenantId, string languageId, string albumId, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Video, bool>> spec = x => !x.IsDelete && x.IsActive && x.TenantId == tenantId && x.AlbumId == albumId;
            Expression<Func<VideoTranslation, bool>> specTranslation = pt => pt.LanguageId == languageId && !pt.IsDelete;

            var query = Context.Set<Video>().Where(spec)
                .Join(Context.Set<VideoTranslation>().Where(specTranslation), x => x.Id, pt => pt.VideoId, (x, pt) =>
                    new VideoViewModel
                    {
                        Id = x.Id,
                        AlbumId = x.AlbumId,
                        Thumbnail = x.Thumbnail,
                        Url = x.Url,
                        Order = x.Order,
                        Type = x.Type,
                        VideoLinkId = x.VideoLinkId,
                        Title = pt.Title,
                        Description = pt.Description,
                        IsActive = x.IsActive,
                        IsHomePage = x.IsHomePage,
                        LastUpdateIsHomePage = x.LastUpdateIsHomePage
                    }).AsNoTracking();

            totalRows = query.Count();
            return query
                .OrderByDescending(x => x.Order)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<VideoViewModel> GetInfo(string tenantId, string languageId, string videoId)
        {
            var query = Context.Set<Video>().Where(x => x.IsActive && !x.IsDelete && x.TenantId == tenantId && x.Id == videoId)
                .Join(Context.Set<VideoTranslation>().Where(x => x.LanguageId == languageId), v => v.Id,
                    vt => vt.VideoId,
                    (v, vt) => new VideoViewModel
                    {
                        Id = v.Id,
                        Thumbnail = v.Thumbnail,
                        Url = v.Url,
                        Type = v.Type,
                        VideoLinkId = v.VideoLinkId,
                        Title = vt.Title,
                        Description = vt.Description,
                        CreateTime = v.CreateTime
                    }).AsNoTracking();

            return await query.FirstOrDefaultAsync();
        }
    }
}
