using System;
using System.IO;
using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.IServices;
using GHM.Warehouse.Domain.ModelMetas;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OfficeOpenXml;

namespace GHM.Warehouse.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class InventoriesController : GhmControllerBase
    {
        private readonly IInventoryService _inventoryService;
        private readonly IInventoryDailyReportService _inventoryDailyReportService;
        private readonly IInventoryReportService _inventoryReportService;
        private readonly IHostingEnvironment _hostingEnvironment;
        public InventoriesController(IInventoryService inventoryService, IInventoryDailyReportService inventoryDailyReportService,
            IInventoryReportService inventoryReportService, IHostingEnvironment hostingEnvironment)
        {
            _inventoryService = inventoryService;
            _inventoryDailyReportService = inventoryDailyReportService;
            _inventoryReportService = inventoryReportService;
            _hostingEnvironment = hostingEnvironment;
        }

        #region Inventory
        [AcceptVerbs("GET")]
        [AllowPermission(PageId.Inventory, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string warehouseId, DateTime? fromDate, DateTime? toDate,
            InventoryStatus? status, int page = 1, int pageSize = 20)
        {
            var result = await _inventoryService.Search(CurrentUser.TenantId, warehouseId, CurrentUser.Id, fromDate, toDate, status, page, pageSize);
            return Ok(result);
        }

        [Route("balanced/{isBalanced}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Inventory, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]InventoryMeta inventoryMeta, bool isBalanced)
        {
            var result = await _inventoryService.Insert(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar,
                inventoryMeta, isBalanced);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}/balanced/{isBalanced}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Inventory, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]InventoryMeta inventoryMeta, bool isBalanced)
        {
            var result = await _inventoryService.Update(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar,
                id, inventoryMeta, isBalanced);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.Inventory, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _inventoryService.Delete(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Inventory, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Detail(string id)
        {
            var result = await _inventoryService.GetDetail(CurrentUser.TenantId, CurrentUser.Id, id, true);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("edit/{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Inventory, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Edit(string id)
        {
            var result = await _inventoryService.GetDetail(CurrentUser.TenantId, CurrentUser.Id, id);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("products/{warehouseId}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Inventory, Permission.View)]
        [CheckPermission]
        public async Task<ActionResult> GetProductForInventory(string tenantId, string keyword, DateTime date, string warehouseId, int page,
            int pageSize)
        {
            var result = await _inventoryReportService.SearchToTakeInventory(CurrentUser.TenantId, CurrentUser.Id, warehouseId,
                keyword, date, page, pageSize);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        //[Route("balanced-warehouse/{inventoryId}"), AcceptVerbs("POST")]
        //[AllowPermission(PageId.Inventory, Permission.Update)]
        //[CheckPermission]
        //public async Task<ActionResult> BalancedWarehouse(string inventoryId)
        //{
        //    var result = await _inventoryService.Balance(CurrentUser.TenantId, inventoryId,
        //        DateTime.Now, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar);

        //    if (result.Code <= 0)
        //        return BadRequest(result);

        //    return Ok(result);
        //}

        #endregion
        #region Inventory detail
        [Route("{id}/detail"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Inventory, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> InsertDetail(string id, [FromBody]InventoryDetailMeta inventoryDetailMeta)
        {
            var result = await _inventoryService.InsertDetail(CurrentUser.TenantId, CurrentUser.Id, id, inventoryDetailMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}/detail"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Inventory, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> GetInventoryDetail(string id, string keyword, int page = 1, int pageSize = 10)
        {
            var result = await _inventoryService.GetInventoryDetail(CurrentUser.TenantId, id, keyword, page, pageSize);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}/detail/{productId}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Inventory, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateDetail(string id, string productId, [FromBody]InventoryDetailMeta inventoryDetailMeta)
        {
            var result = await _inventoryService.UpdateDetail(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName,
                id, productId, inventoryDetailMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{inventoryId}/products/{productId}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.Inventory, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> DeleteDetail(string inventoryId, string productId)
        {
            var result = await _inventoryService.DeleteDetail(CurrentUser.TenantId, CurrentUser.Id, inventoryId, productId);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        //[Route("exports"), AcceptVerbs("POST")]
        //[AllowPermission(PageId.Inventory, Permission.Insert, Permission.Update, Permission.View)]
        //[CheckPermission]
        //public async Task<IActionResult> Export(InventoryMeta)
        //{
        //    var result = await _inventoryService.DeleteDetail(CurrentUser.TenantId, CurrentUser.Id, inventoryId, productId);
        //    if (result.Code <= 0)
        //        return BadRequest(result);
        //    return Ok(result);
        //}
        #endregion
        #region Inventory member
        [Route("{id}/member"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Inventory, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> InsertMember(string id, [FromBody]InventoryMemberMeta inventoryMemberMeta)
        {
            var result = await _inventoryService.InsertMember(id, inventoryMemberMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}/member/{memberId}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Inventory, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateMember(string id, string memberId, [FromBody]InventoryMemberMeta inventoryMemberMeta)
        {
            var result = await _inventoryService.UpdateMember(id, memberId, inventoryMemberMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/member/{memberId}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.Inventory, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> DeleteMember(string id, string memberId)
        {
            var result = await _inventoryService.DeleteMember(id, memberId);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        #endregion

        [Route("{inventoryId}/exports/{isBalance}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.Inventory, Permission.Export)]
        [CheckPermission]
        public async Task<IActionResult> Exports(string inventoryId, InventoryMeta inventoryMeta)
        {
            var result = await _inventoryService.Exports(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName,
                CurrentUser.Avatar, inventoryId, inventoryMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            var fileName = "inventory.xlsx";
            var fileType = "application/vnd.ms-excel";
            //string sWebRootFolder = _hostingEnvironment.WebRootPath;
            //string sFileName = @"inventory.xlsx";
            //FileStream fileStream = new FileStream(Path.Combine(sWebRootFolder, sFileName), FileMode.Open);
            return File(result.Data, fileType, fileName);
        }
    }
}