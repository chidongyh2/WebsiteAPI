using GHM.Website.Domain.IServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.Resources;
using GHM.Website.Domain.ViewModels;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.Models;

namespace GHM.Website.Infrastructure.Services
{
    public class SettingService : ISettingService
    {
        private readonly ISettingRepository _settingRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWebsiteResource> _resourceService;

        public SettingService(ISettingRepository settingRepository,
            IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWebsiteResource> resourceService)
        {
            _settingRepository = settingRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
        }

        public async Task<ActionResultResponse> Save(List<SettingMeta> settingMetas)
        {
            var listNewSettings = new List<Setting>();
            foreach (var settingMeta in settingMetas)
            {
                var settingInfo =
                    await _settingRepository.GetInfo(settingMeta.TenantId, settingMeta.LanguageId, settingMeta.GroupId, settingMeta.Key);
                if (settingInfo == null)
                {
                    listNewSettings.Add(InsertSetting(settingMeta));
                }
                else
                {
                    await UpdateSetting(settingInfo, settingMeta);
                }
            }

            if (listNewSettings.Count > 0)
            {
                await _settingRepository.Inserts(listNewSettings);
            }
            return new ActionResultResponse(1, _resourceService.GetString("Save setting successful."));

            #region Local functions.
            Setting InsertSetting(SettingMeta settingMeta)
            {
                return new Setting
                {
                    LanguageId = settingMeta.LanguageId,
                    TenantId = settingMeta.TenantId,
                    Value = settingMeta.Value?.Trim(),
                    ConcurrencyStamp = Guid.NewGuid().ToString(),
                    LastUpdate = DateTime.Now,
                    Key = settingMeta.Key,
                    GroupId = settingMeta.GroupId,
                    LastUpdateFullName = settingMeta.FullName,
                    LastUpdateUserId = settingMeta.UserId,
                    DisplayName = settingMeta.DisplayName
                };
            }

            async Task UpdateSetting(Setting settingInfo, SettingMeta settingMeta)
            {
                settingInfo.Value = settingMeta.Value?.Trim();
                settingInfo.LastUpdate = DateTime.Now;
                settingInfo.LastUpdateUserId = settingMeta.UserId;
                settingInfo.LastUpdateFullName = settingMeta.FullName;
                await _settingRepository.Update(settingInfo);
            }
            #endregion
        }

        public async Task<SearchResult<SettingViewModel>> GetsByGroupId(string tenantId, string languageId, string groupId)
        {
            var items = await _settingRepository.GetsByGroupId(tenantId, languageId, groupId);
            return new SearchResult<SettingViewModel>(items);
        }

        public async Task<SearchResult<SettingViewModel>> GetWebsiteSettings(string tenantId, string languageId)
        {
            var websiteSettingGroupId = ClassHelper.GetPropertyNameAsKey<WebsiteSetting>("WebsiteSetting");
            var settings = await _settingRepository.GetsByGroupId(tenantId, languageId, websiteSettingGroupId);
            var properties = ClassHelper.GetPropertiesName<WebsiteSetting>();
            if (properties == null || !properties.Any())
                return new SearchResult<SettingViewModel>(-1, _resourceService.GetString(ErrorMessage.SomethingWentWrong));

            if (settings != null && settings.Any())
            {
                var listNewProperties = properties
                    .Select(ClassHelper.GetPropertyNameAsKey<WebsiteSetting>)
                    .ToList()
                    .Except(settings.Select(x => x.Key))
                    .ToList();

                if (listNewProperties.Any())
                {
                    var newProperties = properties.Where(x => listNewProperties
                    .Contains(ClassHelper.GetPropertyNameAsKey<WebsiteSetting>(x))).ToList();
                    settings.AddRange(newProperties.Select(x => new SettingViewModel
                    {
                        Value = string.Empty,
                        GroupId = websiteSettingGroupId,
                        LanguageId = languageId,
                        Key = ClassHelper.GetPropertyNameAsKey<WebsiteSetting>(x),
                        DisplayName = ClassHelper.GetDisplayName<WebsiteSetting>(x)
                    }));
                }
                return new SearchResult<SettingViewModel>(settings);
            }

            settings = properties.Select(x => new SettingViewModel
            {
                Value = string.Empty,
                GroupId = websiteSettingGroupId,
                LanguageId = languageId,
                Key = ClassHelper.GetPropertyNameAsKey<WebsiteSetting>(x),
                DisplayName = ClassHelper.GetDisplayName<WebsiteSetting>(x)
            }).ToList();
            return new SearchResult<SettingViewModel>(settings);
        }
    }
}
