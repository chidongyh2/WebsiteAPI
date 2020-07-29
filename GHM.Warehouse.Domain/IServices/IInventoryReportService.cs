using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Domain.IServices
{
    public interface IInventoryReportService
    {
        Task<ActionResultResponse> ReSyncInventoryReport(string tenantId, string warehouseId, string productId, DateTime fromDate, int page,
            int pageSize);

        Task<ActionResultResponse> Insert(InventoryReport inventoryReport);

        Task<ActionResultResponse> Update(InventoryReport inventoryReport);

        Task<SearchResult<InventoryReportViewModel>> Search(string tenantId, string userId, string warehouseId, string keyword,
            DateTime fromDate, DateTime toDate, int page, int pageSize);

        Task<ActionResultResponse<WarehouseCardViewModel>> SearchWarehouseCard(string tenantId, string userId, string warehouseId, string
                productId, DateTime? fromDate, DateTime? toDate, int page, int pageSize);

        Task<ActionResultResponse<WarehouseCardDetailViewModel>> SearchWarehouseCardDetail(string tenantId, string userId, string warehouseId,
            string productId, DateTime? fromDate, DateTime? toDate, int page, int pageSize);

        //Task<ActionResultResponse> UpdatePrice(string tenantId, string warehouseId, decimal price, decimal exwarehousePrice,
        //    IEnumerable<string> receiptDetailIds, bool isReceived);

        Task<ActionResultResponse> UpdateGoodsDeliveryNoteInventoryPrice(string tenantId, string warehouesId, string receiptDetailId,
            decimal price, decimal exWarehousePrice);

        Task<ActionResultResponse> ReSyncExWarehousePrice(string tenantId, string warehouseId, string productId, DateTime fromDate, int page,
            int pageSize);

        Task<ActionResultResponse> Synchronize(string tenantId, string warehouseId, string productId,
            DateTime fromDate, int page, int pageSize);

        //Task<ActionResultResponse<InventoryReport>> GetOpeningStock(string tenantId, string warehouseId, string receiptDetailId,
        //    string productId, DateTime date);
        Task UpdateWarehouse(string tenantId, string goodsReceiptNoteId, string newWarehouseId, bool isReceived);

        Task<decimal> GetExWarehousePrice(string tenantId, string warehouseId, decimal openingStockValue,
            decimal openingStockQuantity,
            DateTime date, InventoryReportDetail inventoryReportDetail);

        Task<ActionResultResponse> DeleteInventoryReportDetail(string tenantId, string warehouseId, string productId, string goodsReceiptNoteDetailCode,
            string lotId, DateTime date, string receiptId, bool isReceived);

        Task<ActionResultResponse> InsertInventoryReportDetail(InventoryReportDetail inventoryReportDetail);

        Task<ActionResultResponse> UpdateInventoryReportDetail(InventoryReportDetail inventoryReportDetail);

        //Task<int> DeleteInventoryReportDetail(string teanantId, string warehouseId, string receiptId, string code, bool isReceived);

        //        Task UpdatePrice(string tenantId, string warehouseId, string price, decimal receiptDetailIds, DateTime isReceived);

        //        Task UpdatePrice(string tenantId, string warehouseId, string receiptId, string productId, string lotId, DateTime date, bool isReceived, decimal price);

        Task<SearchResult<InventoryDetailViewModel>> SearchToTakeInventory(string currentUserTenantId, string currentUserId, string warehouseId,
            string keyword, DateTime date, int page, int pageSize);

        Task<ActionResultResponse<InventoryProductViewModel>> GetProductInfo(string tenantId, string userId, string warehouseId,
            string productId, DateTime date);

        Task<SearchResult<InventoryProductViewModel>> GetsAllProductToTakeInventory(string tenantId, string userId,
            string warehouseId, DateTime date);

        Task UpdateInventory(string tenantId, string goodsReceiptNoteId, string warehouseId, DateTime newDate, bool isReceived);

        Task SynchronizeAllInventory(string tenantId, string warehouseId, string productId, string lotId, DateTime date,
            int page = 1, int pageSize = 20);
    }
}
