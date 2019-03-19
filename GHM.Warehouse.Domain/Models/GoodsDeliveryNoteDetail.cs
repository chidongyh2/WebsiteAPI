using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace GHM.Warehouse.Domain.Models
{
    public class GoodsDeliveryNoteDetail
    {
        public string Id { get; set; }

        public string ProductId { get; set; }

        [NotMapped]
        public string ProductName { get; set; }

        public string TenantId { get; set; }

        public string WarehouseId { get; set; }

        public decimal Quantity { get; set; }

        public string UnitId { get; set; }

        public decimal Price { get; set; }

        public decimal? DiscountPrice { get; set; }

        public bool? DiscountByPercent { get; set; }

        public string GoodsDeliveryNoteId { get; set; }

        public decimal? RecommendedQuantity { get; set; }

        public string LotId { get; set; }

        public bool IsDelete { get; set; }

        public string ConcurrencyStamp { get; set; }

        public DateTime? LastUpdate { get; set; }

        public string LastUpdateUserId { get; set; }

        public string LastUpdateFullName { get; set; }

        public DateTime CreateTime { get; set; }

        public string CreatorId { get; set; }

        public string CreatorFullName { get; set; }

        public string Note { get; set; }

        public string ConversionUnitGroupId { get; set; }

        public GoodsDeliveryNote GoodsDeliveryNote { get; set; }

        public decimal ConversionValue { get; set; }

        public string GoodsReceiptNoteCode { get; set; }

        public GoodsDeliveryNoteDetail()
        {
            Id = Guid.NewGuid().ToString();
            CreateTime = DateTime.Now;
            IsDelete = false;
            ConcurrencyStamp = Guid.NewGuid().ToString();
        }
    }
}
