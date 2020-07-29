using System;
using System.Collections.Generic;
using System.Text;
using MediatR;

namespace GHM.Warehouse.Domain.Commands
{
    public class UpdateInventoryDetailReportCommand : INotification
    {
        public string TenantId { get; set; }
        public string ReceiptId { get; set; }
        public string ProductId { get; set; }
        public string LotId { get; set; }
        public string GoodsReceiptNoteDetailCode { get; set; }
        public DateTime Date { get; set; }
        public bool IsReceived { get; set; }
        public string WarehouseId { get; set; }
    }
}
