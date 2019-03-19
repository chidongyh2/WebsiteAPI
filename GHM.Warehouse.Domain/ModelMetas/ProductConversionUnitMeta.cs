namespace GHM.Warehouse.Domain.ModelMetas
{
    public class ProductConversionUnitMeta
    {
        public string Id { get; set; }
        public string UnitId { get; set; }
        public string ConversionUnitId { get; set; }
        public decimal Value { get; set; }
        public decimal? SalePrice { get; set; }
        public bool IsDefault { get; set; }

        public ProductConversionUnitMeta()
        {
            IsDefault = false;
        }
    }
}