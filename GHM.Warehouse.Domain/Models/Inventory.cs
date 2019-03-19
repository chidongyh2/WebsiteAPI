using System;
using System.Collections.Generic;
using System.Text;
using GHM.Warehouse.Domain.Constants;

namespace GHM.Warehouse.Domain.Models
{
    public class Inventory
    {
        public string Id { get; set; }

        public string WarehouseId { get; set; }

        public string TenantId { get; set; }

        public DateTime InventoryDate { get; set; }

        public string Note { get; set; }

        public InventoryStatus Status { get; set; }

        public string ConcurrencyStamp { get; set; }

        public DateTime CreateTime { get; set; }

        public string CreatorId { get; set; }

        public string CreatorFullName { get; set; }

        public DateTime? LastUpdate { get; set; }

        public string LastUpdateUserId { get; set; }

        public string LastUpdateFullName { get; set; }

        public List<InventoryDetail> InventoryDetails { get; set; }

        public List<InventoryMember> InventoryMembers { get; set; }

        public Inventory()
        {
            Id = Guid.NewGuid().ToString();
            CreateTime = DateTime.Now;
            InventoryDate = DateTime.Now;
            Status = InventoryStatus.Waiting;
            ConcurrencyStamp = Guid.NewGuid().ToString();
            InventoryMembers = new List<InventoryMember>();
            InventoryDetails = new List<InventoryDetail>();
        }
    }
}
