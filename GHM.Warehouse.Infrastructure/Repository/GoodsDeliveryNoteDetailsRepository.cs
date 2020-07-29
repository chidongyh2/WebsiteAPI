using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class GoodsDeliveryNoteDetailsRepository : RepositoryBase, IGoodsDeliveryNoteDetailsRepository
    {
        private readonly IRepository<GoodsDeliveryNoteDetail> _goodsDeliveryNoteDetailRepository;
        public GoodsDeliveryNoteDetailsRepository(IDbContext context) : base(context)
        {
            _goodsDeliveryNoteDetailRepository = Context.GetRepository<GoodsDeliveryNoteDetail>();
        }

        public async Task<int> Inserts(List<GoodsDeliveryNoteDetail> goodsDeliveryNoteDetail)
        {
            _goodsDeliveryNoteDetailRepository.Creates(goodsDeliveryNoteDetail);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Insert(GoodsDeliveryNoteDetail goodsDeliveryNoteDetail)
        {
            _goodsDeliveryNoteDetailRepository.Create(goodsDeliveryNoteDetail);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(GoodsDeliveryNoteDetail goodsDeliveryNoteDetail)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> DeleteByGoodsDeliveryNoteId(string goodsDeliveryNoteId)
        {
            var goodsDeliveryNoteDetails =
                await _goodsDeliveryNoteDetailRepository.GetsAsync(false, x => x.GoodsDeliveryNoteId == goodsDeliveryNoteId && !x.IsDelete);
            if (goodsDeliveryNoteDetails == null || !goodsDeliveryNoteDetails.Any())
                return -1;
            foreach (var info in goodsDeliveryNoteDetails)
            {
                info.IsDelete = true;
            }
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDeleteByGoodsDeliveryNoteId(string goodsDeliveryNoteId)
        {
            var goodsDeliveryNoteDetails =
                await _goodsDeliveryNoteDetailRepository.GetsAsync(false, x => x.GoodsDeliveryNoteId == goodsDeliveryNoteId && !x.IsDelete);
            if (goodsDeliveryNoteDetails == null || !goodsDeliveryNoteDetails.Any())
                return -1;

            _goodsDeliveryNoteDetailRepository.Deletes(goodsDeliveryNoteDetails);
            return await Context.SaveChangesAsync();
        }


        public async Task<int> Delete(string goodsDeliveryNoteId, string id)
        {
            var info = await GetInfo(goodsDeliveryNoteId, id);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string goodsDeliveryNoteId, string id)
        {
            var info = await GetInfo(goodsDeliveryNoteId, id);
            if (info == null)
                return -1;

            _goodsDeliveryNoteDetailRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> SaveChangeAsync()
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<GoodsDeliveryNoteDetail> GetInfo(string goodsDeliveryNoteId, string id, bool isReadOnly = false)
        {
            return await _goodsDeliveryNoteDetailRepository.GetAsync(isReadOnly, x => x.Id == id && x.GoodsDeliveryNoteId == goodsDeliveryNoteId
                                                                                     && !x.IsDelete);
        }

        public async Task<GoodsDeliveryNoteDetail> GetInfoByTenant(string tenantId, string id, bool isReadOnly = false)
        {
            return await _goodsDeliveryNoteDetailRepository.GetAsync(isReadOnly,
                x => x.TenantId == tenantId && x.Id == id && !x.IsDelete);
        }

        public async Task<bool> CheckExistsByProductId(string goodsDeliveryNoteId, string productId)
        {
            return await _goodsDeliveryNoteDetailRepository.ExistAsync(x =>
                x.GoodsDeliveryNoteId == goodsDeliveryNoteId && x.ProductId == productId && !x.IsDelete);
        }

        public async Task<int> CountByByGoodsDeliveryNoteId(string goodsDeliveryNoteId)
        {
            return await _goodsDeliveryNoteDetailRepository.CountAsync(x =>
                x.GoodsDeliveryNoteId == goodsDeliveryNoteId && !x.IsDelete);
        }

        public async Task<decimal> GetTotalAmountByByGoodsDeliveryNoteId(string tenantId, string goodsDeliveryNoteId)
        {
            var goodsDeliveryNoteDetails = await _goodsDeliveryNoteDetailRepository.GetsAsync(true,
                x => x.GoodsDeliveryNoteId == goodsDeliveryNoteId && !x.IsDelete && x.TenantId == tenantId);
            if (goodsDeliveryNoteDetails == null || !goodsDeliveryNoteDetails.Any())
                return 0;

            return goodsDeliveryNoteDetails.Select(x => x.Price * x.Quantity).Sum();
        }

        public async Task<List<GoodsReceiptQuantity>> GetsProductInfoForinventoryDailyReportByDay(string tenantId, string warehouseId,
            string productId, DateTime day)
        {
            return await (from gdn in Context.Set<GoodsDeliveryNote>()
                          join gdnd in Context.Set<GoodsDeliveryNoteDetail>() on gdn.Id equals gdnd.GoodsDeliveryNoteId
                          where gdn.TenantId == tenantId && gdn.WarehouseId == warehouseId && gdnd.ProductId == productId
                                && EF.Functions.DateDiffDay(gdn.DeliveryDate, day) == 0
                                && !gdnd.IsDelete && !gdn.IsDelete
                          select new GoodsReceiptQuantity
                          {
                              Quantity = gdnd.Quantity,
                              Price = gdnd.Price
                          }).ToListAsync();
        }

        public Task<List<GoodsDeliveryNotesDetailSearchViewModel>> GetsByGoodsDeliveryNoteId(string tenantId, string languageId,
            string goodsDeliveryNoteId, string keyword, int page, int pageSize, out int totalRows)
        {
            var query = from gdnd in Context.Set<GoodsDeliveryNoteDetail>()
                        join pt in Context.Set<ProductTranslation>() on gdnd.ProductId equals pt.ProductId
                        join ut in Context.Set<UnitTranslation>() on gdnd.UnitId equals ut.UnitId
                        where !gdnd.IsDelete && gdnd.GoodsDeliveryNoteId == goodsDeliveryNoteId
                                             && !pt.IsDelete && pt.LanguageId == languageId && gdnd.TenantId == tenantId
                                            && ut.LanguageId == languageId && ut.TenantId == tenantId                                             
                        select new GoodsDeliveryNotesDetailSearchViewModel
                        {
                            ProductId = gdnd.ProductId,
                            Id = gdnd.Id,
                            Code = gdnd.GoodsReceiptNoteCode,
                            Price = gdnd.Price,
                            UnitId = gdnd.UnitId,
                            Quantity = gdnd.Quantity,
                            UnitName = ut.Name,
                            GoodsDeliveryNoteId = gdnd.GoodsDeliveryNoteId,
                            ProductName = pt.Name,
                            ConcurrencyStamp = gdnd.ConcurrencyStamp,
                            LotId = gdnd.LotId,
                            RecommendedQuantity = gdnd.RecommendedQuantity,
                            DiscountPrice = gdnd.DiscountPrice,
                            DiscountByPercent = gdnd.DiscountByPercent,
                            TotalAmounts = gdnd.Price * gdnd.Quantity,
                            GoodsReceiptNoteDetailCode = gdnd.GoodsReceiptNoteCode
                        };

            totalRows = query.Count();

            return query.OrderBy(x => x.ProductName)
                         .Skip((page - 1) * pageSize)
                         .ToListAsync();

        }

        public async Task<List<string>> GetsProductIds(string tenantId, string goodsDeliveryNoteId)
        {
            return await _goodsDeliveryNoteDetailRepository.GetsAsAsync(x => x.ProductId,
                x => x.TenantId == tenantId && x.GoodsDeliveryNoteId == goodsDeliveryNoteId);
        }

        public Task<List<string>> GetsProductIdsByDay(string tenantId, string warehouseId, DateTime day, int page, int pageSize, out int totalRows)
        {
            var query = from gdn in Context.Set<GoodsDeliveryNote>()
                        join gdnd in Context.Set<GoodsDeliveryNoteDetail>() on gdn.Id equals gdnd.GoodsDeliveryNoteId
                        where gdn.TenantId == tenantId && gdn.WarehouseId == warehouseId &&
                              EF.Functions.DateDiffDay(gdn.DeliveryDate, day) == 0 && !gdnd.IsDelete && !gdn.IsDelete
                        select gdnd.ProductId;
            totalRows = query.Count();
            return query.ToListAsync();
        }

        public ReceivingDeliveringPeriodViewModel GetDeliveringInPeriod(string tenantId, string warehouseId, string productId,
            DateTime fromDate, DateTime toDate)
        {
            var goodsDeliveryNoteDetails = (from gdn in Context.Set<GoodsDeliveryNote>()
                                            join gdnd in Context.Set<GoodsDeliveryNoteDetail>() on gdn.Id equals gdnd.GoodsDeliveryNoteId
                                            where gdn.TenantId == tenantId && gdn.WarehouseId == warehouseId && gdnd.ProductId == productId
                                                  && gdn.DeliveryDate >= fromDate && gdn.DeliveryDate <= toDate && !gdnd.IsDelete && !gdn.IsDelete
                                            select gdnd).AsNoTracking().ToList();

            if (!goodsDeliveryNoteDetails.Any())
                return new ReceivingDeliveringPeriodViewModel();

            return new ReceivingDeliveringPeriodViewModel
            {
                Quantity = goodsDeliveryNoteDetails.Sum(x => x.Quantity),
                Value = goodsDeliveryNoteDetails.Select(x => x.Quantity * x.Price).Sum()
            };
        }

        public async Task<bool> CheckExists(string id)
        {
            return await _goodsDeliveryNoteDetailRepository.ExistAsync(x => x.Id == id);
        }

        public async Task<decimal> GetQuantiesByCode(string tenantId, string warehouseId, string goodsReceiptNoteDetailCode,
            string goodsDeliveryNoteId)
        {
            var query = from gdnd in Context.Set<GoodsDeliveryNoteDetail>()
                        where gdnd.TenantId == tenantId && gdnd.WarehouseId == warehouseId &&
                              gdnd.GoodsReceiptNoteCode == goodsReceiptNoteDetailCode
                              && !gdnd.IsDelete && gdnd.GoodsDeliveryNoteId != goodsDeliveryNoteId
                        select gdnd.Quantity * gdnd.ConversionValue;
            return await query.SumAsync();
        }

        public async Task<List<GoodsDeliveryNoteDetail>> GetsAllByGoodsDeliveryNoteId(string tenantId, string goodsDeliveryNoteId)
        {
            return await _goodsDeliveryNoteDetailRepository.GetsAsync(true, x =>
                x.TenantId == tenantId && x.GoodsDeliveryNoteId == goodsDeliveryNoteId
                                       && !x.IsDelete);
        }

        public async Task<List<GoodsDeliveryNoteDetail>> GetsAllByGoodsDeliveryNoteId(string tenantId, string goodsDeliveryNoteId, string code, bool isReadOnly = false)
        {
            return await _goodsDeliveryNoteDetailRepository.GetsAsync(isReadOnly, x =>
                x.TenantId == tenantId && x.GoodsDeliveryNoteId == goodsDeliveryNoteId
                                       && x.GoodsReceiptNoteCode == code
                                       && !x.IsDelete);
        }

        public async Task<List<GoodsDeliveryNoteDetail>> GetsAllByGoodsDeliveryNoteId(string tenantId, string goodsDeliveryNoteId, string productId, string lotId,
            bool isReadOnly = false)
        {
            return await _goodsDeliveryNoteDetailRepository.GetsAsync(isReadOnly, x =>
                x.TenantId == tenantId && x.GoodsDeliveryNoteId == goodsDeliveryNoteId
                                       && x.ProductId == productId && x.LotId == lotId
                                       && !x.IsDelete);
        }

        public async Task<List<GoodsDeliveryNoteDetail>> GetsByGoodsDeliveryNoteIdAndProductId(string tenantId, string goodsDeliveryNoteId,
            string productId, string lotId)
        {
            return await _goodsDeliveryNoteDetailRepository.GetsAsync(true, x =>
                x.TenantId == tenantId && x.GoodsDeliveryNoteId == goodsDeliveryNoteId
                                       && x.ProductId == productId && x.LotId == lotId && !x.IsDelete);
        }

        public async Task<decimal> GetTotalQuantitiesByProductId(string tenantId, string warehouseId, string goodsDeliveryNoteId, string productId,
            string goodsDeliveryNoteDetailId)
        {
            var query = from gdnd in Context.Set<GoodsDeliveryNoteDetail>()
                        where gdnd.TenantId == tenantId && gdnd.WarehouseId == warehouseId &&
                              gdnd.GoodsDeliveryNoteId == goodsDeliveryNoteId
                              && gdnd.ProductId == productId && gdnd.Id != goodsDeliveryNoteDetailId
                              && !gdnd.IsDelete
                        select gdnd.Quantity * gdnd.ConversionValue;
            return await query.SumAsync(x => x);
        }

        public async Task<decimal> GetTotalQuantitiesByProductIdAndLotId(string tenantId, string warehouseId, string goodsDeliveryNoteId,
            string productId, string lotId, string goodsDeliveryNoteDetailId)
        {
            var query = from gdnd in Context.Set<GoodsDeliveryNoteDetail>()
                        where gdnd.TenantId == tenantId && gdnd.WarehouseId == warehouseId &&
                              gdnd.GoodsDeliveryNoteId == goodsDeliveryNoteId
                              && gdnd.ProductId == productId && gdnd.LotId == lotId && gdnd.Id != goodsDeliveryNoteDetailId
                              && !gdnd.IsDelete
                        select gdnd.Quantity * gdnd.ConversionValue;
            return await query.SumAsync(x => x);
        }

        public async Task<List<GoodsDeliveryNoteDetail>> GetByCode(string tenantId, string warehouseId, string code)
        {
            var query = from grnd in Context.Set<GoodsDeliveryNoteDetail>()
                        where grnd.TenantId == tenantId && grnd.WarehouseId == warehouseId
                                                        && grnd.GoodsReceiptNoteCode == code && !grnd.IsDelete
                        select grnd;
            return await query.ToListAsync();
        }

        public Task<List<GoodsDeliveryNoteDetail>> GetsForSynchronize(string tenantId, string warehouseId,
            string code, string lotId, DateTime date, int page, int pageSize, out int totalRows)
        {
            var query = from gdn in Context.Set<GoodsDeliveryNote>()
                        join gdnd in Context.Set<GoodsDeliveryNoteDetail>() on gdn.Id equals gdnd.GoodsDeliveryNoteId
                        where gdn.TenantId == tenantId && gdn.WarehouseId == warehouseId && gdnd.GoodsReceiptNoteCode == code
                              && gdn.DeliveryDate >= date && gdnd.LotId == lotId && !gdnd.IsDelete && !gdn.IsDelete
                        orderby gdn.DeliveryDate
                        select gdnd;

            totalRows = query.Count();
            return query
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Updates(List<GoodsDeliveryNoteDetail> goodsDeliveryNoteDetails)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<decimal> GetPrice(string tenantId, string warehouseId, string receiptId, string productId, string lotId)
        {
            var query = from gdnd in Context.Set<GoodsDeliveryNoteDetail>()
                        where gdnd.TenantId == tenantId && gdnd.WarehouseId == warehouseId &&
                              gdnd.GoodsDeliveryNoteId == receiptId
                              && gdnd.ProductId == productId && gdnd.LotId == lotId && !gdnd.IsDelete
                        select new
                        {
                            ConversionQuantity = gdnd.Quantity * gdnd.ConversionValue,
                            TotalAmounts = gdnd.Quantity * gdnd.Price * gdnd.ConversionValue
                        };

            var totalQuantity = await query.SumAsync(x => x.ConversionQuantity);
            var totalAmounts = await query.SumAsync(x => x.TotalAmounts);
            return totalAmounts / totalQuantity;
        }

        public async Task<List<GoodsDeliveryNoteDetail>> GetsByGoodsDeliveryNoteIdAndProductId(string tenantId, string warehouseId,
            string goodsDeliveryNoteId, string productId, string lotId, bool isReadOnly = false)
        {
            return await _goodsDeliveryNoteDetailRepository.GetsAsync(isReadOnly, x =>
                x.TenantId == tenantId && x.WarehouseId == warehouseId && x.LotId == lotId && x.GoodsDeliveryNoteId == goodsDeliveryNoteId
                                       && x.ProductId == productId && !x.IsDelete);
        }

        public async Task<List<GoodsDeliveryNoteDetail>> GetsByProductId(string tenantId, string warehouseId, string deliveryNoteId, string productId, string lotId)
        {
            return await _goodsDeliveryNoteDetailRepository.GetsAsync(true, x =>
                x.TenantId == tenantId && x.WarehouseId == warehouseId
                                       && x.GoodsDeliveryNoteId == deliveryNoteId && x.ProductId == productId &&
                                       x.LotId == lotId && !x.IsDelete);
        }

        public async Task<List<GoodsDeliveryNoteDetail>> GetsByGoodsDeliveryNoteIdAndProductIdAndCode(string tenantId, string warehouseId, string receiptId,
            string productId, string lotId, string goodsReceiptNoteDetailCode, bool isReadOnly = false)
        {
            return await _goodsDeliveryNoteDetailRepository.GetsAsync(isReadOnly, x =>
                x.TenantId == tenantId && x.WarehouseId == warehouseId
                                       && x.GoodsDeliveryNoteId == receiptId && x.ProductId == productId && x.LotId == lotId &&
                                       x.GoodsReceiptNoteCode == goodsReceiptNoteDetailCode && !x.IsDelete);
        }

        //public async Task<List<GoodsDeliveryNoteDetail>> GetsByGoodsReceiptNoteDetailId(string tenantId, string warehouseId, string goodsReceiptNoteId,
        //    bool isReadOnly = false)
        //{
        //    return await _goodsDeliveryNoteDetailRepository.GetsAsync(isReadOnly,
        //        x => x.TenantId == tenantId && x.WarehouseId == warehouseId &&
        //             x.GoodsReceiptNoteDetailId == goodsReceiptNoteId);
        //}

        public async Task<List<GoodsReceiptQuantity>> GetsProductInfoForInventoryDailyReport(string tenantId, string warehouseId, string productId,
            DateTime fromDate, DateTime toDate)
        {
            if (DateTime.Compare(fromDate, toDate) == 0)
            {
                return await (from gdn in Context.Set<GoodsDeliveryNote>()
                              join gdnd in Context.Set<GoodsDeliveryNoteDetail>() on gdn.Id equals gdnd.GoodsDeliveryNoteId
                              where gdn.TenantId == tenantId && gdn.WarehouseId == warehouseId && gdnd.ProductId == productId
                              && EF.Functions.DateDiffDay(gdn.DeliveryDate, fromDate) == 0 && !gdnd.IsDelete && !gdn.IsDelete
                              select new GoodsReceiptQuantity
                              {
                                  Quantity = gdnd.Quantity,
                                  Price = gdnd.Price
                              }).ToListAsync();
            }

            return await (from gdn in Context.Set<GoodsDeliveryNote>()
                          join gdnd in Context.Set<GoodsDeliveryNoteDetail>() on gdn.Id equals gdnd.GoodsDeliveryNoteId
                          where gdn.TenantId == tenantId && gdn.WarehouseId == warehouseId && gdnd.ProductId == productId
                          && gdn.DeliveryDate >= fromDate && gdn.DeliveryDate <= toDate && !gdnd.IsDelete && !gdn.IsDelete
                          select new GoodsReceiptQuantity
                          {
                              Quantity = gdnd.Quantity,
                              Price = gdnd.Price
                          }).ToListAsync();
        }

        public Task<List<GoodsDeliveryNoteDetail>> GetsByGoodsDeliveryNoteIdAndProductId(string tenantId, string goodsDeliveryNoteId, string productId, string lotId, bool isReadOnly = false)
        {
            throw new NotImplementedException();
        }

        public Task<List<GoodsDeliveryNoteDetail>> GetsByGoodsReceiptNoteDetailCode(string tenantId, string warehouseId, string goodsReceiptNoteDetailCode, string lotId)
        {
            throw new NotImplementedException();
        }
    }
}
