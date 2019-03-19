using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class GoodsReceiptNoteDetailRepository : RepositoryBase, IGoodsReceiptNoteDetailRepository
    {
        private readonly IRepository<GoodsReceiptNoteDetail> _goodsReceiptNoteDetailRepository;
        public GoodsReceiptNoteDetailRepository(IDbContext context) : base(context)
        {
            _goodsReceiptNoteDetailRepository = Context.GetRepository<GoodsReceiptNoteDetail>();
        }

        public async Task<int> Inserts(List<GoodsReceiptNoteDetail> goodsReceiptNoteDetails)
        {
            _goodsReceiptNoteDetailRepository.Creates(goodsReceiptNoteDetails);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Insert(GoodsReceiptNoteDetail goodsReceiptNoteDetail)
        {
            _goodsReceiptNoteDetailRepository.Create(goodsReceiptNoteDetail);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(GoodsReceiptNoteDetail goodsReceiptNoteDetail)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Updates(List<GoodsReceiptNoteDetail> listGoodsReceiptNoteDetail)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDeleteByGoodsReceptNoteId(string tenantId, string receiptId)
        {
            var goodsReceiptNoteDetails =
                await _goodsReceiptNoteDetailRepository.GetsAsync(false, x => x.GoodsReceiptNoteId == receiptId && !x.IsDelete && x.TenantId == tenantId);
            if (goodsReceiptNoteDetails == null || !goodsReceiptNoteDetails.Any())
                return -1;

            _goodsReceiptNoteDetailRepository.Deletes(goodsReceiptNoteDetails);
            return await Context.SaveChangesAsync();
        }

        public async Task<GoodsReceiptNoteDetail> GetInfo(string id, bool isReadOnly = false)
        {
            return await _goodsReceiptNoteDetailRepository.GetAsync(isReadOnly, x => x.Id == id && !x.IsDelete);
        }

        public async Task<GoodsReceiptNoteDetail> GetInfo(string receiptId, string id, bool isReadOnly = false)
        {
            return await _goodsReceiptNoteDetailRepository.GetAsync(isReadOnly, x => x.Id == id && x.GoodsReceiptNoteId == receiptId
            && !x.IsDelete);
        }

        public async Task<GoodsReceiptNoteDetail> GetInfoByTenantId(string tenantId, string id)
        {
            return await _goodsReceiptNoteDetailRepository.GetAsync(true,
                x => x.TenantId == tenantId && x.Id == id && !x.IsDelete);
        }

        public async Task<bool> CheckExistsByProductId(string receiptId, string productId)
        {
            return await _goodsReceiptNoteDetailRepository.ExistAsync(x =>
                x.GoodsReceiptNoteId == receiptId && x.ProductId == productId && !x.IsDelete);
        }

        public async Task<int> CountByGoodsReceiptNoteId(string goodsReceiptNoteId)
        {
            return await _goodsReceiptNoteDetailRepository.CountAsync(x =>
                x.GoodsReceiptNoteId == goodsReceiptNoteId && !x.IsDelete);
        }

        public async Task<GoodsReceiptNoteAmounts> GetAmountsByGoodsReceiptNoteId(string goodsReceiptNoteId)
        {
            var goodsReceiptNoteDetails = await _goodsReceiptNoteDetailRepository.GetsAsync(true,
                x => x.GoodsReceiptNoteId == goodsReceiptNoteId && !x.IsDelete);
            if (goodsReceiptNoteDetails == null || !goodsReceiptNoteDetails.Any())
                return new GoodsReceiptNoteAmounts();

            var taxes = goodsReceiptNoteDetails.Where(x => x.Tax.HasValue).Select(x => x.Taxes).Sum();
            var totalBeforeTaxes = goodsReceiptNoteDetails.Select(x => x.Quantity * x.Price).Sum();
            var totalAmounts = (taxes ?? 0) + totalBeforeTaxes;
            return new GoodsReceiptNoteAmounts
            {
                Taxes = taxes ?? 0,
                TotalBeforeTaxes = totalBeforeTaxes,
                TotalAmounts = totalAmounts
            };
        }

        public async Task<List<GoodsReceiptNoteItemViewModel>> GetsByGoodsReceiptNoteId(string tenantId, string receiptId)
        {
            var query = from grnd in Context.Set<GoodsReceiptNoteDetail>()
                        join p in Context.Set<Product>() on grnd.ProductId equals p.Id
                        join pt in Context.Set<ProductTranslation>() on p.Id equals pt.ProductId
                        join ut in Context.Set<UnitTranslation>() on grnd.UnitId equals ut.UnitId
                        join w in Context.Set<Domain.Models.Warehouse>() on grnd.WarehouseId equals w.Id
                        where grnd.GoodsReceiptNoteId == receiptId && !grnd.IsDelete && grnd.TenantId == tenantId
                        select new GoodsReceiptNoteItemViewModel
                        {
                            ProductId = p.Id,
                            ProductName = pt.Name,
                            ExpiryDate = grnd.ExpiryDate,
                            CreateTime = grnd.CreateTime,
                            ConcurrencyStamp = grnd.ConcurrencyStamp,
                            UnitId = grnd.UnitId,
                            UnitName = ut.Name,
                            BrandId = grnd.BrandId,
                            ChargeableWeight = grnd.ChargeableWeight,
                            Height = grnd.Height,
                            Id = grnd.Id,
                            InvoiceQuantity = grnd.InvoiceQuantity,
                            Length = grnd.Length,
                            LotId = grnd.LotId,
                            ManufactureDate = grnd.ManufactureDate,
                            Note = grnd.Note,
                            Price = grnd.Price,
                            Quantity = grnd.Quantity,
                            SKU = grnd.SKU,
                            Tax = grnd.Tax,
                            Taxes = grnd.Taxes,
                            TotalAmounts = grnd.TotalAmounts,
                            TotalBeforeTaxes = grnd.TotalBeforeTaxes,
                            UPC = grnd.UPC,
                            VolumnWidth = grnd.VolumnWidth,
                            WarehouseId = grnd.WarehouseId,
                            WarehouseName = w.Name,
                            Weight = grnd.Weight,
                            Width = grnd.Width
                        };

            return await query.ToListAsync();
        }

        public async Task<List<GoodsReceiptNoteDetail>> GetsAll(string tenantId, string goodsReceiptNoteId)
        {
            return await _goodsReceiptNoteDetailRepository.GetsAsync(false,
                x => !x.IsDelete && x.TenantId == tenantId && x.GoodsReceiptNoteId == goodsReceiptNoteId);
        }

        public async Task<List<GoodsReceiptNoteDetail>> GetsByGoodsReceiptNoteIdAndProductId(string tenantId, string goodsReceiptNoteId, string productId)
        {
            return await _goodsReceiptNoteDetailRepository.GetsAsync(true, x =>
                x.TenantId == tenantId && x.GoodsReceiptNoteId == goodsReceiptNoteId
                                       && x.ProductId == productId && !x.IsDelete);
        }

        public async Task<List<GoodsReceiptNoteDetail>> GetsByGoodsReceiptNoteIdAndProductId(string tenantId, string goodsReceiptNoteId, string productId, string lotId)
        {
            return await _goodsReceiptNoteDetailRepository.GetsAsync(true, x =>
                x.TenantId == tenantId && x.GoodsReceiptNoteId == goodsReceiptNoteId
                                       && x.ProductId == productId && x.LotId == lotId && !x.IsDelete);
        }

        public async Task<List<GoodsReceiptQuantity>> GetsProductInfoForinventoryDailyReportByDay(string tenantId, string warehouseId, string productId, DateTime day)
        {
            return await (from grn in Context.Set<GoodsReceiptNote>()
                          join grnd in Context.Set<GoodsReceiptNoteDetail>() on grn.Id equals grnd.GoodsReceiptNoteId
                          where grn.TenantId == tenantId && grn.WarehouseId == warehouseId && grnd.ProductId == productId
                                && EF.Functions.DateDiffDay(grn.EntryDate, day) == 0
                          select new GoodsReceiptQuantity
                          {
                              Quantity = grnd.Quantity,
                              Price = grnd.Price
                          }).ToListAsync();
        }

        public async Task<List<GoodsReceiptQuantity>> GetsProductInfoForInventoryDailyReport(string tenantId, string warehouseId, string productId,
            DateTime fromDate, DateTime toDate)
        {
            if (DateTime.Compare(fromDate, toDate) == 0)
            {
                return await (from grn in Context.Set<GoodsReceiptNote>()
                              join grnd in Context.Set<GoodsReceiptNoteDetail>() on grn.Id equals grnd.GoodsReceiptNoteId
                              where grn.TenantId == tenantId && grn.WarehouseId == warehouseId && grnd.ProductId == productId
                              && EF.Functions.DateDiffDay(grn.EntryDate, fromDate) == 0
                              select new GoodsReceiptQuantity
                              {
                                  Quantity = grnd.Quantity,
                                  Price = grnd.Price
                              }).ToListAsync();
            }

            return await (from grn in Context.Set<GoodsReceiptNote>()
                          join grnd in Context.Set<GoodsReceiptNoteDetail>() on grn.Id equals grnd.GoodsReceiptNoteId
                          where grn.TenantId == tenantId && grn.WarehouseId == warehouseId && grnd.ProductId == productId
                          && grn.EntryDate >= fromDate && grn.EntryDate <= toDate
                          select new GoodsReceiptQuantity
                          {
                              Quantity = grnd.Quantity,
                              Price = grnd.Price
                          }).ToListAsync();
        }

        public Task<List<string>> GetsProductIdsByDay(string tenantId, string warehouseId, DateTime day, int page, int pageSize,
            out int totalRows)
        {
            var query = from grn in Context.Set<GoodsReceiptNote>()
                        join grnd in Context.Set<GoodsReceiptNoteDetail>() on grn.Id equals grnd.GoodsReceiptNoteId
                        where grn.TenantId == tenantId && grn.WarehouseId == warehouseId &&
                              EF.Functions.DateDiffDay(grn.EntryDate, day) == 0
                        select grnd.ProductId;
            totalRows = query.Count();
            return query.ToListAsync();
        }

        public async Task<int> UpdateWarehouseInfo(string tenantId, string receiptId, string warehouseId)
        {
            var goodsReceiptNoteDetails = await _goodsReceiptNoteDetailRepository.GetsAsync(false, x =>
                x.TenantId == tenantId && x.GoodsReceiptNoteId == receiptId);

            if (goodsReceiptNoteDetails == null || !goodsReceiptNoteDetails.Any())
                return -1;

            foreach (var goodsReceiptNoteDetail in goodsReceiptNoteDetails)
            {
                goodsReceiptNoteDetail.WarehouseId = warehouseId;
            }

            await Context.SaveChangesAsync();
            return 1;
        }

        public async Task<List<GoodsReceiptNoteBarcodeViewModel>> GetBarcode(string goodsReceiptNoteId)
        {
            return await (from grnd in Context.Set<GoodsReceiptNoteDetail>()
                          join pt in Context.Set<ProductTranslation>() on grnd.ProductId equals pt.ProductId
                          join pu in Context.Set<ProductUnit>() on new { grnd.ProductId, grnd.UnitId } equals new { pu.ProductId, pu.UnitId }
                          join ut in Context.Set<UnitTranslation>() on grnd.UnitId equals ut.UnitId
                          where grnd.GoodsReceiptNoteId == goodsReceiptNoteId
                                && !grnd.IsDelete && !pt.IsDelete
                                && pt.LanguageId == CultureInfo.CurrentCulture.Name
                                && !pu.ToDate.HasValue
                          select new GoodsReceiptNoteBarcodeViewModel
                          {
                              Id = grnd.Code,
                              ProductId = grnd.ProductId,
                              Price = pu.SalePrice ?? 0,
                              Name = pt.Name,
                              UnitId = grnd.UnitId,
                              UnitName = ut.Name,
                              Quantity = grnd.Quantity
                          }).ToListAsync();
        }

        public async Task<bool> CheckExistsByTenantIdProductId(string tenantId, string productId)
        {
            return await _goodsReceiptNoteDetailRepository.ExistAsync(x =>
                x.TenantId == tenantId && x.ProductId == productId && !x.IsDelete);
        }

        public async Task<GoodsReceiptNoteDetailForDeliveryViewModel> GetById(string tenantId, string id)
        {
            var query = from grnd in Context.Set<GoodsReceiptNoteDetail>()
                        join pt in Context.Set<ProductTranslation>() on grnd.ProductId equals pt.ProductId
                        where grnd.TenantId == tenantId && grnd.Id.Contains(id)
                        select new GoodsReceiptNoteDetailForDeliveryViewModel
                        {
                            Id = grnd.Id,
                            ProductId = grnd.ProductId,
                            ProductName = pt.Name,
                            Price = grnd.Price
                        };

            return await query.FirstOrDefaultAsync();
        }

        public ReceivingDeliveringPeriodViewModel GetReceivingInPeriod(string tenantId, string warehouseId, string productId,
             DateTime fromDate, DateTime toDate)
        {
            var goodsReceiptNoteDetails = (from grn in Context.Set<GoodsReceiptNote>()
                                           join grnd in Context.Set<GoodsReceiptNoteDetail>() on grn.Id equals grnd.GoodsReceiptNoteId
                                           where grn.TenantId == tenantId && grn.WarehouseId == warehouseId && grnd.ProductId == productId
                                                 && grn.EntryDate >= fromDate && grn.EntryDate <= toDate && !grn.IsDelete && !grnd.IsDelete
                                           select grnd).AsNoTracking().ToList();

            if (!goodsReceiptNoteDetails.Any())
                return new ReceivingDeliveringPeriodViewModel();

            return new ReceivingDeliveringPeriodViewModel
            {
                Quantity = goodsReceiptNoteDetails.Sum(x => x.Quantity),
                Value = goodsReceiptNoteDetails.Select(x => x.Quantity * x.Price).Sum()
            };
        }

        public async Task<ProductInfoViewModel> GetProductInfoByCode(string tenantId, string warehouseId, string code)
        {
            var productInfo = from grnd in Context.Set<GoodsReceiptNoteDetail>()
                              join pt in Context.Set<ProductTranslation>() on grnd.ProductId equals pt.ProductId
                              join ut in Context.Set<UnitTranslation>() on grnd.UnitId equals ut.UnitId
                              where grnd.TenantId == tenantId && grnd.Code == code && grnd.WarehouseId == warehouseId && !grnd.IsDelete
                                    && !pt.IsDelete
                              select new ProductInfoViewModel
                              {
                                  ProductId = grnd.ProductId,
                                  ProductName = pt.Name,
                                  UnitId = grnd.UnitId,
                                  UnitName = ut.Name,
                                  Price = grnd.Price,
                                  LotId = grnd.LotId,
                                  InventoryQuantity = grnd.Quantity,
                                  Code = grnd.Code
                              };

            return await productInfo.FirstOrDefaultAsync();
        }

        public async Task<decimal> GetQuantitiesByCode(string tenantId, string warehouseId, string code)
        {
            var query = from grnd in Context.Set<GoodsReceiptNoteDetail>()
                        where grnd.TenantId == tenantId && grnd.WarehouseId == warehouseId && grnd.Code == code
                              && !grnd.IsDelete
                        select grnd.Quantity * grnd.ConversionValue;
            return await query.SumAsync();
        }

        public async Task<List<GoodsReceiptNoteDetail>> GetByCode(string tenantId, string warehouseId, string code)
        {
            var query = from grnd in Context.Set<GoodsReceiptNoteDetail>()
                        where grnd.TenantId == tenantId && grnd.WarehouseId == warehouseId
                                                        && grnd.Code == code && !grnd.IsDelete
                        select grnd;
            return await query
                .AsNoTracking()
                .ToListAsync();
        }

        public async Task<int> GetGoodsReceiptNoteDetailId(string receiptId)
        {
            return await _goodsReceiptNoteDetailRepository.CountAsync(x => x.GoodsReceiptNoteId == receiptId);
        }

        public async Task<List<GoodsReceiptNoteReturnSupplierViewModel>> GetsByIds(List<string> ids)
        {
            return await (from grn in Context.Set<GoodsReceiptNote>()
                          join grnd in Context.Set<GoodsReceiptNoteDetail>() on grn.Id equals grnd.GoodsReceiptNoteId
                          where ids.Contains(grnd.Code) && !grnd.IsDelete && !grn.IsDelete
                          select new GoodsReceiptNoteReturnSupplierViewModel
                          {
                              SupplierId = grn.SupplierId,
                              Price = grnd.Price,
                              GoodsReceiptNoteDetailId = grnd.Id,
                              GoodsReceiptNoteDetailCode = grnd.Code,
                              ProductId = grnd.ProductId,
                              UnitId = grnd.UnitId
                          }).ToListAsync();
        }

        public Task<List<string>> GetsProductByWarehouse(string tenantId, string warehouseId, int page, int pageSize, out int totalRows)
        {
            var query = from grnd in Context.Set<GoodsReceiptNoteDetail>()
                        where grnd.TenantId == tenantId && !grnd.IsDelete && grnd.WarehouseId == warehouseId
                        group grnd by grnd.ProductId
                into g
                        select g.Key;

            totalRows = query.Count();
            return query
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public Task<string> GetCode(string tenantId, string goodsReceiptNoteId, string productId, string lotId)
        {
            var query = from grnd in Context.Set<GoodsReceiptNoteDetail>()
                        where grnd.TenantId == tenantId && grnd.GoodsReceiptNoteId == goodsReceiptNoteId && grnd.ProductId == productId && grnd.LotId == lotId
                        select grnd.Code;
            return query.FirstOrDefaultAsync();
        }

        public async Task<int> GetProductCount(string tenantId, string goodsReceiptNoteId)
        {
            var query = from grnd in Context.Set<GoodsReceiptNoteDetail>()
                        where grnd.TenantId == tenantId && grnd.GoodsReceiptNoteId == goodsReceiptNoteId
                        group grnd by new { grnd.ProductId, grnd.LotId } into g
                        select 1;
            return query.Sum(x => x);
        }

        public async Task<List<GoodsReceiptNoteDetailStats>> GetStats(string tenantId, string warehouseId, string receiptId,
            string productId)
        {
            var query = from grnd in Context.Set<GoodsReceiptNoteDetail>()
                        where grnd.TenantId == tenantId && grnd.WarehouseId == warehouseId && grnd.ProductId == productId
                              && grnd.GoodsReceiptNoteId == receiptId
                        group grnd by new
                        {
                            grnd.ProductId,
                            grnd.LotId
                        }
                into g
                        select new GoodsReceiptNoteDetailStats
                        {
                            ProductId = g.Key.ProductId,
                            LotId = g.Key.LotId,
                            Quantity = g.Sum(x => x.Quantity * x.ConversionValue),
                            Value = g.Sum(x => x.Price * x.Quantity)
                        };
            return await query.ToListAsync();
        }

        public async Task<decimal> GetPrice(string tenantId, string warehouseId, string receiptId, string productId, string lotId)
        {
            var query = from grnd in Context.Set<GoodsReceiptNoteDetail>()
                        where grnd.TenantId == tenantId && grnd.WarehouseId == warehouseId &&
                              grnd.GoodsReceiptNoteId == receiptId
                              && grnd.ProductId == productId && grnd.LotId == lotId
                        select new
                        {
                            ConversionQuantity = grnd.Quantity * grnd.ConversionValue,
                            TotalAmounts = grnd.Quantity * grnd.Price
                        };

            var totalQuantity = await query.SumAsync(x => x.ConversionQuantity);
            var totalAmounts = await query.SumAsync(x => x.TotalAmounts);
            return totalAmounts / totalQuantity;
        }

        public async Task<List<GoodsReceiptNoteDetail>> GetsByGoodsDeliveryNoteIdAndProductId(string tenantId, string warehouseId, string receiptId, string productId,
            string lotId, bool isReadOnly)
        {
            return await _goodsReceiptNoteDetailRepository.GetsAsync(isReadOnly, x =>
                x.TenantId == tenantId && x.WarehouseId == warehouseId
                                       && x.GoodsReceiptNoteId == receiptId && x.ProductId == productId
                                       && x.LotId == lotId);
        }
    }


}
