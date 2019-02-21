using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.ModelMetas;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;

namespace GHM.Core.Domain.IServices
{
    public interface IRoleService
    {
        Task<ActionResultResponse> Insert(string tenantId, RoleMeta roleMeta);

        Task<ActionResultResponse> Update(string tenantId, string id, RoleMeta roleMeta);

        Task<ActionResultResponse> Delete(string tenantId, string id);

        Task<ActionResultResponse<RoleDetailViewModel>> Detail(string tenantId, string languageId, string id);

        Task<SearchResult<RoleSearchViewModel>> Search(string tenantId, string keyword, int page, int pageSize);

        #region RolePage    
        Task<ActionResultResponse> AddNewRolePage(string tenantId, string roleId, List<RolePagePermissionMeta> rolePagePermissionMeta);

        Task<ActionResultResponse> DeleteRolePage(string tenantId, string roleId, int pageId);

        Task<ActionResultResponse> UpdateRolePagePermission(string tenantId, string roleId, int pageId, int permissions);

        Task<SearchResult<RolesPagesViewModel>> GetRolesPages(string languageId, string tenantId, string roleId);
        #endregion
    }
}
