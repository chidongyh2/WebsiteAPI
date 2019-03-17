using GHM.Core.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Core.Domain.IRepository
{
    public interface ITenantPageRepository
    {
        Task<int> Insert(TenantPage tenantPage);
    }
}
