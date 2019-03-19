using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace GHM.Warehouse.Domain.Models
{
    public class InventoryReportDetail
    {
        public string Id { get; set; }
        public string TenantId { get; set; }
        public string WarehouseId { get; set; }
        public string ReceiptId { get; set; }
        public bool IsReceived { get; set; }
        public DateTime Date { get; set; }
        public string InventoryReportId { get; set; }
        public string ProductId { get; set; }
        public string ProductUnitId { get; set; }
        public string LotId { get; set; }
        public decimal OpeningStockQuantity { get; set; }
        public decimal OpeningStockValue { get; set; }
        public decimal ClosingStockQuantity { get; set; }
        public decimal ClosingStockValue { get; set; }
        public decimal Quantity { get; set; }
        public decimal Price { get; set; }
        public string Note { get; set; }
        public decimal ExWarehousePrice { get; set; }
        public string GoodsReceiptNoteDetailCode { get; set; }

        [NotMapped]
        public string ReceiptNo { get; set; }

        public InventoryReport InventoryReport { get; set; }

        public InventoryReportDetail()
        {
            Id = Guid.NewGuid().ToString();
        }
    }
}
