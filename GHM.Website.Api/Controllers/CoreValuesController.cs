using System.Globalization;
using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using GHM.Website.Domain.IServices;
using GHM.Website.Domain.ModelMetas;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Website.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/core-values")]
    public class CoreValuesController : GhmControllerBase
    {
        private readonly ICoreValueService _coreValueService;
        public CoreValuesController(ICoreValueService coreValueService)
        {
            _coreValueService = coreValueService;
        }

        [AcceptVerbs("GET")]
        [AllowPermission(PageId.CoreValue, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, bool? isActive, int page = 1, int pageSize = 20)
        {
            var result = await _coreValueService.Search(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, keyword, isActive, page, pageSize);
            return Ok(result);
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.CoreValue, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]CoreValueMeta coreValueMeta)
        {
            var result = await _coreValueService.Insert(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, coreValueMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.CoreValue, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]CoreValueMeta coreValueMeta)
        {
            var result = await _coreValueService.Update(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, id, coreValueMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.CoreValue, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Detail(string id)
        {
            var result = await _coreValueService.GetDetail(CurrentUser.TenantId, id);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.CoreValue, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _coreValueService.Delete(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        #region  client
        [Route("{tenantId}/{languageId?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetAllActivatedCoreValue(string tenantId, string languageId)
        {
            var result = await _coreValueService.GetAllActivatedCoreValue(tenantId, languageId ?? CultureInfo.CurrentCulture.Name);
            return Ok(result);
        }
     
        #endregion
    }
}