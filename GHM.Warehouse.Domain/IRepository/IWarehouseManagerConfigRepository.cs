using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IWarehouseManagerConfigRepository
    {
        Task<List<WarehouseManagerConfigViewModel>> Search(string tenantId, string warehouseId,
            int page, int pageSize, out int totalRows);

        Task<int> Insert(WarehouseManagerConfig warehouseManagerConfig);

        Task<int> Inserts(List<WarehouseManagerConfig> warehouseManagerConfigs);

        Task<int> Update(WarehouseManagerConfig warehouseManagerConfig);

        Task<int> Delete(string warehouseId, string userId);

        Task<int> ForceDelete(string warehouseId, string userId);

        Task<int> DeleteByWarehouseId(string warehouseId);

        Task<WarehouseManagerConfig> GetInfo(string warehouseId, string userId, bool isReadOnly = false);

        Task<WarehouseManagerConfig> GetInfo(string warehouseId, string userId, string tenantId, bool isReadOnly = false);

        Task<List<WarehouseManagerConfig>> GetManagerInfo(string tenantId, string warehouseId);

        Task<List<WarehouseManagerConfig>> GetsWarehouseId(string warehouseId, string tenantId, bool isReadOnly = false);

        Task<bool> CheckExists(string warehouseId, string userId, string tenantId);

        Task<List<Suggestion<string>>> Suggestions(string tenantId, string warehouseId, string keyword, int page, int pageSize,
            out int totalRows);
    }
}
