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
using OfficeOpenXml.FormulaParsing.ExpressionGraph;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class LotRepository : RepositoryBase, ILotRepository
    {
        private readonly IRepository<Lot> _lotRepository;
        public LotRepository(IDbContext context) : base(context)
        {
            _lotRepository = Context.GetRepository<Lot>();
        }

        public async Task<int> Insert(Lot lot)
        {
            _lotRepository.Create(lot);
            return await Context.SaveChangesAsync();
        }

        public async Task<bool> CheckExists(string tenantId, string id)
        {
            return await _lotRepository.ExistAsync(x => x.TenantId == tenantId && x.Id == id);
        }

        public async Task<List<Lot>> Search(string tenantId, string id)
        {
            return await _lotRepository.GetsAsync(true, x => x.TenantId == tenantId && x.Id.Contains(id));
        }

        public Task<List<Suggestion<string>>> Suggestion(string tenantId, string id, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Lot, bool>> spec = x => x.TenantId == tenantId;
            if (!string.IsNullOrEmpty(id))
            {
                id = id.Trim();
                spec = spec.And(x => x.Id.Contains(id));
            }

            var sort = Context.Filters.Sort<Lot, string>(x => x.Id, true);
            var paging = Context.Filters.Page<Lot>(page, pageSize);

            totalRows = _lotRepository.Count(spec);
            return _lotRepository.GetsAsAsync(x => new Suggestion<string>
            {
                Id = x.Id,
                Name = x.Id
            }, spec, sort, paging);
        }
    }
}
