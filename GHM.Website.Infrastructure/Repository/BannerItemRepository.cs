using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;

namespace GHM.Website.Infrastructure.Repository
{
    public class BannerItemRepository : RepositoryBase, IBannerItemRepository
    {        
        private readonly IRepository<BannerItem> _bannerItemRepository;

        public BannerItemRepository(IDbContext context) : base(context)
        {
            _bannerItemRepository = Context.GetRepository<BannerItem>();
        }

        public async Task<int> UpdateNumberClick(string banneritemId)
        {
            var banneritemInfo = await GetInfo(banneritemId,true);
            if (banneritemInfo == null)
                return -1;

            banneritemInfo.TotalClick = banneritemInfo.TotalClick + 1;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string banneritemId)
        {
            var banneritemInfo = await GetInfo(banneritemId);
            if (banneritemInfo == null)
                return -1;

            _bannerItemRepository.Delete(banneritemInfo);
            return await Context.SaveChangesAsync();
        }

        public async Task<List<BannerItem>> GetByBanner(string bannerId)
        {
            return  _bannerItemRepository.GetsReadOnly(x => x.BannerId == bannerId);
        }

        public async Task<BannerItem> GetInfo(string banneritemId, bool isReadOnly = false)
        {
            return await _bannerItemRepository.GetAsync(isReadOnly, x => x.Id == banneritemId);
        }

        public async Task<int> Insert(BannerItem banneritem)
        {
            _bannerItemRepository.Create(banneritem);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<BannerItem> bannerItems)
        {
            _bannerItemRepository.Creates(bannerItems);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(BannerItem banneritem)
        {
            return await Context.SaveChangesAsync();
        }
    }
}
