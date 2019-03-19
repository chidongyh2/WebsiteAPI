using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.SqlServer;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class InventoryReportRepository : RepositoryBase, IInventoryReportRepository
    {
        private readonly IRepository<InventoryReport> _inventoryReportRepository;
        public InventoryReportRepository(IDbContext context) : base(context)
        {
            _inventoryReportRepository = Context.GetRepository<InventoryReport>();
        }

        public async Task<InventoryReport> GetInfo(string id)
        {
            return await _inventoryReportRepository.GetAsync(false, x => x.Id == id && !x.IsDelete);
        }

        public async Task<InventoryReport> GetInfo(string tenantId, string warehouseId, string receiptId, string productId, bool isReceived, DateTime date,
            bool isReadOnly = false)
        {
            return await _inventoryReportRepository.GetAsync(isReadOnly, x =>
                x.TenantId == tenantId && x.WarehouseId == warehouseId && x.ReceiptId == receiptId
                                       && x.ProductId == productId && x.IsReceived == isReceived && x.Date == date &&
                                       !x.IsDelete);
        }

        public async Task<InventoryReport> GetInfoByReceipDetailtId(string tenantId, string warehouseId, string receiptDetailId, bool isReceived,
            bool isReadOnly = false)
        {
            // TODO: Check
            //return await _inventoryReportRepository.GetAsync(isReadOnly,
            //    x => x.TenantId == tenantId && x.WarehouseId == warehouseId && x.ReceiptDetailId == receiptDetailId && !x.IsDelete
            //         && x.IsReceived == isReceived);
            return null;
        }

        public async Task<OpeningStockViewModel> GetOpeningStock(string tenantId, string warehouseId, string productId, DateTime date)
        {
            var query = from ir in Context.Set<InventoryReport>()
                        join ird in Context.Set<InventoryReportDetail>() on ir.Id equals ird.InventoryReportId
                        where ir.TenantId == tenantId && ir.WarehouseId == warehouseId && ir.ProductId == productId
                              && ir.Date < date && !ir.IsDelete
                        orderby ir.Date descending
                        select new OpeningStockViewModel
                        {
                            ProductId = ir.ProductId,
                            Price = ird.Price,
                            ClosingStockQuantity = ir.ClosingStockQuantity,
                            ClosingStockValue = ir.ClosingStockValue,
                            OpeningStockValue = ir.OpeningStockValue,
                            OpeningStockQuantity = ir.OpeningStockQuantity,
                            LotId = ird.LotId,
                            ExWarehousePrice = ird.ExWarehousePrice,
                            ProductUnitId = ird.ProductUnitId,
                            ReceiptDetailCode = ird.GoodsReceiptNoteDetailCode
                        };
            return await query.FirstOrDefaultAsync();
        }

        public async Task<OpeningStockViewModel> GetOpeningStockByLot(string tenantId, string warehouseId, string productId, string lotId,
            DateTime date)
        {
            var query = from ir in Context.Set<InventoryReport>()
                        join ird in Context.Set<InventoryReportDetail>() on ir.Id equals ird.InventoryReportId
                        where ir.TenantId == tenantId && ir.WarehouseId == warehouseId && ir.ProductId == productId
                              && ir.Date < date && ird.LotId == lotId && !ir.IsDelete
                        group ird by new { ird.ProductId, ird.LotId, ir.Date } into g
                        orderby g.Key.Date descending
                        select new OpeningStockViewModel
                        {
                            ProductId = g.Key.ProductId,
                            LotId = g.Key.LotId,
                            //Price = ird.Price,
                            ClosingStockQuantity = g.Sum(x => x.ClosingStockQuantity),
                            ClosingStockValue = g.Sum(x => x.ClosingStockValue),
                            OpeningStockValue = g.Sum(x => x.OpeningStockValue),
                            OpeningStockQuantity = g.Sum(x => x.OpeningStockValue),
                            ProductUnitId = g.FirstOrDefault().ProductUnitId
                        };
            return await query.FirstOrDefaultAsync();
        }

        public async Task<OpeningStockViewModel> GetOpeningStockByCode(string tenantId, string warehouseId, string code, DateTime date)
        {
            var query = from ir in Context.Set<InventoryReport>()
                        join ird in Context.Set<InventoryReportDetail>() on ir.Id equals ird.InventoryReportId
                        where ir.TenantId == tenantId && ir.WarehouseId == warehouseId
                              && ir.Date < date && ird.GoodsReceiptNoteDetailCode == code
                        orderby ir.Date descending
                        select new OpeningStockViewModel
                        {
                            ProductId = ir.ProductId,
                            Price = ird.Price,
                            ClosingStockQuantity = ird.ClosingStockQuantity,
                            ClosingStockValue = ird.ClosingStockValue,
                            OpeningStockValue = ird.OpeningStockValue,
                            OpeningStockQuantity = ird.OpeningStockQuantity,
                            LotId = ird.LotId,
                            ExWarehousePrice = ird.ExWarehousePrice,
                            ProductUnitId = ird.ProductUnitId,
                            ReceiptDetailCode = ird.GoodsReceiptNoteDetailCode
                        };
            return await query.FirstOrDefaultAsync();
        }

        public async Task<InventoryReport> GetOpeningStockByReceiptDetailId(string tenantId, string warehouseId, string receiptDetailId, DateTime date,
            bool isReadOnly = false)
        {
            // TODO: Check
            //var query = from ir in Context.Set<InventoryReport>()
            //            where ir.TenantId == tenantId && ir.WarehouseId == warehouseId && ir.ReceiptDetailId == receiptDetailId &&
            //                  ir.Date < date
            //            orderby ir.Date descending
            //            select ir;
            //return await (isReadOnly ? query.AsNoTracking().FirstOrDefaultAsync() : query.FirstOrDefaultAsync());
            return null;
        }

        public async Task<bool> CheckExists(string tenantId, string warehouseId, string productId, DateTime date)
        {
            return await _inventoryReportRepository.ExistAsync(x =>
                x.TenantId == tenantId && x.WarehouseId == warehouseId && x.ProductId == productId
                && x.Date == date && !x.IsDelete);
        }

        public async Task<int> Insert(InventoryReport inventoryReport)
        {
            _inventoryReportRepository.Create(inventoryReport);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(InventoryReport inventoryReport)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string id)
        {
            var info = await GetInfo(id);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public Task<List<InventoryReport>> Search(string tenantId, string warehouseId, string productId, DateTime fromDate, int page,
            int pageSize, out int totalRows, bool isReadOnly = false)
        {
            Expression<Func<InventoryReport, bool>> spec = x =>
                x.TenantId == tenantId && x.WarehouseId == warehouseId && x.ProductId == productId
                && x.Date > fromDate && !x.IsDelete;

            var sort = Context.Filters.Sort<InventoryReport, DateTime>(x => x.Date);
            var paging = Context.Filters.Page<InventoryReport>(page, pageSize);
            totalRows = _inventoryReportRepository.Count(spec);
            return _inventoryReportRepository.GetsAsync(isReadOnly, spec, sort, paging);
        }

        public Task<List<InventoryReportViewModel>> Search(string tenantId, string warehouseId, DateTime fromDate, DateTime toDate,
            int page, int pageSize, out int totalRows)
        {
            var query = from ir in Context.Set<InventoryReport>()
                        join pt in Context.Set<ProductTranslation>() on ir.ProductId equals pt.ProductId
                        join pu in Context.Set<ProductUnit>() on ir.ProductUnitId equals pu.Id
                        join ut in Context.Set<UnitTranslation>() on pu.UnitId equals ut.UnitId
                        where ir.TenantId == tenantId && ir.WarehouseId == warehouseId
                              && ir.Date >= fromDate && ir.Date <= toDate && !ir.IsDelete && !pt.IsDelete && !ut.IsDelete
                        orderby ir.Date
                        group ir by new { ir.ProductId, ProductName = pt.Name, ir.ProductUnitId, UnitName = ut.Name } into g
                        select new InventoryReportViewModel
                        {
                            ProductId = g.Key.ProductId,
                            ProductName = g.Key.ProductName,
                            ProductUnitId = g.Key.ProductUnitId,
                            UnitName = g.Key.UnitName,
                            ReceivingQuantity = g.Where(x => x.IsReceived).Sum(x => x.Quantity),
                            ReceivingValue = g.Where(x => x.IsReceived).Sum(x => x.TotalAmounts),
                            DeliveringQuantity = g.Where(x => !x.IsReceived).Sum(x => x.Quantity),
                            DeliveringValue = g.Where(x => !x.IsReceived).Sum(x => x.TotalAmounts),
                            OpeningStockQuantity = g.FirstOrDefault() != null ? g.FirstOrDefault().OpeningStockQuantity : 0,
                            OpeningStockValue = g.FirstOrDefault() != null ? g.FirstOrDefault().OpeningStockQuantity : 0,
                            //ClosingStockQuantity = g.FirstOrDefault() != null ? g.FirstOrDefault().ClosingStockQuantity : 0,
                            //ClosingStockValue = g.FirstOrDefault() != null ? g.FirstOrDefault().ClosingStockValue : 0

                        };
            totalRows = query.Count();
            return query
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public Task<List<WarehouseCardItemViewModel>> Search(string tenantId, string warehouseId, string productId, DateTime fromDate, DateTime toDate,
            int page, int pageSize, out int totalRows)
        {
            Expression<Func<InventoryReport, bool>> spec = x =>
                x.TenantId == tenantId && x.WarehouseId == warehouseId && x.ProductId == productId && x.Date >= fromDate && x.Date <= toDate
                && !x.IsDelete;

            totalRows = _inventoryReportRepository.Count(spec);
            var sort = Context.Filters.Sort<InventoryReport, DateTime>(x => x.Date);
            var paging = Context.Filters.Page<InventoryReport>(page, pageSize);
            return _inventoryReportRepository.GetsAsAsync(x => new WarehouseCardItemViewModel
            {
                Id = x.ReceiptId,
                Date = x.Date,
                Quantity = x.Quantity,
                ReceiptNo = x.ReceiptNo,
                //Note = x.Note,
                Inventory = x.ClosingStockQuantity,
                InvoiceDate = x.Date,
                IsReceiving = x.IsReceived,
            }, spec, sort, paging);
        }

        public Task<List<WarehouseCardDetailItemViewModel>> SearchWarehouseCardDetailItems(string tenantId, string warehouseId,
            string productId, DateTime? fromDate, DateTime? toDate, int page, int pageSize, out int totalRows)
        {
            var query = from ir in Context.Set<InventoryReport>()
                        join ird in Context.Set<InventoryReportDetail>() on ir.Id equals ird.InventoryReportId
                        where ir.TenantId == tenantId && ir.WarehouseId == warehouseId && ir.ProductId == productId && ir.Date >= fromDate
                        && ir.Date <= toDate && !ir.IsDelete
                        select new WarehouseCardDetailItemViewModel
                        {
                            Id = ir.ReceiptId,
                            Date = ir.Date,
                            Quantity = ird.Quantity,
                            ReceiptNo = ir.ReceiptNo,
                            //Note = x.Note,
                            Inventory = ird.ClosingStockQuantity,
                            InventoryValue = ird.ClosingStockValue,
                            InvoiceDate = ir.Date,
                            IsReceiving = ir.IsReceived,
                            Value = ird.Price * ird.Quantity,
                            Price = ird.Price,
                            LotId = ird.LotId
                        };
            totalRows = query.Count();
            return query
                .OrderBy(x => x.Date)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

        }

        //public async Task<List<InventoryReport>> GetsByReceiptNoteDetailId(string tenantId, string warehouseId, string receiptDetailId, bool? isReceived)
        //{
        //    return await _inventoryReportRepository.GetsAsync(false, x =>
        //        x.TenantId == tenantId && x.WarehouseId == warehouseId
        //                               && x.IsReceived == isReceived);
        //}

        //public async Task<List<InventoryReport>> GetsByReceiptNoteDetailId(string tenantId, string warehouseId, IEnumerable<string> receiptDetailId,
        //    bool? isReceived)
        //{
        //    Expression<Func<InventoryReport, bool>> spec = x =>
        //        x.TenantId == tenantId && x.WarehouseId == warehouseId;
        //    if (isReceived.HasValue)
        //    {
        //        spec = spec.And(x => x.IsReceived == isReceived.Value);
        //    }
        //    return await _inventoryReportRepository.GetsAsync(false, spec);
        //}

        public async Task<int> SaveChangeAsync()
        {
            return await Context.SaveChangesAsync();
        }

        public Task<List<InventoryReport>> GetsByProductId(string tenantId, string warehouseId, string productId, DateTime fromDate, int page,
            int pageSize, out int totalRows)
        {
            Expression<Func<InventoryReport, bool>> spec = x =>
                x.TenantId == tenantId && x.WarehouseId == warehouseId && x.ProductId == productId && x.Date > fromDate
                && !x.IsDelete;

            var sort = Context.Filters.Sort<InventoryReport, DateTime>(x => x.Date);
            var paging = Context.Filters.Page<InventoryReport>(page, pageSize);

            totalRows = _inventoryReportRepository.Count(spec);
            return _inventoryReportRepository.GetsAsync(false, spec, sort, paging);
        }

        public async Task<List<InventoryReport>> GetByReceiptId(string tenantId, string goodsReceiptNoteId, bool isReceived)
        {
            return await _inventoryReportRepository.GetsAsync(false,
                x => x.TenantId == tenantId && x.ReceiptId == goodsReceiptNoteId && !x.IsDelete && x.IsReceived == isReceived);
        }

        public async Task<int> Updates(List<InventoryReport> inventoryReports)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<decimal> GetExWarehousePriceByCode(string tenantId, string warehouseId, string goodsReceiptNoteDetailCode)
        {
            var query = from ird in Context.Set<InventoryReportDetail>()
                        where ird.TenantId == tenantId && ird.WarehouseId == warehouseId &&
                              ird.GoodsReceiptNoteDetailCode == goodsReceiptNoteDetailCode
                              && ird.IsReceived
                        select ird.ExWarehousePrice;
            return await query.FirstOrDefaultAsync();
        }

        public Task<List<InventoryDetailViewModel>> SearchToTakeInventory(string tenantId, string warehouseId, string keyword, DateTime date,
            int page, int pageSize, out int totalRows)
        {
            keyword = keyword?.Trim().StripVietnameseChars();
            var query = from ir in Context.Set<InventoryReport>()
                        join ird in Context.Set<InventoryReportDetail>() on ir.Id equals ird.InventoryReportId
                        join pu in Context.Set<ProductUnit>() on ir.ProductUnitId equals pu.Id
                        join ut in Context.Set<UnitTranslation>() on pu.UnitId equals ut.UnitId
                        join pt in Context.Set<ProductTranslation>() on ir.ProductId equals pt.ProductId
                        where ir.TenantId == tenantId && ir.WarehouseId == warehouseId
                                                      && ir.Date < date && !ir.IsDelete
                        group ir by new { ir.ProductId, ProductName = pt.Name, pu.UnitId, UnitName = ut.Name } into g
                        select new InventoryDetailViewModel
                        {
                            ProductId = g.Key.ProductId,
                            ProductName = g.Key.ProductName,
                            UnitId = g.Key.UnitId,
                            UnitName = g.Key.UnitName,
                            InventoryQuantity = g.FirstOrDefault().ClosingStockQuantity
                        };

            totalRows = query.Count();
            return query.ToListAsync();
        }

        public async Task<InventoryProductViewModel> GetProductInfo(string tenantId, string warehouseId, string productId, DateTime date)
        {
            var query = from ir in Context.Set<InventoryReport>()
                        join ird in Context.Set<InventoryReportDetail>() on ir.Id equals ird.InventoryReportId
                        join pu in Context.Set<ProductUnit>() on ird.ProductUnitId equals pu.Id
                        join ut in Context.Set<UnitTranslation>() on pu.UnitId equals ut.UnitId
                        where ir.TenantId == tenantId && ir.WarehouseId == warehouseId && ir.ProductId == productId
                              && ir.Date < date && !ir.IsDelete
                        orderby ir.Date descending
                        select new InventoryProductViewModel
                        {
                            UnitId = pu.UnitId,
                            LotId = ird.LotId,
                            UnitName = ut.Name,
                            InventoryQuantity = ird.ClosingStockQuantity
                        };

            return await query.FirstOrDefaultAsync();
        }

        public async Task<List<InventoryProductViewModel>> GetsAllProduct(string tenantId, string warehouseId, DateTime date)
        {
            var query = from ir in Context.Set<InventoryReport>()
                        join ird in Context.Set<InventoryReportDetail>() on ir.Id equals ird.InventoryReportId
                        join pt in Context.Set<ProductTranslation>() on ird.ProductId equals pt.ProductId
                        join pu in Context.Set<ProductUnit>() on ird.ProductUnitId equals pu.Id
                        join ut in Context.Set<UnitTranslation>() on pu.UnitId equals ut.UnitId
                        where ir.TenantId == tenantId && ir.WarehouseId == warehouseId
                              && ir.Date < date && !ir.IsDelete
                        orderby ir.Date descending
                        group ird by new { ird.ProductId, ProductName = pt.Name, ut.UnitId, UnitName = ut.Name, ird.LotId } into g
                        select new InventoryProductViewModel
                        {
                            ProductId = g.Key.ProductId,
                            ProductName = g.Key.ProductName,
                            UnitId = g.Key.UnitId,
                            LotId = g.Key.LotId,
                            UnitName = g.Key.UnitName,
                            InventoryQuantity = g.FirstOrDefault().ClosingStockQuantity
                        };

            return await query.ToListAsync();
        }
    }
}
