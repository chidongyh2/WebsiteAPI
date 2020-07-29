using System;
using System.Drawing;
using System.Globalization;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using GHM.Infrastructure.Helpers;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.IServices;
using GHM.Warehouse.Domain.ModelMetas;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OfficeOpenXml;
using OfficeOpenXml.Style;

namespace GHM.Warehouse.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/goods-delivery-notes")]
    public class GoodsDeliveryNotesController : GhmControllerBase
    {
        private readonly IGoodsDeliveryNoteService _goodsDeliveryNoteService;
        private readonly IGoodsDeliveryNoteReceiverRepository _goodsDeliveryNoteReceiverRepository;

        public GoodsDeliveryNotesController(IGoodsDeliveryNoteService goodsDeliveryNoteService,
            IGoodsDeliveryNoteReceiverRepository goodsDeliveryNoteReceiverRepository)
        {
            _goodsDeliveryNoteService = goodsDeliveryNoteService;
            _goodsDeliveryNoteReceiverRepository = goodsDeliveryNoteReceiverRepository;
        }

        #region Goods delivery notes.
        [AcceptVerbs("GET")]
        [AllowPermission(PageId.GoodsDeliveryNote, Permission.View)]
        [CheckPermission]
        public async Task<ActionResult> Search(string keyword, string warehouseId, GoodsDeliveryNoteType? type, DateTime? fromDate,
            DateTime? toDate, int page, int pageSize)
        {
            var result = await _goodsDeliveryNoteService.Search(CurrentUser.TenantId, CurrentUser.Id, keyword, type, warehouseId, fromDate,
                toDate, page, pageSize);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.GoodsDeliveryNote, Permission.Insert)]
        [CheckPermission]
        public async Task<ActionResult> Insert([FromBody]GoodsDeliveryNoteMeta goodsDeliveryNoteMeta)
        {
            goodsDeliveryNoteMeta.TenantId = CurrentUser.TenantId;
            goodsDeliveryNoteMeta.CreatorId = CurrentUser.Id;
            goodsDeliveryNoteMeta.CreatorFullName = CurrentUser.FullName;
            goodsDeliveryNoteMeta.CreatorAvatar = CurrentUser.Avatar;
            var result = await _goodsDeliveryNoteService.Insert(goodsDeliveryNoteMeta, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.GoodsDeliveryNote, Permission.Update)]
        [CheckPermission]
        public async Task<ActionResult> Update(string id, [FromBody]GoodsDeliveryNoteMeta goodsDeliveryNoteMeta)
        {
            goodsDeliveryNoteMeta.TenantId = CurrentUser.TenantId;
            goodsDeliveryNoteMeta.LastUpdateUserId = CurrentUser.Id;
            goodsDeliveryNoteMeta.LastUpdateFullName = CurrentUser.FullName;
            goodsDeliveryNoteMeta.LastUpdateUserAvatar = CurrentUser.Avatar;
            var result = await _goodsDeliveryNoteService.Update(id, goodsDeliveryNoteMeta, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.GoodsDeliveryNote, Permission.Delete)]
        [CheckPermission]
        public async Task<ActionResult> Delete(string id)
        {
            var result = await _goodsDeliveryNoteService.Delete(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.GoodsDeliveryNote, Permission.View)]
        [CheckPermission]
        public async Task<ActionResult> Detail(string id)
        {
            var result = await _goodsDeliveryNoteService.GetDetail(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, id);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }
        #endregion
        #region Goods delivery note details.
        [Route("{goodsDeliveryNoteId}/details"), AcceptVerbs("GET")]
        [AllowPermission(PageId.GoodsDeliveryNote, Permission.View)]
        [CheckPermission]
        public async Task<ActionResult> GetDetail(string goodsDeliveryNoteId, string keyword, int page = 1, int pageSize = 20)
        {
            var result = await _goodsDeliveryNoteService.SearchDetail(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, goodsDeliveryNoteId
                , keyword, page, pageSize);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{deliveryId}/details"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.GoodsDeliveryNote, Permission.Insert)]
        [CheckPermission]
        public async Task<ActionResult> InsertDetail(string deliveryId, [FromBody]GoodsDeliveryNoteDetailMeta goodsDeliveryNoteDetailMeta)
        {
            var result = await _goodsDeliveryNoteService.InsertDetail(CurrentUser.TenantId, deliveryId, goodsDeliveryNoteDetailMeta
                , CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{deliveryId}/details/{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.GoodsDeliveryNote, Permission.Update)]
        [CheckPermission]
        public async Task<ActionResult> UpdateDetail(string deliveryId, string id, [FromBody]GoodsDeliveryNoteDetailMeta goodsDeliveryNoteDetailMeta)
        {
            var result = await _goodsDeliveryNoteService.UpdateDetail(CurrentUser.TenantId, deliveryId, id, goodsDeliveryNoteDetailMeta,
                CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{deliveryId}/details/{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.GoodsDeliveryNote, Permission.Update)]
        [CheckPermission]
        public async Task<ActionResult> DeletDetail(string deliveryId, string id)
        {
            var result = await _goodsDeliveryNoteService.DeleteDetail(CurrentUser.TenantId, deliveryId, id);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("product/{productId?}/warehouse/{warehouseId?}"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<ActionResult> GetProductInfoInDeliveryNote(string warehouseId, string productId)
        {
            var result = await _goodsDeliveryNoteService.GetProductInfoInDelivery(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name,
                productId, warehouseId);

            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        //[Route("details/{id}/quantity/{quantity}"), AcceptVerbs("GET")]
        //[AllowPermission(PageId.GoodsDeliveryNote, Permission.Update)]
        //[CheckPermission]
        //public async Task<ActionResult> UpdateQuantity(string id, decimal quantity, string concurrencyStamp)
        //{
        //    var result = await _goodsDeliveryNoteService.UpdateQuantity(CurrentUser.TenantId, CurrentUser.Id, id, quantity, concurrencyStamp);

        //    if (result.Code <= 0)
        //        return BadRequest(result);

        //    return Ok(result);
        //}

        [Route("details/{id}/recommended-quantity/{recommendedQuantity}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.GoodsDeliveryNote, Permission.Update)]
        [CheckPermission]
        public async Task<ActionResult> UpdateRecommendedQuantity(string id, decimal recommendedQuantity, string concurrencyStamp)
        {
            var result = await _goodsDeliveryNoteService.UpdateRecommendedQuantity(CurrentUser.TenantId, CurrentUser.Id, id, recommendedQuantity,
                concurrencyStamp);

            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("receivers"), AcceptVerbs("GET")]
        [AllowPermission(PageId.GoodsReceiptNote, Permission.Update, Permission.Insert)]
        [CheckPermission]
        public async Task<ActionResult> ReceiverSuggestion(string supplierId, string keyword, int page, int pageSize)
        {
            var result = await _goodsDeliveryNoteService.ReceiverSuggestion(CurrentUser.TenantId, keyword, page, pageSize);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }
        #endregion
        #region Export
        [Route("export-goods-delivery-note/{id}"), AcceptVerbs("GET")]
        public async Task<HttpResponseMessage> ExportGoodsDeliveryNote(string id)
        {
            using (var xls = new ExcelPackage())
            {
                var sheet = xls.Workbook.Worksheets.Add("Sheet1");
                var goodsDeliveryNotesDetail = await _goodsDeliveryNoteService.GetDetail(CurrentUser.TenantId,
                    CultureInfo.CurrentCulture.Name, id);

                ExcelHelper.CreateCellTable(sheet, 1, 1, 1, 9, "PHIẾU XUẤT KHO", new CustomExcelStyle { IsBold = true, IsMerge = true, HorizontalAlign = ExcelHorizontalAlignment.Center });

                sheet.Column(8).Width = 7;
                sheet.Cells.Style.Font.Name = "Times New Roman";
                sheet.Cells.Style.WrapText = true;
                sheet.Cells.Style.Font.Size = 12;

                HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
                var stream = new MemoryStream(xls.GetAsByteArray())
                {
                    // Reset Stream PositionName
                    Position = 0
                };
                response.Content = new StreamContent(stream);
                response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment")
                {
                    FileName = string.Format("Phieu-xuat-kho_{0}_{1}_{2}.xlsx", DateTime.Now.Day, DateTime.Now.Month, DateTime.Now.Year)
                };
                response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
                response.Content.Headers.ContentLength = stream.Length;
                return response;
            }
        }
        #endregion
    }
}