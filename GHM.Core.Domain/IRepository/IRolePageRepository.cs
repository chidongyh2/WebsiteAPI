using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.ModelMetas;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Models;

namespace GHM.Core.Domain.IRepository
{
    public interface IRolePageRepository
    {
        Task<ActionResultResponse> Insert(RolesPages rolePage);
        Task<int> Inserts(List<RolesPages> rolePages);

        Task<int> Delete(string roleId, int pageId);

        Task<int> UpdatePermission(string roleId, int pageId, int permissions);

        Task<bool> CheckExists(int pageId, string roleId);

        Task<List<RolesPages>> GetsByPageId(int pageId, bool isReadOnly = false);

        Task<List<RolesPages>> GetsByRoleId(string roleId, bool isReadOnly = false);

        Task<List<RolesPagesViewModel>> GetsByRoleId(string languageid, string roleId);

        Task<List<RolesPagesViewModel>> GetsByUserId(string userId);

        Task<ActionResultResponse> DeleteByPageId(int pageId);

        Task<int> DeleteByRoleIdAndPageIds(string roleId, List<int> pageId);

        Task<int> UpdateRolePagePermission(string roleId, List<RolePagePermissionMeta> rolePagePermissions);

        Task<ActionResultResponse> DeleteByRoleId(string roleId);

        Task<int> ForceDeleteByRoleId(string roleId);

        Task<RolesPages> GetInfo(string roleId, int pageId);
    }
}
