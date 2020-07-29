namespace GHM.Warehouse.Domain.ViewModels
{
    public class OpeningStockViewModel
    {
        public string ProductId { get; set; }
        public string LotId { get; set; }
        public decimal OpeningStockQuantity { get; set; }
        public decimal OpeningStockValue { get; set; }
        public decimal ClosingStockQuantity { get; set; }
        public decimal ClosingStockValue { get; set; }
        public decimal Price { get; set; }
        public decimal ExWarehousePrice { get; set; }
        public string ProductUnitId { get; set; }
        public string ReceiptDetailCode { get; set; }
    }
}