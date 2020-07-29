namespace GHM.Warehouse.Domain.Models
{
    using System;

    public class GoodsReceiptNoteDetail
    {
        public GoodsReceiptNoteDetail()
        {
            Id = Guid.NewGuid().ToString();
            CreateTime = DateTime.Now;
            IsDelete = false;
            LastUpdate = null;
            ConcurrencyStamp = Guid.NewGuid().ToString();
        }

        public string Id { get; set; }

        public string TenantId { get; set; }

        public string ProductId { get; set; }

        public string SKU { get; set; }

        public string UPC { get; set; }

        public string BrandId { get; set; }

        public decimal Price { get; set; }

        public byte? VAT { get; set; }

        public int? Weight { get; set; }

        public int? Height { get; set; }

        public int? Width { get; set; }

        public int? Length { get; set; }

        public decimal? VolumnWidth { get; set; }

        public decimal? ChargeableWeight { get; set; }

        public DateTime CreateTime { get; set; }

        public DateTime? ExpiryDate { get; set; }

        public string WarehouseId { get; set; }

        public decimal TotalBeforeTaxes { get; set; }

        public decimal TotalAmounts { get; set; }

        public decimal? Tax { get; set; }

        public decimal? Taxes { get; set; }

        public decimal Quantity { get; set; }

        public string GoodsReceiptNoteId { get; set; }

        public string LotId { get; set; }

        public string UnitId { get; set; }

        public decimal? InvoiceQuantity { get; set; }

        public bool IsDelete { get; set; }

        public DateTime? LastUpdate { get; set; }

        public string LastUpdateUserId { get; set; }

        public string LastUpdateFullName { get; set; }

        public string ConcurrencyStamp { get; set; }

        public string Note { get; set; }

        public DateTime? ManufactureDate { get; set; }

        public string ConversionUnitGroupId { get; set; }

        public string Code { get; set; }

        public decimal ConversionValue { get; set; }

        public virtual GoodsReceiptNote GoodsReceiptNote { get; set; }
    }
}
