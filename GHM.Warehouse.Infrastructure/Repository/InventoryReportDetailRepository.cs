using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class InventoryReportDetailRepository : RepositoryBase, IInventoryReportDetailRepository
    {
        private readonly IRepository<InventoryReportDetail> _inventoryReportDetailRepository;
        public InventoryReportDetailRepository(IDbContext context) : base(context)
        {
            _inventoryReportDetailRepository = Context.GetRepository<InventoryReportDetail>();
        }

        public async Task<bool> CheckExists(string id, string inventoryReportId, string productId, string productUnitId, string lotId)
        {
            return await _inventoryReportDetailRepository.ExistAsync(x =>
                x.Id != id && x.InventoryReportId == inventoryReportId
                           && x.ProductId == productId && x.ProductUnitId == productUnitId
                           && x.LotId == lotId);
        }

        public async Task<bool> CheckExists(string tenantId, string warehouseId, string receiptId, string productId, string lotId,
            string goodsReceiptNoteDetailCode)
        {
            return await _inventoryReportDetailRepository.ExistAsync(x =>
                x.TenantId == tenantId && x.WarehouseId == warehouseId && x.ProductId == productId
                && x.ReceiptId == receiptId && x.LotId == lotId &&
                x.GoodsReceiptNoteDetailCode == goodsReceiptNoteDetailCode);
        }

        public async Task<int> Insert(InventoryReportDetail inventoryReportDetail)
        {
            _inventoryReportDetailRepository.Create(inventoryReportDetail);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<InventoryReportDetail> inventoryReportDetails)
        {
            _inventoryReportDetailRepository.Creates(inventoryReportDetails);
            return await Context.SaveChangesAsync();
        }

        public async Task<List<InventoryReportDetail>> GetsAll(string inventoryReportId, string productId, bool isReadOnly = false)
        {
            return await _inventoryReportDetailRepository.GetsAsync(isReadOnly, x =>
                x.InventoryReportId == inventoryReportId
                && x.ProductId == productId);
        }

        public async Task<InventoryReportDetail> GetInfoByProduct(string tenantId, string warehouseId, string receiptId, string productId, string lotId,
            string goodsReceiptNoteDetailCode, bool isReceived, DateTime date, bool isReadOnly = false)
        {
            return await _inventoryReportDetailRepository.GetAsync(isReadOnly, x =>
                x.TenantId == tenantId && x.WarehouseId == warehouseId && x.LotId == lotId
                && x.ReceiptId == receiptId && x.ProductId == productId && x.IsReceived == isReceived
                && x.GoodsReceiptNoteDetailCode == goodsReceiptNoteDetailCode
                && x.Date == date);
        }

        public async Task<InventoryReportDetail> GetInfo(string inventoryReportId, string productId, string lotId, bool isReadOnly = false)
        {
            return await _inventoryReportDetailRepository.GetAsync(isReadOnly, x =>
                x.InventoryReportId == inventoryReportId && (string.IsNullOrEmpty(lotId) || x.LotId == lotId)
                && x.ProductId == productId);
        }

        public async Task<InventoryReportDetail> GetInfo(string tenantId, string warehouseId, string receiptId, string productId, string lotId,
            string goodsReceiptNoteDetailCode, bool isReceived, bool isReadOnly = false)
        {
            return await _inventoryReportDetailRepository.GetAsync(isReadOnly, x =>
                x.TenantId == tenantId && x.WarehouseId == warehouseId && x.ProductId == productId
                && x.ReceiptId == receiptId && x.LotId == lotId && x.IsReceived == isReceived
                && x.GoodsReceiptNoteDetailCode == goodsReceiptNoteDetailCode);
        }

        public async Task<InventoryReportDetail> GetInfoByCode(string tenantId, string warehouseId, string code, string lotId,
            DateTime date, bool isReceived, bool isReadOnly = false)
        {
            return await _inventoryReportDetailRepository.GetAsync(isReadOnly, x =>
                x.TenantId == tenantId && x.WarehouseId == warehouseId && x.GoodsReceiptNoteDetailCode == code && x.LotId == lotId && x.Date == date
                && x.IsReceived == isReceived);
        }

        public async Task<int> Updates(List<InventoryReportDetail> inventoryReportDetails)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(InventoryReportDetail inventoryReportDetail)
        {
            var info = await _inventoryReportDetailRepository.GetAsync(false, x => x.Id == inventoryReportDetail.Id);
            if (info == null)
                return -1; ;

            info.OpeningStockQuantity = inventoryReportDetail.OpeningStockQuantity;
            info.ClosingStockQuantity = inventoryReportDetail.ClosingStockQuantity;
            info.OpeningStockValue = inventoryReportDetail.OpeningStockValue;
            info.Quantity = inventoryReportDetail.Quantity;
            info.Price = inventoryReportDetail.Price;
            info.ExWarehousePrice = inventoryReportDetail.ExWarehousePrice;
            return await Context.SaveChangesAsync();
        }

        public async Task<InventoryReportDetail> GetInfo(string tenantId, string warehouseId, string receiptId, string code, bool isReceived)
        {
            return await _inventoryReportDetailRepository.GetAsync(false, x =>
                x.TenantId == tenantId && x.WarehouseId == warehouseId
                                       && x.ReceiptId == receiptId && x.GoodsReceiptNoteDetailCode == code &&
                                       x.IsReceived == isReceived);
        }

        public async Task<InventoryReportDetail> GetInfo(string tenantId, string warehouseId, string receiptId, string productId, string lotId, bool isReceived,
            DateTime date)
        {
            return await _inventoryReportDetailRepository.GetAsync(false, x =>
                x.TenantId == tenantId && x.WarehouseId == warehouseId && x.ReceiptId == receiptId
                && x.ProductId == productId && x.LotId == lotId && x.IsReceived == isReceived);
        }

        public async Task<List<GoodsReceiptNoteDetailStats>> GetStats(string inventoryReportId)
        {
            var query = from ird in Context.Set<InventoryReportDetail>()
                        where ird.InventoryReportId == inventoryReportId
                        group ird by new { ird.ProductId, ird.LotId }
                into g
                        select new GoodsReceiptNoteDetailStats
                        {
                            ProductId = g.Key.ProductId,
                            LotId = g.Key.LotId,
                            Quantity = g.Sum(x => x.Quantity),
                            Value = g.Sum(x => x.Price * x.Quantity)
                        };
            return await query.ToListAsync();
        }

        public async Task<string> Delete(string tenantId, string warehouseId, string receiptId, string code, bool isReceived)
        {
            var info = await GetInfo(tenantId, warehouseId, receiptId, code, isReceived);
            if (info == null)
                return string.Empty;

            var inventoryReportId = info.InventoryReportId;
            _inventoryReportDetailRepository.Delete(info);
            var result = await Context.SaveChangesAsync();
            return result > 0
                ? inventoryReportId
                : string.Empty;
        }

        public async Task<string> Delete(string tenantId, string warehouseId, string receiptId, string productId, string goodsReceiptNoteDetailCode,
            string lotId, DateTime date, bool isReceived)
        {
            var info = await _inventoryReportDetailRepository
                .GetAsync(false, x => x.TenantId == tenantId && x.ProductId == productId
                    && x.WarehouseId == warehouseId && x.ReceiptId == receiptId
                    && x.GoodsReceiptNoteDetailCode == goodsReceiptNoteDetailCode
                    && x.IsReceived == isReceived
                    && x.Date == date && x.LotId == lotId);
            if (info == null)
                return string.Empty;

            var inventoryReportId = info.InventoryReportId;
            _inventoryReportDetailRepository.Delete(info);
            var result = await Context.SaveChangesAsync();
            return result > 0
                ? inventoryReportId
                : string.Empty;
        }

        public async Task<bool> CheckProductExists(string tenantId, string warehouseId, string productId, DateTime date, bool isReceived)
        {
            return await _inventoryReportDetailRepository.ExistAsync(x =>
                x.TenantId == tenantId && x.WarehouseId == warehouseId && x.ProductId == productId
                && x.Date == date && x.IsReceived == isReceived);
        }

        public async Task<List<InventoryReportDetail>> GetsByReceiptAndLotId(string tenantId, string warehouseId, string receiptId, string productId,
            string lotId, bool isReceived, bool isReadOnly = false)
        {
            return await _inventoryReportDetailRepository.GetsAsync(isReadOnly, x =>
                x.TenantId == tenantId && x.WarehouseId == warehouseId
                                       && x.ReceiptId == receiptId && x.LotId == lotId && x.IsReceived == isReceived
                                       && x.ProductId == productId);
        }
    }
}
