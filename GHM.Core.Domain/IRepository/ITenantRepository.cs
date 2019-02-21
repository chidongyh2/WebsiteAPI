using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Models;

namespace GHM.Core.Domain.IRepository
{
    public interface ITenantRepository
    {
        Task<int> Insert(Tenant tenant);

        Task<int> Update(Tenant tenant);

        Task<int> UpdateActiveStatus(string id, bool isActive);

        Task<Tenant> GetInfo(string id);

        Task<bool> CheckExists(string id, string phoneNumber, string email);

        Task<List<TenantSearchViewModel>> Search(string keyword, bool? isActive, int page, int pageSize, out int totalRows);
    }
}
