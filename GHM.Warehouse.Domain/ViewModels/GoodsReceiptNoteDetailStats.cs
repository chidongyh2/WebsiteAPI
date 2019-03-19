namespace GHM.Warehouse.Domain.ViewModels
{
    public class GoodsReceiptNoteDetailStats
    {
        public string ProductId { get; set; }
        public string LotId { get; set; }
        public decimal Quantity { get; set; }
        public decimal Value { get; set; }
    }
}