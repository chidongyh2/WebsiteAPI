using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.ViewModels;
using Microsoft.AspNetCore.Identity;

namespace GHM.Core.Domain.IRepository
{
    public interface IRoleRepository : IRoleStore<Role>
    {
        //Task<int> Insert(Role role);

        //Task<int> Update(Role role);

        //Task<int> Delete(string id);

        //Task<Role> GetInfo(string id, bool isReadOnly = false);        

        Task<bool> CheckRoleExistsByTenant(string tenantId, string roleId);

        Task<bool> CheckExists(string tenantId, string id, string name);

        Task<List<RoleSearchViewModel>> SearchByTenant(string keyword, string tenantId, int page, int pageSize, out int totalRows);

        Task<int> ForceDelete(string roleId);
    }
}
