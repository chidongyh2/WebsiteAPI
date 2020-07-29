using System;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Domain.IServices
{
    public interface IWarehouseService
    {
        Task<SearchResult<WarehouseViewModel>> Search(string tenantId, string keyword, bool? isActive, int page, int pageSize);

        Task<ActionResultResponse<string>> Insert(string tenantId, string creatorId, string creatorFullName, string creatorAvatar,
            WarehouseMeta warehouseMeta);

        Task<ActionResultResponse<string>> Update(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string warehouseId, WarehouseMeta warehouseMeta);

        Task<ActionResultResponse> Delete(string tenantId, string warehouseId);

        Task<ActionResultResponse<WarehouseDetailViewModel>> GetDetail(string tenantId, string warehouseId);

        Task<ActionResultResponse<string>> InsertWarehouseManagerConfig(string tenantId, string warehouseId, string creatorId, string creatorFullName, string creatorAvatar,
            WarehouseManagerConfigMeta warehouseManagerConfigMeta);

        Task<ActionResultResponse<string>> UpdateWarehouseManagerConfig(string tenantId, string warehouseId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string userId, WarehouseManagerConfigMeta warehouseManagerConfigMeta);

        Task<ActionResultResponse> DeleteWarehouseManagerConfig(string tenantId, string warehouseId, string userId);

        Task<ActionResultResponse<WarehouseManagerConfigViewModel>> GetDetailWarehouseManagerConfig(string tenantId, string warehouseId, string userId);

        Task<SearchResult<WarehouseManagerConfigViewModel>> SearchWarehouseManagerConfig(string tenantId, string warehouseId, int page, int pageSize);

        Task<ActionResultResponse> InsertOrUpdateWarehouseLimit(string tenantId, string warehouseId, string creatorId, string creatorFullName, string creatorAvatar,
            WarehouseLimitMeta warehouseLimitMeta);

        Task<ActionResultResponse> DeleteWarehouseLimit(string tenantId, string warehouseId, string productId, string unitId);

        Task<SearchResult<WarehouseLimitViewModel>> SearchWarehouseLimit(string tenantId, string languageId, string warehouseId, string keyword, int page, int pageSize);

        Task<ActionResultResponse> UpdateIsActive(string tenantId, string warehouseId, bool isActive);

        Task<SearchResult<WarehouseSuggestionViewModel>> Suggestions(string tenantId, string userId, string keyword, int page, int pageSize);

        Task<SearchResult<Suggestion<string>>> ManagerSuggestions(string tenantId, string userId, string warehouseId, string keyword, int page, int pageSize);

        Task<SearchResult<ProductSuggestionViewModel>> ProductSuggestion(string tenantId, string userId, string warehouseId,
            string keyword, int page, int pageSize);
    }
}
