using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.ViewModels;


namespace GHM.Website.Domain.IServices
{
  public  interface IFaqGroupService
    {
        Task<SearchResult<FaqGroupViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive, int page, int pageSize);

        Task<ActionResultResponse<string>> Insert(string tenantId, string creatorId, string creatorFullName, string creatorAvata, FaqGroupMeta faqGroupMeta);

        Task<ActionResultResponse> Update(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvata,
            string faqGroupId, FaqGroupMeta faqGroupMeta);

        Task<ActionResultResponse> Delete(string tenantId, string faqGroupId);

        Task<ActionResultResponse<FaqGroupDetailViewModel>> GetDetail(string tenantId, string faqGroupId);
    }
}
