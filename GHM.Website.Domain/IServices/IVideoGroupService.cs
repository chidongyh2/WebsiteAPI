using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IServices
{
  public  interface IVideoGroupService
    {
        Task<SearchResult<VideoGroupViewModel>> Search(string tenantId, string languageId, string keyword,  bool? isActive, int page, int pageSize);

        Task<ActionResultResponse<string>> Insert(string tenantId, string creatorId, string creatorFullName, string creatorAvata, VideoGroupMeta videoGroupMeta);

        Task<ActionResultResponse> Update(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvata,
            string videoGroupId, VideoGroupMeta videoGroupMeta);

        Task<ActionResultResponse> Delete(string tenantId, string videoGroupId);

        Task<ActionResultResponse<VideoGroupDetailViewModel>> GetDetail(string tenantId, string videoGroupId);
    }
}
