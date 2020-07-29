using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IGoodsReceiptNoteDetailRepository
    {
        Task<int> Inserts(List<GoodsReceiptNoteDetail> goodsReceiptNoteDetails);

        Task<int> Insert(GoodsReceiptNoteDetail goodsReceiptNoteDetail);

        Task<int> Update(GoodsReceiptNoteDetail goodsReceiptNoteDetail);

        Task<int> Updates(List<GoodsReceiptNoteDetail> listGoodsReceiptNoteDetail);

        Task<int> ForceDeleteByGoodsReceptNoteId(string tenantId, string id);

        Task<GoodsReceiptNoteDetail> GetInfo(string id, bool isReadOnly = false);

        Task<GoodsReceiptNoteDetail> GetInfo(string receiptId, string id, bool isReadOnly = false);

        Task<GoodsReceiptNoteDetail> GetInfoByTenantId(string tenantId, string id);

        Task<bool> CheckExistsByProductId(string receiptId, string productId);

        Task<int> CountByGoodsReceiptNoteId(string goodsReceiptNoteId);

        Task<GoodsReceiptNoteAmounts> GetAmountsByGoodsReceiptNoteId(string goodsReceiptNoteId);

        Task<List<GoodsReceiptNoteItemViewModel>> GetsByGoodsReceiptNoteId(string receiptId, string goodsReceiptNoteId);

        Task<List<GoodsReceiptNoteDetail>> GetsAll(string tenantId, string goodsReceiptNoteId);

        Task<List<GoodsReceiptNoteDetail>> GetsByGoodsReceiptNoteIdAndProductId(string tenantId, string goodsReceiptNoteId,
            string productId);

        Task<List<GoodsReceiptNoteDetail>> GetsByGoodsReceiptNoteIdAndProductId(string tenantId, string goodsReceiptNoteId,
            string productId, string lotId);

        Task<List<GoodsReceiptQuantity>> GetsProductInfoForinventoryDailyReportByDay(string tenantId, string warehouseId, string productId,
            DateTime day);

        Task<List<GoodsReceiptQuantity>> GetsProductInfoForInventoryDailyReport(string tenantId, string warehouseId, string productId,
            DateTime fromDate, DateTime toDate);

        Task<List<string>> GetsProductIdsByDay(string tenantId, string warehouseId, DateTime day, int page, int pageSize,
            out int totalRows);

        Task<int> UpdateWarehouseInfo(string tenantId, string receiptId, string warehouseId);

        Task<List<GoodsReceiptNoteBarcodeViewModel>> GetBarcode(string goodsReceiptNoteId);

        Task<bool> CheckExistsByTenantIdProductId(string tenantId, string productId);

        Task<GoodsReceiptNoteDetailForDeliveryViewModel> GetById(string tenantId, string id);

        ReceivingDeliveringPeriodViewModel GetReceivingInPeriod(string tenantId, string warehouseId, string productId, DateTime fromDate,
            DateTime toDate);

        Task<ProductInfoViewModel> GetProductInfoByCode(string tenantId, string warehouseId, string code);

        Task<decimal> GetQuantitiesByCode(string tenantId, string warehouseId, string code);

        Task<List<GoodsReceiptNoteDetail>> GetByCode(string tenantId, string warehouseId, string code);

        Task<int> GetGoodsReceiptNoteDetailId(string receiptId);

        Task<List<GoodsReceiptNoteReturnSupplierViewModel>> GetsByIds(List<string> ids);

        Task<List<string>> GetsProductByWarehouse(string tenantId, string warehouseId, int page, int pageSize, out int i);

        Task<string> GetCode(string tenantId, string goodsReceiptNoteId, string productId, string lotId);

        Task<int> GetProductCount(string tenantId, string goodsReceiptNoteId);

        Task<List<GoodsReceiptNoteDetailStats>> GetStats(string tenantId, string warehouseId, string receiptId, string productId);

        Task<decimal> GetPrice(string tenantId, string warehouseId, string receiptId, string productId, string lotId);

        Task<List<GoodsReceiptNoteDetail>> GetsByGoodsDeliveryNoteIdAndProductId(string tenantId, string warehouseId, string receiptId,
            string productId, string lotId, bool isReadOnly);
    }
}
