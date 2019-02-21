using System.Threading.Tasks;
using GHM.Core.Domain.ModelMetas;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;

namespace GHM.Core.Domain.IServices
{
    public interface ITenantService
    {
        Task<ActionResultResponse> Insert(TenantMeta tenantMeta);

        Task<ActionResultResponse> Update(string id, TenantMeta tenantMeta);

        Task<ActionResultResponse> UpdateActiveStatus(string id, bool isActive);

        Task<SearchResult<TenantSearchViewModel>> Search(string keyword, bool? isActive, int page, int pageSize);
    }
}
