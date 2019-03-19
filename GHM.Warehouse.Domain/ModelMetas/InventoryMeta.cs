using System;
using System.Collections.Generic;

namespace GHM.Warehouse.Domain.ModelMetas
{
    public class InventoryMeta
    {
        public string WarehouseId { get; set; }
        public DateTime InventoryDate { get; set; }
        public string Note { get; set; }
        public string ConcurrencyStamp { get; set; }
        public List<InventoryDetailMeta> Details { get; set; }
        public List<InventoryMemberMeta> Members { get; set; }
    }
}
