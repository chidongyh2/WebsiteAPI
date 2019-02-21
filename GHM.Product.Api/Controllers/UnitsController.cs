using System.Globalization;
using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using GHM.Product.Domain.IServices;
using GHM.Product.Domain.ModelMetas;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Warehouse.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/units")]

    public class UnitsController : GhmControllerBase
    {
        private readonly IUnitService _unitService;

        public UnitsController(IUnitService unitService)
        {
            _unitService = unitService;
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Unit, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]UnitMeta unitMeta)
        {
            var result = await _unitService.Insert(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, unitMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Unit, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]UnitMeta unitMeta)
        {
            var result = await _unitService.Update(CurrentUser.TenantId, id, CurrentUser.Id, CurrentUser.FullName, unitMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}/status/{isActive}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.Unit, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, bool isActive)
        {
            var result = await _unitService.Update(CurrentUser.TenantId, id, CurrentUser.Id, CurrentUser.FullName, isActive);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.Unit, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _unitService.Delete(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Unit, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetDetail(string id)
        {
            var result = await _unitService.GetInfo(CurrentUser.TenantId, id);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        [AcceptVerbs("GET")]
        [AllowPermission(PageId.Unit, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, bool? isActive, int page = 1, int pageSize = 20)
        {
            var result = await _unitService.Search(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, keyword, isActive, page, pageSize);

            return Ok(result);
        }

        [Route("suggestions"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> SearchSuggesstion(string keyword, int page = 1, int pageSize = 20)
        {
            var result = await _unitService.Suggestions(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, keyword, page, pageSize);
            return Ok(result);
        }
    }
}
