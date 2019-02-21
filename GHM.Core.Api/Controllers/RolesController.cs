using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;
using GHM.Core.Domain.IServices;
using GHM.Core.Domain.ModelMetas;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Filters;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Core.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class RolesController : GhmControllerBase
    {
        private readonly IRoleService _roleService;
        private readonly IUserRoleService _userRoleService;

        public RolesController(IRoleService roleService, IUserRoleService userRoleService)
        {
            _roleService = roleService;
            _userRoleService = userRoleService;
        }

        [AcceptVerbs("POST")]
        [AllowPermission(PageId.ConfigRoles, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]RoleMeta roleMeta)
        {
            var result = await _roleService.Insert(CurrentUser.TenantId, roleMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.ConfigRoles, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]RoleMeta roleMeta)
        {
            var result = await _roleService.Update(CurrentUser.TenantId, id, roleMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.ConfigRoles, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Detail(string id)
        {
            var result = await _roleService.Detail(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, id);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.ConfigRoles, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _roleService.Delete(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [AcceptVerbs("GET")]
        [AllowPermission(PageId.ConfigRoles, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, int page, int pageSize)
        {
            var result = await _roleService.Search(CurrentUser.TenantId, keyword, page, pageSize);
            return Ok(result);
        }

        #region RolePage
        [Route("{roleId}/pages"), AcceptVerbs("GET")]
        [AllowPermission(PageId.ConfigRoles, Permission.Insert, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> GetRolesPages(string roleId)
        {
            var result = await _roleService.GetRolesPages(CultureInfo.CurrentCulture.Name, CurrentUser.TenantId, roleId);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{roleId}/pages"), AcceptVerbs("POST")]
        [AllowPermission(PageId.ConfigRoles, Permission.Insert, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> AddNewPages(string roleId, [FromBody]List<RolePagePermissionMeta> rolePagePermission)
        {
            var result = await _roleService.AddNewRolePage(CurrentUser.TenantId, roleId, rolePagePermission);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("pages/{roleId}/{pageId}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.ConfigRoles, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> DeleteRolePage(string roleId, int pageId)
        {
            var result = await _roleService.DeleteRolePage(CurrentUser.TenantId, roleId, pageId);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("pages/{roleId}/{pageId}/{permissions}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.ConfigRoles, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdatePermission(string roleId, int pageId, int permissions)
        {
            var result = await _roleService.UpdateRolePagePermission(CurrentUser.TenantId, roleId, pageId, permissions);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }
        #endregion

        #region User roles
        [Route("{id}/users"), AcceptVerbs("POST")]
        [AllowPermission(PageId.ConfigRoles, Permission.Insert, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> SaveUsers(string id, [FromBody]ICollection<string> userIds)
        {
            var result = await _userRoleService.SaveUsers(CurrentUser.TenantId, id, userIds);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}/users/{userId}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.ConfigRoles, Permission.Insert, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> RemoveUser(string id, string userId)
        {
            var result = await _userRoleService.Delete(CurrentUser.TenantId, userId, id);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }
        #endregion


        #region SupperAdministrator
        [Authorize(Roles = "SuperAdministrator")]
        [Route("{tenantId}"), AcceptVerbs("GET")]
        public async Task<IActionResult> SearchByTenantId(string tenantId, string keyword, int page, int pageSize)
        {
            var result = await _roleService.Search(tenantId, keyword, page, pageSize);
            return Ok(result);
        }
        #endregion
    }
}