namespace GHM.Warehouse.Domain.ModelMetas
{
    public class InventoryDetailMeta
    {
        public string Id { get; set; }

        public string ProductId { get; set; }

        public string UnitId { get; set; }

        public string LotId { get; set; }

        public decimal? ClosingStockQuantity { get; set; }

        public decimal RealQuantity { get; set; }

        public string Reason { get; set; }

        public string ConcurrencyStamp { get; set; }
    }
}
