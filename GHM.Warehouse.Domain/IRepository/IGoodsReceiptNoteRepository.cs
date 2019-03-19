using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IGoodsReceiptNoteRepository
    {
        Task<int> Insert(GoodsReceiptNote goodsReceiptNote);

        Task<int> Update(GoodsReceiptNote goodsReceiptNote);

        Task<int> ForceDelete(string tenantId, string id);

        Task<GoodsReceiptNote> GetInfo(string tenantId, string id, bool isReadOnly = false);

        Task<GoodsReceiptNote> GetInfo(string id, bool isReadOnly = false);        

        Task<GoodsReceiptNoteDetailViewModel> GetDetail(string tenantId, string languageId, string id);

        Task<bool> CheckReceiptNoExists(string id, string receiptNo);

        Task<bool> CheckInvoiceNoExists(string id, string invoiceNo);

        Task<bool> CheckExists(string tenantId, string id);

        Task<int> UpdateAmounts(string id, GoodsReceiptNoteAmounts goodsReceiptNoteAmounts);

        Task<int> UpdateTotalItems(string id, int totalItems);

        Task<List<GoodsReceiptNoteViewModel>> Search(string tenantId, string userId, string supplierId, string deliverId, string warehouseId,
            DateTime? fromDate, DateTime? toDate, int page, int pageSize, out int totalRows);

        Task<long> GetTotal(string tenantId);

        Task<bool> CheckIdExists(string tenantId, string id);        

        Task<bool> CheckExistSupplierId(string tenantId, string supplierId);

        Task<bool> CheckExistWarehouseId(string tenantId, string warehouseId);

        Task<WarehouseCardViewModel> GetWarehouseCardInfo(string tenantId, string warehouseId, string productId);

        //Task<List<WarehouseCardItemViewModel>> SearchWarehouseCardItems(string tenantId, string warehouseId, string productId,
        //    DateTime? fromDate, DateTime? toDate, int page, int pageSize, out int totalRows);
        
        //Task<List<WarehouseCardDetailItemViewModel>> SearchWarehouseCardDetailItems(string tenantId, string warehouseId, string productId, DateTime? fromDate, DateTime? toDate, int page, int pageSize, out int i);

        Task<int> CountByDate(string tenantId, DateTime entryDate);
    }
}
