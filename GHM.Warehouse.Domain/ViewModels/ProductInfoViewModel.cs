﻿using System;
using System.Collections.Generic;

namespace GHM.Warehouse.Domain.ViewModels
{
    public class ProductInfoViewModel
    {
        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public decimal RealInventoryQuantity { get; set; }
        public decimal InventoryQuantity { get; set; }
        public string UnitId { get; set; }
        public string UnitName { get; set; }
        public decimal Price { get; set; }
        public string LotId { get; set; }
        public string Code { get; set; }

        public List<ProductUnitViewModel> Units { get; set; }
    }
}