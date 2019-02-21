using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.IServices;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.Resources;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Infrastructure.Services
{
    public class SocialNetworkService : ISocialNetworkService
    {
        private readonly ISocialNetworkRepository _socialnetworkRepository;

        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWebsiteResource> _resourceService;

        public SocialNetworkService(ISocialNetworkRepository socialnetworkRepository,
            IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWebsiteResource> resourceService)
        {
            _socialnetworkRepository = socialnetworkRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
        }

        public async Task<ActionResultResponse> Delete(string socialnetworkId)
        {
            var socialnetworkinfo = await _socialnetworkRepository.GetInfo(socialnetworkId);
            if (socialnetworkinfo == null)
                return new ActionResultResponse(-1, _resourceService.GetString("SocialNetwork does not exists."));

            var result = await _socialnetworkRepository.Delete(socialnetworkId);
            return new ActionResultResponse(result, result <= 0 ? _resourceService.GetString("Something went wrong. Please contact with administrator.")
                : _resourceService.GetString("Delete SocialNetwork successful."));
        }

        public async Task<ActionResultResponse<string>> Insert(string tenantId, SocialNetworkMeta socialnetworkMeta)
        {
            var socialnetworkId = Guid.NewGuid().ToString();
            var socialnetwork = new SocialNetwork
            {
                Id = socialnetworkId,
                TenantId = tenantId,
                Name = socialnetworkMeta.Name,
                UnsignName = socialnetworkMeta.Name.Trim().StripVietnameseChars().ToUpper(),
                Image = socialnetworkMeta.Image,
                Url = socialnetworkMeta.Url,
                IsActive = socialnetworkMeta.IsActive,
                Order = socialnetworkMeta.Order,
                Icon = socialnetworkMeta.Icon,
            };

            var result = await _socialnetworkRepository.Insert(socialnetwork);
            if (result > 0)
                return new ActionResultResponse<string>(result, _sharedResourceService.GetString("Add new SocialNetwork successful.", "", socialnetworkId));

            await RollbackInsert(socialnetworkId);
            return new ActionResultResponse<string>(-5, _resourceService.GetString("Can not insert new SocialNetwork. Please contact with administrator."));
        }

        async Task RollbackInsert(string socialNetworkId)
        {
            await _socialnetworkRepository.ForceDelete(socialNetworkId);
        }

        public async Task<SearchResult<SocialNetworkViewModel>> Search(string tenantId, string keyword, int page, int pageSize)
        {
            var result = await _socialnetworkRepository.Search(tenantId, keyword, page, pageSize, out int totalRows);
            return new SearchResult<SocialNetworkViewModel>
            {
                Items = result,
                TotalRows = totalRows,
            };
        }

        public async Task<ActionResultResponse> Update(string socialnetworkId, SocialNetworkMeta socialnetworkMeta)
        {
            var socialnetworkInfo = await _socialnetworkRepository.GetInfo(socialnetworkId);
            if (socialnetworkInfo == null)
                return new ActionResultResponse(-2, _resourceService.GetString("SocialNetwork does not exists."));

            if (socialnetworkInfo.ConcurrencyStamp != socialnetworkMeta.ConcurrencyStamp)
                return new ActionResultResponse(-3, _resourceService.GetString("The SocialNetwork already updated by other people. You can not update this PatientSubject."));

            socialnetworkInfo.LastUpdate = DateTime.Now;
            socialnetworkInfo.ConcurrencyStamp = Guid.NewGuid().ToString();
            socialnetworkInfo.Name = socialnetworkMeta.Name;
            socialnetworkInfo.UnsignName = socialnetworkMeta.Name.Trim().StripVietnameseChars().ToUpper();
            socialnetworkInfo.Image = socialnetworkMeta.Image;
            socialnetworkInfo.Url = socialnetworkMeta.Url;
            socialnetworkInfo.IsActive = socialnetworkMeta.IsActive;
            socialnetworkInfo.Order = socialnetworkMeta.Order;
            socialnetworkInfo.Icon = socialnetworkMeta.Icon;

            await _socialnetworkRepository.Update(socialnetworkInfo);

            return new ActionResultResponse(1, _resourceService.GetString("Update SocialNetwork successful."));
        }

        public async Task<ActionResultResponse<SocialNetworkViewModel>> GetDetail(string socialNetworkId)
        {
            var socialNetworkInfo = await _socialnetworkRepository.GetInfo(socialNetworkId);

            var socialNetworkViewModel = new SocialNetworkViewModel()
            {
                Name = socialNetworkInfo.Name,
                Id = socialNetworkInfo.Id,
                Url = socialNetworkInfo.Url,
                IsActive = socialNetworkInfo.IsActive,
                Order = socialNetworkInfo.Order,
                Image = socialNetworkInfo.Image,
                Icon = socialNetworkInfo.Icon,
                ConcurrencyStamp = socialNetworkInfo.ConcurrencyStamp,
            };

            return new ActionResultResponse<SocialNetworkViewModel>
            {
                Code = 1,
                Data = socialNetworkViewModel
            };

        }
    }
}
