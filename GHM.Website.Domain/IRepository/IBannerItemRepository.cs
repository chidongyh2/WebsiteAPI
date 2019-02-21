using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IRepository
{
    public interface IBannerItemRepository
    {

        Task<int> Insert(BannerItem banneritem);

        Task<int> Inserts(List<BannerItem> bannerItems);

        Task<int> Update(BannerItem banneritem);

        Task<int> UpdateNumberClick(string banneritemId);

        Task<int> ForceDelete(string banneritemId);

        Task<BannerItem> GetInfo(string banneritemId, bool isReadOnly = false);
        
        Task<List<BannerItem>> GetByBanner(string bannerId);
    }
}
