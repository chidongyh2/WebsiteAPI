using System;
using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using GHM.Warehouse.Domain.IServices;
using GHM.Warehouse.Domain.ModelMetas;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
namespace GHM.Warehouse.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/warehouses")]
    public class WarehousesController : GhmControllerBase
    {
        private readonly IWarehouseService _warehouseService;
        private readonly IWarehouseConfigService _warehouseConfigService;
        public WarehousesController(IWarehouseService warehouseService, IWarehouseConfigService warehouseConfigService)
        {
            _warehouseService = warehouseService;
            _warehouseConfigService = warehouseConfigService;
        }
        #region Warehouse
        [AcceptVerbs("GET")]
        [AllowPermission(PageId.WarehouseManagement, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, bool? isActive, int page = 1, int pageSize = 20)
        {
            var result = await _warehouseService.Search(CurrentUser.TenantId, keyword, isActive, page, pageSize);
            return Ok(result);
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.WarehouseManagement, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]WarehouseMeta warehouseMeta)
        {
            var result = await _warehouseService.Insert(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, warehouseMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.WarehouseManagement, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]WarehouseMeta warehouseMeta)
        {
            var result = await _warehouseService.Update(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, id, warehouseMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.WarehouseManagement, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _warehouseService.Delete(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.WarehouseManagement, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Detail(string id)
        {
            var result = await _warehouseService.GetDetail(CurrentUser.TenantId, id);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/actives/{isActive}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.WarehouseManagement, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateStatus(string id, bool isActive)
        {
            var result = await _warehouseService.UpdateIsActive(CurrentUser.TenantId, id, isActive);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("suggestions"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> SearchSuggesstion(string keyword, int page = 1, int pageSize = 20)
        {
            var result = await _warehouseService.Suggestions(CurrentUser.TenantId, CurrentUser.Id, keyword, page, pageSize);
            return Ok(result);
        }
        #endregion

        #region WarehouseManagerConfig
        [Route("{id}/warehouse-manager-configs"), AcceptVerbs("GET")]
        [AllowPermission(PageId.WarehouseManagement, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> SearchWarehouseManagerConfig(string id, bool? isActive, int page = 1, int pageSize = 20)
        {
            var result = await _warehouseService.SearchWarehouseManagerConfig(CurrentUser.TenantId, id, page, pageSize);
            return Ok(result);
        }

        [Route("{id}/warehouse-manager-configs/{userId}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.WarehouseManagement, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetDetailWarehouseManagerConfig(string id, string userId)
        {
            var result = await _warehouseService.GetDetailWarehouseManagerConfig(CurrentUser.TenantId, id, userId);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/warehouse-manager-configs"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.WarehouseManagement, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> InsertWarehouseManagerConfig(string id, [FromBody]WarehouseManagerConfigMeta warehouseManagerConfigMeta)
        {
            var result = await _warehouseService.InsertWarehouseManagerConfig(CurrentUser.TenantId, id, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, warehouseManagerConfigMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}/warehouse-manager-configs/{userId}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.WarehouseManagement, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateWarehouseManagerConfig(string id, string userId, [FromBody]WarehouseManagerConfigMeta warehouseManagerConfigMeta)
        {
            var result = await _warehouseService.UpdateWarehouseManagerConfig(CurrentUser.TenantId, id, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, userId, warehouseManagerConfigMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/warehouse-manager-configs/{userId}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.WarehouseManagement, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> DeleteWarehouseManagerConfig(string id, string userId)
        {
            var result = await _warehouseService.DeleteWarehouseManagerConfig(CurrentUser.TenantId, id, userId);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{warehouseId}/managers"), AcceptVerbs("GET")]
        [AllowPermission(PageId.WarehouseManagement, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> ManagerSuggestions(string warehouseId, string keyword, int page, int pageSize)
        {
            var result = await _warehouseService.ManagerSuggestions(CurrentUser.TenantId, CurrentUser.Id, warehouseId, keyword, page,
                pageSize);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        #endregion

        #region WarehouseLimit
        [Route("{id}/warehouse-limits"), AcceptVerbs("GET")]
        [AllowPermission(PageId.WarehouseManagement, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> SearchWarehouseLimit(string id, string keyword, bool? isActive, int page = 1, int pageSize = 20)
        {
            var result = await _warehouseService.SearchWarehouseLimit(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, id, keyword, page, pageSize);
            return Ok(result);
        }

        [Route("{id}/warehouse-limits"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.WarehouseManagement, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> InsertOrUpdateWarehouseLimit(string id, [FromBody]WarehouseLimitMeta warehouseLimitMeta)
        {
            var result = await _warehouseService.InsertOrUpdateWarehouseLimit(CurrentUser.TenantId, id, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, warehouseLimitMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/warehouse-limits/{productId}/{unitId}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.WarehouseManagement, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> DeleteWarehouseLimit(string id, string productId, string unitId)
        {
            var result = await _warehouseService.DeleteWarehouseLimit(CurrentUser.TenantId, id, productId, unitId);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }
        #endregion

        #region Products
        [Route("{id}/product-suggestions"), AcceptVerbs("GET")]
        public async Task<IActionResult> ProductSuggestion(string id, string keyword, int page = 1, int pageSize = 20)
        {
            var result = await _warehouseService.ProductSuggestion(CurrentUser.TenantId, CurrentUser.Id, id, keyword, page, pageSize);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }
        #endregion

        #region Configs
        [Route("{id}/configs"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetConfigs(string id)
        {
            var result =
                await _warehouseConfigService.GetWarehouseConfigs(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name,
                    id);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/configs"), AcceptVerbs("POST")]
        public async Task<IActionResult> SaveConfig(string id, string keyword, int page = 1, int pageSize = 20)
        {
            var result = await _warehouseService.ProductSuggestion(CurrentUser.TenantId, CurrentUser.Id, id, keyword, page, pageSize);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }
        #endregion
    }
}