using System;
using System.Collections.Generic;
using System.Text;
using GHM.Warehouse.Domain.Constants;
using MediatR;

namespace GHM.Warehouse.Domain.Commands
{
    public class DeletedReceiptNoteDetailCommand : INotification
    {
        public string TenantId { get; set; }
        public string Code { get; set; }
        public string ProductId { get; set; }
        public string LotId { get; set; }
        public bool IsReceived { get; set; }
        public string WarehouseId { get; set; }
        public DateTime Date { get; set; }
        public string ReceiptId { get; set; }
        public string ReceiptNo { get; set; }
        public string ProductUnitId { get; set; }
    }
}
