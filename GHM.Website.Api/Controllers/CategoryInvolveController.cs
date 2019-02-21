using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using GHM.Website.Domain.IServices;
using GHM.Website.Domain.ModelMetas;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Website.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]

    public class CategoryInvolveController : GhmControllerBase
    {
        private readonly ICategoryInvolveService _categoryInvolveService;

        public CategoryInvolveController(ICategoryInvolveService categoryInvolveService)
        {
            _categoryInvolveService = categoryInvolveService;
        }

        [Route("{categoryId}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.CategoryInvolve, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetListCategoryInvolveId(int categoryId, int page = 1, int pageSize = 20)
        {
            var result = await _categoryInvolveService.GetListCategoryInvolveId(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, categoryId, page, pageSize);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{imageGroupId}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.CategoryInvolve, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> SearchNews(int categoryId, int page = 1, int pageSize = 20)
        {
            var result = await _categoryInvolveService.SearchNews(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, categoryId, page, pageSize);
            return Ok(result);
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.CategoryInvolve, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody] CategoryInvolveMeta categoryInvolveMeta)
        {
            var result = await _categoryInvolveService.Insert(categoryInvolveMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.CategoryInvolve, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Update([FromBody] CategoryInvolveMeta categoryInvolveMeta)
        {
            var result = await _categoryInvolveService.Update(categoryInvolveMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{categoryId}/{categoryInvolveId}"), AcceptVerbs("DELETE"), ValidateModel]
        [AllowPermission(PageId.CategoryInvolve, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Delete(int categoryId, int categoryInvolveId)
        {
            var result = await _categoryInvolveService.Delete(categoryId, categoryInvolveId);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

    }
}