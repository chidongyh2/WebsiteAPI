using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Models;

namespace GHM.Core.Domain.IServices
{
    public interface IUserRoleService
    {
        Task<ActionResultResponse> Insert(string userId, string roleId);

        Task<ActionResultResponse> SaveUsers(string tenantId, string roleId, ICollection<string> userIds);

        Task<ActionResultResponse> Delete(string tanantId, string userId, string roleId);

        Task<bool> CheckPermission(string userId, int pageId, int[] permissions);

        Task<bool> CheckPermission(string userId, List<PagePermission> pagePermissions);

        Task<List<UserRoleSearchViewModel>> GetsByUserId(string userId);

        Task<List<UserRoleSearchViewModel>> GetsByRoleId(string roleId);

        Task<ActionResultResponse> DeleteByUserId(string userId);

        Task<ActionResultResponse> DeleteByRoleId(string roleId);
    }
}
