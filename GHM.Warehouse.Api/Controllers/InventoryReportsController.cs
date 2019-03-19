using System;
using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Filters;
using GHM.Warehouse.Domain.IServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Warehouse.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/inventory-reports")]
    public class InventoryReportsController : GhmControllerBase
    {
        private readonly IInventoryDailyReportService _inventoryDailyReportService;
        private readonly IInventoryReportService _inventoryReportService;

        public InventoryReportsController(IInventoryDailyReportService inventoryDailyReportService, IInventoryReportService inventoryReportService)
        {
            _inventoryDailyReportService = inventoryDailyReportService;
            _inventoryReportService = inventoryReportService;
        }

        [AcceptVerbs("GET")]
        public async Task<IActionResult> Search(string keyword, string warehouseId, DateTime fromDate,
            DateTime toDate, int page, int pageSize)
        {
            var result = await _inventoryReportService.Search(CurrentUser.TenantId, CurrentUser.Id, warehouseId,
                keyword, fromDate, toDate, page, pageSize);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("warehouse-cards"), AcceptVerbs("GET")]
        [AllowPermission(PageId.GoodsReceiptNote, Permission.Update, Permission.Insert)]
        [CheckPermission]
        public async Task<ActionResult> SearchWarehouseCard(string warehouseId, string productId, DateTime? fromDate, DateTime? toDate,
            int page, int pageSize)
        {
            var result = await _inventoryReportService.SearchWarehouseCard(CurrentUser.TenantId, CurrentUser.Id, warehouseId, productId,
                fromDate, toDate, page, pageSize);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("warehouse-card-details"), AcceptVerbs("GET")]
        [AllowPermission(PageId.GoodsReceiptNote, Permission.Update, Permission.Insert)]
        [CheckPermission]
        public async Task<ActionResult> SearchWarehouseCardDetail(string warehouseId, string productId, DateTime? fromDate, DateTime? toDate,
            int page, int pageSize)
        {
            var result = await _inventoryReportService.SearchWarehouseCardDetail(CurrentUser.TenantId, CurrentUser.Id, warehouseId, productId,
                fromDate, toDate, page, pageSize);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("products/{productId}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Inventory, Permission.Update, Permission.Insert)]
        [CheckPermission]
        public async Task<ActionResult> GetProduct(string warehouseId, string productId, DateTime date)
        {
            var result = await _inventoryReportService.GetProductInfo(CurrentUser.TenantId, CurrentUser.Id, warehouseId, productId,
                date);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }


        [Route("products"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Inventory, Permission.Update, Permission.Insert)]
        [CheckPermission]
        public async Task<ActionResult> GetsProductAll(string warehouseId, DateTime date)
        {
            var result = await _inventoryReportService.GetsAllProductToTakeInventory(CurrentUser.TenantId, CurrentUser.Id, warehouseId, date);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }
    }
}