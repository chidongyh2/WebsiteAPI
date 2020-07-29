using System;

namespace GHM.Warehouse.Domain.ModelMetas
{
    public class GoodsDeliveryNoteDetailMeta
    {
        public string ProductId { get; set; }

        public string ProductName { get; set; }

        public string WarehouseId { get; set; }

        public decimal Quantity { get; set; }

        public string UnitId { get; set; }

        public decimal Price { get; set; }

        public decimal ConversionQuantity { get; set; }

        public DateTime DeliveryDate { get; set; }

        public decimal? DiscountPrice { get; set; }

        public bool? DiscountByPercent { get; set; }

        public decimal? RecommendedQuantity { get; set; }

        public string LotId { get; set; }

        public string ConcurrencyStamp { get; set; }

        public string GoodsReceiptNoteDetailCode { get; set; }

        public DateTime? ExpireDate { get; set; }

        public DateTime? ManufacturingDate { get; set; }

        public decimal? OpeningStockQuantity { get; set; }
    }
}
