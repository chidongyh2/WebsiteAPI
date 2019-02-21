using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IRepository
{
    public interface IVideoRepository
    {
        Task<List<VideoViewModel>> Search(string tenantId, string languageId, string keyword, VideoType? type,
          bool? isActive, int page, int pageSize, out int totalRows);

        Task<int> Insert(Video video);

        Task<int> Update(Video video);

        Task<int> Delete(string videoId);

        Task<int> DeleteByIds(List<string> videoIds);

        Task<int> DeleteListVideo(List<Video> listVideo);

        Task<int> ForceDelete(string videoId);

        Task<Video> GetInfo(string videoId, bool isReadonly = false);

        Task<Video> GetInfo(string tenantId, string videoId, bool isReadonly = false);

        Task<VideoViewModel> GetInfo(string tenantId, string languageId, string videoId);

        Task<List<Video>> GetsByAlbumId(string albumId, bool isReadOnly = false);

        Task<List<VideoViewModel>> GetsByAlbumId(string languageId, string albumId, int page, int pageSize, out int totalRows);

        Task<List<string>> GetListVideoIdByAlbumId(string albumId);

        Task<List<VideoViewModel>> ListTopVideo(string tenantId, string languageId, int selectTop);

        Task<List<VideoViewModel>> ListVideo(string tenantId, string languageId, string albumId, int page, int pageSize, out int totalRows);
    }
}
