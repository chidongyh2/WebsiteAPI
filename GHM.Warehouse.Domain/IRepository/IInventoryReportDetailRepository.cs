using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IInventoryReportDetailRepository
    {
        Task<bool> CheckExists(string id, string inventoryReportId, string productId, string productUnitId, string lotId);

        Task<bool> CheckExists(string tenantId, string warehouseId, string receiptId, string productId, string lotId,
            string goodsReceiptNoteDetailCode);

        Task<int> Insert(InventoryReportDetail inventoryReportDetail);

        Task<int> Inserts(List<InventoryReportDetail> inventoryReportDetails);

        Task<List<InventoryReportDetail>> GetsAll(string inventoryReportId, string productId, bool isReadOnly = false);

        Task<int> Updates(List<InventoryReportDetail> inventoryReportDetails);

        Task<int> Update(InventoryReportDetail inventoryReportDetail);

        Task<InventoryReportDetail> GetInfo(string tenantId, string warehouseId, string receiptId, string code, bool isReceived);

        //Task<InventoryReportDetail> GetInfo(string tenantId, string warehouseId, string receiptId, string code, string lotId,
        //    bool isReceived, DateTime date, bool isReadOnly = false);

        Task<InventoryReportDetail> GetInfo(string inventoryReportId, string productId, string lotId, bool isReadOnly = false);

        Task<InventoryReportDetail> GetInfo(string tenantId, string warehouseId, string receiptId, string productId, string lotId,
            string goodsReceiptNoteDetailCode, bool isReceived, bool isReadOnly = false);

        Task<InventoryReportDetail> GetInfoByCode(string tenantId, string warehouseId, string code, string lotId, DateTime date,
            bool isReceived, bool isReadOnly = false);

        Task<InventoryReportDetail> GetInfoByProduct(string tenantId, string warehouseId, string receiptId, string productId, string lotId,
            string goodsReceiptNoteDetailCode, bool isReceived, DateTime date, bool isReadOnly = false);

        Task<List<GoodsReceiptNoteDetailStats>> GetStats(string inventoryReportId);

        Task<string> Delete(string tenantId, string warehouseId, string receiptId, string code, bool isReceived);

        Task<string> Delete(string tenantId, string warehouseId, string receiptId, string productId, string goodsReceiptNoteDetailCode,
            string lotId, DateTime date, bool isReceived);

        Task<bool> CheckProductExists(string tenantId, string warehouseId, string productId, DateTime date, bool isReceived);

        Task<List<InventoryReportDetail>> GetsByReceiptAndLotId(string tenantId, string warehouseId, string receiptId, string productId,
            string lotId, bool isReceived, bool isReadOnly = false);
    }
}
