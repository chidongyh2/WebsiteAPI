using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Commands;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.IServices;
using GHM.Warehouse.Domain.Models;
using MediatR;

namespace GHM.Warehouse.Infrastructure.CommandHandlers
{
    public class DeletedReceiptNoteDetailCommandHandler : INotificationHandler<DeletedReceiptNoteDetailCommand>
    {
        private readonly IGoodsReceiptNoteDetailRepository _goodsReceiptNoteDetailRepository;
        private readonly IGoodsDeliveryNoteDetailsRepository _goodsDeliveryNoteDetailsRepository;
        private readonly IWarehouseConfigRepository _warehouseConfigRepository;
        private readonly IInventoryReportService _inventoryReportService;
        private readonly IProductUnitRepository _productUnitRepository;

        public DeletedReceiptNoteDetailCommandHandler(IGoodsReceiptNoteDetailRepository goodsReceiptNoteDetailRepository,
            IWarehouseConfigRepository warehouseConfigRepository, IInventoryReportService inventoryReportService,
            IGoodsDeliveryNoteDetailsRepository goodsDeliveryNoteDetailsRepository, IProductUnitRepository productUnitRepository)
        {
            _goodsReceiptNoteDetailRepository = goodsReceiptNoteDetailRepository;
            _warehouseConfigRepository = warehouseConfigRepository;
            _inventoryReportService = inventoryReportService;
            _goodsDeliveryNoteDetailsRepository = goodsDeliveryNoteDetailsRepository;
            _productUnitRepository = productUnitRepository;
        }

        public async Task Handle(DeletedReceiptNoteDetailCommand notification, CancellationToken cancellationToken)
        {
            // Xóa chi tiết báo cáo tồn.
            await _inventoryReportService.DeleteInventoryReportDetail(notification.TenantId, notification.WarehouseId,
                notification.ProductId, notification.Code, notification.LotId, notification.Date, notification.ReceiptId, notification.IsReceived);

            if (notification.IsReceived)
            {
                // Lấy về thông tin phiếu nhập theo code.
                var goodsReceiptNoteDetails = await _goodsReceiptNoteDetailRepository.GetByCode(notification.TenantId,
                    notification.WarehouseId, notification.Code);

                if (goodsReceiptNoteDetails != null && goodsReceiptNoteDetails.Any())
                {
                    // Nhóm sản phẩm theo lô.
                    var groupByLots = goodsReceiptNoteDetails.GroupBy(x => x.LotId);
                    foreach (var groupByLot in groupByLots)
                    {
                        var totalAmount = groupByLot.Sum(x => x.Price * x.Quantity * x.ConversionValue);
                        var totalConversionQuantity = groupByLot.Sum(x => x.Quantity * x.ConversionValue);
                        var price = decimal.Round(totalAmount / totalConversionQuantity, 2);
                        var goodsReceiptNoteDetail = groupByLot.FirstOrDefault();
                        if (goodsReceiptNoteDetail == null)
                            continue;

                        // Lấy về đơn vị mặc định
                        var defaultUnit = await _productUnitRepository.GetDefaultUnit(goodsReceiptNoteDetail.TenantId, goodsReceiptNoteDetail.ProductId);
                        if (defaultUnit == null)
                            continue;

                        await _inventoryReportService.InsertInventoryReportDetail(new InventoryReportDetail
                        {
                            ProductId = goodsReceiptNoteDetail.ProductId,
                            LotId = goodsReceiptNoteDetail.LotId,
                            TenantId = goodsReceiptNoteDetail.TenantId,
                            Date = notification.Date,
                            GoodsReceiptNoteDetailCode = goodsReceiptNoteDetail.Code,
                            Quantity = totalConversionQuantity,
                            Price = price,
                            IsReceived = notification.IsReceived,
                            WarehouseId = notification.WarehouseId,
                            ReceiptId = notification.ReceiptId,
                            ReceiptNo = notification.ReceiptNo,
                            ProductUnitId = defaultUnit.Id
                        });
                    }
                }
            }
            else
            {
                // Lấy về thông tin phiếu nhập theo code.
                var goodsDeliveryNoteDetails = await _goodsDeliveryNoteDetailsRepository.GetsByProductId(notification.TenantId,
                    notification.WarehouseId, notification.ReceiptId, notification.ProductId, notification.LotId);

                if (goodsDeliveryNoteDetails != null && goodsDeliveryNoteDetails.Any())
                {
                    // Nhóm sản phẩm theo lô.
                    var groupByLots = goodsDeliveryNoteDetails.GroupBy(x => x.LotId);
                    foreach (var groupByLot in groupByLots)
                    {
                        var totalAmount = groupByLot.Sum(x => x.Price * x.ConversionValue * x.Quantity);
                        var totalConversionQuantity = groupByLot.Sum(x => x.Quantity * x.ConversionValue);
                        var price = decimal.Round(totalAmount / totalConversionQuantity, 2);

                        // Nhóm sản phẩm theo mã phiếu nhập.
                        var groupByGoodsReceiptNoteDetailCode = groupByLot.GroupBy(x => x.GoodsReceiptNoteCode).ToList();
                        if (groupByGoodsReceiptNoteDetailCode.Any())
                        {
                            foreach (var groupGoodsDeliveryNoteDetails in groupByGoodsReceiptNoteDetailCode)
                            {
                                var goodsDeliveryNoteDetail = groupGoodsDeliveryNoteDetails.FirstOrDefault();
                                if (goodsDeliveryNoteDetail == null)
                                    continue;

                                // Lấy về đơn vị mặc định
                                var defaultUnit = await _productUnitRepository.GetDefaultUnit(goodsDeliveryNoteDetail.TenantId, goodsDeliveryNoteDetail.ProductId);
                                if (defaultUnit == null)
                                    continue;

                                await _inventoryReportService.InsertInventoryReportDetail(new InventoryReportDetail
                                {
                                    ProductId = goodsDeliveryNoteDetail.ProductId,
                                    LotId = goodsDeliveryNoteDetail.LotId,
                                    TenantId = goodsDeliveryNoteDetail.TenantId,
                                    Date = notification.Date,
                                    GoodsReceiptNoteDetailCode = goodsDeliveryNoteDetail.GoodsReceiptNoteCode,
                                    Quantity = groupGoodsDeliveryNoteDetails.Sum(x => x.Quantity * x.ConversionValue),
                                    Price = price,
                                    IsReceived = notification.IsReceived,
                                    WarehouseId = notification.WarehouseId,
                                    ReceiptId = notification.ReceiptId,
                                    ReceiptNo = notification.ReceiptNo,
                                    ProductUnitId = defaultUnit.Id
                            });
                        }
                    }

                }
            }
        }
    }
}
}
