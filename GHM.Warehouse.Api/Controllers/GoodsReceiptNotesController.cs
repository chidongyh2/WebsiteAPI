using System;
using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.IServices;
using GHM.Warehouse.Domain.ModelMetas;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Warehouse.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/goods-receipt-notes")]
    public class GoodsReceiptNotesController : GhmControllerBase
    {
        private readonly IGoodsReceiptNoteService _goodsReceiptNoteService;
        private readonly IGoodsReceiptNoteDetailService _goodsReceiptNoteDetailService;

        public GoodsReceiptNotesController(IGoodsReceiptNoteService goodsReceiptNoteService, IGoodsReceiptNoteDetailService goodsReceiptNoteDetailService)
        {
            _goodsReceiptNoteService = goodsReceiptNoteService;
            _goodsReceiptNoteDetailService = goodsReceiptNoteDetailService;
        }

        #region Goods receipt notes.
        [AcceptVerbs("GET")]
        [AllowPermission(PageId.GoodsReceiptNote, Permission.View)]
        [CheckPermission]
        public async Task<ActionResult> Search(string supplierId, string deliverId, string warehouseId, DateTime? fromDate,
            DateTime? toDate, int page,
            int pageSize)
        {
            var result = await _goodsReceiptNoteService.Search(CurrentUser.TenantId, CurrentUser.Id, supplierId, deliverId,
                warehouseId, fromDate,
                toDate, page, pageSize);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [AcceptVerbs("POST")]
        [AllowPermission(PageId.GoodsReceiptNote, Permission.Insert)]
        [CheckPermission]
        public async Task<ActionResult> Insert([FromBody]GoodsReceiptNoteMeta goodsReceiptNoteMeta)
        {
            goodsReceiptNoteMeta.CreatorId = CurrentUser.Id;
            goodsReceiptNoteMeta.CreatorFullName = CurrentUser.FullName;
            goodsReceiptNoteMeta.CreatorAvatar = CurrentUser.Avatar;
            var result = await _goodsReceiptNoteService.Insert(CurrentUser.TenantId, goodsReceiptNoteMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.GoodsReceiptNote, Permission.Update)]
        [CheckPermission]
        public async Task<ActionResult> Update(string id, [FromBody]GoodsReceiptNoteMeta goodsReceiptNoteMeta)
        {
            goodsReceiptNoteMeta.LastUpdateUserId = CurrentUser.Id;
            goodsReceiptNoteMeta.LastUpdateFullName = CurrentUser.FullName;

            var result = await _goodsReceiptNoteService.Update(CurrentUser.TenantId, id, goodsReceiptNoteMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.GoodsReceiptNote, Permission.Update)]
        [CheckPermission]
        public async Task<ActionResult> Detail(string id)
        {
            var result = await _goodsReceiptNoteService.GetDetail(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }
        #endregion

        #region Goods receipt note details.
        [Route("{receiptId}/details"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.GoodsReceiptNote, Permission.Insert)]
        [CheckPermission]
        public async Task<ActionResult> InsertDetail(string receiptId, [FromBody]GoodsReceiptNoteDetailMeta goodsReceiptNoteDeatilMeta)
        {
            var result = await _goodsReceiptNoteDetailService.Insert(CurrentUser.TenantId, CurrentUser.Id, receiptId, goodsReceiptNoteDeatilMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{receiptId}/details/{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.GoodsReceiptNote, Permission.Update)]
        [CheckPermission]
        public async Task<ActionResult> UpdateDetail(string receiptId, string id, [FromBody]GoodsReceiptNoteDetailMeta goodsReceiptNoteDeatilMeta)
        {
            var result = await _goodsReceiptNoteDetailService.Update(CurrentUser.TenantId, receiptId, id, goodsReceiptNoteDeatilMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{receiptId}/details/{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.GoodsReceiptNote, Permission.Update)]
        [CheckPermission]
        public async Task<ActionResult> DeletDetail(string receiptId, string id)
        {
            var result = await _goodsReceiptNoteDetailService.Delete(CurrentUser.TenantId, receiptId, id);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{receiptId}/barcodes"), AcceptVerbs("GET")]
        [AllowPermission(PageId.GoodsReceiptNote, Permission.Update)]
        [CheckPermission]
        public async Task<ActionResult> GetsBarcode(string receiptId)
        {
            var result = await _goodsReceiptNoteService.GetBarcode(CurrentUser.TenantId, CurrentUser.Id, receiptId);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }
        #endregion

        #region Suggestions
        [Route("follows"), AcceptVerbs("GET")]
        [AllowPermission(PageId.GoodsReceiptNote, Permission.Update, Permission.Insert)]
        [CheckPermission]
        public async Task<ActionResult> FollowSuggestion(string keyword, int page, int pageSize)
        {
            var result = await _goodsReceiptNoteService.FollowSuggestion(CurrentUser.TenantId, keyword, page, pageSize);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("delivers"), AcceptVerbs("GET")]
        [AllowPermission(PageId.GoodsReceiptNote, Permission.Update, Permission.Insert)]
        [CheckPermission]
        public async Task<ActionResult> DeliverSuggestion(string supplierId, string keyword, int page, int pageSize)
        {
            var result = await _goodsReceiptNoteService.GoodsDeliverSuggestion(CurrentUser.TenantId, supplierId, keyword, page, pageSize);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("lots"), AcceptVerbs("GET")]
        [AllowPermission(PageId.GoodsReceiptNote, Permission.Update, Permission.Insert)]
        [CheckPermission]
        public async Task<ActionResult> LotSuggestion(string keyword, int page, int pageSize)
        {
            var result = await _goodsReceiptNoteService.LotSuggestion(CurrentUser.TenantId, keyword, page, pageSize);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        //[Route("warehouse-cards"), AcceptVerbs("GET")]
        //[AllowPermission(PageId.GoodsReceiptNote, Permission.Update, Permission.Insert)]
        //[CheckPermission]
        //public async Task<ActionResult> SearchWarehouseCard(string warehouseId, string productId, DateTime? fromDate, DateTime? toDate,
        //    int page, int pageSize)
        //{
        //    var result = await _goodsReceiptNoteService.SearchWarehouseCard(CurrentUser.TenantId, CurrentUser.Id, warehouseId, productId,
        //        fromDate, toDate, page, pageSize);
        //    if (result.Code <= 0)
        //        return BadRequest(result);

        //    return Ok(result);
        //}

        //[Route("warehouse-card-details"), AcceptVerbs("GET")]
        //[AllowPermission(PageId.GoodsReceiptNote, Permission.Update, Permission.Insert)]
        //[CheckPermission]
        //public async Task<ActionResult> SearchWarehouseCardDetail(string warehouseId, string productId, DateTime? fromDate, DateTime? toDate,
        //    int page, int pageSize)
        //{
        //    var result = await _goodsReceiptNoteService.SearchWarehouseCardDetail(CurrentUser.TenantId, CurrentUser.Id, warehouseId, productId,
        //        fromDate, toDate, page, pageSize);
        //    if (result.Code <= 0)
        //        return BadRequest(result);

        //    return Ok(result);
        //}

        [Route("details/{code}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.GoodsDeliveryNote, Permission.Update, Permission.Insert)]
        [CheckPermission]
        public async Task<ActionResult> GetProductInfoByCode(string code, string warehouseId, GoodsDeliveryNoteType type, DateTime deliveryDate)
        {
            var result = await _goodsReceiptNoteDetailService.GetProductInfoByCode(CurrentUser.TenantId, CurrentUser.Id, code, warehouseId,
                type, deliveryDate);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }
        #endregion
    }
}