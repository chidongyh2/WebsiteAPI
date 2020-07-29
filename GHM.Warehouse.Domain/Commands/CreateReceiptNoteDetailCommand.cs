using System;
using MediatR;

namespace GHM.Warehouse.Domain.Commands
{
    public class CreateReceiptNoteDetailCommand : INotification
    {
        public string ReceiptDetailId { get; set; }
        public string TenantId { get; set; }
        public string WarehouseId { get; set; }
        public string ReceiptId { get; set; }
        public string GoodsReceiptNoteDetailCode { get; set; }
        public string ProductId { get; set; }
        public string LotId { get; set; }
        public DateTime Date { get; set; }
        public bool IsReceived { get; set; }
        public string Note { get; set; }
        public string ProductUnitId { get; set; }
        public decimal Price { get; set; }
        public decimal Quantity { get; set; }
        public string ReceiptNo { get; set; }
    }
}
