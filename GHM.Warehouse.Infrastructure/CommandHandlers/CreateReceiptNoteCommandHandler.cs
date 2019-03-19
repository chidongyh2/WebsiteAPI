using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Commands;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.IServices;
using MediatR;

namespace GHM.Warehouse.Infrastructure.CommandHandlers
{
    public class CreateReceiptNoteCommandHandler : INotificationHandler<CreateReceiptNoteCommand>
    {
        private readonly IWarehouseConfigRepository _warehouseConfigRepository;
        private readonly IInventoryReportService _inventoryReportService;
        private readonly IInventoryReportRepository _inventoryReportRepository;

        public CreateReceiptNoteCommandHandler(IInventoryReportService inventoryReportService, IWarehouseConfigRepository warehouseConfigRepository,
            IInventoryReportRepository inventoryReportRepository)
        {
            _inventoryReportService = inventoryReportService;
            _warehouseConfigRepository = warehouseConfigRepository;
            _inventoryReportRepository = inventoryReportRepository;
        }

        public async Task Handle(CreateReceiptNoteCommand goodsReceiptNoteCommand,
            CancellationToken cancellationToken)
        {
            if (goodsReceiptNoteCommand.InventoryReports.Any())
            {
                var firstInventoryReport = goodsReceiptNoteCommand.InventoryReports.FirstOrDefault();
                if (firstInventoryReport != null)
                {
                    // Lấy về phương pháp tính giá xuất kho.
                    var inventoryCalculatorMethod =
                        await _warehouseConfigRepository.GetInventoryCalculatorMethod(firstInventoryReport.TenantId,
                            firstInventoryReport.WarehouseId);
                    if (inventoryCalculatorMethod.HasValue)
                    {
                        foreach (var inventoryReport in goodsReceiptNoteCommand.InventoryReports)
                        {
                            // Lấy về số lượng tồn kho của sản phẩm.            
                            var openingStock = await _inventoryReportRepository.GetOpeningStock(inventoryReport.TenantId,
                                inventoryReport.WarehouseId, inventoryReport.ProductId,
                                inventoryReport.Date);
                            inventoryReport.OpeningStockQuantity = openingStock?.ClosingStockQuantity ?? 0;
                            inventoryReport.OpeningStockValue = openingStock?.ClosingStockValue ?? 0;
                            inventoryReport.InventoryCalculatorMethod = inventoryCalculatorMethod.Value;
                            inventoryReport.Quantity = inventoryReport.InventoryReportDetails.Sum(x => x.Quantity);
                            inventoryReport.TotalAmounts =
                                inventoryReport.InventoryReportDetails.Sum(x => x.Price * x.Quantity);

                            // Thêm tồn kho cho ngày nhập.                                
                            await _inventoryReportService.Insert(inventoryReport);
                        }
                    }
                }
            }
        }
    }
}
