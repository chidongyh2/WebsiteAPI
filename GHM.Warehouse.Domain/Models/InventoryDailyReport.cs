using GHM.Infrastructure.Helpers;
using System;

namespace GHM.Warehouse.Domain.Models
{
    public class InventoryDailyReport
    {
        public string Id { get; set; }
        public string WarehouseId { get; set; }
        public string TenantId { get; set; }
        public DateTime CreateTime { get; set; }
        public string ProductId { get; set; }
        public decimal OpeningStockQuantity { get; set; }
        public decimal OpeningStockValue { get; set; }
        public decimal ReceivingQuantity { get; set; }
        public decimal ReceivingValue { get; set; }
        public decimal DeliveringQuantity { get; set; }
        public decimal DeliveringValue { get; set; }
        public decimal ClosingStockQuantity { get; set; }
        public decimal ClosingStockValue { get; set; }
        public byte Day { get; set; }
        public byte Month { get; set; }
        public int Year { get; set; }
        public byte Quarter { get; set; }
        public string ConcurrencyStamp { get; set; }
        public DateTime EntryDate { get; set; }
        public string UnitId { get; set; }

        public InventoryDailyReport()
        {
            Id = Guid.NewGuid().ToString();
            ConcurrencyStamp = Guid.NewGuid().ToString();
            CreateTime = DateTime.Now;
        }

      
    }
}
