using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Models;

namespace GHM.Core.Domain.IRepository
{
    public interface IUserRoleRepository
    {
        Task<int> Insert(string userId, string roleId);

        Task<int> Inserts(IReadOnlyCollection<string> userId, string roleId);

        Task<int> AddUsers(string roleId, ICollection<string> userIds);

        Task<int> Delete(string userId, string roleId);

        Task<bool> CheckExists(string userId, string roleId);

        Task<bool> CheckIsSupperAdmin(string userId);

        Task<bool> CheckPermission(string userId, int pageId, int permission);

        Task<bool> CheckPermission(string userId, List<PagePermission> pagePermissions);

        Task<List<UserRoleSearchViewModel>> GetsByUserId(string userId, bool isReadOnly = false);

        Task<List<UserRoleSearchViewModel>> GetsByRoleId(string roleId, bool isReadOnly = false);

        Task<List<UserRoleViewModel>> GetUserByRoleId(string roleId);

        Task<int> DeleteByUserId(string userId);

        Task<int> DeleteByRoleId(string roleId);
    }
}
