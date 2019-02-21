using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IServices
{
    public interface IVideoService
    {
        Task<SearchResult<VideoViewModel>> Search(string tenantId, string languageId, string keyword, VideoType? type, bool? isActive, int page, int pageSize);

        Task<ActionResultResponse<string>> Insert(string tenantId, string creatorId, string creatorFullName, string creatorAvata, VideoMeta videoMeta);

        Task<ActionResultResponse> Update(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvata,
            string videoId, VideoMeta videoMeta);

        Task<ActionResultResponse> Delete(string tenantId, string videoId);

        Task<ActionResultResponse<VideoDetailViewModel>> GetDetail(string tenantId, string videoId);

        Task<ActionResultResponse<VideoViewModel>> GetDetail(string tenantId, string languageId, string id);

        Task<List<VideoViewModel>> ListTopVideo(string tenantId, string languageId,  int selectTop);

        Task<SearchResult<VideoViewModel>> ListVideo(string tenantId, string languageId, string albumId, int page, int pageSize);

        Task<ActionResultResponse> UpdateStatus(string tenantId, string id, bool isActive);

        Task<ActionResultResponse> UpdateIsHomePage(string tenantId, string id, bool isHomePage);
    }
}
