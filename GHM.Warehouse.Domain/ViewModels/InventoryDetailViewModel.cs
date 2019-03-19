namespace GHM.Warehouse.Domain.ViewModels
{
    public class InventoryDetailViewModel
    {
        public string Id { get; set; }

        public string InventoryId { get; set; }

        public string LotId { get; set; }

        public string ProductId { get; set; }

        public string ProductName { get; set; }

        public string UnitId { get; set; }

        public string UnitName { get; set; }

        public decimal? InventoryQuantity { get; set; }

        public decimal RealQuantity { get; set; }

        public string Reason { get; set; }

        public decimal Price { get; set; }

        public string ConcurrencyStamp { get; set; }
    }
}
