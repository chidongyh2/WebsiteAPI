using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.ViewModels;
using System.Threading.Tasks;

namespace GHM.Warehouse.Domain.IServices
{
    public interface ISupplierService
    {
        Task<SearchResult<SupplierSearchViewModel>> Search(string tenantId, string languageId, string name, string address, bool? isActive, int page, int pageSize);

        Task<ActionResultResponse> Insert(string tenantId, string creatorId, string creatorFullName, SupplierMeta supplierMeta);

        Task<ActionResultResponse> Update(string id, string tenantId, string lastUpdateUserId, string lastUpdateFullName, SupplierMeta supplierMeta);

        Task<ActionResultResponse> Delete(string id, string tenantId);

        Task<ActionResultResponse<SupplierDetailViewModel>> GetDetail(string tenantId, string id, ContactType type);

        Task<ActionResultResponse> UpdateStatus(string tenantId, string id, bool isActive);

        Task<SearchResult<Suggestion<string>>> Suggestions(string tenantId, string keyword, int page, int pageSize);
    }
}
