using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IInventoryDailyReportRepository
    {
        Task<int> Insert(InventoryDailyReport inventoryDailyReport);

        Task<int> Update(InventoryDailyReport inventoryDailyReport);

        Task<InventoryDailyReport> GetInfo(string tenantId, string id, bool isReadOnly = false);

        Task<InventoryDailyReport> GetInfo(string tenantId, string warehouseId, string productId, DateTime entryDate, bool isReadOnly = false);

        Task<InventoryDailyReport> GetInfo(string tenantId, string warehouseId, byte day, byte month, int year, bool isReadOnly = false);

        Task<InventoryDailyReport> GetOpeningStock(string tenantId, string warehouseId, string productId, DateTime date, bool isReadOnly = false);

        Task<List<InventoryDailyReportViewModel>> SearchInventoryOpningStock(string tenantId, string keyword, string warehouseId, DateTime fromDate,
            int page, int pageSize, out int totalRows);

        Task<List<InventoryDailyReportViewModel>> SearchByProduct(string tenantId, string warehouseId, string productId, DateTime? fromDate, DateTime? toDate,
            int page, int pageSize, out int totalRows);

        Task<List<InventoryDailyReportViewModel>> SearchForUpdate(string tenantId, string warehouseId, string productId, DateTime? fromDate,
            int page, int pageSize, out int totalRows);

        Task<List<GoodsInventoryViewModel>> GetGoodsInventory(string tenantId, string productId, int page, int pageSize,
            out int totalRows);

        Task<List<InventoryViewModel>> SearchInventory(string tenantId, string keyword, string warehouseId, DateTime date, int page, int pageSize,
            out int totalRows);

        Task<bool> CheckExists(string tenantId, string warehouseId, string productId, DateTime date);

        Task<List<string>> GetProductIds(string tenantId, string warehouseId, int page, int pageSize,
            out int totalRows);

        Task<decimal> GetInventory(string tenantId, string warehouseId, string productId, DateTime date);
    }
}
