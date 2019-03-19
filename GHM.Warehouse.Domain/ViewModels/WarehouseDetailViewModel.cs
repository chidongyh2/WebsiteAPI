using System;
using System.Collections.Generic;
using System.Text;
using GHM.Warehouse.Domain.Constants;

namespace GHM.Warehouse.Domain.ViewModels
{
    public class WarehouseDetailViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public string ConcurrencyStamp { get; set; }
        public string Address { get; set; }
        public InventoryCalculatorMethod? InventoryCalculatorMethod { get; set; }

        public List<WarehouseLimitViewModel> WarehouseLimits { get; set; }
        public List<WarehouseManagerConfigViewModel> WarehouseManagerConfigs { get; set; }

    }
}
