using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IInventoryRepository
    {
        Task<List<InventoryViewModel>> Search(string tenantId, string warehouseId,
            DateTime? fromDate, DateTime? toDate, InventoryStatus? status, int page, int pageSize, out int totalRows);
        Task<int> Insert(Inventory inventorie);
        Task<int> Update(Inventory inventorie);
        Task<int> ForceDelete(string inventorieId);
        Task<Inventory> GetInfo(string inventorieId, bool isReadonly = false);
        Task<Inventory> GetInfo(string tenantId, string inventorieId, bool isReadonly = false);
        Task<bool> CheckExists(string inventorieId, string tenantId);
        Task<int> GetTotal(string tenantId);
    }
}
