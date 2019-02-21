using System;
using System.Globalization;
using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using GHM.Website.Domain.IServices;
using GHM.Website.Domain.ModelMetas;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Website.Api.Controllers
{
    //[Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/branchs")]
    public class BranchContactController : GhmControllerBase
    {
        private readonly IBranchContactService _branchContactService;
        public BranchContactController(IBranchContactService branchContactService)
        {
            _branchContactService = branchContactService;
        }

        #region Administrator.
        [AcceptVerbs("GET")]
        [AllowPermission(PageId.BranchContact, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, int page = 1, int pageSize = 20)
        {
            var result = await _branchContactService.Search(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, keyword, page, pageSize);
            return Ok(result);
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.BranchContact, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]BranchContactMeta branchContactMeta)
        {
            var result = await _branchContactService.Insert(CurrentUser.TenantId, branchContactMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.BranchContact, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _branchContactService.Delete(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.BranchContact, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetDetail(string id)
        {
            var result = await _branchContactService.GetDetail(id, CultureInfo.CurrentCulture.Name);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.BranchContact, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]BranchContactMeta branchContactMeta)
        {
            var result = await _branchContactService.Update(CurrentUser.TenantId, id, branchContactMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        #endregion
        #region Client
        [Route("alls/{tenantId}/{languageId?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> SearchClient(string tenantId, string languageId)
        {
            var result = await _branchContactService.SearchForClient(tenantId, languageId ?? CultureInfo.CurrentCulture.Name);
            return Ok(result);
        }
        #endregion

    }
}