using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace GHM.Website.Infrastructure.Repository
{
    public class BannerRepository : RepositoryBase, IBannerRepository
    {
        private readonly IRepository<Banner> _bannerRepository;
        private readonly IRepository<BannerItem> _bannerItemRepository;

        public BannerRepository(IDbContext context) : base(context)
        {
            _bannerRepository = Context.GetRepository<Banner>();
            _bannerItemRepository = Context.GetRepository<BannerItem>();
        }

        public async Task<int> Insert(Banner banner)
        {
            _bannerRepository.Create(banner);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(Banner banner)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string bannerId)
        {
            var bannerInfo = await GetInfo(bannerId);
            if (bannerInfo == null)
                return -1;

            bannerInfo.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string bannerId)
        {
            var bannerInfo = await GetInfo(bannerId);
            if (bannerInfo == null)
                return -1;

            _bannerRepository.Delete(bannerInfo);
            return await Context.SaveChangesAsync();
        }

        public async Task<Banner> GetInfo(string bannerId, bool isReadOnly = false)
        {
            return await _bannerRepository.GetAsync(isReadOnly, x => x.Id == bannerId);
        }

        public async Task<bool> CheckExistsByPosition(string tennatId, Position position)
        {
            return await _bannerRepository.ExistAsync(x => x.TenantId == tennatId && !x.IsDelete && x.Position == position);
        }

        public async Task<Banner> GetInfo(string tenantId, string bannerId, bool isReadOnly = false)
        {
            return await _bannerRepository.GetAsync(isReadOnly, x => x.Id == bannerId && x.TenantId == tenantId && !x.IsDelete);
        }

        public async Task<Banner> GetBannerByPosition(string tenantId, Position position, bool isReadOnly = false)
        {
            return await _bannerRepository.GetAsync(isReadOnly, x => x.IsActive && x.TenantId == tenantId && !x.IsDelete && x.Position == position);
        }

        public async Task<bool> CheckInfo(string bannerId)
        {
            return await _bannerRepository.ExistAsync(x => x.Id == bannerId);
        }

        public List<BannerWidthItemViewModel> Search(string tenantId, BannerType? bannerType, string keyword,
            int page, int pageSize, out int totalRows)
        {
            Expression<Func<Banner, bool>> spec = x => x.TenantId == tenantId && !x.IsDelete;
            if (bannerType.HasValue)
            {
                spec = spec.And(x => x.Type == bannerType);
            }

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            //var query = Context.Set<Banner>().Where(spec).AsNoTracking()
            //        .Join(Context.Set<BannerItem>().AsNoTracking(), banner => banner.Id, bannerItem => bannerItem.BannerId,
            //        (banner, bannerItem) => new
            //        {
            //            BannerId = banner.Id,
            //            BannerName = banner.Name,
            //            banner.Type,
            //            banner.IsPopUp,
            //            banner.Position,
            //            bannerItem.Alt,
            //            bannerItem.Description,
            //            bannerItem.Id,
            //            bannerItem.Image,
            //            bannerItem.Order,
            //            bannerItem.TotalClick,
            //            bannerItem.Url,
            //            bannerItem.Name
            //        }).GroupBy(x => new { x.BannerId, x.BannerName, x.Type, x.IsPopUp, x.Position }, (key, g) => new BannerWidthItemViewModel
            //        {
            //            BannerId = key.BannerId,
            //            BannerName = key.BannerName,
            //            Type = key.Type,
            //            IsPopUp = key.IsPopUp,
            //            Position = key.Position,
            //            BannerItems = g.AsEnumerable().Select(x => new BannerItem
            //            {
            //                Id = x.Id,
            //                Image = x.Image,
            //                Name = x.Name,
            //                Description = x.Description,
            //                Alt = x.Alt,
            //                Url = x.Url,
            //                Order = x.Order,
            //                TotalClick = x.TotalClick,
            //                BannerId = x.BannerId
            //            }).ToList()
            //        });

            var query = Context.Set<Banner>().Where(spec).AsNoTracking().Select(x => new BannerWidthItemViewModel
            {
                BannerId = x.Id,
                BannerName = x.Name,
                Type = x.Type,
                IsPopUp = x.IsPopUp,
                Position = x.Position,
            }).ToList();
            totalRows = 0;
            foreach (var item in query)
            {
                item.BannerItems = Context.Set<BannerItem>().Where(x => x.BannerId == item.BannerId).AsNoTracking().ToList();
            }

            totalRows = query.Count();
            return query;
        }
    }
}

