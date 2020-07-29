using System;
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
    public class CreateGoodsReceiptNoteCommandHandler : INotificationHandler<CreateGoodsReceiptNoteCommand>
    {
        private readonly IGoodsReceiptNoteDetailRepository _goodsReceiptNoteDetailRepository;
        //private readonly IInventoryDailyReportService _inventoryDailyReportService;
        private readonly IInventoryReportService _inventoryReportService;

        public CreateGoodsReceiptNoteCommandHandler(IGoodsReceiptNoteDetailRepository goodsReceiptNoteDetailRepository,
            IInventoryReportService inventoryReportService)
        {
            _goodsReceiptNoteDetailRepository = goodsReceiptNoteDetailRepository;
            _inventoryReportService = inventoryReportService;
        }

        public async Task Handle(CreateGoodsReceiptNoteCommand goodsReceiptNoteCommand, CancellationToken cancellationToken)
        {
            var goodsReceiptNoteDetails =
                await _goodsReceiptNoteDetailRepository.GetsByGoodsReceiptNoteId(goodsReceiptNoteCommand.TenantId, goodsReceiptNoteCommand.GoodsReceiptNoteId);
            if (goodsReceiptNoteDetails != null && goodsReceiptNoteDetails.Any())
            {
                var products = goodsReceiptNoteDetails.ToList();
                foreach (var product in products)
                {
                    // Thêm tồn kho cho ngày nhập.
                    await _inventoryReportService.Insert(new InventoryReport
                    {
                        TenantId = goodsReceiptNoteCommand.TenantId,
                        ProductId = product.ProductId,
                        Date = goodsReceiptNoteCommand.EntryDate,
                        Quantity = product.Quantity,
                        //Price = product.Price,
                        WarehouseId = goodsReceiptNoteCommand.WarehouseId,
                        ReceiptId = goodsReceiptNoteCommand.GoodsReceiptNoteId,
                        IsReceived = true
                    });
                }
            }
        }
    }
}
