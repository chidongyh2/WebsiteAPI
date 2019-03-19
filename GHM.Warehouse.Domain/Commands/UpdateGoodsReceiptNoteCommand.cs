using System;
using MediatR;

namespace GHM.Warehouse.Domain.Commands
{
    public class UpdateGoodsReceiptNoteCommand : INotification
    {
        public string TenantId { get; set; }

        public string GoodsReceiptNoteId { get; set; }

        public DateTime OldEntryDate { get; set; }

        public DateTime NewEntryDate { get; set; }

        public string OldWarehouseId { get; set; }

        public string NewWarehouseId { get; set; }

        public string Note { get; set; }

        public string UserId { get; set; }

        public string FullName { get; set; }
    }
}
