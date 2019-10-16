using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;


namespace GHM.Warehouse.Infrastructure.Repository
{
    using Warehouse = Domain.Models.Warehouse;
    public class GoodsDeliveryNoteRepository : RepositoryBase, IGoodsDeliveryNoteRepository
    {
        private readonly IRepository<GoodsDeliveryNote> _goodsDeliveryNoteRepository;
        public GoodsDeliveryNoteRepository(IDbContext context) : base(context)
        {
            _goodsDeliveryNoteRepository = Context.GetRepository<GoodsDeliveryNote>();
        }

        public async Task<int> Insert(GoodsDeliveryNote goodsDeliveryNote)
        {
            _goodsDeliveryNoteRepository.Create(goodsDeliveryNote);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(GoodsDeliveryNote goodsDeliveryNote)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string tenantId, string id)
        {
            var info = await GetInfo(tenantId, id);
            if (info == null)
                return -1;

            _goodsDeliveryNoteRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string tenantId, string id)
        {
            var info = await GetInfo(tenantId, id);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<GoodsDeliveryNote> GetInfo(string tenantId, string id, bool isReadOnly = false)
        {
            return await _goodsDeliveryNoteRepository.GetAsync(isReadOnly, x => x.TenantId == tenantId && x.Id == id);
        }

        public async Task<GoodsDeliveryNote> GetInfo(string id, bool isReadOnly = false)
        {
            return await _goodsDeliveryNoteRepository.GetAsync(isReadOnly, x => x.Id == id);
        }

        public async Task<GoodsDeliveryNoteDetailViewModel> GetDetail(string tenantId, string id)
        {
            var query = from gdn in Context.Set<GoodsDeliveryNote>()
                        join w in Context.Set<Warehouse>() on gdn.WarehouseId equals w.Id
                        join gdnr in Context.Set<GoodsDeliveryNoteReceiver>() on gdn.ReceiverId equals gdnr.Id into gd
                        from ggdnr in gd.DefaultIfEmpty()
                        where gdn.TenantId == tenantId && gdn.Id == id && !gdn.IsDelete
                        select new GoodsDeliveryNoteDetailViewModel
                        {
                            Id = gdn.Id,
                            WarehouseId = gdn.WarehouseId,
                            WarehouseName = w.Name,
                            TenantId = gdn.TenantId,
                            DeliveryDate = gdn.DeliveryDate,
                            CreatorId = gdn.CreatorId,
                            CreatorFullName = gdn.CreatorFullName,
                            Reason = gdn.Reason,
                            Type = gdn.Type,
                            ReceiverId = ggdnr.Id,
                            ReceiverFullName = ggdnr.FullName,
                            ReceiverPhoneNumber = ggdnr.PhoneNumber,
                            OfficeId = gdn.OfficeId,
                            OfficeName = gdn.OfficeName,
                            Note = gdn.Note,
                            TotalAmounts = gdn.TotalAmounts,
                            ForecatstId = gdn.ForecatstId,
                            DeliveryNo = gdn.DeliveryNo,
                            TotalItems = gdn.TotalItems,
                            ConcurrencyStamp = gdn.ConcurrencyStamp,
                            SubjectId = gdn.SubjectId,
                        };
            return await query.FirstOrDefaultAsync();

            //return await Context.Set<GoodsDeliveryNote>().Where(x => x.TenantId == tenantId && x.Id == id)
            //    .Join(Context.Set<Warehouse>(), gdn => gdn.WarehouseId, w => w.Id, (gdn, w)
            //   => new GoodsDeliveryNoteDetailViewModel
            //   {
            //       Id = gdn.Id,
            //       WarehouseId = gdn.WarehouseId,
            //       WarehouseName = w.Name,
            //       TenantId = gdn.TenantId,
            //       DeliveryDate = gdn.DeliveryDate,
            //       CreatorId = gdn.CreatorId,
            //       CreatorFullName = gdn.CreatorFullName,
            //       Reason = gdn.Reason,
            //       Type = gdn.Type,
            //       ReceiverId = gdn.ReceiverId,
            //       OfficeId = gdn.OfficeId,
            //       OfficeName = gdn.OfficeName,
            //       Note = gdn.Note,
            //       TotalAmounts = gdn.TotalAmounts,
            //       ForecatstId = gdn.ForecatstId,
            //       DeliveryNo = gdn.DeliveryNo,
            //       TotalItems = gdn.TotalItems,
            //       ConcurrencyStamp = gdn.ConcurrencyStamp,
            //       SubjectId = gdn.SubjectId
            //   }).FirstOrDefaultAsync();
        }

        public async Task<bool> CheckExists(string tenantId, string id)
        {
            return await _goodsDeliveryNoteRepository.ExistAsync(x => x.TenantId == tenantId && x.Id == id);
        }

        public async Task<int> UpdateTotalAmount(string tenantId, string id, decimal totalAmount)
        {
            var info = await GetInfo(tenantId, id);
            if (info == null)
                return -1;

            info.TotalAmounts = totalAmount;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateTotalItems(string tenantId, string id, int totalItems)
        {
            var info = await GetInfo(tenantId, id);
            if (info == null)
                return -1;

            info.TotalItems = totalItems;
            return await Context.SaveChangesAsync();
        }

        public Task<List<GoodsDeliveryNotesViewModel>> Search(string tenantId, string userId, string keyword, GoodsDeliveryNoteType? type,
            string warehouseId, DateTime? fromDate,
            DateTime? toDate, int page, int pageSize, out int totalRows)
        {
            var query = from gdn in Context.Set<GoodsDeliveryNote>()
                        join wmc in Context.Set<WarehouseManagerConfig>() on gdn.WarehouseId equals wmc.WarehouseId
                        join w in Context.Set<Warehouse>() on gdn.WarehouseId equals w.Id
                        where gdn.TenantId == tenantId && !gdn.IsDelete && wmc.UserId == userId
                              && (string.IsNullOrEmpty(warehouseId) || gdn.WarehouseId == warehouseId)
                              && (!fromDate.HasValue || fromDate.Value >= gdn.DeliveryDate)
                              && (!toDate.HasValue || toDate.Value <= gdn.DeliveryDate)
                              && (!type.HasValue || gdn.Type == type)
                        select new GoodsDeliveryNotesViewModel
                        {
                            Id = gdn.Id,
                            WarehouseId = gdn.WarehouseId,
                            WarehouseName = w.Name,
                            TenantId = gdn.TenantId,
                            DeliveryDate = gdn.DeliveryDate,
                            CreatorId = gdn.CreatorId,
                            CreatorFullName = gdn.CreatorFullName,
                            Reason = gdn.Reason,
                            Type = gdn.Type,
                            ReceiverId = gdn.ReceiverId,
                            OfficeId = gdn.OfficeId,
                            OfficeName = gdn.OfficeName,
                            Note = gdn.Note,
                            TotalAmounts = gdn.TotalAmounts,
                            ForecatstId = gdn.ForecatstId,
                            DeliveryNo = gdn.DeliveryNo,
                            TotalItems = gdn.TotalItems,
                            SubjectId = gdn.SubjectId
                        };

            totalRows = query.Count();
            return query.OrderByDescending(x => x.DeliveryDate)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Count(string tenantId)
        {
            return await _goodsDeliveryNoteRepository.CountAsync(x => x.TenantId == tenantId);
        }

        public async Task<int> CountByDate(string tenantId, DateTime deliveryDate)
        {
            return await _goodsDeliveryNoteRepository.CountAsync(x =>
                x.TenantId == tenantId && EF.Functions.DateDiffDay(deliveryDate, x.DeliveryDate) == 0);
        }

        public async Task<bool> CheckDeliveryNoExists(string tenantId, string id)
        {
            return await _goodsDeliveryNoteRepository.ExistAsync(x => x.TenantId == tenantId && x.DeliveryNo == id);
        }
    }
}
