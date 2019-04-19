using System;
using System.Threading.Tasks;
using GHM.Core.Domain.IServices;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Filters;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Core.Api.Controllers
{
    [Authorize]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/approver-configs")]

    public class ApproverConfigController : GhmControllerBase
    {
        private readonly IApproverConfigService _aproverConfigService;


        public ApproverConfigController(IApproverConfigService aproverConfigService)
        {
            _aproverConfigService = aproverConfigService;
        }

        [AcceptVerbs("GET")]
        [AllowPermission(PageId.ApproverConfig, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Get(string keyword, ApproverConfigType? type, int page = 1, int pageSize = 20)
        {
            var result = await _aproverConfigService.SearchAsync(CurrentUser.TenantId, keyword, type, page, pageSize);
            return Ok(result);
        }

        [Route("search/{tenantId}/{type}"), AcceptVerbs("GET")]
        public async Task<IActionResult> Search(string tenantId, string keyword, ApproverConfigType? type, int page = 1, int pageSize = 20)
        {
            var result = await _aproverConfigService.Search(tenantId, keyword, type, page, pageSize);
            return Ok(result);
        }

        [Route("{userId}/{type}"), AcceptVerbs("POST")]
        public async Task<IActionResult> Insert(string userId, ApproverConfigType type)
        {
            var result = await _aproverConfigService.Insert(CurrentUser.TenantId, userId, type);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{userId}/{type}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.ApproverConfig, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string userId, ApproverConfigType type)
        {
            var result = await _aproverConfigService.Delete(CurrentUser.TenantId, userId, type);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("approve/{tenantId}/{userId}/{type}"), AcceptVerbs("GET")]
        //[CheckPermission(PageId.ApproverConfig, Permission.Delete)]
        public async Task<IActionResult> CheckExistsUserId(string tenantId, string userId, ApproverConfigType type)
        {
            var result = await _aproverConfigService.CheckExistsUserId(tenantId, userId, type);

            return Ok(result);

        }

        [Route("types"), AcceptVerbs("GET")]
        [AllowPermission(PageId.ApproverConfig, Permission.View)]
        [CheckPermission]
        public IActionResult Types()
        {
            return Ok(_aproverConfigService.GetTypes());
        }
    }
}