using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
namespace GHM.Warehouse.Domain.IRepository
{
    public interface IWarehouseConfigRepository
    {
        Task<int> Insert(WarehouseConfig warehouseConfig);
        Task<int> Inserts(List<WarehouseConfig> warehouseConfigs);
        Task<int> Update(WarehouseConfig warehouseConfig);
        Task<WarehouseConfig> GetInfo(string tenantId, string languageId, string warehouseId, string key, bool isReadOnly = false);
        Task<List<WarehouseConfigViewModel>> GetAll(string tenantId, string languageId, string warehouseId);
        Task<bool> CheckKeyExists(string tenantId, string languageId, string warehouseId, string key);
        Task<InventoryCalculatorMethod?> GetInventoryCalculatorMethod(string tenantId, string warehouseId);
    }
}
