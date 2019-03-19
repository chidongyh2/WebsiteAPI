namespace GHM.Warehouse.Domain.ViewModels
{
    public class InventoryProductViewModel
    {
        public decimal InventoryQuantity { get; set; }

        public string LotId { get; set; }

        public string UnitId { get; set; }

        public string UnitName { get; set; }

        public decimal Price { get; set; }

        public string ProductId { get; set; }

        public string ProductName { get; set; }
    }
}