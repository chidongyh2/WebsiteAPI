using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.IServices;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.Resources;
using GHM.Warehouse.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;
namespace GHM.Warehouse.Infrastructure.Services
{
    public class WarehouseService : IWarehouseService
    {
        private readonly IWarehouseRepository _warehouseRepository;
        private readonly IWarehouseLimitRepository _warehouseLimitRepository;
        private readonly IWarehouseManagerConfigRepository _warehouseManagerConfigRepository;
        private readonly IGoodsReceiptNoteRepository _goodsReceiptNoteRepository;
        private readonly IWarehouseConfigService _warehouseConfigService;
        private readonly IWarehouseConfigRepository _warehouseConfigRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWarehouseResource> _warehouseResourceService;
        public WarehouseService(IWarehouseRepository warehouseRepository,
            IWarehouseLimitRepository warehouseLimitRepository,
            IWarehouseManagerConfigRepository warehouseManagerConfigRepository,
            IGoodsReceiptNoteRepository goodsReceiptNoteRepository,
            IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWarehouseResource> warehouseResourceService, IWarehouseConfigService warehouseConfigService,
            IWarehouseConfigRepository warehouseConfigRepository)
        {
            _warehouseRepository = warehouseRepository;
            _warehouseLimitRepository = warehouseLimitRepository;
            _warehouseManagerConfigRepository = warehouseManagerConfigRepository;
            _goodsReceiptNoteRepository = goodsReceiptNoteRepository;
            _sharedResourceService = sharedResourceService;
            _warehouseResourceService = warehouseResourceService;
            _warehouseConfigService = warehouseConfigService;
            _warehouseConfigRepository = warehouseConfigRepository;
        }
        public async Task<SearchResult<WarehouseViewModel>> Search(string tenantId, string keyword, bool? isActive, int page, int pageSize)
        {
            var items = await _warehouseRepository.Search(tenantId, keyword, isActive, page, pageSize, out var totalRows);
            return new SearchResult<WarehouseViewModel>
            {
                TotalRows = totalRows,
                Items = items
            };
        }

