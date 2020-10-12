using GHM.Infrastructure.Models;
using System.Threading.Tasks;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IServices
{
    public interface IBannerService
    {  
        SearchResult<BannerWidthItemViewModel> Search(string tenantId, BannerType? bannerType, string keyword, int page, int pageSize);

        Task<ActionResultResponse> Insert(string tenantId, BannerMeta bannerMeta);

        Task<ActionResultResponse> Update(string tenantId, string bannerId, BannerMeta bannerMeta);

        Task<ActionResultResponse> Delete(string tenantId, string bannerId);

        Task<ActionResultResponse> ForceDelete(string tenantId, string bannerId);
                            
        Task<ActionResultResponse<BannerViewModel>> GetDetail(string tenantId, string bannerId);

        Task<ActionResultResponse<BannerViewModel>> GetBannerItemByPosition(string tenantId, Position position);

        Task<ActionResultResponse> DeleteBannerItem(string bannerId, string bannerItemId);

        Task<ActionResultResponse> UpdateBannerItem(string bannerItemId, BannerItemMeta bannerItemMeta);
    }
}
