using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
namespace GHM.Warehouse.Domain.IRepository
{
    public interface IInventoryMemberRepository
    {
        Task<int> Inserts(List<InventoryMember> inventoryMembers);

        Task<int> Insert(InventoryMember inventoryMember);

        Task<int> Update(InventoryMember inventoryMember);

        Task<int> ForceDeleteByInventoryId(string inventoryId);

        Task<int> ForceDelete(string inventoryId, string id);

        Task<InventoryMember> GetInfo(string inventoryId, string id, bool isReadOnly = false);

        Task<bool> CheckExistsByUserId(string inventoryId, string userId);

        Task<List<InventoryMember>> GetsByInventoryId(string inventoryId);

        Task Deletes(string inventoryId, List<string> userIds);
    }
}
