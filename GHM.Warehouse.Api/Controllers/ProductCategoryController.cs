using System.Globalization;
using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using GHM.Warehouse.Domain.IServices;
using GHM.Warehouse.Domain.ModelMetas;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Warehouse.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/product-categories")]

    public class ProductCategoryController : GhmControllerBase
    {
        private readonly IProductCategoryService _productCategoryService;

        public ProductCategoryController(IProductCategoryService productCategoryService)
        {
            _productCategoryService = productCategoryService;
        }

        [AcceptVerbs("GET")]
        [AllowPermission(PageId.ProductCategory, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> SearchProductCategory(string keyword, bool? isActive, int page = 1, int pageSize = 20)
        {
            var result = await _productCategoryService.Search(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, keyword, isActive, page, pageSize);
            return Ok(result);
        }

        [Route("alls"), AcceptVerbs("GET")]
        [AllowPermission(PageId.ProductCategory, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetAll()
        {
            var result = await _productCategoryService.GetsAll(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name);
            return Ok(result);
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.ProductCategory, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]ProductCategoryMeta productCategoryMeta)
        {
            var result = await _productCategoryService.Insert(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, productCategoryMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.ProductCategory, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(int id, [FromBody]ProductCategoryMeta productCategoryMeta)
        {
            var result = await _productCategoryService.Update(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, id, productCategoryMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/status/{isActive}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.ProductCategory, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateStatus(int id, bool isActive)
        {
            var result = await _productCategoryService.UpdateStatus(CurrentUser.TenantId, id, isActive);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.ProductCategory, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _productCategoryService.Delete(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.ProductCategory, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetDetailProductCategory(int id)
        {
            var result = await _productCategoryService.GetDetail(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, id);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("trees"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetProductCategoryTree()
        {
            var trees = await _productCategoryService.GetFullProductCategoryTree(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name);
            return Ok(trees);
        }

        [Route("suggestions"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetAllProductCategoryForSelect(string keyword, int page = 1, int pageSize = 20)
        {
            var result = await _productCategoryService
                .GetProductCategoryForSelect(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, keyword, page,
                    pageSize);
            return Ok(result);
        }

        //Client
        [Route("{tenantId}/{id}"), AcceptVerbs("GET")]
        [AllowAnonymous]
        public async Task<IActionResult> GetDetailProductCategory(string tenantId, int id)
        {
            var result = await _productCategoryService.GetDetail(tenantId, CultureInfo.CurrentCulture.Name, id);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }
    }
}