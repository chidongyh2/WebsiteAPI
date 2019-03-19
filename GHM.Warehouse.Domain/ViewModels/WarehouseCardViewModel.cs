using System;
using System.Collections.Generic;

namespace GHM.Warehouse.Domain.ViewModels
{
    public class WarehouseCardViewModel
    {
        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public string WarehouseId { get; set; }
        public string WarehouseName { get; set; }
        public string UnitId { get; set; }
        public string UnitName { get; set; }
        public string WarehouseAddress { get; set; }
        public int TotalItems { get; set; }
        public decimal OpeningStockQuantity { get; set; }

        public List<WarehouseCardItemViewModel> WarehouseCardItems { get; set; }
    }

    public class WarehouseCardItemViewModel
    {
        public string Id { get; set; }        
        public DateTime InvoiceDate { get; set; }
        public DateTime Date { get; set; }
        public decimal Quantity { get; set; }
        public bool IsReceiving { get; set; }
        public string ReceiptNo { get; set; }
        public string Note { get; set; }
        public decimal Inventory { get; set; }        
    }
}
