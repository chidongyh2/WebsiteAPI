using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IInventoryReportRepository
    {
        Task<InventoryReport> GetInfo(string id);

        Task<InventoryReport> GetInfo(string tenantId, string warehouseId, string receiptId, string productId, bool isReceived, DateTime date,
            bool isReadOnly = false);

        Task<InventoryReport> GetInfoByReceipDetailtId(string tenantId, string warehouseId, string receipDetailtId, bool isReceived,
            bool isReadOnly = false);

        /// <summary>
        /// Lấy về tồn đầu kỳ. Sử dụng trong trường hợp tính tồn kho theo phương pháp bình quân ra quyền.
        /// </summary>
        /// <param name="tenantId">Mã khách hàng</param>
        /// <param name="warehouseId">Mã kho</param>
        /// <param name="productId">Mã sản phẩm</param>
        /// <param name="lotId">Mã lô</param>
        /// <param name="date">Ngày nhập/xuất.</param>
        /// <param name="isReadOnly">Chỉ đọc</param>
        /// <returns></returns>
        //Task<List<InventoryReport>> GetOpeningStock(string tenantId, string warehouseId, string productId, DateTime date, bool isReadOnly = false);
        Task<OpeningStockViewModel> GetOpeningStock(string tenantId, string warehouseId, string productId, DateTime date);

        Task<OpeningStockViewModel> GetOpeningStockByLot(string tenantId, string warehouseId, string productId, string lotId, DateTime date);

        Task<OpeningStockViewModel> GetOpeningStockByCode(string tenantId, string warehouseId, string code, DateTime date);

        /// <summary>
        /// Lấy về tồn đầu kỳ. Sử dụng trong trường hợp tính theo phương pháp thực tế đích danh.
        /// </summary>
        /// <param name="tenantId">Mã khách hàng</param>
        /// <param name="warehouseId">Mã kho</param>
        /// <param name="receiptDetailId">Mã phiếu nhập chi tiết.</param>
        /// <param name="date">Ngày nhập/xuất.</param>
        /// <param name="isReadOnly">Chỉ đọc</param>
        /// <returns></returns>
        Task<InventoryReport> GetOpeningStockByReceiptDetailId(string tenantId, string warehouseId, string receiptDetailId, DateTime date,
            bool isReadOnly = false);

        Task<bool> CheckExists(string tenantId, string warehoueId, string productId, DateTime date);

        Task<int> Insert(InventoryReport inventoryReport);

        Task<int> Update(InventoryReport inventoryReport);

        Task<int> Delete(string id);

        Task<List<InventoryReport>> Search(string tenantId, string warehouseId, string productId, DateTime fromDate, int page, int pageSize,
            out int totalRows, bool isReadOnly = false);

        Task<List<InventoryReportViewModel>> Search(string tenantId, string warehouseId, DateTime fromDate, DateTime toDate,
            int page, int pageSize, out int totalRows);

        Task<List<WarehouseCardItemViewModel>> Search(string tenantId, string warehouseId, string productId, DateTime fromDate,
            DateTime toDate, int page, int pageSize, out int totalRows);

        Task<List<WarehouseCardDetailItemViewModel>> SearchWarehouseCardDetailItems(string tenantId, string warehouseId, string productId,
            DateTime? fromDate, DateTime? toDate, int page, int pageSize, out int totalRows);

        //Task<List<InventoryReport>> GetsByReceiptNoteDetailId(string tenantId, string warehouseId, string receiptDetailId,
        //    bool? isReceived);


        //Task<List<InventoryReport>> GetsByReceiptNoteDetailId(string tenantId, string warehouseId, IEnumerable<string> receiptDetailId,
        //    bool? isReceived);

        Task<int> SaveChangeAsync();

        Task<List<InventoryReport>> GetsByProductId(string tenantId, string warehouseId, string productId, DateTime fromDate, int page,
            int pageSize, out int totalRows);

        Task<List<InventoryReport>> GetByReceiptId(string tenantId, string goodsReceiptNoteId, bool isReceived);

        Task<int> Updates(List<InventoryReport> inventoryReports);

        Task<decimal> GetExWarehousePriceByCode(string tenantId, string warehouseId, string goodsReceiptNoteDetailCode);

        Task<List<InventoryDetailViewModel>> SearchToTakeInventory(string tenantId, string warehouseId, string keyword, DateTime date, int page,
            int pageSize, out int totalRows);

        Task<InventoryProductViewModel> GetProductInfo(string tenantId, string warehouseId, string productId, DateTime date);

        Task<List<InventoryProductViewModel>> GetsAllProduct(string tenantId, string warehouseId, DateTime date);
    }
}
