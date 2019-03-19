namespace GHM.Warehouse.Domain.ViewModels
{
    public class InventoryDailyReportStatsViewModel
    {
        public decimal OpeningStockQuantity { get; set; }
        public decimal OpeningStockValue { get; set; }
        public decimal ReceivingQuantity { get; set; }
        public decimal ReceivingValue { get; set; }
        public decimal DeliveringQuantity { get; set; }
        public decimal DeliveringValue { get; set; }
        public decimal ClosingStockQuantity { get; set; }
        public decimal ClosingStockValue { get; set; }
    }
}