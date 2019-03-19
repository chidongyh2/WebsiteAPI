using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Commands;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.IServices;
using MediatR;

namespace GHM.Warehouse.Infrastructure.CommandHandlers
{
    public class UpdateInventoryDetailReportCommandHandler : INotificationHandler<UpdateInventoryDetailReportCommand>
    {
        private readonly IGoodsDeliveryNoteService _goodsDeliveryNoteService;

        public UpdateInventoryDetailReportCommandHandler(IGoodsDeliveryNoteService goodsDeliveryNoteService)
        {
            _goodsDeliveryNoteService = goodsDeliveryNoteService;
        }

        public async Task Handle(UpdateInventoryDetailReportCommand notification, CancellationToken cancellationToken)
        {
            // Cập nhật lại phiếu xuất.
            if (!notification.IsReceived)
            {
                await _goodsDeliveryNoteService.SynchronizePrice(notification.TenantId,
                    notification.WarehouseId, notification.ReceiptId,
                    notification.GoodsReceiptNoteDetailCode, notification.LotId, notification.Date, 1, 20);
            }
        }
    }
}
