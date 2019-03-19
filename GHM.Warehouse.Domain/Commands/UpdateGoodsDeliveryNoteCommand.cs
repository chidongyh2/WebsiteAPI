using System;
using GHM.Warehouse.Domain.Constants;
using MediatR;

namespace GHM.Warehouse.Domain.Commands
{
    public class UpdateGoodsDeliveryNoteCommand : INotification
    {
        public string TenantId { get; set; }

        public string WarehouseId { get; set; }

        public string GoodsDeliveryNoteId { get; set; }

        public GoodsDeliveryNoteType OldType { get; set; }

        public GoodsDeliveryNoteType NewType { get; set; }

        public DateTime OldDeliveryDate { get; set; }

        public DateTime NewDeliveryDate { get; set; }
    }
}
