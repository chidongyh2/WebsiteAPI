using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.Models;
using GHM.Infrastructure.SqlServer;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Core.Infrastructure.Repository
{
    public class TenantPageRepository : RepositoryBase, ITenantPageRepository
    {
        private readonly IRepository<TenantPage> _tenantPageRepository;
        public TenantPageRepository(IDbContext context) : base(context)
        {
            _tenantPageRepository = Context.GetRepository<TenantPage>();
        }
        public async Task<int> Insert(TenantPage tenantPage)
        {
             _tenantPageRepository.Create(tenantPage);
            return await Context.SaveChangesAsync();
        }
    }
}
