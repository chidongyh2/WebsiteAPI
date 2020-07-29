using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace GHM.Warehouse.Infrastructure.Repository
{
    using Warehouse = Domain.Models.Warehouse;

    public class GoodsReceiptNoteRepository : RepositoryBase, IGoodsReceiptNoteRepository
    {
        private readonly IRepository<GoodsReceiptNote> _goodsReceiptRepository;
        public GoodsReceiptNoteRepository(IDbContext context) : base(context)
        {
            _goodsReceiptRepository = Context.GetRepository<GoodsReceiptNote>();
        }

        public async Task<int> Insert(GoodsReceiptNote goodsReceiptNote)
        {
            _goodsReceiptRepository.Create(goodsReceiptNote);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(GoodsReceiptNote goodsReceiptNote)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string tenantId, string id)
        {
            var info = await GetInfo(tenantId, id);
            if (info == null)
                return -1;

            _goodsReceiptRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<GoodsReceiptNote> GetInfo(string tenantId, string id, bool isReadOnly = false)
        {
            return await _goodsReceiptRepository.GetAsync(isReadOnly, x => x.TenantId == tenantId && x.Id == id && !x.IsDelete);
        }

        public async Task<GoodsReceiptNote> GetInfo(string id, bool isReadOnly = false)
        {
            return await _goodsReceiptRepository.GetAsync(isReadOnly, x => x.Id == id && !x.IsDelete);
        }

        public async Task<GoodsReceiptNoteDetailViewModel> GetDetail(string tenantId, string languageId, string id)
        {
            //return await Context.Set<GoodsReceiptNote>().Where(x => x.TenantId == tenantId && x.Id == id && !x.IsDelete)
            //    .Join(Context.Set<Warehouse>(), grn => grn.WarehouseId, w => w.Id, (grn, w) => new { grn, w })
            //    .Join(Context.Set<Supplier>(), r => r.grn.SupplierId, s => s.Id, (r, s) => new { r.grn, r.w, s })
            //    .Join(Context.Set<GoodsDeliver>(), r => r.grn.DeliverId, gd => gd.Id, (r, gd) => new { r.grn, r.w, r.s, gd })
            //    .Join(Context.Set<GoodsReceiptNoteFollow>().Where(x => x.LanguageId == languageId && x.TenantId == tenantId),
            //    r => r.grn.FollowId, f => f.Id, (r, f) => new GoodsReceiptNoteDetailViewModel
            //    {
            //        Id = r.grn.Id,
            //        Type = r.grn.Type,
            //        CreatorId = r.grn.CreatorId,
            //        CreatorFullName = r.grn.CreatorFullName,
            //        CreatorAvatar = r.grn.CreatorAvatar,
            //        DeliverId = r.grn.DeliverId,
            //        DeliverFullName = r.gd.FullName,
            //        DeliverPhoneNumber = r.gd.PhoneNumber,
            //        SupplierId = r.s.Id,
            //        SupplierName = r.s.Name,
            //        WarehouseId = r.w.Id,
            //        WarehouseName = r.w.Name,
            //        EntryDate = r.grn.EntryDate,
            //        CreateTime = r.grn.CreateTime,
            //        InvoiceDate = r.grn.InvoiceDate,
            //        InvoiceNo = r.grn.InvoiceNo,
            //        ReceiptNo = r.grn.ReceiptNo,
            //        ReceiverFullName = r.grn.ReceiverFullName,
            //        ReceiverId = r.grn.ReceiverId,
            //        TotalAmounts = r.grn.TotalAmounts,
            //        TotalItems = r.grn.TotalItems,
            //        FollowId = f.Id,
            //        Follow = f.Name,
            //        Day = r.grn.Day,
            //        Month = r.grn.Month,
            //        Year = r.grn.Year,
            //        Note = r.grn.Note
            //    }).FirstOrDefaultAsync();
            var query = from grn in Context.Set<GoodsReceiptNote>()
                        join w in Context.Set<Warehouse>() on grn.WarehouseId equals w.Id
                        join gd in Context.Set<GoodsDeliver>() on grn.DeliverId equals gd.Id into ggrngd
                        from gdg in ggrngd.DefaultIfEmpty()
                        join wmc in Context.Set<WarehouseManagerConfig>() on grn.WarehouseId equals wmc.WarehouseId
                        join s in Context.Set<Supplier>() on grn.SupplierId equals s.Id into gj
                        from gs in gj.DefaultIfEmpty()
                        join f in Context.Set<GoodsReceiptNoteFollow>() on grn.FollowId equals f.Id into ggrnf
                        from gf in ggrnf.DefaultIfEmpty()
                        where grn.TenantId == tenantId && !grn.IsDelete
                              && grn.Id == id
                        select new GoodsReceiptNoteDetailViewModel
                        {
                            Id = grn.Id,
                            Type = grn.Type,
                            CreatorId = grn.CreatorId,
                            CreatorFullName = grn.CreatorFullName,
                            CreatorAvatar = grn.CreatorAvatar,
                            DeliverId = gdg.Id,
                            DeliverFullName = gdg.FullName,
                            DeliverPhoneNumber = gdg.PhoneNumber,
                            SupplierId = gs.Id,
                            SupplierName = gs.Name,
                            WarehouseId = w.Id,
                            WarehouseName = w.Name,
                            EntryDate = grn.EntryDate,
                            CreateTime = grn.CreateTime,
                            InvoiceDate = grn.InvoiceDate,
                            InvoiceNo = grn.InvoiceNo,
                            ReceiptNo = grn.ReceiptNo,
                            ReceiverFullName = grn.ReceiverFullName,
                            ReceiverId = grn.ReceiverId,
                            TotalAmounts = grn.TotalAmounts,
                            TotalItems = grn.TotalItems,
                            FollowId = gf.Id,
                            Follow = gf.Name,
                            Day = grn.Day,
                            Month = grn.Month,
                            Year = grn.Year,
                            Note = grn.Note                            
                        };

            return await query.FirstOrDefaultAsync();
        }

        public async Task<bool> CheckReceiptNoExists(string id, string receiptNo)
        {
            return await _goodsReceiptRepository.ExistAsync(x => x.Id != id && x.ReceiptNo == receiptNo && !x.IsDelete);
        }

        public async Task<bool> CheckInvoiceNoExists(string id, string invoiceNo)
        {
            return await _goodsReceiptRepository.ExistAsync(x => x.Id != id && x.InvoiceNo == invoiceNo && !x.IsDelete);
        }

        public async Task<bool> CheckExists(string tenantId, string id)
        {
            return await _goodsReceiptRepository.ExistAsync(x => x.TenantId == tenantId && x.Id == id && !x.IsDelete);
        }

        public async Task<int> UpdateAmounts(string id, GoodsReceiptNoteAmounts goodsReceiptNoteAmounts)
        {
            var goodsReceiptNote = await GetInfo(id);
            if (goodsReceiptNote == null)
                return -1;

            goodsReceiptNote.Taxes = goodsReceiptNoteAmounts.Taxes;
            goodsReceiptNote.TotalBeforeTaxes = goodsReceiptNoteAmounts.TotalBeforeTaxes;
            goodsReceiptNote.TotalAmounts = goodsReceiptNoteAmounts.TotalAmounts;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateTotalItems(string id, int totalItems)
        {
            var goodsReceiptNote = await GetInfo(id);
            if (goodsReceiptNote == null)
                return -1;

            goodsReceiptNote.TotalItems = totalItems;
            return await Context.SaveChangesAsync();
        }

        public Task<List<GoodsReceiptNoteViewModel>> Search(string tenantId, string userId, string supplierId, string deliverId, string warehouseId,
            DateTime? fromDate, DateTime? toDate, int page, int pageSize, out int totalRows)
        {
            toDate = toDate?.AddDays(1).AddMilliseconds(-1);
            var query = from grn in Context.Set<GoodsReceiptNote>()
                        join w in Context.Set<Warehouse>() on grn.WarehouseId equals w.Id
                        join gd in Context.Set<GoodsDeliver>() on grn.DeliverId equals gd.Id into ggrngd
                        from gdg in ggrngd.DefaultIfEmpty()
                        join wmc in Context.Set<WarehouseManagerConfig>() on grn.WarehouseId equals wmc.WarehouseId
                        join s in Context.Set<Supplier>() on grn.SupplierId equals s.Id into gj
                        from gs in gj.DefaultIfEmpty()
                        where grn.TenantId == tenantId && !grn.IsDelete && wmc.UserId == userId
                                                       && (string.IsNullOrEmpty(supplierId) || grn.SupplierId == supplierId)
                                                       && (string.IsNullOrEmpty(warehouseId) || grn.WarehouseId == warehouseId)
                                                       && (string.IsNullOrEmpty(deliverId) || grn.DeliverId == deliverId)
                                                       && (!fromDate.HasValue || fromDate <= grn.EntryDate)
                                                       && (!toDate.HasValue || toDate >= grn.EntryDate)
                        select new GoodsReceiptNoteViewModel
                        {
                            Id = grn.Id,
                            Type = grn.Type,
                            CreatorId = grn.CreatorId,
                            CreatorFullName = grn.CreatorFullName,
                            CreatorAvatar = grn.CreatorAvatar,
                            DeliverId = grn.DeliverId,
                            DeliverFullName = gdg.FullName,
                            DeliverPhoneNumber = gdg.PhoneNumber,
                            SupplierId = gs.Id,
                            SupplierName = gs.Name,
                            WarehouseId = w.Id,
                            WarehouseName = w.Name,
                            EntryDate = grn.EntryDate,
                            CreateTime = grn.CreateTime,
                            InvoiceDate = grn.InvoiceDate,
                            InvoiceNo = grn.InvoiceNo,
                            ReceiptNo = grn.ReceiptNo,
                            ReceiverFullName = grn.ReceiverFullName,
                            ReceiverId = grn.ReceiverId,
                            TotalAmounts = grn.TotalAmounts,
                            TotalItems = grn.TotalItems,
                            Day = grn.Day,
                            Month = grn.Month,
                            Year = grn.Year
                        };

            totalRows = query.Count();
            return query
                .OrderByDescending(x => x.EntryDate)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<long> GetTotal(string tenantId)
        {
            return await _goodsReceiptRepository.CountAsync(x => x.TenantId == tenantId && !x.IsDelete);
        }

        public async Task<bool> CheckIdExists(string tenantId, string id)
        {
            return await _goodsReceiptRepository.ExistAsync(x => x.TenantId == tenantId && x.Id == id && !x.IsDelete);
        }

        public async Task<bool> CheckExistSupplierId(string tenantId, string supplierId)
        {
            return await _goodsReceiptRepository.ExistAsync(x => x.TenantId == tenantId && x.SupplierId == supplierId && !x.IsDelete);
        }

        public async Task<bool> CheckExistWarehouseId(string tenantId, string warehouseId)
        {
            return await _goodsReceiptRepository.ExistAsync(x => x.TenantId == tenantId && x.WarehouseId == warehouseId && !x.IsDelete);
        }

        public async Task<WarehouseCardViewModel> GetWarehouseCardInfo(string tenantId, string warehouseId, string productId)
        {
            var query = from grnd in Context.Set<GoodsReceiptNoteDetail>()
                        join pu in Context.Set<ProductUnit>() on grnd.ProductId equals pu.ProductId
                        join ut in Context.Set<UnitTranslation>() on pu.UnitId equals ut.UnitId
                        join pt in Context.Set<ProductTranslation>() on grnd.ProductId equals pt.ProductId
                        join w in Context.Set<Warehouse>() on grnd.WarehouseId equals w.Id
                        where grnd.TenantId == tenantId && grnd.WarehouseId == warehouseId && grnd.ProductId == productId
                              && !w.IsDelete && !grnd.IsDelete && !pt.IsDelete && pu.IsDefault
                        select new WarehouseCardViewModel
                        {
                            ProductId = grnd.ProductId,
                            WarehouseId = w.Id,
                            WarehouseName = w.Name,
                            UnitId = grnd.UnitId,
                            UnitName = ut.Name,
                            ProductName = pt.Name,
                            WarehouseAddress = w.Address
                        };
            return await query.FirstOrDefaultAsync();
        }

        //public Task<List<WarehouseCardItemViewModel>> SearchWarehouseCardItems(string tenantId, string warehouseId, string productId, DateTime? fromDate, DateTime? toDate, int page,
        //    int pageSize, out int totalRows)
        //{
        //    var queryGoodsReceiptNotes = from grn in Context.Set<GoodsReceiptNote>()
        //                                 join grnd in Context.Set<GoodsReceiptNoteDetail>() on grn.Id equals grnd.GoodsReceiptNoteId
        //                                 join ut in Context.Set<UnitTranslation>() on grnd.ProductUnitId equals ut.ProductUnitId
        //                                 where grn.TenantId == tenantId && grn.WarehouseId == warehouseId && grnd.ProductId == productId
        //                                       && (!fromDate.HasValue || grn.EntryDate >= fromDate)
        //                                       && (!toDate.HasValue || grn.EntryDate <= toDate.Value.AddDays(1).AddMinutes(-1))
        //                                       && !grn.IsDelete && !grnd.IsDelete && !ut.IsDelete
        //                                 select new WarehouseCardItemViewModel
        //                                 {
        //                                     Id = grn.Id,
        //                                     IsReceiving = true,
        //                                     Quantity = grnd.Quantity,
        //                                     Date = grn.EntryDate,
        //                                     ReceiptNo = grn.ReceiptNo,
        //                                     Note = grn.Note,
        //                                     InvoiceDate = grn.InvoiceDate
        //                                 };
        //    var queryGoodsDeliveryNotes = from gdn in Context.Set<GoodsDeliveryNote>()
        //                                  join gdnd in Context.Set<GoodsDeliveryNoteDetail>() on gdn.Id equals gdnd.GoodsDeliveryNoteId
        //                                  join ut in Context.Set<UnitTranslation>() on gdnd.ProductUnitId equals ut.ProductUnitId
        //                                  where gdn.TenantId == tenantId && gdn.WarehouseId == warehouseId && gdnd.ProductId == productId
        //                                        && (!fromDate.HasValue || gdn.DeliveryDate >= fromDate)
        //                                        && (!toDate.HasValue || gdn.DeliveryDate <= toDate.Value.AddDays(1).AddMinutes(-1))
        //                                        && !gdn.IsDelete && !gdnd.IsDelete && !ut.IsDelete
        //                                  select new WarehouseCardItemViewModel
        //                                  {
        //                                      Id = gdn.Id,
        //                                      InvoiceDate = gdn.DeliveryDate,
        //                                      IsReceiving = false,
        //                                      Quantity = gdnd.Quantity,
        //                                      Date = gdn.DeliveryDate,
        //                                      ReceiptNo = gdn.DeliveryNo,
        //                                      Note = gdn.Note
        //                                  };

        //    var query = queryGoodsReceiptNotes.Union(queryGoodsDeliveryNotes);
        //    totalRows = query.Count();
        //    return query.OrderByDescending(x => x.Date)
        //        .Skip((page - 1) * pageSize)
        //        .Take(pageSize)
        //        .ToListAsync();

        //}

        //public Task<List<WarehouseCardDetailItemViewModel>> SearchWarehouseCardDetailItems(string tenantId, string warehouseId, string productId,
        //    DateTime? fromDate, DateTime? toDate, int page, int pageSize, out int totalRows)
        //{
        //    var queryGoodsReceiptNotes = from grn in Context.Set<GoodsReceiptNote>()
        //                                 join grnd in Context.Set<GoodsReceiptNoteDetail>() on grn.Id equals grnd.GoodsReceiptNoteId
        //                                 join ut in Context.Set<UnitTranslation>() on grnd.ProductUnitId equals ut.ProductUnitId
        //                                 where grn.TenantId == tenantId && grn.WarehouseId == warehouseId && grnd.ProductId == productId
        //                                       && (!fromDate.HasValue || grn.EntryDate >= fromDate)
        //                                       && (!toDate.HasValue || grn.EntryDate <= toDate.Value.AddDays(1).AddMinutes(-1))
        //                                       && !grn.IsDelete && !grnd.IsDelete && !ut.IsDelete
        //                                 select new WarehouseCardDetailItemViewModel
        //                                 {
        //                                     Id = grn.Id,
        //                                     IsReceiving = true,
        //                                     Quantity = grnd.Quantity,
        //                                     Date = grn.EntryDate,
        //                                     ReceiptNo = grn.ReceiptNo,
        //                                     Note = grn.Note,
        //                                     InvoiceDate = grn.InvoiceDate,
        //                                     Price = grnd.Price,
        //                                     Value = grnd.Quantity * grnd.Price

        //                                 };
        //    var queryGoodsDeliveryNotes = from gdn in Context.Set<GoodsDeliveryNote>()
        //                                  join gdnd in Context.Set<GoodsDeliveryNoteDetail>() on gdn.Id equals gdnd.GoodsDeliveryNoteId
        //                                  join ut in Context.Set<UnitTranslation>() on gdnd.ProductUnitId equals ut.ProductUnitId
        //                                  where gdn.TenantId == tenantId && gdn.WarehouseId == warehouseId && gdnd.ProductId == productId
        //                                        && (!fromDate.HasValue || gdn.DeliveryDate >= fromDate)
        //                                        && (!toDate.HasValue || gdn.DeliveryDate <= toDate.Value.AddDays(1).AddMinutes(-1))
        //                                        && !gdn.IsDelete && !gdnd.IsDelete && !ut.IsDelete
        //                                  select new WarehouseCardDetailItemViewModel
        //                                  {
        //                                      Id = gdn.Id,
        //                                      InvoiceDate = gdn.DeliveryDate,
        //                                      IsReceiving = false,
        //                                      Quantity = gdnd.Quantity,
        //                                      Date = gdn.DeliveryDate,
        //                                      ReceiptNo = gdn.DeliveryNo,
        //                                      Note = gdn.Note,
        //                                      Price = gdnd.Price,
        //                                      Value = gdnd.Price * gdnd.Quantity
        //                                  };

        //    var query = queryGoodsReceiptNotes.Union(queryGoodsDeliveryNotes);
        //    totalRows = query.Count();
        //    return query.OrderBy(x => x.Date)
        //        .Skip((page - 1) * pageSize)
        //        .Take(pageSize)
        //        .ToListAsync();
        //}

        public async Task<int> CountByDate(string tenantId, DateTime entryDate)
        {
            return await _goodsReceiptRepository.CountAsync(x =>
                x.TenantId == tenantId && EF.Functions.DateDiffDay(x.EntryDate, entryDate) == 0);
        }
    }
}
