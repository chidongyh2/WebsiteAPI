using MediatR;
using System;

namespace GHM.Warehouse.Domain.Commands
{
    public class UpdateReceiptNoteDetailCommand : INotification
    {
        public string TenantId { get; set; }

        public string WarehouseId { get; set; }

        public string ProductId { get; set; }

        public DateTime ReceiptDate { get; set; }

        public string ReceiptId { get; set; }

        public bool IsReceived { get; set; }

        public string Note { get; set; }
        
        public string ReceiptDetailId { get; set; }

        public string LotId { get; set; }

        public string NewLotId { get; set; }

        public string ReceiptDetailCode { get; set; }

        public string ProductUnitId { get; set; }

        public string ReceiptNo { get; set; }
        //public string ReceiptNo { get; set; }
    }
}
