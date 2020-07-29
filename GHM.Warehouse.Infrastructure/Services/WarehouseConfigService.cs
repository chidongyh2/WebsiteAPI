using GHM.Warehouse.Domain.IServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Resources;
using GHM.Warehouse.Domain.ViewModels;
using GHM.Infrastructure.ViewModels;
using GHM.Warehouse.Domain.Models;
namespace GHM.Warehouse.Infrastructure.Services
{
    public class WarehouseConfigService : IWarehouseConfigService
    {
        private readonly IWarehouseConfigRepository _warehouseConfigRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWarehouseResource> _warehouseResourceService;
        public WarehouseConfigService(IWarehouseConfigRepository warehouseConfigRepository,
          IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWarehouseResource> warehouseResourceService
        )
        {
            _warehouseConfigRepository = warehouseConfigRepository;
            _sharedResourceService = sharedResourceService;
            _warehouseResourceService = warehouseResourceService;
        }
        public async Task<ActionResultResponse> Save(List<WarehouseConfigMeta> warehouseConfigMetas)
        {
            var listNewWarehouseConfigs = new List<WarehouseConfig>();
            foreach (var warehouseConfigMeta in warehouseConfigMetas)
            {
                var warehouseConfigInfo =
                    await _warehouseConfigRepository.GetInfo(warehouseConfigMeta.TenantId, warehouseConfigMeta.LanguageId,
                        warehouseConfigMeta.WarehouseId, warehouseConfigMeta.Key);
                if (warehouseConfigInfo == null)
                {
                    listNewWarehouseConfigs.Add(InsertWarehouseConfig(warehouseConfigMeta));
                }
                else
                {
                    await UpdateWarehouseConfig(warehouseConfigInfo, warehouseConfigMeta);
                }
            }

            await _warehouseConfigRepository.Inserts(listNewWarehouseConfigs);
            return new ActionResultResponse(1, _warehouseResourceService.GetString("Save warehouse config successful."));

            #region Local functions.
            WarehouseConfig InsertWarehouseConfig(WarehouseConfigMeta warehouseConfigMeta)
            {
                return new WarehouseConfig
                {
                    LanguageId = warehouseConfigMeta.LanguageId,
                    TenantId = warehouseConfigMeta.TenantId,
                    Value = warehouseConfigMeta.Value?.Trim(),
                    ConcurrencyStamp = Guid.NewGuid().ToString(),
                    Key = warehouseConfigMeta.Key,
                    CreatorId = warehouseConfigMeta.UserId,
                    CreatorFullName = warehouseConfigMeta.FullName,
                    DisplayName = warehouseConfigMeta.DisplayName
                };
            }

            async Task UpdateWarehouseConfig(WarehouseConfig warehouseConfigInfo, WarehouseConfigMeta warehouseConfigMeta)
            {
                warehouseConfigInfo.Value = warehouseConfigMeta.Value?.Trim();
                warehouseConfigInfo.LastUpdate = DateTime.Now;
                warehouseConfigInfo.LastUpdateUserId = warehouseConfigMeta.UserId;
                warehouseConfigInfo.LastUpdateFullName = warehouseConfigMeta.FullName;
                await _warehouseConfigRepository.Update(warehouseConfigInfo);
            }
            #endregion
        }

        public async Task<ActionResultResponse> Save(WarehouseConfigMeta warehouseConfigMeta)
        {
            var warehouseConfig = await _warehouseConfigRepository.GetInfo(warehouseConfigMeta.TenantId,
                warehouseConfigMeta.LanguageId, warehouseConfigMeta.WarehouseId,
                warehouseConfigMeta.Key);
            if (warehouseConfig == null)
            {
                await _warehouseConfigRepository.Insert(new WarehouseConfig
                {
                    TenantId = warehouseConfigMeta.TenantId,
                    Value = warehouseConfigMeta.Value,
                    Key = warehouseConfigMeta.Key,
                    WarehouseId = warehouseConfigMeta.WarehouseId,
                    CreatorId = warehouseConfigMeta.UserId,
                    CreatorFullName = warehouseConfigMeta.FullName,
                    LanguageId = warehouseConfigMeta.LanguageId,
                    DisplayName = warehouseConfigMeta.DisplayName
                });
                return new ActionResultResponse(1, _sharedResourceService.GetString(SuccessMessage.UpdateSuccessful,
                    _warehouseResourceService.GetString("inventory calculator method")));
            }

            // Cập nhậ lại thời gian sử dụng.
            warehouseConfig.ToDate = DateTime.Now;
            var result = await _warehouseConfigRepository.Update(warehouseConfig);
            if (result > 0)
            {
                await _warehouseConfigRepository.Insert(new WarehouseConfig
                {
                    TenantId = warehouseConfigMeta.TenantId,
                    Value = warehouseConfigMeta.Value,
                    Key = warehouseConfigMeta.Key,
                    WarehouseId = warehouseConfigMeta.WarehouseId,
                    CreatorId = warehouseConfigMeta.UserId,
                    CreatorFullName = warehouseConfigMeta.FullName,
                    LanguageId = warehouseConfigMeta.LanguageId,
                    DisplayName = warehouseConfig.DisplayName
                });
                return new ActionResultResponse(1, _sharedResourceService.GetString(SuccessMessage.UpdateSuccessful,
                    _warehouseResourceService.GetString("inventory calculator method")));
            }

            return new ActionResultResponse(-1, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));
        }

        public async Task<SearchResult<WarehouseConfigViewModel>> GetWarehouseConfigs(string tenantId, string languageId, string warehouseId)
        {
            var warehouseConfigs = await _warehouseConfigRepository.GetAll(tenantId, languageId, warehouseId);
            var properties = ClassHelper.GetPropertiesName<WarehouseConfigSetting>();
            if (properties == null || !properties.Any())
                return new SearchResult<WarehouseConfigViewModel>(-1, _warehouseResourceService.GetString(ErrorMessage.SomethingWentWrong));

            if (warehouseConfigs != null && warehouseConfigs.Any())
            {
                var listNewProperties = properties
                    .Select(ClassHelper.GetPropertyNameAsKey<WarehouseConfigSetting>)
                    .ToList()
                    .Except(warehouseConfigs.Select(x => x.Key))
                    .ToList();

                if (listNewProperties.Any())
                {
                    var newProperties = properties.Where(x => listNewProperties
                    .Contains(ClassHelper.GetPropertyNameAsKey<WarehouseConfigSetting>(x))).ToList();
                    warehouseConfigs.AddRange(newProperties.Select(x => new WarehouseConfigViewModel
                    {
                        TenantId = tenantId,
                        Value = string.Empty,
                        LanguageId = languageId,
                        Key = ClassHelper.GetPropertyNameAsKey<WarehouseConfigSetting>(x),
                        DisplayName = ClassHelper.GetDisplayName<WarehouseConfigSetting>(x)
                    }));
                }
                return new SearchResult<WarehouseConfigViewModel>(warehouseConfigs);
            }

            warehouseConfigs = properties.Select(x => new WarehouseConfigViewModel
            {
                TenantId = tenantId,
                Value = string.Empty,
                LanguageId = languageId,
                Key = ClassHelper.GetPropertyNameAsKey<WarehouseConfigSetting>(x),
                DisplayName = ClassHelper.GetDisplayName<WarehouseConfigSetting>(x)
            }).ToList();
            return new SearchResult<WarehouseConfigViewModel>(warehouseConfigs);
        }
    }
}
