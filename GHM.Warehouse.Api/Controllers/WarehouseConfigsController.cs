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
    [Route("api/v{version:apiVersion}/warehouse-configs")]
    public class WarehouseConfigsController : GhmControllerBase
    {
        private readonly IWarehouseConfigService _warehouseConfigService;
        public WarehouseConfigsController(IWarehouseConfigService warehouseConfigService)
        {
            _warehouseConfigService = warehouseConfigService;
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.WarehouseConfig, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Save([FromBody]List<WarehouseConfigMeta> warehouseConfigMetas)
        {
            foreach (var warehouseConfigMeta in warehouseConfigMetas)
            {
                warehouseConfigMeta.TenantId = CurrentUser.TenantId;
                warehouseConfigMeta.UserId = CurrentUser.Id;
                warehouseConfigMeta.FullName = CurrentUser.FullName;
            }

            var result = await _warehouseConfigService.Save(warehouseConfigMetas);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [AcceptVerbs("GET")]
        [AllowPermission(PageId.WarehouseConfig, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetWarehouseConfig(string warehouseId)
        {
            var result =
                await _warehouseConfigService.GetWarehouseConfigs(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, warehouseId);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        //Client
        //[Route("get-warehouse-config/{tenantId}"), AcceptVerbs("GET")]
        //public async Task<IActionResult> GetWarehouseConfig(string warehouseId)
        //{
        //    var result =
        //        await _warehouseConfigService.GetWarehouseConfigs(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, warehouseId);
        //    if (result.Code <= 0)
        //        return BadRequest(result);

        //    return Ok(result);

        //}
    }
}