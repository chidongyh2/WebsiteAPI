using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.IServices;
using GHM.Infrastructure.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace GHM.Core.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/user-role")]
    public class UserRoleController : GhmControllerBase
    {
        private IMemoryCache _cache;
        private readonly IUserRoleService _userRoleService;

        public UserRoleController(IMemoryCache cache, IUserPermissionRepository userPermissionRepository, IUserRoleService userRoleService)
        {
            _cache = cache;
            _userRoleService = userRoleService;
        }

        [AcceptVerbs("POST")]
        [Route("{userId}")]
        public async Task<IActionResult> CheckPermission(string userId, [FromBody]List<PagePermission> pagePermissions)
        {
            return Ok(await _userRoleService.CheckPermission(userId, pagePermissions));
        }

        [AcceptVerbs("POST")]
        [Route("{userId}/{roleId}")]
        public async Task<IActionResult> Insert(string userId, string roleId)
        {
            var result = await _userRoleService.Insert(userId, roleId);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [AcceptVerbs("GET")]
        [Route("roles/{roleId}")]
        public async Task<IActionResult> GetsByRoleId(string roleId)
        {
            return Ok(await _userRoleService.GetsByRoleId(roleId));
        }

        [AcceptVerbs("GET")]
        [Route("users/{userId}")]
        public async Task<IActionResult> GetsByUserId(string userId)
        {
            return Ok(await _userRoleService.GetsByUserId(userId));
        }

        [AcceptVerbs("DELETE")]
        [Route("role/{roleId}")]
        public async Task<IActionResult> DeleteByRoleId(string roleId)
        {
            var result = await _userRoleService.DeleteByRoleId(roleId);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [AcceptVerbs("DELETE")]
        [Route("user/{roleId}")]
        public async Task<IActionResult> DeleteByUserId(string userId)
        {
            var result = await _userRoleService.DeleteByUserId(userId);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }
    }
}