namespace GHM.Warehouse.Domain.ViewModels
{
    public class InventoryReportViewModel
    {
        public string Id { get; set; }
        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductUnitId { get; set; }
        public string UnitName { get; set; }
        public decimal OpeningStockValue { get; set; }
        public decimal OpeningStockQuantity { get; set; }
        public decimal ReceivingValue { get; set; }
        public decimal ReceivingQuantity { get; set; }
        public decimal DeliveringValue { get; set; }
        public decimal DeliveringQuantity { get; set; }        
        public decimal ClosingStockQuantity { get; set; }
        public decimal ClosingStockValue { get; set; }
        public string LotId { get; set; }
    }
}