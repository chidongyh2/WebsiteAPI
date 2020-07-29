namespace GHM.Warehouse.Domain.ViewModels
{
    public class GoodsReceiptNoteBarcodeViewModel
    {
        public string Id { get; set; }
        public string ProductId { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string UnitId { get; set; }
        public string UnitName { get; set; }
        public decimal Quantity { get; set; }
    }
}