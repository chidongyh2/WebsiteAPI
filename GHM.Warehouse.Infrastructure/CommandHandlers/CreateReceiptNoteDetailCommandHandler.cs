using System.Threading;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Commands;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.IServices;
using System.Linq;
using GHM.Warehouse.Domain.Models;
using MediatR;

namespace GHM.Warehouse.Infrastructure.CommandHandlers
{
    public class CreateReceiptNoteDetailCommandHandler : INotificationHandler<CreateReceiptNoteDetailCommand>
    {
        private readonly IGoodsReceiptNoteDetailRepository _goodsReceiptNoteDetailRepository;
        private readonly IGoodsDeliveryNoteDetailsRepository _goodsDeliveryNoteDetailsRepository;
        private readonly IInventoryReportDetailRepository _inventoryReportRepository;
        private readonly IInventoryReportDetailRepository _inventoryReportDetailRepository;
        private readonly IInventoryReportService _inventoryReportService;
        private readonly IMediator _mediator;

        public CreateReceiptNoteDetailCommandHandler(IGoodsReceiptNoteDetailRepository goodsReceiptNoteDetailRepository,
            IGoodsDeliveryNoteDetailsRepository goodsDeliveryNoteDetailsRepository,
            IInventoryReportDetailRepository inventoryReportDetailRepository, IInventoryReportDetailRepository inventoryReportRepository,
            IInventoryReportService inventoryReportService, IMediator mediator)
        {
            _goodsReceiptNoteDetailRepository = goodsReceiptNoteDetailRepository;
            _goodsDeliveryNoteDetailsRepository = goodsDeliveryNoteDetailsRepository;
            _inventoryReportDetailRepository = inventoryReportDetailRepository;
            _inventoryReportRepository = inventoryReportRepository;
            _inventoryReportService = inventoryReportService;
            _mediator = mediator;
        }


        public async Task Handle(CreateReceiptNoteDetailCommand notification, CancellationToken cancellationToken)
        {
            // Kiểm tra chi tiết phiếu xuất đã tồn tại chưa.
            var isInventoryReportDetailExists = await _inventoryReportDetailRepository.CheckExists(notification.TenantId, notification.WarehouseId,
                notification.ReceiptId, notification.ProductId, notification.LotId, notification.GoodsReceiptNoteDetailCode);
            if (isInventoryReportDetailExists)
            {
                await _mediator.Publish(new UpdateReceiptNoteDetailCommand
                {
                    TenantId = notification.TenantId,
                    ReceiptId = notification.ReceiptId,
                    ReceiptDate = notification.Date,
                    IsReceived = notification.IsReceived,
                    ProductId = notification.ProductId,
                    WarehouseId = notification.WarehouseId,
                    Note = notification.Note,
                    ReceiptDetailId = notification.ReceiptDetailId,
                    LotId = notification.LotId,
                    ReceiptDetailCode = notification.GoodsReceiptNoteDetailCode,
                    ProductUnitId = notification.ProductUnitId,
                    ReceiptNo = notification.ReceiptNo,
                }, cancellationToken);
            }
            else
            {
                if (notification.IsReceived)
                {
                    var goodsReceiptNoteDetails =
                        await _goodsReceiptNoteDetailRepository.GetsByGoodsDeliveryNoteIdAndProductId(
                            notification.TenantId, notification.WarehouseId, notification.ReceiptId,
                            notification.ProductId, notification.LotId, true);
                    if (goodsReceiptNoteDetails != null && goodsReceiptNoteDetails.Any())
                    {
                        var totalAmount = goodsReceiptNoteDetails.Sum(x => x.Price * x.ConversionValue * x.Quantity);
                        var totalConversionQuantity = goodsReceiptNoteDetails.Sum(x => x.Quantity * x.ConversionValue);
                        var price = decimal.Round(totalAmount / totalConversionQuantity, 2);
                        var groupByCodes = goodsReceiptNoteDetails.GroupBy(x => x.Code).ToList();
                        if (groupByCodes.Any())
                        {
                            foreach (var groupByCode in groupByCodes)
                            {
                                var goodsDeliveryNoteDetail = groupByCode.FirstOrDefault();
                                if (goodsDeliveryNoteDetail == null)
                                    continue;

                                await _inventoryReportService.InsertInventoryReportDetail(new InventoryReportDetail
                                {
                                    ProductId = goodsDeliveryNoteDetail.ProductId,
                                    LotId = goodsDeliveryNoteDetail.LotId,
                                    TenantId = goodsDeliveryNoteDetail.TenantId,
                                    Date = notification.Date,
                                    GoodsReceiptNoteDetailCode = groupByCode.Key,
                                    Quantity = groupByCode.Sum(x => x.Quantity * x.ConversionValue),
                                    Price = price,
                                    IsReceived = notification.IsReceived,
                                    Note = notification.Note,
                                    WarehouseId = notification.WarehouseId,
                                    ReceiptId = notification.ReceiptId,
                                    ProductUnitId = notification.ProductUnitId,
                                    ReceiptNo = notification.ReceiptNo
                                });
                            }
                        }
                    }
                }
                else
                {
                    var goodsDeliveryNoteDetails =
                        await _goodsDeliveryNoteDetailsRepository.GetsByGoodsDeliveryNoteIdAndProductId(
                            notification.TenantId, notification.WarehouseId, notification.ReceiptId,
                            notification.ProductId, notification.LotId, true);
                    if (goodsDeliveryNoteDetails != null && goodsDeliveryNoteDetails.Any())
                    {
                        var totalAmount = goodsDeliveryNoteDetails.Sum(x => x.Price * x.ConversionValue * x.Quantity);
                        var totalConversionQuantity = goodsDeliveryNoteDetails.Sum(x => x.Quantity * x.ConversionValue);
                        var price = decimal.Round(totalAmount / totalConversionQuantity, 2);
                        var groupByCodes = goodsDeliveryNoteDetails.GroupBy(x => x.GoodsReceiptNoteCode).ToList();
                        if (groupByCodes.Any())
                        {
                            foreach (var groupByCode in groupByCodes)
                            {
                                var goodsDeliveryNoteDetail = groupByCode.FirstOrDefault();
                                if (goodsDeliveryNoteDetail == null)
                                    continue;

                                await _inventoryReportService.InsertInventoryReportDetail(new InventoryReportDetail
                                {
                                    ProductId = goodsDeliveryNoteDetail.ProductId,
                                    LotId = goodsDeliveryNoteDetail.LotId,
                                    TenantId = goodsDeliveryNoteDetail.TenantId,
                                    Date = notification.Date,
                                    GoodsReceiptNoteDetailCode = groupByCode.Key,
                                    Quantity = groupByCode.Sum(x => x.Quantity * x.ConversionValue),
                                    Price = price,
                                    IsReceived = notification.IsReceived,
                                    Note = notification.Note,
                                    WarehouseId = notification.WarehouseId,
                                    ReceiptId = notification.ReceiptId,
                                    ProductUnitId = notification.ProductUnitId,
                                    ReceiptNo = notification.ReceiptNo
                                });
                            }
                        }
                    }
                }
            }
        }
    }
}
