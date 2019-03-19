namespace GHM.Warehouse.Domain.ViewModels
{
    public class ProductSuggestionViewModel
    {
        public string Id { get; set; }
        public string Image { get; set; }
        public string Name { get; set; }
        public bool? IsManageByLot { get; set; }
        public string LotId { get; set; }
        public decimal ExWarehousePrice { get; set; }
    }
}
