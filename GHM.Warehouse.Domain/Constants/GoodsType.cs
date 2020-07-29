namespace GHM.Warehouse.Domain.Constants
{
    public enum GoodsReceiptNoteType
    {
        /// <summary>
        /// Nhập mua mới.
        /// </summary>
        NewPurchase,
        /// <summary>
        /// Nhập khách trả.
        /// </summary>
        CustomerReturn,
        /// <summary>
        /// Nhập điều chuyển.
        /// </summary>
        Transfer,
        /// <summary>
        /// Nhập kiểm kê.
        /// </summary>
        Inventory
    }

    public enum GoodsDeliveryNoteType
    {
        /// <summary>
        /// Xuất bán lẻ.
        /// </summary>
        Retail,
        /// <summary>
        /// Xuất sử dụng.
        /// </summary>
        SelfConsumer,
        /// <summary>
        /// Xuất trả nhà cung cấp.
        /// </summary>
        Return,
        /// <summary>
        /// Xuất hủy.
        /// </summary>
        Voided,
        /// <summary>
        /// Xuất điều chuyển.
        /// </summary>
        Transfer,
        /// <summary>
        /// Xuất kiểm kê.
        /// </summary>
        Inventory
    }
}
