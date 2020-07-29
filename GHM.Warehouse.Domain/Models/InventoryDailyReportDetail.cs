using GHM.Infrastructure.Helpers;
using System;

namespace GHM.Warehouse.Domain.Models
{
    public class InventoryDailyReportDetail
    {
        public string Id { get; set; }

        public string LotId { get; set; }

        public decimal Price { get; set; }

        public string WarehouseId { get; set; }

        public string InventoryDailyReportId { get; set; }

        public string UnitId { get; set; }

        public decimal Quantity { get; set; }

        public InventoryDailyReportDetail()
        {
            Id = Guid.NewGuid().ToString();
        }
    }
}
