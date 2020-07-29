using System;

namespace GHM.Warehouse.Domain.ViewModels
{
    public class WarehouseLimitViewModel
    {
        public string WarehouseId { get; set; }
        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public string UnitId { get; set; }
        public string UnitName { get; set; }
        public int Quantity { get; set; }
        public DateTime CreateTime { get; set; }

    }
}
