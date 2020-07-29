using System;
using System.Collections.Generic;
using GHM.Infrastructure.Models;
using GHM.Warehouse.Domain.ViewModels;
using System.Threading.Tasks;
using GHM.Infrastructure.ViewModels;

namespace GHM.Warehouse.Domain.IServices
{
    public interface IInventoryDailyReportService
    {
        Task<SearchResult<InventoryDailyReportViewModel>> Search(string tenantId, string userId, string warehouseId, string keyword,
            DateTime? fromDate, DateTime? toDate, int page, int pageSize);

        Task<ActionResultResponse> Update(string tenantId, string warehouseId, string productId, DateTime entryDate);

        Task<ActionResultResponse> UpdateEntryDate(string tenantId, string warehouseId, string receiptNoteId,
            DateTime oldEntryDate, DateTime newEntryDate);

        Task<ActionResultResponse> Update(string tenantId, string warehouseId, string receiptNoteId, string productId, DateTime entryDate);

        Task<ActionResultResponse> UpdateByReceiptNote(string tenantId, string warehouseId, string receiptNoteId, DateTime entryDate);

        Task SyncInventoryDailyReport(string tenantId, string warehouseId, string productId, DateTime fromDate,
            int page = 1, int pageSize = 10);

        Task SyncInventoryDailyReportByWarehouse(string tenantId, string warehouseId, DateTime date, int page = 1, int pageSize = 10);

        Task<SearchResult<InventoryViewModel>> SearchToTakeInventory(string tenantId, string keyword, string warehouseId, DateTime date, int page, int pageSize);
    }
}
