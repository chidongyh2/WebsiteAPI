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
    [Route("api/v{version:apiVersion}/productCategoriesAttributes")]

    public class ProductCategoriesAttributesController : GhmControllerBase
    {
        private readonly IProductCategoriesAttributeService _productCategoriesAttributeService;

        public ProductCategoriesAttributesController(IProductCategoriesAttributeService productCategoriesAttributeService)
        {
            _productCategoriesAttributeService = productCategoriesAttributeService;
        }

        [AcceptVerbs("GET")]
        [AllowPermission(PageId.ProductCategoriesAttribute, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(int categoryId)
        {
            var result = await _productCategoriesAttributeService.Search(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, categoryId);

            return Ok(result);
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.ProductCategoriesAttribute, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]ProductCategoriesAttributeMeta productCategoriesAttributeMeta)
        {
            var result = await _productCategoriesAttributeService.Insert(CurrentUser.TenantId, productCategoriesAttributeMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{categoryId}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.ProductCategoriesAttribute, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetDetailAttribute(int categoryId)
        {
            var result = await _productCategoriesAttributeService.GetDetailAttributeValues(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, categoryId);
        
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.ProductCategoriesAttribute, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(int categoryId, string attributeId)
        {
            var result = await _productCategoriesAttributeService.Delete(categoryId, attributeId);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }
    }
}