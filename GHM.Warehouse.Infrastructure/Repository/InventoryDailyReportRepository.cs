using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.SqlServer;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class InventoryDailyReportRepository : RepositoryBase, IInventoryDailyReportRepository
    {
        private readonly IRepository<InventoryDailyReport> _inventoryDailyReportRepository;

        public InventoryDailyReportRepository(IDbContext context) : base(context)
        {
            _inventoryDailyReportRepository = Context.GetRepository<InventoryDailyReport>();
        }

        public async Task<InventoryDailyReport> GetInfo(string tenantId, string id, bool isReadOnly = false)
        {
            return await _inventoryDailyReportRepository.GetAsync(isReadOnly, x => x.TenantId == tenantId && x.Id == id);
        }

        public async Task<InventoryDailyReport> GetInfo(string tenantId, string warehouseId, byte day, byte month, int year, bool isReadOnly = false)
        {
            return await _inventoryDailyReportRepository.GetAsync(isReadOnly, x => x.TenantId == tenantId && x.WarehouseId == warehouseId
                && x.Day == day && x.Month == month && x.Year == year);
        }

        public async Task<InventoryDailyReport> GetInfo(string tenantId, string warehouseId, string productId, DateTime entryDate, bool isReadOnly = false)
        {
            return await _inventoryDailyReportRepository.GetAsync(isReadOnly, x => x.TenantId == tenantId && x.WarehouseId == warehouseId
                && x.ProductId == productId && EF.Functions.DateDiffDay(x.EntryDate, entryDate) == 0);
        }

        public async Task<InventoryDailyReport> GetOpeningStock(string tenantId, string warehouseId, string productId, DateTime date,
            bool isReadOnly = false)
        {
            var query = from idr in Context.Set<InventoryDailyReport>()
                        where idr.TenantId == tenantId && idr.WarehouseId == warehouseId && idr.ProductId == productId
                        && idr.EntryDate <= date
                        orderby idr.EntryDate descending
                        select idr;

            if (isReadOnly)
                return await query.AsNoTracking().FirstOrDefaultAsync();

            return await query.FirstOrDefaultAsync();
        }

        public async Task<int> Insert(InventoryDailyReport inventoryDailyReport)
        {
            _inventoryDailyReportRepository.Create(inventoryDailyReport);
            return await Context.SaveChangesAsync();
        }

        public Task<List<InventoryDailyReportViewModel>> SearchInventoryOpningStock(string tenantId, string keyword, string warehouseId,
            DateTime fromDate, int page, int pageSize, out int totalRows)
        {
            keyword = !string.IsNullOrEmpty(keyword) ? keyword.Trim().StripVietnameseChars() : keyword;
            var query = from idr in Context.Set<InventoryDailyReport>()
                        join pt in Context.Set<ProductTranslation>() on idr.ProductId equals pt.ProductId
                        join ut in Context.Set<UnitTranslation>() on idr.UnitId equals ut.UnitId
                        where idr.TenantId == tenantId
                              && idr.WarehouseId == warehouseId
                              && (string.IsNullOrEmpty(keyword) || pt.UnsignName.Contains(keyword))
                              && idr.EntryDate <= fromDate
                        orderby idr.EntryDate descending
                        group idr by new { idr.ProductId, pt.Name, UnitName = ut.Name }
                        into g
                        select new InventoryDailyReportViewModel
                        {
                            ProductId = g.Key.ProductId,
                            ProductName = g.Key.Name,
                            UnitName = g.Key.UnitName,
                            OpeningStockQuantity = g.FirstOrDefault().OpeningStockQuantity,
                            OpeningStockValue = g.FirstOrDefault().OpeningStockValue
                        };

            totalRows = query.Count();
            return query.OrderByDescending(x => x.ProductName)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public Task<List<InventoryDailyReportViewModel>> SearchByProduct(string tenantId, string warehouseId, string productId, DateTime? fromDate, DateTime? toDate,
            int page, int pageSize, out int totalRows)
        {
            var query = from idr in Context.Set<InventoryDailyReport>()
                        join pt in Context.Set<ProductTranslation>() on idr.ProductId equals pt.ProductId
                        join w in Context.Set<Domain.Models.Warehouse>() on idr.WarehouseId equals w.Id
                        where idr.TenantId == tenantId
                                && (string.IsNullOrEmpty(warehouseId) || idr.WarehouseId == warehouseId)
                                && (string.IsNullOrEmpty(productId) || idr.ProductId == productId)
                                && (!fromDate.HasValue || fromDate.HasValue && idr.EntryDate >= fromDate)
                                && (!toDate.HasValue || toDate.HasValue && idr.EntryDate <= toDate)
                        select new InventoryDailyReportViewModel
                        {
                            CreateTime = idr.CreateTime,
                            Day = idr.Day,
                            Month = idr.Month,
                            Year = idr.Year,
                            OpeningStockQuantity = idr.OpeningStockQuantity,
                            Id = idr.Id,
                            ProductId = idr.ProductId,
                            ProductName = pt.Name,
                            Quarter = idr.Quarter,
                            ReceivingQuantity = idr.ReceivingQuantity,
                            ReceivingValue = idr.ReceivingValue,
                            DeliveringQuantity = idr.DeliveringQuantity,
                            DeliveringValue = idr.DeliveringValue,
                            WarehouseId = idr.WarehouseId,
                            WarehouseName = w.Name,
                            ClosingStockQuantity = idr.ClosingStockQuantity,
                            ClosingStockValue = idr.ClosingStockValue
                        };

            totalRows = query.Count();
            return query.OrderByDescending(x => x.EntryDate)
                         .Skip((page - 1) * pageSize)
                         .Take(pageSize)
                         .ToListAsync();
        }

        public Task<List<InventoryDailyReportViewModel>> SearchForUpdate(string tenantId, string warehouseId, string productId, DateTime? fromDate, int page, int pageSize,
            out int totalRows)
        {
            var query = from idr in Context.Set<InventoryDailyReport>()
                        join pt in Context.Set<ProductTranslation>() on idr.ProductId equals pt.ProductId
                        join w in Context.Set<Domain.Models.Warehouse>() on idr.WarehouseId equals w.Id
                        where idr.TenantId == tenantId
                                && idr.WarehouseId == warehouseId
                                && idr.ProductId == productId
                                && (!fromDate.HasValue || fromDate.HasValue && idr.EntryDate >= fromDate)
                        select new InventoryDailyReportViewModel
                        {
                            ProductId = idr.ProductId,
                            EntryDate = idr.EntryDate
                        };

            totalRows = query.Count();
            return query.OrderBy(x => x.EntryDate)
                         .Skip((page - 1) * pageSize)
                         .Take(pageSize)
                         .ToListAsync();
        }

        /// <summary>
        /// Lấy về kho còn sản phẩm.
        /// </summary>
        /// <param name="tenantId">Mã khách hàng</param>
        /// <param name="productId">Mã sản phẩm</param>
        /// <param name="page">Trang</param>
        /// <param name="pageSize">Kích thước trang</param>
        /// <param name="totalRows">Tổng số bản ghi</param>
        /// <returns></returns>
        public Task<List<GoodsInventoryViewModel>> GetGoodsInventory(string tenantId, string productId, int page, int pageSize, out int totalRows)
        {
            var query = from idr in Context.Set<InventoryDailyReport>()
                        join pt in Context.Set<ProductTranslation>() on idr.ProductId equals pt.ProductId
                        join w in Context.Set<Domain.Models.Warehouse>() on idr.WarehouseId equals w.Id
                        where idr.TenantId == tenantId && idr.ProductId == productId
                              && !w.IsDelete && !pt.IsDelete && pt.LanguageId == CultureInfo.CurrentCulture.Name
                        select new GoodsInventoryViewModel
                        {
                            WarehouseId = idr.WarehouseId,
                            WarehouseAddress = w.Address,
                            WarehouseName = w.Name,
                            ProductId = pt.ProductId,
                            ProductName = pt.Name
                        };

            totalRows = query.Count();
            return query
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public Task<List<InventoryViewModel>> SearchInventory(string tenantId, string keyword, string warehouseId, DateTime date, int page, int pageSize,
            out int totalRows)
        {
            //if (!string.IsNullOrEmpty(keyword))
            //{
            //    keyword = keyword.Trim().StripVietnameseChars().ToUpper();
            //}

            //var query = from idr in Context.Set<InventoryDailyReport>().AsNoTracking()
            //            join pt in Context.Set<ProductTranslation>().AsNoTracking() on idr.ProductId equals pt.ProductId
            //            join ut in Context.Set<UnitTranslation>() on idr.UnitId equals ut.UnitId
            //            where idr.TenantId == tenantId && idr.WarehouseId == warehouseId
            //                                           && EF.Functions.DateDiffDay(idr.EntryDate, date) == 0
            //                                           && (string.IsNullOrEmpty(keyword) || pt.UnsignName.Contains(keyword))
            //            select new InventoryViewModel
            //            {
            //                ProductId = pt.ProductId,
            //                ProductName = pt.Name,
            //                //ClosingStockQuantity = idr.ClosingStockQuantity,
            //                UnitId = ut.UnitId,
            //                UnitName = ut.Name
            //            };

            //totalRows = query.Count();
            //return query
            //    .OrderByDescending(x => x.ProductName)
            //    .Skip((page - 1) * pageSize)
            //    .Take(pageSize)
            //    .ToListAsync();
            totalRows = 0;
            return null;
        }

        public async Task<bool> CheckExists(string tenantId, string warehouseId, string productId, DateTime date)
        {
            return await _inventoryDailyReportRepository.ExistAsync(x =>
                x.TenantId == tenantId && x.WarehouseId == warehouseId && x.ProductId == productId
                && EF.Functions.DateDiffDay(date, x.EntryDate) == 0);
        }

        public Task<List<string>> GetProductIds(string tenantId, string warehouseId, int page, int pageSize, out int totalRows)
        {
            var query = from idr in Context.Set<InventoryDailyReport>()
                        where idr.TenantId == tenantId && idr.WarehouseId == warehouseId
                        group idr by new { idr.ProductId } into g
                        select g.Key.ProductId;
            totalRows = query.Count();
            return query.Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<decimal> GetInventory(string tenantId, string warehouseId, string productId, DateTime date)
        {
            return await (from idr in Context.Set<InventoryDailyReport>()
                          where idr.TenantId == tenantId && idr.WarehouseId == warehouseId && idr.ProductId == productId
                                && idr.EntryDate <= date
                          orderby idr.EntryDate descending
                          select idr.ClosingStockQuantity).FirstOrDefaultAsync();
        }

        public async Task<int> Update(InventoryDailyReport inventoryDailyReport)
        {
            return await Context.SaveChangesAsync();
        }
    }
}
