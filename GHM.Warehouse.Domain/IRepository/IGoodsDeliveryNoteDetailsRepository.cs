using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IGoodsDeliveryNoteDetailsRepository
    {
        Task<int> Inserts(List<GoodsDeliveryNoteDetail> goodsDeliveryNoteDetail);

        Task<int> Insert(GoodsDeliveryNoteDetail goodsDeliveryNoteDetail);

        Task<int> Update(GoodsDeliveryNoteDetail goodsDeliveryNoteDetail);

        Task<int> DeleteByGoodsDeliveryNoteId(string goodsDeliveryNoteId);

        Task<int> ForceDeleteByGoodsDeliveryNoteId(string goodsDeliveryNoteId);

        Task<int> Delete(string goodsDeliveryNoteId, string id);

        Task<int> ForceDelete(string goodsDeliveryNoteId, string id);

        Task<int> SaveChangeAsync();

        Task<GoodsDeliveryNoteDetail> GetInfo(string goodsDeliveryNoteId, string id, bool isReadOnly = false);

        Task<GoodsDeliveryNoteDetail> GetInfoByTenant(string tenantId, string id, bool isReadOnly = false);

        Task<bool> CheckExistsByProductId(string goodsDeliveryNoteId, string productId);

        Task<int> CountByByGoodsDeliveryNoteId(string goodsDeliveryNoteId);

        Task<decimal> GetTotalAmountByByGoodsDeliveryNoteId(string tenantId, string goodsDeliveryNoteId);

        Task<List<GoodsReceiptQuantity>> GetsProductInfoForinventoryDailyReportByDay(string tenantId, string warehouseId, string productId,
            DateTime day);

        Task<List<GoodsReceiptQuantity>> GetsProductInfoForInventoryDailyReport(string tenantId, string warehouseId, string productId,
            DateTime fromDate, DateTime toDate);

        Task<List<GoodsDeliveryNotesDetailSearchViewModel>> GetsByGoodsDeliveryNoteId(string tenantId, string languageId,
            string goodsDeliveryNoteId, string keyword, int page, int pageSize, out int totalRows);

        Task<List<string>> GetsProductIds(string tenantId, string goodsDeliveryNoteId);

        Task<List<string>> GetsProductIdsByDay(string tenantId, string warehouseId, DateTime day, int page, int pageSize,
            out int totalRows);

        ReceivingDeliveringPeriodViewModel GetDeliveringInPeriod(string tenantId, string warehouseId, string productId,
            DateTime fromDateValue, DateTime toDateValue);

        Task<bool> CheckExists(string id);

        Task<decimal> GetQuantiesByCode(string tenantId, string warehouseId, string goodsReceiptNoteDetailCode, string goodsDeliveryNoteDetailId);

        Task<List<GoodsDeliveryNoteDetail>> GetsAllByGoodsDeliveryNoteId(string tenantId, string goodsDeliveryNoteId);

        Task<List<GoodsDeliveryNoteDetail>> GetsAllByGoodsDeliveryNoteId(string tenantId, string goodsDeliveryNoteId, string code,
            bool isReadOnly = false);

        Task<List<GoodsDeliveryNoteDetail>> GetsAllByGoodsDeliveryNoteId(string tenantId, string goodsDeliveryNoteId, string productId, string lotId,
            bool isReadOnly = false);

        //Task<List<GoodsDeliveryNoteDetail>> GetsByGoodsReceiptNoteDetailId(string tenantId, string warehouseId,
        //    string goodsReceiptNoteDetailId, bool isReadOnly = false);

        //Task<List<GoodsDeliveryNoteDetail>> GetsByGoodsDeliveryNoteIdAndProductId(string tenantId, string goodsDeliveryNoteId, string productId,
        //    string lotId, bool isReadOnly = false);

        Task<decimal> GetTotalQuantitiesByProductIdAndLotId(string tenantId, string warehouseId, string goodsDeliveryNoteId, string productId, string lotId,
            string goodsDeliveryNoteDetailId);

        Task<List<GoodsDeliveryNoteDetail>> GetByCode(string tenantId, string warehouseId, string code);

        Task<List<GoodsDeliveryNoteDetail>> GetsForSynchronize(string tenantId, string warehouseId, string code, string lotId,
            DateTime date,
            int page, int pageSize, out int totalRows);

        Task<int> Updates(List<GoodsDeliveryNoteDetail> goodsDeliveryNoteDetails);

        Task<decimal> GetPrice(string tenantId, string warehouseId, string receiptId, string productId, string lotId);

        //Task<List<GoodsDeliveryNoteDetail>> GetsByGoodsReceiptNoteDetailCode(string tenantId, string warehouseId,
        //    string goodsReceiptNoteDetailCode, string lotId);

        Task<List<GoodsDeliveryNoteDetail>> GetsByGoodsDeliveryNoteIdAndProductId(string tenantId, string warehouseId,
            string goodsDeliveryNoteId, string productId, string lotId, bool isReadOnly = false);

        Task<List<GoodsDeliveryNoteDetail>> GetsByProductId(string tenantId, string warehouseId, string deliveryNoteId, string productId, string lotId);

        Task<List<GoodsDeliveryNoteDetail>> GetsByGoodsDeliveryNoteIdAndProductIdAndCode(string tenantId, string warehouseId, string receiptId,
            string productId, string lotId, string goodsReceiptNoteDetailCode, bool isReadOnly = false);
    }
}
