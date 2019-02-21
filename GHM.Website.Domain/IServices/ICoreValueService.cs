using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IServices
{
  public  interface ICoreValueService
    {
        Task<SearchResult<CoreValueViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive, int page, int pageSize);

        Task<ActionResultResponse<string>> Insert(string tenantId, string creatorId, string creatorFullName, string creatorAvata, CoreValueMeta coreValueMeta);

        Task<ActionResultResponse> Update(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvata,
            string coreValueId, CoreValueMeta coreValueMeta);

        Task<ActionResultResponse> UpdateOrder(string tenantId, string coreValueId, int order);

        Task<ActionResultResponse> Delete(string tenantId, string coreValueId);

        Task<ActionResultResponse<CoreValueDetailViewModel>> GetDetail(string tenantId, string coreValueId);
        Task<List<ValueViewModel>> GetAllActivatedCoreValue(string tenantId, string languageId);
    }
}
