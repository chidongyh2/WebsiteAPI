using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class GoodsDeliveryNoteReceiverRepository : RepositoryBase, IGoodsDeliveryNoteReceiverRepository
    {
        private readonly IRepository<GoodsDeliveryNoteReceiver> _goodsDeliveryNoteReceiverRepository;
        public GoodsDeliveryNoteReceiverRepository(IDbContext context) : base(context)
        {
            _goodsDeliveryNoteReceiverRepository = Context.GetRepository<GoodsDeliveryNoteReceiver>();
        }

        public async Task<bool> CheckExists(string id, string fullName, string phoneNumber)
        {
            fullName = fullName.Trim();
            phoneNumber = phoneNumber.Trim();
            return await _goodsDeliveryNoteReceiverRepository.ExistAsync(x =>
                x.Id != id && x.FullName == fullName && x.PhoneNumber == phoneNumber);
        }

        public async Task<int> Insert(GoodsDeliveryNoteReceiver goodsDeliveryNoteReceiver)
        {
            _goodsDeliveryNoteReceiverRepository.Create(goodsDeliveryNoteReceiver);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(GoodsDeliveryNoteReceiver goodsDeliveryNoteReceiver)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<GoodsDeliveryNoteReceiver> GetInfo(string tenantId, string fullName, string phoneNumber)
        {
            return await _goodsDeliveryNoteReceiverRepository.GetAsync(false,
                x => x.TenantId == tenantId && x.FullName == fullName && x.PhoneNumber == phoneNumber);
        }

        public async Task<GoodsDeliveryNoteReceiver> GetInfo(string tenantId, string id)
        {
            return await _goodsDeliveryNoteReceiverRepository.GetAsync(false,
                x => x.TenantId == tenantId && x.Id == id);
        }

        public Task<List<GoodsDeliverReceiverSuggestion>> Suggestion(string tenantId, string keyword, int page,
            int pageSize, out int totalRows)
        {
            Expression<Func<GoodsDeliveryNoteReceiver, bool>> spec = x => x.TenantId == tenantId;
            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            var sort = Context.Filters.Sort<GoodsDeliveryNoteReceiver, string>(x => x.UnsignName, true);
            var paging = Context.Filters.Page<GoodsDeliveryNoteReceiver>(page, pageSize);

            totalRows = _goodsDeliveryNoteReceiverRepository.Count(spec);
            return _goodsDeliveryNoteReceiverRepository.GetsAsAsync(x => new GoodsDeliverReceiverSuggestion
            {
                Id = x.Id,
                Name = x.FullName,
                PhoneNumber = x.PhoneNumber
            }, spec, sort, paging);
        }
    }


}
