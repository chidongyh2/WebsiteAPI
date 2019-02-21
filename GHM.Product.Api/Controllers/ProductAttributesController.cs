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

namespace GHM.Product.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/product-attributes")]
    public class ProductAttributesController : GhmControllerBase
    {
        private readonly IProductAttributeService _productAttributeService;
        private readonly IProductAttributeValueService _productAttributeValueService;
        public ProductAttributesController(
            IProductAttributeService productAttributeService,
            IProductAttributeValueService productAttributeValueService
            )
        {
            _productAttributeService = productAttributeService;
            _productAttributeValueService = productAttributeValueService;
        }

        #region ProductAttribute
        [AcceptVerbs("GET")]
        [AllowPermission(PageId.ProductAttribute, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, bool? isSelfContent, bool? isRequire, bool? isMultiple, bool? isActive,
            int page = 1, int pageSize = 20)
        {
            var result = await _productAttributeService.Search(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name,
                keyword, isSelfContent, isRequire, isMultiple, isActive, page, pageSize);
            return Ok(result);
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.ProductAttribute, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]ProductAttributeMeta productAttributeMeta)
        {
            var result = await _productAttributeService.Insert(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, productAttributeMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.ProductAttribute, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]ProductAttributeMeta productAttributeMeta)
        {
            var result = await _productAttributeService.Update(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, id, productAttributeMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.ProductAttribute, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _productAttributeService.Delete(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.ProductAttribute, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Detail(string id)
        {
            var result = await _productAttributeService.GetDetail(CurrentUser.TenantId, id);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("suggestion"), AcceptVerbs("GET")]
        [AllowPermission(PageId.ProductAttribute, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Suggestion(string keyword, int selectTop = 20)
        {
            var result = await _productAttributeService.Suggestion(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name,
                keyword, selectTop);
            return Ok(result);
        }

        [Route("{id}/active/{isActive}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.ProductAttribute, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateIsActive(string id, bool isActive)
        {
            var result = await _productAttributeService.UpdateIsActive(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, id, isActive);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/require/{isRequire}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.ProductAttribute, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateIsRequire(string id, bool isRequire)
        {
            var result = await _productAttributeService.UpdateIsRequire(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, id, isRequire);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/multiple/{isMultiple}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.ProductAttribute, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateIsMultiple(string id, bool isMultiple)
        {
            var result = await _productAttributeService.UpdateIsMultiple(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, id, isMultiple);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/self-content/{isSelfContent}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.ProductAttribute, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateIsSelfContent(string id, bool isSelfContent)
        {
            var result = await _productAttributeService.UpdateIsSelfContent(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, id, isSelfContent);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }
        #endregion ProductAttribute

        #region ProductAttributeValue
        [Route("{id}/values"), AcceptVerbs("GET")]
        [AllowPermission(PageId.ProductAttribute, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> SearchValue(string id, string keyword, bool? isActive, int page = 1, int pageSize = 20)
        {
            var result = await _productAttributeValueService.Search(CurrentUser.TenantId, id, CultureInfo.CurrentCulture.Name,
                keyword, isActive, page, pageSize);
            return Ok(result);
        }

        [Route("{id}/values"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.ProductAttribute, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> InsertValue(string id, [FromBody]ProductAttributeValueMeta productAttributeValueMeta)
        {
            var result = await _productAttributeValueService.Insert(CurrentUser.TenantId, id, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, productAttributeValueMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}/values/{valueId}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.ProductAttribute, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateValue(string id, string valueId, [FromBody]ProductAttributeValueMeta productAttributeValueMeta)
        {
            var result = await _productAttributeValueService.Update(CurrentUser.TenantId, id, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, valueId, productAttributeValueMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/values/{valueId}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.ProductAttribute, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> DeleteValue(string id, string valueId)
        {
            var result = await _productAttributeValueService.Delete(CurrentUser.TenantId, id, valueId);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/values/{valueId}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.ProductAttribute, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> DetailValue(string id, string valueId)
        {
            var result = await _productAttributeValueService.GetDetail(CurrentUser.TenantId, id, valueId);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/suggestion"), AcceptVerbs("GET")]
        [AllowPermission(PageId.ProductAttribute, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> SuggestionValue(string id, string keyword, int selectTop = 20)
        {
            var result = await _productAttributeValueService.Suggestion(CurrentUser.TenantId, id, CultureInfo.CurrentCulture.Name,
                keyword, selectTop);
            return Ok(result);
        }

        [Route("{id}/values/{valueId}/active/{isActive}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.ProductAttribute, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateValueIsActive(string id, string valueId, bool isActive)
        {
            var result = await _productAttributeValueService.UpdateIsActive(CurrentUser.TenantId, id, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, valueId, isActive);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        #endregion ProductAttributeValue
    }
}