using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.SqlServer;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class GoodsDeliverRepository : RepositoryBase, IGoodsDeliverRepository
    {
        private readonly IRepository<GoodsDeliver> _goodsDeliverRepository;
        public GoodsDeliverRepository(IDbContext context) : base(context)
        {
            _goodsDeliverRepository = Context.GetRepository<GoodsDeliver>();
        }


        public async Task<bool> CheckExists(string id, string fullName, string phoneNumber)
        {
            fullName = fullName.Trim();
            phoneNumber = phoneNumber.Trim();
            return await _goodsDeliverRepository.ExistAsync(x =>
                x.Id != id && x.FullName == fullName && x.PhoneNumber == phoneNumber);
        }

        public async Task<int> Insert(GoodsDeliver goodsDeliver)
        {
            _goodsDeliverRepository.Create(goodsDeliver);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(GoodsDeliver goodsDeliver)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<GoodsDeliver> GetInfoBySupplier(string tenantId, string supplierId, string id, bool isReadOnly = false)
        {
            return await _goodsDeliverRepository.GetAsync(isReadOnly, x => x.TenantId == tenantId && x.Id == id && x.SupplierId == supplierId);
        }

        public async Task<GoodsDeliver> GetInfo(string tenantId, string fullName, string phoneNumber)
        {
            return await _goodsDeliverRepository.GetAsync(false,
                x => x.TenantId == tenantId && x.FullName == fullName && x.PhoneNumber == phoneNumber);
        }

        public Task<List<GoodsDeliverReceiverSuggestion>> Suggestion(string tenantId, string supplierId, string keyword, int page,
            int pageSize, out int totalRows)
        {
            Expression<Func<GoodsDeliver, bool>> spec = x => x.TenantId == tenantId;
            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            if (!string.IsNullOrEmpty(supplierId))
            {
                spec = spec.And(x => x.SupplierId == supplierId);
            }

            var sort = Context.Filters.Sort<GoodsDeliver, string>(x => x.UnsignName, true);
            var paging = Context.Filters.Page<GoodsDeliver>(page, pageSize);

            totalRows = _goodsDeliverRepository.Count(spec);
            return _goodsDeliverRepository.GetsAsAsync(x => new GoodsDeliverReceiverSuggestion
            {
                Id = x.Id,
                Name = x.FullName,
                PhoneNumber = x.PhoneNumber
            }, spec, sort, paging);
        }

        public async Task<GoodsDeliver> GetInfo(string tenantId, string supplierId, string fullName, string phoneNumber)
        {
            return await _goodsDeliverRepository.GetAsync(false,
                x => x.TenantId == tenantId && x.FullName == fullName && x.PhoneNumber == phoneNumber && x.SupplierId == supplierId);
        }
    }
}
