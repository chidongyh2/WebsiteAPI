namespace GHM.Product.Domain.ViewModels
{
    public class ProductSuggestionViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public bool? IsManageByLot { get; set; }
        public decimal ExWarehousePrice { get; set; }
    }
}
