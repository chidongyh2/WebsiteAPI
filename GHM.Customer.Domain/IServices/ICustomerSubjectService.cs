using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Customer.Domain.ModelMetas;                                                                           
using GHM.Customer.Domain.ViewModels;
using System.Threading.Tasks;

namespace GHM.Customer.Domain.IServices
{
    public interface ICustomerSubjectService
    {
        Task<ActionResultResponse> Insert(string tenantId, CutomerSubjectMeta cutomerSubjectMeta);

        Task<ActionResultResponse> Update(string tenantId, string id, CutomerSubjectMeta cutomerSubjectMeta);

        Task<ActionResultResponse> Delete(string tenantId, string id);

        Task<ActionResultResponse<CustomerSubjectDetailViewModel>> GetDetail(string tenantId, string languageId, string id);

        Task<SearchResult<CustomerSubjectViewModel>> Search(string tenantId, string languageId, string keyword, float? totalReduction, bool? isActive
            , int page, int pageSize);
    }
}
