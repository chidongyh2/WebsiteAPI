using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.ViewModels;
using System.Threading.Tasks;

namespace GHM.Website.Domain.IServices
{
    public interface IAgencyInfoService
    {
        Task<SearchResult<AgencyInfoViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive, int page, int pageSize);

        Task<ActionResultResponse<string>> Insert(string tenantId, string creatorId, string creatorFullName, string creatorAvata, AgencyInfoMeta agencyInfoMeta);

        Task<ActionResultResponse> Update(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvata,
            string agencyInfoId, AgencyInfoMeta agencyInfoMeta);

        Task<ActionResultResponse> Delete(string tenantId, string agencyInfoId);

        Task<ActionResultResponse<AgencyInfoDetailViewModel>> GetDetail(string tenantId, string agencyInfoId);

        Task<ActionResultResponse> UpdateStatus(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvata,
            string agencyInfoId, bool status);
    }
}
