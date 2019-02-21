using System;
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
    [Route("api/v{version:apiVersion}/brands")]

    public class BrandsController : GhmControllerBase
    {
        private readonly IBrandService _brandService;

        public BrandsController(IBrandService brandService)
        {
            _brandService = brandService;
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Brand, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]BrandMeta brandMeta)
        {
            var result = await _brandService.Insert(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, brandMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Brand, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]BrandMeta brandMeta)
        {
            var result = await _brandService.Update(CurrentUser.TenantId, id, CurrentUser.Id, CurrentUser.FullName, brandMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}/status/{isActive}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Brand, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, bool isActive)
        {
            var result = await _brandService.Update(CurrentUser.TenantId, id, CurrentUser.Id, CurrentUser.FullName, isActive);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.Brand, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _brandService.Delete(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Brand, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetDetail(string id)
        {
            var result = await _brandService.GetDetail(CurrentUser.TenantId, id);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        [AcceptVerbs("GET")]
        [AllowPermission(PageId.Brand, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, bool? isActive, int page = 1, int pageSize = 20)
        {
            var result = await _brandService.Search(CurrentUser.TenantId, keyword, isActive, page, pageSize);

            return Ok(result);
        }

        #region client
        [Route("{tenantId}/alls"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetAllBrand(string tenantId, string bannerId)
        {

            var result = await _brandService.Search(tenantId, string.Empty, true, 1, int.MaxValue);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);

        }
        #endregion
    }
}