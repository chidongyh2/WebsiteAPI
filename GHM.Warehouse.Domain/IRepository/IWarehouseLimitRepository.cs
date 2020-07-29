using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IWarehouseLimitRepository
    {
        Task<List<WarehouseLimitViewModel>> SearchAsync(string tenantId, string languageId, string warehouseId, string keyword,
            int page, int pageSize, out int totalRows);

        Task<int> Insert(WarehouseLimit warehouseLimit);

        Task<int> Update(WarehouseLimit warehouseLimit);

        Task<int> ForceDelete(string warehouseId, string productId, string unitId);

        Task<WarehouseLimit> GetInfo(string warehouseId, string productId, string unitId,
            bool isReadOnly = false);
        Task<WarehouseLimit> GetInfo(string warehouseId, string productId, string unitId, string tenantId, bool isReadOnly = false);

        Task<List<WarehouseLimit>> GetsWarehouseId(string warehouseId, string tenantId, bool isReadOnly = false);

        Task<bool> CheckExists(string warehouseId, string productId, string unitId, string tenantId);
    }
}
