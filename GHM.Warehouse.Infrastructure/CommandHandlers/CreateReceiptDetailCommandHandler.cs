using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Models;
using GHM.Warehouse.Domain.Commands;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.IServices;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using MediatR;

namespace GHM.Warehouse.Infrastructure.CommandHandlers
{
    class CreateReceiptDetailCommandHandler : INotificationHandler<CreateReceiptDetailCommand>
    {
        private readonly IInventoryReportService _inventoryReportService;
        private readonly IInventoryReportRepository _inventoryReportRepository;
        private readonly IInventoryReportDetailRepository _inventoryReportDetailRepository;

        public CreateReceiptDetailCommandHandler(IInventoryReportService inventoryReportService,
            IInventoryReportRepository inventoryReportRepository,
            IInventoryReportDetailRepository inventoryReportDetailRepository)
        {
            _inventoryReportService = inventoryReportService;
            _inventoryReportRepository = inventoryReportRepository;
            _inventoryReportDetailRepository = inventoryReportDetailRepository;
        }

        public async Task Handle(CreateReceiptDetailCommand notification, CancellationToken cancellationToken)
        {
            // Lấy về thông tin tồn kho.
            // Tồn kho theo sản phẩm
            var openingStock = await _inventoryReportRepository.GetOpeningStock(notification.TenantId,
                notification.WarehouseId, notification.ProductId,
                notification.Date);

            // Tồn kho theo lô.
            var openingStockByLot = await _inventoryReportRepository.GetOpeningStockByLot(notification.TenantId,
                notification.WarehouseId,
                notification.ProductId, notification.LotId, notification.Date);

            var openingStockQuantity = openingStock?.ClosingStockQuantity ?? 0;
            var openingStockValue = openingStock?.ClosingStockValue ?? 0;
            var openingStockQuantityByLot = openingStockByLot?.ClosingStockQuantity ?? 0;
            var openingStockValueByLot = openingStockByLot?.ClosingStockValue ?? 0;

            // Trường hợp chưa tồn tại tồn khi thêm mới tồn kho. Nếu đã tồn tại cập nhập lại thông tin tồn kho.
            var inventoryReport = await _inventoryReportRepository.GetInfo(notification.TenantId, notification.WarehouseId,
                notification.ReceiptId, notification.ProductId, notification.IsReceived, notification.Date);
            if (inventoryReport == null)
            {
                inventoryReport = new InventoryReport
                {
                    ProductId = notification.ProductId,
                    TenantId = notification.TenantId,
                    ReceiptNo = notification.ReceiptNo,
                    WarehouseId = notification.WarehouseId,
                    ReceiptId = notification.ReceiptId,
                    Date = notification.Date,
                    OpeningStockQuantity = openingStockQuantity,
                    OpeningStockValue = openingStockValue,
                    ClosingStockValue = notification.IsReceived
                        ? openingStockValue + notification.Price * notification.Quantity
                        : openingStockValue - notification.Price * notification.Quantity,
                    ClosingStockQuantity = notification.IsReceived
                        ? openingStockQuantity + notification.Quantity
                        : openingStockQuantity - notification.Quantity,
                    TotalAmounts = notification.Quantity * notification.Price,
                    Quantity = notification.Quantity,
                    ProductUnitId = notification.ProductUnitId,
                    IsReceived = notification.IsReceived,
                };
                var inventoryReportDetail = new InventoryReportDetail
                {
                    Quantity = notification.Quantity,
                    Price = notification.Price,
                    ProductId = notification.ProductId,
                    InventoryReportId = inventoryReport.Id,
                    GoodsReceiptNoteDetailCode = notification.Code,
                    OpeningStockQuantity = openingStockQuantityByLot,
                    OpeningStockValue = openingStockValueByLot,
                    ClosingStockValue = notification.IsReceived
                        ? openingStockValueByLot + notification.Price * notification.Quantity
                        : openingStockQuantityByLot - notification.Price * notification.Quantity,
                    ClosingStockQuantity = notification.IsReceived
                        ? openingStockQuantity + notification.Quantity
                        : openingStockQuantity - notification.Quantity,
                    LotId = notification.LotId,
                    Note = notification.Note,
                    ProductUnitId = notification.ProductUnitId
                };
                inventoryReportDetail.ExWarehousePrice =
                    await _inventoryReportService.GetExWarehousePrice(notification.TenantId,
                        notification.WarehouseId, openingStockValue, openingStockValue, notification.Date,
                        inventoryReportDetail);
                inventoryReport.InventoryReportDetails.Add(inventoryReportDetail);

                await _inventoryReportRepository.Insert(inventoryReport);
            }
            else
            {
                // Cập nhật lại tồn kho và tồn kho chi tiết.
                var inventoryReportDetails =
                    await _inventoryReportDetailRepository.GetsAll(inventoryReport.Id, notification.ProductId);

                // Trường hợp chưa có báo cáo tồn chi tiết. Thêm mới báo cáo tồn chi tiết sau đó cập nhật lại báo cáo tồn.
                if (inventoryReportDetails == null || !inventoryReportDetails.Any())
                {
                    // Thêm mới báo cáo tồn chi tiết.
                    var inventoryReportDetail = new InventoryReportDetail
                    {
                        Quantity = notification.Quantity,
                        Price = notification.Price,
                        ProductId = notification.ProductId,
                        InventoryReportId = inventoryReport.Id,
                        GoodsReceiptNoteDetailCode = notification.Code,
                        OpeningStockQuantity = openingStockQuantityByLot,
                        OpeningStockValue = openingStockValueByLot,
                        ClosingStockValue = notification.IsReceived
                            ? openingStockValueByLot + notification.Price * notification.Quantity
                            : openingStockQuantityByLot - notification.Price * notification.Quantity,
                        ClosingStockQuantity = notification.IsReceived
                            ? openingStockQuantity + notification.Quantity
                            : openingStockQuantity - notification.Quantity,
                        LotId = notification.LotId,
                        Note = notification.Note,
                        ProductUnitId = notification.ProductUnitId
                    };
                    inventoryReportDetail.ExWarehousePrice =
                        await _inventoryReportService.GetExWarehousePrice(notification.TenantId,
                            notification.WarehouseId, openingStockValue, openingStockValue, notification.Date,
                            inventoryReportDetail);
                    var result = await _inventoryReportDetailRepository.Insert(inventoryReportDetail);
                    if (result > 0)
                    {
                        var reportStats =
                            await _inventoryReportDetailRepository.GetStats(inventoryReport.Id);
                        var totalQuantity = reportStats.Sum(x => x.Quantity);
                        var totalValues = reportStats.Sum(x => x.Value);

                        // Cập nhật lại tồn kho.
                        inventoryReport.ClosingStockQuantity = inventoryReport.IsReceived
                            ? openingStockQuantity + totalQuantity
                            : openingStockQuantity - totalQuantity;
                        inventoryReport.ClosingStockValue = inventoryReport.IsReceived
                            ? openingStockValue + totalValues
                            : openingStockValue - totalValues;
                        inventoryReport.TotalAmounts = totalValues;
                        inventoryReport.Quantity = totalQuantity;
                    }
                }
                else
                {
                    var inventoryReportDetail =
                        inventoryReportDetails.FirstOrDefault(x => x.LotId == notification.LotId);
                    if (inventoryReportDetail != null)
                    {
                        // Cập nhật lại kết quả.
                        inventoryReportDetail.OpeningStockQuantity = openingStockQuantityByLot;
                        inventoryReportDetail.OpeningStockValue = openingStockValueByLot;
                        inventoryReportDetail.Quantity = notification.Quantity;
                        inventoryReportDetail.Price = notification.Price;
                    }
                }
            }
        }
    }
}
