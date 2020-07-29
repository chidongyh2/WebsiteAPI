using System;
using System.Globalization;
using System.Threading;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Commands;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.IServices;
using MediatR;

namespace GHM.Warehouse.Infrastructure.CommandHandlers
{
    public class UpdateGoodsDeliveryNoteCommandHandler : INotificationHandler<UpdateGoodsDeliveryNoteCommand>
    {
        private readonly IGoodsDeliveryNoteRepository _goodsDeliveryNoteRepository;
        private readonly IGoodsDeliveryNoteDetailsRepository _goodsDeliveryNoteDetailsRepository;
        private readonly IInventoryReportService _inventoryReportService;

        public UpdateGoodsDeliveryNoteCommandHandler(IGoodsDeliveryNoteRepository goodsDeliveryNoteRepository,
            IGoodsDeliveryNoteDetailsRepository goodsDeliveryNoteDetailsRepository, IInventoryReportService inventoryReportService)
        {
            _goodsDeliveryNoteRepository = goodsDeliveryNoteRepository;
            _goodsDeliveryNoteDetailsRepository = goodsDeliveryNoteDetailsRepository;
            _inventoryReportService = inventoryReportService;
        }

        public async Task Handle(UpdateGoodsDeliveryNoteCommand notification, CancellationToken cancellationToken)
        {
            // Lấy về danh sách chi tiết phiếu nhập.
            var goodsDeliveryNoteDetails =
                await _goodsDeliveryNoteDetailsRepository.GetsAllByGoodsDeliveryNoteId(notification.TenantId,
                    notification.GoodsDeliveryNoteId);

            // trường hợp thay đổi lại thời gian nhập.
            if (DateTime.Compare(notification.OldDeliveryDate, notification.NewDeliveryDate) != 0)
            {
                var fromDate = DateTime.Compare(notification.OldDeliveryDate, notification.NewDeliveryDate) < 0
                    ? notification.OldDeliveryDate
                    : notification.NewDeliveryDate;

                await _inventoryReportService.UpdateInventory(notification.TenantId,
                    notification.GoodsDeliveryNoteId, notification.WarehouseId, notification.NewDeliveryDate, false);

                foreach (var goodsDeliveryNoteDetail in goodsDeliveryNoteDetails)
                {
                    //await _inventoryReportService.ReSyncInventoryReport(notification.TenantId, notification.WarehouseId,
                    //    goodsDeliveryNoteDetail.ProductId,
                    //    fromDate, 1, 10);
                    await _inventoryReportService.Synchronize(notification.TenantId,
                        notification.WarehouseId,
                        goodsDeliveryNoteDetail.ProductId, fromDate, 1, 10);
                }
            }
        }
    }
}
