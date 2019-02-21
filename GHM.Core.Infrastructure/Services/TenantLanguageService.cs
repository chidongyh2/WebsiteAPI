using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.IServices;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.Resources;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;

namespace GHM.Core.Infrastructure.Services
{
    public class TenantLanguageService : ITenantLanguageService
    {
        private readonly ITenantLanguageRepository _tenantLanguageRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmCoreResource> _resourceService;

        public TenantLanguageService(ITenantLanguageRepository tenantLanguageRepository, IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmCoreResource> resourceService)
        {
            _tenantLanguageRepository = tenantLanguageRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
        }

        public async Task<ActionResultResponse> Save(TenantLanguage tenantLanguage)
        {
            var tenantLanguageInfo =
                await _tenantLanguageRepository.GetInfo(tenantLanguage.TenantId, tenantLanguage.LanguageId);
            if (tenantLanguageInfo == null)
            {
                var tenantLanguageInsert = new TenantLanguage
                {
                    LanguageId = tenantLanguage.LanguageId,
                    TenantId = tenantLanguage.TenantId,
                    Name = tenantLanguage.Name,
                    IsActive = tenantLanguage.IsActive,
                    IsDefault = tenantLanguage.IsDefault,
                };

                var resultInsert = await _tenantLanguageRepository.Insert(tenantLanguageInsert);
                return new ActionResultResponse(resultInsert, resultInsert <= 0
                    ? _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
                    : _resourceService.GetString("Add new language successful."));
            }

            tenantLanguageInfo.IsDefault = tenantLanguage.IsDefault;
            tenantLanguageInfo.IsActive = tenantLanguage.IsActive;
            var resultUpdate = await _tenantLanguageRepository.Update(tenantLanguageInfo);
            return new ActionResultResponse(resultUpdate, resultUpdate < 0
                ? _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
                : resultUpdate == 0 ? _sharedResourceService.GetString(ErrorMessage.NothingChanges)
                : _resourceService.GetString("Update tenant language successful."));
        }

        public async Task<ActionResultResponse> UpdateActiveStatus(string tenantId, string languageId, bool isActive)
        {
            var result = await _tenantLanguageRepository.UpdateActiveStatus(tenantId, languageId, isActive);
            return new ActionResultResponse(result, result <= 0
                ? _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
                : _resourceService.GetString("{0} tenant language successful.", isActive ?
                _sharedResourceService.GetString("Active") : _sharedResourceService.GetString("Deactive")));
        }

        public async Task<ActionResultResponse> UpdateDefaultStatus(string tenantId, string languageId, bool isDefault)
        {
            var result = await _tenantLanguageRepository.UpdateDefaultStatus(tenantId, languageId, isDefault);
            if (result <= 0)
                return new ActionResultResponse(result, result == -1
                    ? _resourceService.GetString("Tenant languages does not exists.")
                    : result == -2 ? _sharedResourceService.GetString("Tenant language does not exists.")
                    : _sharedResourceService.GetString("Have 0 record updated."));

            return new ActionResultResponse(result, _resourceService.GetString("Change default status successful."));
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string languageId)
        {
            var result = await _tenantLanguageRepository.Delete(tenantId, languageId);
            return new ActionResultResponse(result, result == -1
                ? _resourceService.GetString("Tenant language does not exists.")
                : result == -2 ? _resourceService.GetString("You can not delete default language.")
                : result == 0 ? _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
                : _resourceService.GetString("Delete tenant language successful."));
        }

        public async Task<SearchResult<TenantLanguageViewModel>> GetLanguageSupport(string tenantId)
        {
            var items = await _tenantLanguageRepository.GetLanguageSupport(tenantId);
            return new SearchResult<TenantLanguageViewModel>
            {
                Items = items
            };
        }

        public async Task<SearchResult<TenantLanguageViewModel>> GetsByTenantId(string tenantId)
        {
            var items = await _tenantLanguageRepository.GetAllLanguage(tenantId);
            return new SearchResult<TenantLanguageViewModel>
            {
                Items = items
            };
        }
    }
}
