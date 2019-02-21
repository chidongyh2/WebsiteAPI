using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.ViewModels;
using System.Threading.Tasks;

namespace GHM.Website.Domain.IServices
{
    public interface IBrandService
    {

        Task<SearchResult<BrandSearchViewModel>> Search(string tenantId, string keyword, bool? isActive, int page, int pageSize);

        Task<ActionResultResponse> Insert(string tenantId, string creatorId, string creatorFullName, BrandMeta brandMeta);

        Task<ActionResultResponse> Update(string tenantId, string id, string lastUpdateUserId, string lastUpdateFullName, BrandMeta brandMeta);

        Task<ActionResultResponse> Update(string tenantId, string id, string lastUpdateUserId, string lastUpdateFullName, bool isActive);

        Task<ActionResultResponse> Delete(string tenantId, string id);

        Task<ActionResultResponse<BrandDetailViewModel>> GetDetail(string tenantId, string id);

    }

}
