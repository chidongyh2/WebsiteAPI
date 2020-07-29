using System;
using System.Collections.Generic;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.Models;

namespace GHM.Warehouse.Domain.ViewModels
{
    public class InventoryViewModel
    {
        public string Id { get; set; }

        public string ConcurrencyStamp { get; set; }

        public DateTime Date { get; set; }

        public string CreatorId { get; set; }

        public string CreatorFullName { get; set; }

        public string Note { get; set; }

        public string WarehouseId { get; set; }

        public string WarehouseName { get; set; }

        public InventoryStatus Status { get; set; }

        public DateTime InventoryDate { get; set; }

        public int TotalItems { get; set; }

        public decimal Price { get; set; }

        public List<InventoryDetailViewModel> Details { get; set; }

        public List<InventoryMember> Members { get; set; }
    }
}