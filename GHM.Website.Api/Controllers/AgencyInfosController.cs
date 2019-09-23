using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using GHM.Website.Domain.IServices;
using GHM.Website.Domain.ModelMetas;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;
using System.Threading.Tasks;

namespace GHM.Website.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class AgencyInfosController : GhmControllerBase
    {
        private readonly IAgencyInfoService _agencyInfoService;
        public AgencyInfosController(IAgencyInfoService agencyInfoService)
        {
            _agencyInfoService = agencyInfoService;
        }

        [AcceptVerbs("GET")]
        [AllowPermission(PageId.AgencyInfo, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, bool? isActive, int page = 1, int pageSize = 20)
        {
            var result = await _agencyInfoService.Search(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, keyword, isActive, page, pageSize);
            return Ok(result);
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.AgencyInfo, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]AgencyInfoMeta agencyInfoMeta)
        {
            var result = await _agencyInfoService.Insert(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, agencyInfoMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.AgencyInfo, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]AgencyInfoMeta agencyInfoMeta)
        {
            var result = await _agencyInfoService.Update(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, id, agencyInfoMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.AgencyInfo, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Detail(string id)
        {
            var result = await _agencyInfoService.GetDetail(CurrentUser.TenantId, id);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.AgencyInfo, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _agencyInfoService.Delete(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

    }
}