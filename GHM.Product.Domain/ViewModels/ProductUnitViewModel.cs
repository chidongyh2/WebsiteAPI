namespace GHM.Product.Domain.ViewModels
{
    public class ProductUnitViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string UnitId { get; set; }
        public bool IsDefault { get; set; }
        public decimal SalePrice { get; set; }
    }
}
