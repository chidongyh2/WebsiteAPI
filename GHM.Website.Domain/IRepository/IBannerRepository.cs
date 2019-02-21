using GHM.Website.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IRepository
{
    public interface IBannerRepository
    {
        Task<List<BannerWidthItemViewModel>> Search(string tenantId, BannerType? bannerType, string keyword, int page, int pageSize,
            out int totalRows);       

        Task<int> Insert(Banner banner);

        Task<int> Update(Banner banner);

        Task<int> Delete(string bannerId);

        Task<int> ForceDelete(string bannerId);

        Task<bool> CheckInfo(string bannerId);

        Task<Banner> GetInfo(string bannerId, bool isReadOnly = false);

        Task<Banner> GetInfo(string tenantId, string bannerId, bool isReadOnly = false);

        Task<Banner> GetBannerByPosition(string tenantId, Position position, bool isReadOnly = false);

        Task<bool> CheckExistsByPosition(string tennatId, Position position);
    }
}
