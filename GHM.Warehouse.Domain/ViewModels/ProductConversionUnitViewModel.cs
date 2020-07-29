namespace GHM.Warehouse.Domain.ViewModels
{
    public class ProductConversionUnitViewModel
    {
        public string UnitId { get; set; }
        public string UnitName { get; set; }
        public string ConversionUnitId { get; set; }
        public string ConversionUnitName { get; set; }
        public decimal Value { get; set; }
        public decimal? SalePrice { get; set; }
    }
}
