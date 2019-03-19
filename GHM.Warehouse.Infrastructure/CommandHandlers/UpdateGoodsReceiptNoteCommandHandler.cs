using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Autofac.Core;
using GHM.Warehouse.Domain.Commands;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.IServices;
using MediatR;

namespace GHM.Warehouse.Infrastructure.CommandHandlers
{
    public class UpdateGoodsReceiptNoteCommandHandler : INotificationHandler<UpdateGoodsReceiptNoteCommand>
    {
        private readonly IInventoryReportService _inventoryReportService;
        private readonly IGoodsReceiptNoteDetailService _goodsReceiptNoteDetailService;
        private readonly IGoodsReceiptNoteDetailRepository _goodsReceiptNoteDetailRepository;
        private readonly IMediator _mediator;

        public UpdateGoodsReceiptNoteCommandHandler(IGoodsReceiptNoteDetailRepository goodsReceiptNoteDetailRepository,
            IInventoryReportService inventoryReportService, IGoodsReceiptNoteDetailService goodsReceiptNoteDetailService, IMediator mediator)
        {
            _goodsReceiptNoteDetailRepository = goodsReceiptNoteDetailRepository;
            _inventoryReportService = inventoryReportService;
            _goodsReceiptNoteDetailService = goodsReceiptNoteDetailService;
            _mediator = mediator;
        }

        public async Task Handle(UpdateGoodsReceiptNoteCommand updateGoodsReceiptNoteCommand, CancellationToken cancellationToken)
        {
            var fromDate =
                DateTime.Compare(updateGoodsReceiptNoteCommand.OldEntryDate, updateGoodsReceiptNoteCommand.NewEntryDate) < 0
                    ? updateGoodsReceiptNoteCommand.OldEntryDate
                    : updateGoodsReceiptNoteCommand.NewEntryDate;

            // Trường hợp đổi kho sẽ cập nhật lại kho mới cho chi tiết phiếu nhập.
            if (updateGoodsReceiptNoteCommand.OldWarehouseId != updateGoodsReceiptNoteCommand.NewWarehouseId
                || DateTime.Compare(updateGoodsReceiptNoteCommand.OldEntryDate,
                    updateGoodsReceiptNoteCommand.NewEntryDate) != 0)
            {
                var result = await _goodsReceiptNoteDetailService.ChangeWarehouse(
                    updateGoodsReceiptNoteCommand.TenantId,
                    updateGoodsReceiptNoteCommand.GoodsReceiptNoteId, updateGoodsReceiptNoteCommand.NewWarehouseId,
                    updateGoodsReceiptNoteCommand.UserId, updateGoodsReceiptNoteCommand.FullName);

                await _inventoryReportService.UpdateInventory(updateGoodsReceiptNoteCommand.TenantId,
                    updateGoodsReceiptNoteCommand.GoodsReceiptNoteId, updateGoodsReceiptNoteCommand.OldWarehouseId,
                    updateGoodsReceiptNoteCommand.NewEntryDate, true);
            }

            // Lấy về danh sách sản phẩm theo phiếu nhập chi tiết.
            var goodsReceiptNoteDetails =
                await _goodsReceiptNoteDetailRepository.GetsByGoodsReceiptNoteId(updateGoodsReceiptNoteCommand.TenantId,
                    updateGoodsReceiptNoteCommand.GoodsReceiptNoteId);

            if (goodsReceiptNoteDetails.Any())
            {
                foreach (var goodsReceiptNoteDetail in goodsReceiptNoteDetails)
                {
                    await _inventoryReportService.SynchronizeAllInventory(updateGoodsReceiptNoteCommand.TenantId,
                        updateGoodsReceiptNoteCommand.OldWarehouseId,
                        goodsReceiptNoteDetail.ProductId, goodsReceiptNoteDetail.LotId, fromDate);

                    // Trường hợp thay đổi kho. Cập nhật lại tồn kho của kho mới.
                    if (updateGoodsReceiptNoteCommand.OldWarehouseId != updateGoodsReceiptNoteCommand.NewWarehouseId)
                    {
                        await _inventoryReportService.SynchronizeAllInventory(updateGoodsReceiptNoteCommand.TenantId,
                            updateGoodsReceiptNoteCommand.NewWarehouseId,
                            goodsReceiptNoteDetail.ProductId, goodsReceiptNoteDetail.LotId, fromDate);
                    }
                }
            }
        }
    }
}
