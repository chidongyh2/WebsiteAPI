using System;
using System.Collections.Generic;
using GHM.Infrastructure.Models;

namespace GHM.Warehouse.Domain.ViewModels
{
    public class GoodsDeliveryNotesDetailSearchViewModel
    {
        public string Id { get; set; }

        public string Code { get; set; }

        public string ProductId { get; set; }

        public string ProductName { get; set; }

        public decimal Quantity { get; set; }

        public decimal InventoryQuantity { get; set; }

        public string UnitId { get; set; }

        public string UnitName { get; set; }

        public decimal Price { get; set; }

        public decimal? DiscountPrice { get; set; }

        public bool? DiscountByPercent { get; set; }

        public string GoodsDeliveryNoteId { get; set; }

        public decimal? RecommendedQuantity { get; set; }

        public string LotId { get; set; }

        public decimal TotalAmounts { get; set; }

        public string ConcurrencyStamp { get; set; }

        public string GoodsReceiptNoteDetailCode { get; set; }

        public List<ProductUnitViewModel> Units { get; set; }
    }
}
