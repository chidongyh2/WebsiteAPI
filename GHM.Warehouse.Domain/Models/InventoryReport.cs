using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using GHM.Warehouse.Domain.Constants;

namespace GHM.Warehouse.Domain.Models
{
    public class InventoryReport
    {
        public string Id { get; set; }
        public string TenantId { get; set; }
        public string WarehouseId { get; set; }
        public string ProductId { get; set; }
        public decimal OpeningStockQuantity { get; set; }
        public decimal OpeningStockValue { get; set; }
        public decimal Quantity { get; set; }
        public decimal TotalAmounts { get; set; }
        public bool IsReceived { get; set; }
        public decimal ClosingStockQuantity { get; set; }
        public decimal ClosingStockValue { get; set; }
        //public decimal ExWarehousePrice { get; set; }
        public string ReceiptId { get; set; }
        public DateTime Date { get; set; }
        public DateTime CreateTime { get; set; }
        public bool IsDelete { get; set; }
        //public string ProductUnitId { get; set; }
        //public string Note { get; set; }
        //public string ReceiptDetailId { get; set; }

        /// <summary>
        /// Trường hợp là phiếu nhập thì sẽ là số phiếu nhập, là phiếu xuất sẽ là số phiếu xuất.
        /// </summary>
        public string ReceiptNo { get; set; }

        public string ProductUnitId { get; set; }

        [NotMapped]
        public InventoryCalculatorMethod InventoryCalculatorMethod { get; set; }

        public List<InventoryReportDetail> InventoryReportDetails { get; set; }

        public InventoryReport()
        {
            Id = Guid.NewGuid().ToString();
            CreateTime = DateTime.Now;
            IsDelete = false;
            InventoryReportDetails = new List<InventoryReportDetail>();
        }
    }
}
