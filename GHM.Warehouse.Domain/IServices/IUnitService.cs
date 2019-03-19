using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.ViewModels;
using System.Threading.Tasks;

namespace GHM.Warehouse.Domain.IServices
{
    public interface IUnitService
    {
        Task<SearchResult<UnitSearchViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive, int page, int pageSize);

        Task<ActionResultResponse> Insert(string tenantId, string creatorId, string creatorFullName, UnitMeta unitMeta);

        Task<ActionResultResponse> Update(string tenantId, string id, string lastUpdateUserId, string lastUpdateFullName, UnitMeta unitMeta);

        Task<ActionResultResponse> Update(string tenantId, string id, string lastUpdateUserId, string lastUpdateFullName, bool isActive);

        Task<ActionResultResponse> Delete(string tenantId, string id);

        Task<ActionResultResponse<UnitDetailViewModel>> GetInfo(string tenantId, string id);

        Task<SearchResult<UnitSuggestionsViewModel>> Suggestions(string tenantId, string languageId, string keyword, int page, int pageSize);

    }

}
