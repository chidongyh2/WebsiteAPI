using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.IServices;
using GHM.Core.Domain.ModelMetas;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.Resources;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;

namespace GHM.Core.Infrastructure.Services
{
    public class TenantService : ITenantService
    {
        private readonly ITenantRepository _tenantRepository;
        private readonly ITenantLanguageRepository _tenantLanguageRepository;
        private readonly ITenantLanguageService _tenantLanguageService;
        private readonly ILanguageRepository _languageRepository;
        private readonly ITenantPageRepository _tenantPageRepository;
        private readonly IUserAccountRepository _userAccountRepository;
        public readonly IUserRoleRepository _userRoleRepository;

        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmCoreResource> _resourceService;

        public TenantService(ITenantRepository tenantRepository, IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmCoreResource> resourceService, ITenantLanguageService tenantLanguageService, ILanguageRepository languageRepository,
            ITenantLanguageRepository tenantLanguageRepository, ITenantPageRepository tenantPageRepository, IUserAccountRepository userAccountRepository,
            IUserRoleRepository userRoleRepository)
        {
            _tenantRepository = tenantRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
            _tenantLanguageService = tenantLanguageService;
            _languageRepository = languageRepository;
            _tenantLanguageRepository = tenantLanguageRepository;
            _tenantPageRepository = tenantPageRepository;
            _userAccountRepository = userAccountRepository;
            _userRoleRepository = userRoleRepository;
        }

        public async Task<ActionResultResponse> Insert(string currentTenant, TenantMeta tenantMeta)
        {
            if (tenantMeta.Languages == null || !tenantMeta.Languages.Any())
                return new ActionResultResponse(-1, _resourceService.GetString("Please select at least one language."));

            var tenantId = Guid.NewGuid().ToString();
            var isExists = await _tenantRepository.CheckExists(tenantId, tenantMeta.PhoneNumber, tenantMeta.Email);
            if (isExists)
                return new ActionResultResponse(-2, _resourceService.GetString("Email or phone number already exists."));

            var tenant = new Tenant(tenantId, tenantMeta.Name, tenantMeta.Email, tenantMeta.PhoneNumber, tenantMeta.Address,
                tenantMeta.IsActive, tenantMeta.Note, tenantMeta.Logo);
            var result = await _tenantRepository.Insert(tenant);
            if (result <= 0)
                return new ActionResultResponse(-3, _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));

            // update userId
            var userAccount = await _userAccountRepository.GetInfo(currentTenant, tenantMeta.UserId, false);
            if (userAccount == null)
                return new ActionResultResponse(-4, _resourceService.GetString("user account does not exist"));

            userAccount.TenantId = tenant.Id;
            await _userAccountRepository.UpdateUserAccount(userAccount);
            //insert tenant page
            foreach(var tenantPage in tenantMeta.Pages)
            {
                var tenantPages = new TenantPage();
                tenantPages.TenantId = tenant.Id;
                tenantPages.PageId = tenantPage.PageId;
                await _tenantPageRepository.Insert(tenantPages);
            }

            //update UpserRole admin strator
            var userRoleExist = await _userRoleRepository.CheckExist(tenantMeta.UserId);

            if(userRoleExist)
            {
                await _userRoleRepository.DeleteByUserId(tenantMeta.UserId);
            }
            

            var insertRoleUser = await _userRoleRepository.Insert(tenantMeta.UserId, "SuperAdministrator");

            if (insertRoleUser < 0)
                return new ActionResultResponse(-5, _resourceService.GetString("insert user role does not success"));

            // Insert tenant languages.
            await InsertTenantLanguage(tenantId, tenantMeta.Languages);

            return new ActionResultResponse(result, result <= 0
                ? _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
                : _resourceService.GetString("Add new tenant successful."));
        }

        public async Task<ActionResultResponse> Update(string id, TenantMeta tenantMeta)
        {
            if (tenantMeta.Languages == null || !tenantMeta.Languages.Any())
                return new ActionResultResponse(-1, _resourceService.GetString("Please select at least one language."));

            var isExists = await _tenantRepository.CheckExists(id, tenantMeta.PhoneNumber, tenantMeta.Email);
            if (isExists)
                return new ActionResultResponse(-2, _resourceService.GetString("Email or phone number already exists."));

            var tenantInfo = await _tenantRepository.GetInfo(id);
            if (tenantInfo == null)
                return new ActionResultResponse(-3, _resourceService.GetString("Tenant does not exists."));

            tenantInfo.Name = tenantMeta.Name.Trim();
            tenantInfo.Email = tenantMeta.Email?.Trim();
            tenantInfo.PhoneNumber = tenantMeta.PhoneNumber?.Trim();
            tenantInfo.IsActive = tenantMeta.IsActive;
            tenantInfo.Address = tenantMeta.Address?.Trim();
            tenantInfo.Note = tenantMeta.Note;
            tenantInfo.UnsignName = $"{tenantInfo.Name.StripVietnameseChars().ToUpper()} {tenantInfo.Email?.StripVietnameseChars().ToUpper()} {tenantInfo.PhoneNumber?.StripVietnameseChars().ToUpper()}";
            tenantInfo.Logo = tenantMeta.Logo;
            var result = await _tenantRepository.Update(tenantInfo);

            // Update tenant language service.
            await UpdateTenantLanguage();

            return new ActionResultResponse(result, result < 0
                ? _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
                : result == 0 ? _sharedResourceService.GetString("Please enter update info.")
                : _resourceService.GetString("Update tenant {0} successful.", tenantInfo.Name));

            async Task UpdateTenantLanguage()
            {
                // Remove all tenant language.
                await _tenantLanguageRepository.ForceDeleteByTenantId(tenantInfo.Id);

                // Add new tenant language
                await InsertTenantLanguage(tenantInfo.Id, tenantMeta.Languages);
            }
        }

        public async Task<ActionResultResponse> UpdateActiveStatus(string id, bool isActive)
        {
            var result = await _tenantRepository.UpdateActiveStatus(id, isActive);
            return new ActionResultResponse(result, result <= 0 ? _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
                : _resourceService.GetString(isActive ? "Active tenant successful." : "Deactive tenant successful."));
        }

        public async Task<SearchResult<TenantSearchViewModel>> Search(string keyword, bool? isActive, int page, int pageSize)
        {
            return new SearchResult<TenantSearchViewModel>
            {
                Items = await _tenantRepository.Search(keyword, isActive, page, pageSize, out var totalRows),
                TotalRows = totalRows
            };
        }

        public async Task InsertTenantLanguage(string tenantId, List<TenantLanguageMeta> languages)
        {
            foreach (var tenantLanguageMeta in languages)
            {
                var languageInfo = await _languageRepository.GetInfo(tenantLanguageMeta.LanguageId, true);
                if (languageInfo == null)
                    continue;

                await _tenantLanguageService.Save(new TenantLanguage
                {
                    TenantId = tenantId,
                    LanguageId = tenantLanguageMeta.LanguageId,
                    Name = languageInfo.Name,
                    IsDefault = tenantLanguageMeta.IsDefault,
                    IsActive = true
                });
            }
        }
    }
}
