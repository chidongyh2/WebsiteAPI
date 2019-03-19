namespace GHM.Warehouse.Domain.ViewModels
{
    public class GoodsReceiptNoteReturnSupplierViewModel
    {
        public string SupplierId { get; set; }
        public string GoodsReceiptNoteDetailId { get; set; }
        public decimal Price { get; set; }
        public decimal Quantity { get; set; }
        public string UnitId { get; set; }
        public string ProductId { get; set; }
        public string GoodsReceiptNoteDetailCode { get; set; }
    }
}
