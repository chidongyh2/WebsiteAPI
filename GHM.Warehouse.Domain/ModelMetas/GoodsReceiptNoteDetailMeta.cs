using System;

namespace GHM.Warehouse.Domain.ModelMetas
{
    public class GoodsReceiptNoteDetailMeta
    {
        public string Id { get; set; }
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

        public DateTime? ManufacturingDate { get; set; }

        public DateTime? ExpiryDate { get; set; }

        public DateTime? EntryDate { get; set; }

        public decimal TotalPrice { get; set; }

        public decimal Quantity { get; set; }

        public string GoodsReceiptNoteId { get; set; }

        public string LotId { get; set; }

        public string UnitId { get; set; }

        public int? InvoiceQuantity { get; set; }

        public string ConcurrencyStamp { get; set; }

        public decimal? Tax { get; set; }

        public string Note { get; set; }

        public string DefaultUnitId { get; set; }

        public decimal ConversionValue { get; set; }

        public DateTime? ManufactureDate { get; set; }

        public string ProductUnitId { get; set; }

        public string Code { get; set; }

        public decimal ConversionPrice { get; set; }

        public decimal ConversionQuantity { get; set; }

        public GoodsReceiptNoteDetailMeta()
        {
            ConversionValue = 1;
        }
    }
}
