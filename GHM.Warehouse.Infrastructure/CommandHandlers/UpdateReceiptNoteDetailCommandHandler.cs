using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Commands;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.IServices;
using GHM.Warehouse.Domain.Models;
using MediatR;

namespace GHM.Warehouse.Infrastructure.CommandHandlers
{
    class UpdateReceiptNoteDetailCommandHandler : INotificationHandler<UpdateReceiptNoteDetailCommand>
    {
        private readonly IInventoryReportService _inventoryReportService;
        private readonly IWarehouseConfigRepository _warehouseConfigRepository;
        private readonly IGoodsReceiptNoteDetailRepository _goodsReceiptNoteDetailRepository;
        private readonly IGoodsDeliveryNoteDetailsRepository _goodsDeliveryNoteDetailsRepository;

        public UpdateReceiptNoteDetailCommandHandler(IInventoryReportService inventoryReportService,
            IWarehouseConfigRepository warehouseConfigRepository,
            IGoodsReceiptNoteDetailRepository goodsReceiptNoteDetailRepository,
            IGoodsDeliveryNoteDetailsRepository goodsDeliveryNoteDetailsRepository)
        {
            _inventoryReportService = inventoryReportService;
            _warehouseConfigRepository = warehouseConfigRepository;
            _goodsReceiptNoteDetailRepository = goodsReceiptNoteDetailRepository;
            _goodsDeliveryNoteDetailsRepository = goodsDeliveryNoteDetailsRepository;
        }

        public async Task Handle(UpdateReceiptNoteDetailCommand notification, CancellationToken cancellationToken)
        {
            // Lấy về phương pháp tính giá xuất kho.
            var inventoryCalculatorMethod =
                await _warehouseConfigRepository.GetInventoryCalculatorMethod(notification.TenantId,
                    notification.WarehouseId);
            if (inventoryCalculatorMethod.HasValue)
            {
                //  Lấy về chi tiết phiếu nhập.
                if (notification.IsReceived)
                {
                    // Thêm báo cáo tồn theo lô mới.
                    var goodsReceiptNoteDetails =
                        await _goodsReceiptNoteDetailRepository.GetsByGoodsReceiptNoteIdAndProductId(notification.TenantId, notification.ReceiptId,
                            notification.ProductId, notification.NewLotId);
                    if (goodsReceiptNoteDetails != null && goodsReceiptNoteDetails.Any())
                    {
                        // Nhóm sản phẩm theo lô.
                        var groupByLots = goodsReceiptNoteDetails.GroupBy(x => x.LotId);
                        foreach (var groupByLot in groupByLots)
                        {
                            var totalAmount = groupByLot.Sum(x => x.Price * x.Quantity);
                            var totalConversionQuantity = groupByLot.Sum(x => x.Quantity * x.ConversionValue);
                            var price = decimal.Round(totalAmount / totalConversionQuantity, 2);
                            var goodsReceiptNoteDetail = groupByLot.FirstOrDefault();
                            if (goodsReceiptNoteDetail == null)
                                continue;

                            // Cập nhật thông tin tồn kho.
                            await _inventoryReportService.UpdateInventoryReportDetail(new InventoryReportDetail
                            {
                                ProductId = goodsReceiptNoteDetail.ProductId,
                                LotId = goodsReceiptNoteDetail.LotId,
                                TenantId = goodsReceiptNoteDetail.TenantId,
                                Date = notification.ReceiptDate,
                                GoodsReceiptNoteDetailCode = goodsReceiptNoteDetail.Code,
                                Quantity = totalConversionQuantity,
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

                    // Cập nhật lại số lô sản phẩm trong bảng báo cáo nhập xuất tồn.
                    if (notification.LotId?.Trim() != notification.NewLotId?.Trim())
                    {
                        var listGoodsReceiptNoteDetailByOldLotId =
                            await _goodsReceiptNoteDetailRepository.GetsByGoodsReceiptNoteIdAndProductId(notification.TenantId, notification.ReceiptId,
                                notification.ProductId, notification.LotId);
                        if (listGoodsReceiptNoteDetailByOldLotId != null && listGoodsReceiptNoteDetailByOldLotId.Any())
                        {
                            // Nhóm sản phẩm theo lô.
                            var groupByLots = listGoodsReceiptNoteDetailByOldLotId.GroupBy(x => x.LotId);
                            foreach (var groupByLot in groupByLots)
                            {
                                var totalAmount = groupByLot.Sum(x => x.Price * x.Quantity * x.ConversionValue);
                                var totalConversionQuantity = groupByLot.Sum(x => x.Quantity * x.ConversionValue);
                                var price = decimal.Round(totalAmount / totalConversionQuantity, 2);
                                var goodsReceiptNoteDetail = groupByLot.FirstOrDefault();
                                if (goodsReceiptNoteDetail == null)
                                    continue;

                                // Cập nhật thông tin tồn kho.
                                await _inventoryReportService.UpdateInventoryReportDetail(new InventoryReportDetail
                                {
                                    ProductId = goodsReceiptNoteDetail.ProductId,
                                    LotId = goodsReceiptNoteDetail.LotId,
                                    TenantId = goodsReceiptNoteDetail.TenantId,
                                    Date = notification.ReceiptDate,
                                    GoodsReceiptNoteDetailCode = goodsReceiptNoteDetail.Code,
                                    Quantity = totalConversionQuantity,
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
                        else
                        {
                            // Không tồn tại xóa chi tiết phiếu xuất theo lô cũ.
                            await _inventoryReportService.DeleteInventoryReportDetail(notification.TenantId,
                                notification.WarehouseId,
                                notification.ProductId, notification.ReceiptDetailCode, notification.LotId, notification.ReceiptDate,
                                notification.ReceiptId, true);
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

                                await _inventoryReportService.UpdateInventoryReportDetail(new InventoryReportDetail
                                {
                                    ProductId = goodsDeliveryNoteDetail.ProductId,
                                    LotId = goodsDeliveryNoteDetail.LotId,
                                    TenantId = goodsDeliveryNoteDetail.TenantId,
                                    Date = notification.ReceiptDate,
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
