using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
namespace GHM.Warehouse.Domain.IRepository
{
    public interface IInventoryDetailRepository
    {
        Task<int> Inserts(List<InventoryDetail> inventoryDetails);

        Task<int> Insert(InventoryDetail inventoryDetail);

        Task<int> Update(InventoryDetail inventoryDetail);

        Task<int> ForceDeleteByInventoryId(string inventoryId);

        Task<int> ForceDelete(string inventoryId, string productId);

        Task<InventoryDetail> GetInfo(string inventoryId, string productId, bool isReadOnly = false);

        Task<bool> CheckExistsByProductId(string inventoryId, string productId, string lotId);

        Task<List<InventoryDetailViewModel>> GetsByInventoryId(string tenantId, string inventoryId, string warehouseId,
            bool isGetPrice, int page, int pageSize, out int totalRows);

        Task<List<InventoryDetail>> GetInventoryDetailByInventoryId(string tenantId, string inventoryId, bool isReadOnly = false);

        Task<int> Count(string inventoryId);


        Task<int> Deletes(List<InventoryDetail> inventoryDetails);

        Task Updates(List<InventoryDetail> inventoryDetails);
    }
}
