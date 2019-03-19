using GHM.Warehouse.Domain.Constants;
using System;
using System.Collections.Generic;

namespace GHM.Warehouse.Domain.ViewModels
{
    public class ProductInfoDeliveryViewModel
    {
        public string ProductId { get; set; }
        public string UnitDefaultId { get; set; }
        public string UnitDefaultName { get; set; }
        public decimal PriceRetail { get; set; }
        public decimal ExWarehousePrice { get; set; }
        public InventoryCalculatorMethod? CalculatorMethod { get; set; }
        public List<Inventories> Inventories { get; set; }
        public List<UnitSuggestionsViewModel> Units { get; set; }
    }

    public class Inventories
    {
        public string LotId { get; set; }
        public DateTime ExpiredDate { get; set; }
        public int InventoryQuantity { get; set; }
        public string UnitId { get; set; }
        public string UnitName { get; set; }
    }
}
