using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.IServices;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.Resources;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Infrastructure.Services
{
    public class BannerService : IBannerService
    {
        private readonly IBannerRepository _bannerRepository;
        private readonly IBannerItemRepository _bannerItemRepository;

        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWebsiteResource> _resourceService;

        public BannerService(IBannerRepository bannerRepository, IBannerItemRepository bannerItemRepository,
            IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWebsiteResource> resourceService)
        {
            _bannerRepository = bannerRepository;
            _bannerItemRepository = bannerItemRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
        }

        async Task RollbackInsert(string bannerId)
        {
            await _bannerRepository.ForceDelete(bannerId);
        }

        public async Task<ActionResultResponse> Insert(string tenantId, BannerMeta bannerMeta)
        {
            var bannerId = Guid.NewGuid().ToString();

            //var isExistsInPosition = await _bannerRepository.CheckExistsByPosition(tenantId, bannerMeta.Position);
            //if (isExistsInPosition)
            //    return new ActionResultResponse(-1, _resourceService.GetString("Banner already exists in position"));

            var banner = new Banner
            {
                Id = bannerId,
                ConcurrencyStamp = bannerId,
                TenantId = tenantId,
                Name = bannerMeta.Name,
                Type = bannerMeta.Type,
                Description = bannerMeta.Description,
                UnsignName = bannerMeta.Name.StripVietnameseChars().ToUpper(),
                DisplayType = bannerMeta.DisplayType,
                EffectType = bannerMeta.EffectType,
                IsActive = bannerMeta.IsActive,
                IsPopUp = bannerMeta.IsPopUp,
                Position = bannerMeta.Position,
            };

            var result = await _bannerRepository.Insert(banner);
            if (result <= 0)
                return new ActionResultResponse(result, _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));

            if (!bannerMeta.BannerItems.Any() || bannerMeta.BannerItems == null)
            {
                await RollbackInsert(bannerId);
                return new ActionResultResponse(-4, _resourceService.GetString("Please inser banner item"));
            }

            var lstBannerItem = new List<BannerItem>();
            foreach (var bannerItemMeta in bannerMeta.BannerItems)
            {
                var pannerItem = new BannerItem
                {
                    Id = Guid.NewGuid().ToString(),
                    BannerId = banner.Id,
                    Name = bannerItemMeta.Name,
                    Url = bannerItemMeta.Url,
                    Image = bannerItemMeta.Image,
                    Order = bannerItemMeta.Order,
                    Alt = bannerItemMeta.Alt,
                    Description = bannerItemMeta.Description
                };
                lstBannerItem.Add(pannerItem);
            }

            var resultBannerItem = await _bannerItemRepository.Inserts(lstBannerItem);
            if (resultBannerItem <= 0)
            {
                await RollbackInsert(bannerId);
                return new ActionResultResponse(-5, _resourceService.GetString("Can not insert new Banner. Please contact with administrator."));
            }

            return new ActionResultResponse(1, _resourceService.GetString("Add new new banner successful."));
        }

        public async Task<ActionResultResponse> Update(string tenantId, string bannerId, BannerMeta bannerMeta)
        {
            var bannerInfo = await _bannerRepository.GetInfo(bannerId);
            if (bannerInfo == null)
                return new ActionResultResponse(-1, _resourceService.GetString("Banner does not exists."));

            if (bannerInfo.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString("You do not have permission to to this action."));

            if (bannerInfo.ConcurrencyStamp != bannerMeta.ConcurrencyStamp)
                return new ActionResultResponse(-3, _resourceService.GetString("The Banner already updated by other people. You can not update this Banner."));

            //if (bannerInfo.Position != bannerMeta.Position)
            //{
            //    var isExistsInPosition = await _bannerRepository.CheckExistsByPosition(tenantId, bannerMeta.Position);
            //    if (isExistsInPosition)
            //        return new ActionResultResponse(-1, _resourceService.GetString("Banner already exists in position"));
            //}

            bannerInfo.LastUpdate = DateTime.Now;
            bannerInfo.ConcurrencyStamp = Guid.NewGuid().ToString();
            bannerInfo.Name = bannerMeta.Name;
            bannerInfo.Type = bannerMeta.Type;
            bannerInfo.Description = bannerMeta.Description;
            bannerInfo.UnsignName = bannerMeta.Name.StripVietnameseChars().ToUpper();
            bannerInfo.DisplayType = bannerMeta.DisplayType;
            bannerInfo.EffectType = bannerMeta.EffectType;
            bannerInfo.IsActive = bannerMeta.IsActive;
            bannerInfo.IsPopUp = bannerMeta.IsPopUp;
            bannerInfo.Position = bannerMeta.Position;

            var result = await _bannerRepository.Update(bannerInfo);

            if (result < 0)
                return new ActionResultResponse(result, _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));

            var listBannerItem = await _bannerItemRepository.GetByBanner(bannerInfo.Id);
            if (listBannerItem != null && listBannerItem.Any())
            {
                foreach (var bannerItem in listBannerItem)
                {
                    var bannerItemExists = bannerMeta.BannerItems.Where(x => x.Id == bannerItem.Id).ToList();
                    if (bannerItemExists == null || bannerItemExists.Count() == 0)
                    {
                        await _bannerItemRepository.ForceDelete(bannerItem.Id);
                    }
                }
            }

            foreach (var bannerItemMeta in bannerMeta.BannerItems)
            {
                var bannerItem = await _bannerItemRepository.GetInfo(bannerItemMeta.Id);
                if (bannerItem != null)
                {
                    bannerItem.Name = bannerItemMeta.Name;
                    bannerItem.Url = bannerItemMeta.Url;
                    bannerItem.Image = bannerItemMeta.Image;
                    bannerItem.Order = bannerItemMeta.Order;
                    bannerItem.Alt = bannerItemMeta.Alt;
                    bannerItem.Description = bannerItemMeta.Description;
                    await _bannerItemRepository.Update(bannerItem);
                }
                else
                {
                    bannerItem = new BannerItem()
                    {
                        Id = Guid.NewGuid().ToString(),
                        BannerId = bannerId,
                        Name = bannerItemMeta.Name,
                        Url = bannerItemMeta.Url,
                        Image = bannerItemMeta.Image,
                        Order = bannerItemMeta.Order,
                        Alt = bannerItemMeta.Alt,
                        Description = bannerItemMeta.Description
                    };

                    await _bannerItemRepository.Insert(bannerItem);
                }
            }

            return new ActionResultResponse(result, _resourceService.GetString("Update Banner successful."));
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string bannerId)
        {
            var checkExists = await _bannerRepository.CheckInfo(bannerId);
            if (!checkExists)
                return new ActionResultResponse(-1, _resourceService.GetString("Banner does not exists."));

            var result = await _bannerRepository.Delete(bannerId);

            return new ActionResultResponse(result, result <= 0 ? _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
                : _resourceService.GetString("Delete Banner successful."));
        }

        public async Task<ActionResultResponse> ForceDelete(string tenantId, string bannerId)
        {
            var checkExists = await _bannerRepository.CheckInfo(bannerId);
            if (!checkExists)
                return new ActionResultResponse(-1, _resourceService.GetString("Banner does not exists."));

            var result = await _bannerRepository.ForceDelete(bannerId);
            return new ActionResultResponse(result, result <= 0 ? _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
                : _resourceService.GetString("Delete Banner successful."));
        }

        public async Task<ActionResultResponse<BannerViewModel>> GetDetail(string tenantId, string bannerId)
        {
            var bannerInfo = await _bannerRepository.GetInfo(tenantId, bannerId);
            if (bannerInfo == null)
                return new ActionResultResponse<BannerViewModel>(-1, _resourceService.GetString("Banner does not exists."));

            var bannerItems = await _bannerItemRepository.GetByBanner(bannerId);

            var bannerViewModel = new BannerViewModel
            {
                Id = bannerInfo.Id,
                Name = bannerInfo.Name,
                IsActive = bannerInfo.IsActive,
                Description = bannerInfo.Description,
                DisplayType = bannerInfo.DisplayType,
                EffectType = bannerInfo.EffectType,
                IsPopUp = bannerInfo.IsPopUp,
                Type = bannerInfo.Type,
                Position = bannerInfo.Position,
                ConcurrencyStamp = bannerInfo.ConcurrencyStamp,
                BannerItems = bannerItems,
            };

            return new ActionResultResponse<BannerViewModel>
            {
                Code = 1,
                Data = bannerViewModel
            };
        }

        public async Task<ActionResultResponse<BannerViewModel>> GetBannerItemByPosition(string tenantId, Position position)
        {
            var bannerInfo = await _bannerRepository.GetBannerByPosition(tenantId, position);
            if (bannerInfo == null)
                return new ActionResultResponse<BannerViewModel>(-1, _resourceService.GetString("Banner does not exists."));

            var bannerItems = await _bannerItemRepository.GetByBanner(bannerInfo.Id);

            var bannerViewModel = new BannerViewModel
            {
                Id = bannerInfo.Id,
                Name = bannerInfo.Name,
                IsActive = bannerInfo.IsActive,
                Description = bannerInfo.Description,
                DisplayType = bannerInfo.DisplayType,
                EffectType = bannerInfo.EffectType,
                IsPopUp = bannerInfo.IsPopUp,
                Type = bannerInfo.Type,
                ConcurrencyStamp = bannerInfo.ConcurrencyStamp,
                BannerItems = bannerItems,
            };

            return new ActionResultResponse<BannerViewModel>
            {
                Code = 1,
                Data = bannerViewModel
            };

        }

        public async Task<SearchResult<BannerWidthItemViewModel>> Search(string tenantId, BannerType? bannerType, string keyword, int page, int pageSize)
        {
            var listBanner = await _bannerRepository.Search(tenantId, bannerType, keyword, page, pageSize, out int totalRows);
            return new SearchResult<BannerWidthItemViewModel>
            {
                Items = listBanner,
                TotalRows = totalRows,
            };
        }

        public async Task<ActionResultResponse> DeleteBannerItem(string bannerId, string bannerItemId)
        {
            var result = await _bannerItemRepository.ForceDelete(bannerItemId);
            if (result == -1)
                return new ActionResultResponse(-1, _resourceService.GetString("Banner does not exists."));

            var bannerItems = await _bannerItemRepository.GetByBanner(bannerId);

            if (bannerItems.Count == 0)
                await _bannerRepository.Delete(bannerId);

            return new ActionResultResponse(result, result <= 0 ? _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
                : _resourceService.GetString("Delete BannerItem successful."));
        }

        public async Task<ActionResultResponse> UpdateBannerItem(string bannerItemId, BannerItemMeta bannerItemMeta)
        {
            var bannerItemInfo = await _bannerItemRepository.GetInfo(bannerItemId);
            if (bannerItemInfo == null)
                return new ActionResultResponse(-1, _resourceService.GetString("BannerItem does not exists."));

            bannerItemInfo.Name = bannerItemMeta.Name;
            bannerItemInfo.Url = bannerItemMeta.Url;
            bannerItemInfo.Image = bannerItemMeta.Image;
            bannerItemInfo.Order = bannerItemMeta.Order;
            bannerItemInfo.Alt = bannerItemMeta.Alt;
            bannerItemInfo.Description = bannerItemMeta.Description;

            var result = await _bannerItemRepository.Update(bannerItemInfo);
            return new ActionResultResponse(result, result <= 0 ? _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
               : _resourceService.GetString("Update BannerItem successful."));
        }
    }
}
