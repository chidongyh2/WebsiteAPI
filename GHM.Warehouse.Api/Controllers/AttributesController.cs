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
    [Route("api/v{version:apiVersion}/[controller]")]
    public class AttributesController : GhmControllerBase
    {
        private readonly IAttributeService _attributeService;
        private readonly IAttributeValueService _attributeValueService;
        public AttributesController(
            IAttributeService attributeService,
            IAttributeValueService attributeValueService
            )
        {
            _attributeService = attributeService;
            _attributeValueService = attributeValueService;
        }

        #region Attribute

        [AcceptVerbs("GET")]
        [AllowPermission(PageId.ProductAttribute, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, bool? isSelfContent, bool? isRequire, bool? isMultiple, bool? isActive,
            int page = 1, int pageSize = 20)
        {
            var result = await _attributeService.Search(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name,
                keyword, isSelfContent, isRequire, isMultiple, isActive, page, pageSize);
            return Ok(result);
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.ProductAttribute, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]AttributeMeta attributeMeta)
        {
            var result = await _attributeService.Insert(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, attributeMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.ProductAttribute, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]AttributeMeta attributeMeta)
        {
            var result = await _attributeService.Update(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, id, attributeMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.ProductAttribute, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _attributeService.Delete(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.ProductAttribute, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Detail(string id)
        {
            var result = await _attributeService.GetDetail(CurrentUser.TenantId, id);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("suggestion"), AcceptVerbs("GET")]
        [AllowPermission(PageId.ProductAttribute, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Suggestion(string keyword, int selectTop = 20)
        {
            var result = await _attributeService.Suggestion(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name,
                keyword, selectTop);
            return Ok(result);
        }

        [Route("{id}/active/{isActive}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.ProductAttribute, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateIsActive(string id, bool isActive)
        {
            var result = await _attributeService.UpdateIsActive(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, id, isActive);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/require/{isRequire}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.ProductAttribute, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateIsRequire(string id, bool isRequire)
        {
            var result = await _attributeService.UpdateIsRequire(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, id, isRequire);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/multiple/{isMultiple}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.ProductAttribute, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateIsMultiple(string id, bool isMultiple)
        {
            var result = await _attributeService.UpdateIsMultiple(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, id, isMultiple);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/self-content/{isSelfContent}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.ProductAttribute, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateIsSelfContent(string id, bool isSelfContent)
        {
            var result = await _attributeService.UpdateIsSelfContent(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, id, isSelfContent);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }
        #endregion Attribute

        #region AttributeValue
        [Route("{id}/values"), AcceptVerbs("GET")]
        [AllowPermission(PageId.ProductAttribute, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> SearchValue(string id, string keyword, bool? isActive, int page = 1, int pageSize = 20)
        {
            var result = await _attributeValueService.Search(CurrentUser.TenantId, id, CultureInfo.CurrentCulture.Name,
                keyword, isActive, page, pageSize);
            return Ok(result);
        }

        [Route("{id}/values"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.ProductAttribute, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> InsertValue(string id, [FromBody]AttributeValueMeta attributeValueMeta)
        {
            var result = await _attributeValueService.Insert(CurrentUser.TenantId, id, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, attributeValueMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}/values/{valueId}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.ProductAttribute, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateValue(string id, string valueId, [FromBody]AttributeValueMeta attributeValueMeta)
        {
            var result = await _attributeValueService.Update(CurrentUser.TenantId, id, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, valueId, attributeValueMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/values/{valueId}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.ProductAttribute, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> DeleteValue(string id, string valueId)
        {
            var result = await _attributeValueService.Delete(CurrentUser.TenantId, id, valueId);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/values/{valueId}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.ProductAttribute, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> DetailValue(string id, string valueId)
        {
            var result = await _attributeValueService.GetDetail(CurrentUser.TenantId, id, valueId);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/suggestion"), AcceptVerbs("GET")]
        [AllowPermission(PageId.ProductAttribute, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> SuggestionValue(string id, string keyword, int selectTop = 20)
        {
            var result = await _attributeValueService.Suggestion(CurrentUser.TenantId, id, CultureInfo.CurrentCulture.Name,
                keyword, selectTop);
            return Ok(result);
        }

        [Route("{id}/values/{valueId}/active/{isActive}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.ProductAttribute, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateValueIsActive(string id, string valueId, bool isActive)
        {
            var result = await _attributeValueService.UpdateIsActive(CurrentUser.TenantId, id, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, valueId, isActive);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        #endregion AttributeValue
    }
}