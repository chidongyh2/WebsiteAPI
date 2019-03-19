using System.Collections.Generic;
using GHM.Warehouse.Domain.Constants;

namespace GHM.Warehouse.Domain.ModelMetas
{
    public class WarehouseMeta
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public string ConcurrencyStamp { get; set; }
        public string Address { get; set; }
        public InventoryCalculatorMethod InventoryCalculatorMethod { get; set; }    

        public List<WarehouseManagerConfigMeta> WarehouseManagerConfigs { get; set; }
    }
}