        public async Task<ActionResultResponse<string>> Insert(string tenantId, string creatorId, string creatorFullName, string creatorAvatar,
            WarehouseMeta warehouseMeta)
        {
            var warehouseId = Guid.NewGuid().ToString();
            var warehouse = new Domain.Models.Warehouse
            {
                Id = warehouseId,
                ConcurrencyStamp = warehouseId,
                Name = warehouseMeta.Name.Trim(),
                Description = warehouseMeta.Description?.Trim(),
                Address = warehouseMeta.Address?.Trim(),
                UnsignName = warehouseMeta.Name?.StripVietnameseChars().ToUpper(),
                IsActive = warehouseMeta.IsActive,
                TenantId = tenantId,
                CreatorId = creatorId,
                CreatorFullName = creatorFullName
            };

            var result = await _warehouseRepository.Insert(warehouse);
            if (result <= 0)
                return new ActionResultResponse<string>(result,
                    _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            // Thêm phương pháp tính tồn.
            await _warehouseConfigService.Save(new WarehouseConfigMeta
            {
                TenantId = tenantId,
                Value = ((int)warehouseMeta.InventoryCalculatorMethod).ToString(),
                Key = ClassHelper.GetPropertyNameAsKey<WarehouseConfigSetting>("CalculatorMethod"),
                WarehouseId = warehouseId,
                UserId = creatorId,
                FullName = creatorFullName,
                LanguageId = CultureInfo.CurrentCulture.Name,
                DisplayName = "Calculator method"
            });

            #region insert WarehouseManagerConfigs.
            if (warehouseMeta.WarehouseManagerConfigs != null && warehouseMeta.WarehouseManagerConfigs.Count > 0 && warehouseMeta.WarehouseManagerConfigs.Any())
            {
                var resultInsertWarehouseManagerConfig = await InsertWarehouseManagerConfig();
                if (resultInsertWarehouseManagerConfig.Code <= 0)
                {
                    await RollbackInsert();
                    return resultInsertWarehouseManagerConfig;
                }
            }
            #endregion

            return new ActionResultResponse<string>(1, _warehouseResourceService.GetString("Add new warehouse successful."),
                string.Empty, warehouseId);

            #region Local functions
            async Task<ActionResultResponse<string>> InsertWarehouseManagerConfig()
            {
                var warehouseManagerConfigs = new List<WarehouseManagerConfig>();
                foreach (var warehouseManagerConfig in warehouseMeta.WarehouseManagerConfigs)
                {
                    var warehouseManagerConfigInsert = new WarehouseManagerConfig
                    {
                        WarehouseId = warehouseId,
                        TenantId = tenantId,
                        UserId = warehouseManagerConfig.UserId.Trim(),
                        FullName = warehouseManagerConfig.FullName.Trim(),
                        Avatar = warehouseManagerConfig.Avatar?.Trim(),
                        PhoneNumber = warehouseManagerConfig.PhoneNumber?.Trim(),
                        UnsignName = warehouseManagerConfig.FullName?.StripVietnameseChars().ToUpper(),
                        Permissions = warehouseManagerConfig.Permissions,
                        CreatorId = creatorId,
                        CreatorFullName = creatorFullName
                    };

                    warehouseManagerConfigs.Add(warehouseManagerConfigInsert);

                }

                var resultWarehouseManagerConfig = await _warehouseManagerConfigRepository.Inserts(warehouseManagerConfigs);
                if (resultWarehouseManagerConfig > 0)
                    return new ActionResultResponse<string>(resultWarehouseManagerConfig,
                        _warehouseResourceService.GetString("Add new warehouse manager configs successful."));

                await RollbackInsertWarehouseManagerConfig();
                await RollbackInsert();

                return new ActionResultResponse<string>(-2,
                    _warehouseResourceService.GetString("Can not insert warehouse manager configs. Please contact with administrator."));
            }


            async Task RollbackInsert()
            {
                await _warehouseRepository.ForceDelete(warehouseId);
            }

            async Task RollbackInsertWarehouseManagerConfig()
            {
                await _warehouseManagerConfigRepository.DeleteByWarehouseId(warehouseId);
            }

            #endregion Local functions
        }

        public async Task<ActionResultResponse<string>> Update(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string warehouseId, WarehouseMeta warehouseMeta)
        {
            var info = await _warehouseRepository.GetInfo(warehouseId);
            if (info == null)
                return new ActionResultResponse<string>(-1, _warehouseResourceService.GetString("Warehouse does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<string>(-2,
                    _warehouseResourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.ConcurrencyStamp != warehouseMeta.ConcurrencyStamp)
                return new ActionResultResponse<string>(-3,
                    _warehouseResourceService.GetString(
                        "The warehouse already updated by other people. you are not allowed to edit the warehouse information."));

            info.Name = warehouseMeta.Name.Trim();
            info.Description = warehouseMeta.Description?.Trim();
            info.Address = warehouseMeta.Address?.Trim();
            info.UnsignName = warehouseMeta.Name?.StripVietnameseChars().ToUpper();
            info.IsActive = warehouseMeta.IsActive;
            info.ConcurrencyStamp = Guid.NewGuid().ToString();
            info.LastUpdateTime = DateTime.Now;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;

            await _warehouseRepository.Update(info);

            // Lấy về thông tin 
            var warehouseConfig =
                await _warehouseConfigRepository.GetInventoryCalculatorMethod(tenantId, warehouseId);
            if (!warehouseConfig.HasValue || warehouseConfig.Value != warehouseMeta.InventoryCalculatorMethod)
            {
                await _warehouseConfigService.Save(new WarehouseConfigMeta
                {
                    TenantId = tenantId,
                    Value = ((int)warehouseMeta.InventoryCalculatorMethod).ToString(),
                    Key = ClassHelper.GetPropertyNameAsKey<WarehouseConfigSetting>("CalculatorMethod"),
                    WarehouseId = warehouseId,
                    UserId = lastUpdateUserId,
                    FullName = lastUpdateFullName,
                    LanguageId = CultureInfo.CurrentCulture.Name,
                    DisplayName = "Calculator method"
                });
            }

            return new ActionResultResponse<string>(1, _warehouseResourceService.GetString("Update warehouse successful."),
                string.Empty, info.ConcurrencyStamp);
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string warehouseId)
        {
            var info = await _warehouseRepository.GetInfo(warehouseId);
            if (info == null)
                return new ActionResultResponse(-1, _warehouseResourceService.GetString("Warehouse does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var isGoodsWarehouseExists = await _goodsReceiptNoteRepository.CheckExistWarehouseId(tenantId, warehouseId);
            if (isGoodsWarehouseExists)
                return new ActionResultResponse(-2, _warehouseResourceService.GetString("This warehouse has been used in the goods receipt note."));

            var result = await _warehouseRepository.Delete(warehouseId);
            return new ActionResultResponse(result, _warehouseResourceService.GetString("Delete warehouse successful."));
        }

        public async Task<ActionResultResponse<WarehouseDetailViewModel>> GetDetail(string tenantId, string warehouseId)
        {
            var info = await _warehouseRepository.GetInfo(warehouseId);
            if (info == null)
                return new ActionResultResponse<WarehouseDetailViewModel>(-1, _warehouseResourceService.GetString("Warehouse does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<WarehouseDetailViewModel>(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var warehouseManagerConfigs = await _warehouseManagerConfigRepository.GetsWarehouseId(warehouseId, tenantId);
            //var warehouseLimits = await _warehouseLimitRepository.GetsWarehouseId(warehouseId, tenantId);

            var warehouseDetail = new WarehouseDetailViewModel
            {
                Id = info.Id,
                ConcurrencyStamp = info.ConcurrencyStamp,
                IsActive = info.IsActive,
                Name = info.Name,
                Description = info.Description,
                Address = info.Address,
                InventoryCalculatorMethod = await _warehouseConfigRepository.GetInventoryCalculatorMethod(tenantId, warehouseId),
                WarehouseManagerConfigs = warehouseManagerConfigs?.Select(x => new WarehouseManagerConfigViewModel
                {
                    UserId = x.UserId,
                    WarehouseId = x.WarehouseId,
                    FullName = x.FullName,
                    Avatar = x.Avatar,
                    PhoneNumber = x.PhoneNumber,
                    Permissions = x.Permissions,
                    CreateTime = x.CreateTime
                }).ToList(),
                //WarehouseLimits = warehouseLimits?.Select(x => new WarehouseLimitViewModel
                //{
                //    WarehouseId = x.WarehouseId,
                //    ProductId = x.ProductId,
                //    ProductUnitId = x.ProductUnitId,
                //    Quantity = x.Quantity,
                //    CreateTime = x.CreateTime
                //}).ToList()
            };
            return new ActionResultResponse<WarehouseDetailViewModel>
            {
                Code = 1,
                Data = warehouseDetail
            };
        }

        public async Task<ActionResultResponse<string>> InsertWarehouseManagerConfig(string tenantId, string warehouseId, string creatorId, string creatorFullName,
            string creatorAvatar, WarehouseManagerConfigMeta warehouseManagerConfigMeta)
        {
            var isWarehouseExists = await _warehouseRepository.CheckExists(warehouseId, tenantId);
            if (!isWarehouseExists)
                return new ActionResultResponse<string>(-1, _warehouseResourceService.GetString("Warehouse does not exists."));
            // Todo Bo sung them dieu kien check trung theo user sau 

            var info = await _warehouseManagerConfigRepository.GetInfo(warehouseId, warehouseManagerConfigMeta.UserId, true);
            if (info != null)
            {
                return new ActionResultResponse<string>(-2, _warehouseResourceService.GetString("Warehouse manager config already exists."));
            }

            var warehosueInfoHasDelete = await _warehouseManagerConfigRepository.GetInfo(warehouseId, warehouseManagerConfigMeta.UserId, tenantId);
            if (warehosueInfoHasDelete != null)
            {
                warehosueInfoHasDelete.IsDelete = false;
                await _warehouseManagerConfigRepository.Update(info);

                return new ActionResultResponse<string>(1, _warehouseResourceService.GetString("Add new warehouse manager config successful."),
               string.Empty, warehouseManagerConfigMeta.UserId);
            }

            var warehouseManagerConfig = new WarehouseManagerConfig
            {
                TenantId = tenantId,
                WarehouseId = warehouseId,
                UserId = warehouseManagerConfigMeta.UserId.Trim(),
                FullName = warehouseManagerConfigMeta.FullName.Trim(),
                Avatar = warehouseManagerConfigMeta.Avatar?.Trim(),
                PhoneNumber = warehouseManagerConfigMeta.PhoneNumber?.Trim(),
                UnsignName = warehouseManagerConfigMeta.FullName?.StripVietnameseChars().ToUpper(),
                Permissions = warehouseManagerConfigMeta.Permissions,
                CreatorId = creatorId,
                CreatorFullName = creatorFullName
            };

            var result = await _warehouseManagerConfigRepository.Insert(warehouseManagerConfig);

            if (result <= 0)
                return new ActionResultResponse<string>(result,
                    _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            return new ActionResultResponse<string>(1, _warehouseResourceService.GetString("Add new warehouse manager config successful."),
                string.Empty, warehouseManagerConfigMeta.UserId);
        }

        public async Task<ActionResultResponse<string>> UpdateWarehouseManagerConfig(string tenantId, string warehouseId, string lastUpdateUserId,
            string lastUpdateFullName, string lastUpdateAvatar, string userId,
            WarehouseManagerConfigMeta warehouseManagerConfigMeta)
        {
            var isWarehouseExists = await _warehouseRepository.CheckExists(warehouseId, tenantId);
            if (!isWarehouseExists)
                return new ActionResultResponse<string>(-1, _warehouseResourceService.GetString("Warehouse does not exists."));

            var info = await _warehouseManagerConfigRepository.GetInfo(warehouseId, userId);
            if (info == null)
                return new ActionResultResponse<string>(-3, _warehouseResourceService.GetString("Warehouse manager config does not exists."));

            if (info.WarehouseId != warehouseId)
                return new ActionResultResponse<string>(-4,
                    _warehouseResourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<string>(-5,
                    _warehouseResourceService.GetString(ErrorMessage.NotHavePermission));

            info.FullName = warehouseManagerConfigMeta.FullName.Trim();
            info.PhoneNumber = warehouseManagerConfigMeta.PhoneNumber?.Trim();
            info.Avatar = warehouseManagerConfigMeta.Avatar?.Trim();
            info.Permissions = warehouseManagerConfigMeta.Permissions;
            info.UnsignName = warehouseManagerConfigMeta.FullName?.StripVietnameseChars().ToUpper();
            info.LastUpdateTime = DateTime.Now;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;

            await _warehouseManagerConfigRepository.Update(info);

            return new ActionResultResponse<string>(1, _warehouseResourceService.GetString("Update warehouse manager config successful."),
                string.Empty, info.UserId);
        }

        public async Task<ActionResultResponse> DeleteWarehouseManagerConfig(string tenantId, string warehouseId, string userId)
        {
            var isWarehouseExists = await _warehouseRepository.CheckExists(warehouseId, tenantId);
            if (!isWarehouseExists)
                return new ActionResultResponse(-1, _warehouseResourceService.GetString("Warehouse does not exists."));

            var info = await _warehouseManagerConfigRepository.GetInfo(warehouseId, userId, tenantId);
            if (info == null)
                return new ActionResultResponse(-2, _warehouseResourceService.GetString("Warehouse manager config does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-3, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.WarehouseId != warehouseId)
                return new ActionResultResponse(-4, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            // bo sung dieu kien check xoa

            var result = await _warehouseManagerConfigRepository.Delete(warehouseId, userId);
            return new ActionResultResponse(result, _warehouseResourceService.GetString("Delete warehouse manager config successful."));
        }

        public async Task<ActionResultResponse<WarehouseManagerConfigViewModel>> GetDetailWarehouseManagerConfig(string tenantId, string warehouseId, string userId)
        {
            var info = await _warehouseManagerConfigRepository.GetInfo(warehouseId, userId);
            if (info == null)
                return new ActionResultResponse<WarehouseManagerConfigViewModel>(-1, _warehouseResourceService.GetString("Warehouse manager config does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<WarehouseManagerConfigViewModel>(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var detail = new WarehouseManagerConfigViewModel
            {
                UserId = info.UserId,
                WarehouseId = info.WarehouseId,
                FullName = info.FullName,
                Avatar = info.Avatar,
                PhoneNumber = info.PhoneNumber,
                Permissions = info.Permissions,
                CreateTime = info.CreateTime
            };
            return new ActionResultResponse<WarehouseManagerConfigViewModel>
            {
                Code = 1,
                Data = detail
            };
        }

        public async Task<SearchResult<WarehouseManagerConfigViewModel>> SearchWarehouseManagerConfig(string tenantId, string warehouseId, int page, int pageSize)
        {
            var items = await _warehouseManagerConfigRepository.Search(tenantId, warehouseId, page, pageSize, out var totalRows);
            return new SearchResult<WarehouseManagerConfigViewModel>
            {
                TotalRows = totalRows,
                Items = items
            };
        }

        public async Task<ActionResultResponse> InsertOrUpdateWarehouseLimit(string tenantId, string warehouseId, string creatorId, string creatorFullName,
            string creatorAvatar, WarehouseLimitMeta warehouseLimitMeta)
        {
            var isWarehouseExists = await _warehouseRepository.CheckExists(warehouseId, tenantId);
            if (!isWarehouseExists)
                return new ActionResultResponse<string>(-1, _warehouseResourceService.GetString("Warehouse does not exists."));

            var info = await _warehouseLimitRepository.GetInfo(warehouseId, warehouseLimitMeta.ProductId, warehouseLimitMeta.UnitId, tenantId);
            if (info == null)
            {
                //insert
                var warehouseLimit = new WarehouseLimit
                {
                    TenantId = tenantId,
                    WarehouseId = warehouseId,
                    ProductId = warehouseLimitMeta.ProductId.Trim(),
                    UnitId = warehouseLimitMeta.UnitId.Trim(),
                    Quantity = warehouseLimitMeta.Quantity,
                    CreatorId = creatorId,
                    CreatorFullName = creatorFullName
                };
                var result = await _warehouseLimitRepository.Insert(warehouseLimit);
                if (result <= 0)
                    return new ActionResultResponse(result,
                        _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));
            }
            else
            {
                //update
                if (info.TenantId != tenantId)
                    return new ActionResultResponse(-2,
                        _warehouseResourceService.GetString(ErrorMessage.NotHavePermission));

                if (info.WarehouseId != warehouseId)
                    return new ActionResultResponse<string>(-4,
                        _warehouseResourceService.GetString(ErrorMessage.NotHavePermission));

                info.Quantity = warehouseLimitMeta.Quantity;
                info.LastUpdateTime = DateTime.Now;
                info.LastUpdateUserId = creatorId;
                info.LastUpdateFullName = creatorFullName;
                await _warehouseLimitRepository.Update(info);
            }

            return new ActionResultResponse<string>(1, _warehouseResourceService.GetString("Update warehouse limit successful."));
        }

        public async Task<ActionResultResponse> DeleteWarehouseLimit(string tenantId, string warehouseId, string productId, string unitId)
        {
            var isWarehouseExists = await _warehouseRepository.CheckExists(warehouseId, tenantId);
            if (!isWarehouseExists)
                return new ActionResultResponse(-1, _warehouseResourceService.GetString("Warehouse does not exists."));

            var info = await _warehouseLimitRepository.GetInfo(warehouseId, productId, unitId, tenantId);
            if (info == null)
                return new ActionResultResponse(-2, _warehouseResourceService.GetString("Warehouse limit does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-3, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.WarehouseId != warehouseId)
                return new ActionResultResponse(-4, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            // bo sung dieu kien check xoa

            var result = await _warehouseLimitRepository.ForceDelete(warehouseId, productId, unitId);
            return new ActionResultResponse(result, _warehouseResourceService.GetString("Delete warehouse limit successful."));
        }

        public async Task<SearchResult<WarehouseLimitViewModel>> SearchWarehouseLimit(string tenantId, string languageId, string warehouseId, string keyword, int page,
            int pageSize)
        {
            var items = await _warehouseLimitRepository.SearchAsync(tenantId, languageId, warehouseId, keyword, page, pageSize, out var totalRows);
            return new SearchResult<WarehouseLimitViewModel>
            {
                TotalRows = totalRows,
                Items = items
            };
        }

        public async Task<ActionResultResponse> UpdateIsActive(string tenantId, string warehouseId, bool isActive)
        {
            var info = await _warehouseRepository.GetInfo(warehouseId, tenantId);
            if (info == null)
                return new ActionResultResponse<string>(-1, _warehouseResourceService.GetString("Warehouse does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<string>(-2,
                    _warehouseResourceService.GetString(ErrorMessage.NotHavePermission));

            info.IsActive = isActive;

            var result = await _warehouseRepository.Update(info);

            if (result <= 0)
            {

            }

            return new ActionResultResponse<string>(1, _warehouseResourceService.GetString("Update warehouse successful."),
                string.Empty, info.ConcurrencyStamp);
        }

        public async Task<SearchResult<WarehouseSuggestionViewModel>> Suggestions(string tenantId, string userId, string keyword, int page, int pageSize)
        {
            return new SearchResult<WarehouseSuggestionViewModel>
            {
                Items = await _warehouseRepository.SearchSuggestions(tenantId, userId, keyword, page, pageSize, out var totalRows),
                TotalRows = totalRows
            };
        }

        public async Task<SearchResult<Suggestion<string>>> ManagerSuggestions(string tenantId, string userId, string warehouseId,
            string keyword, int page, int pageSize)
        {
            return new SearchResult<Suggestion<string>>
            {
                Items = await _warehouseManagerConfigRepository.Suggestions(tenantId, warehouseId, keyword, page, pageSize, out var totalRows),
                TotalRows = totalRows
            };
        }

        public async Task<SearchResult<ProductSuggestionViewModel>> ProductSuggestion(string tenantId, string userId, string warehouseId,
            string keyword, int page, int pageSize)
        {
            // Kiểm tra người dùng hiện tại có quyền trên kho này không.
            var isWarehouseManagement = await _warehouseManagerConfigRepository.CheckExists(
                warehouseId, userId, tenantId);
            if (!isWarehouseManagement)
                return new SearchResult<ProductSuggestionViewModel>(-403, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var items = await _warehouseRepository.ProductSuggestions(tenantId, keyword, warehouseId, page, pageSize,
                out int totalRows);
            return new SearchResult<ProductSuggestionViewModel>(items);
        }
    }
}
