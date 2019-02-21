using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Customer.Domain.ModelMetas;
using GHM.Customer.Domain.ViewModels;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
namespace GHM.Customer.Domain.IServices
{
  public  interface ICustomerResourceService
    {
        Task<ActionResultResponse<string>> Insert(string tenantId, CustomerResourceMeta customerResourceMeta);

        Task<ActionResultResponse> Update(string tenantId,string id, CustomerResourceMeta customerResourceMeta);

        Task<ActionResultResponse> Delete(string tenantId,string id);

        Task<ActionResultResponse<CustomerResourceDetailViewModel>> GetDetail(string tenantId, string id);

        Task<SearchResult<CustomerResourceViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive,
            int page, int pageSize);

        Task<List<CustomerResourceForSelectViewModel>> SearchForSelect(string tenantId, string languageId, string keyword, int page, int pageSize);
    }
}
