using System;
using System.Collections.Generic;

namespace GHM.Warehouse.Domain.ViewModels
{
    public class WarehouseCardDetailViewModel : WarehouseCardViewModel
    {
        public decimal OpeningStockValue { get; set; }

        public new List<WarehouseCardDetailItemViewModel> WarehouseCardItems { get; set; }
    }

    public class WarehouseCardDetailItemViewModel : WarehouseCardItemViewModel
    {
        public decimal InventoryValue { get; set; }
        public decimal Price { get; set; }        
        public decimal Value { get; set; }
        public string LotId { get; set; }
    }
}