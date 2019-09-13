using System;
using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.IServices;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Warehouse.Api.Controllers
{
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/products")]
    public class ProductsController : GhmControllerBase
    {
        private readonly IProductService _productService;

        public ProductsController(IProductService productService, ILotRepository lotRepository)
        {
            _productService = productService;
        }

        [AcceptVerbs("GET")]
        [AllowPermission(PageId.Product, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, int? categoryId, bool? isManagementByLot,
            bool? isActive, int page = 1, int pageSize = 20)
        {
            var result = await _productService.Search(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name,
                keyword, categoryId, isManagementByLot, isActive, page, pageSize);
            return Ok(result);
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Product, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]ProductMeta productMeta)
        {
            var result = await _productService.Insert(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, productMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Product, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]ProductMeta productMeta)
        {
            var result = await _productService.Update(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, id, productMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.Product, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _productService.Delete(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        //[AllowPermission(PageId.Product, Permission.View)]
        //[CheckPermission]
        public async Task<IActionResult> Detail(string id)
        {
            var result = await _productService.GetDetail(CurrentUser.TenantId, id);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("updateApprove/{id}/{status}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.Product, Permission.Approve)]
        [CheckPermission]
        public async Task<IActionResult> UpdateAprrove(string id, ApproverStatus status)
        {
            var result = await _productService.UpdateAprrove(CurrentUser.TenantId, id, status);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("suggestions"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Product, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Suggestion(string keyword, int page = 1, int pageSize = 20)
        {
            var result = await _productService.Suggestion(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name,
                keyword, page, pageSize);
            return Ok(result);
        }

        [Route("{id}/actives/{isActive}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.Product, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateIsActive(string id, bool isActive)
        {
            var result = await _productService.UpdateIsActive(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, id, isActive);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/management-by-lots/{isManagementByLot}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.Product, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateIsManagementByLot(string id, bool isManagementByLot)
        {
            var result = await _productService.UpdateIsManagementByLot(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, id, isManagementByLot);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("translation/{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Product, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetProductTranslationById(string id)
        {
            var result = await _productService.GetProductTranslationById(CurrentUser.TenantId, id);
            return Ok(result);
        }

        #region ProductAttribute
        //[Route("{id}/values"), AcceptVerbs("POST"), ValidateModel]
        //[AllowPermission(PageId.Product, Permission.Insert)]
        //[CheckPermission]
        //public async Task<IActionResult> InsertValue(string id, [FromBody]ProductAttributeMeta productAttributeMeta)
        //{
        //    var result = await _productService.InsertProductValue(CurrentUser.TenantId, id, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, productAttributeMeta);
        //    if (result.Code <= 0)
        //        return BadRequest(result);

        //    return Ok(result);
        //}

        [Route("{id}/values/{valueId}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Product, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateValue(string id, string valueId, [FromBody]ProductAttributeMeta productAttributeMeta)
        {
            var result = await _productService.UpdateProductValue(CurrentUser.TenantId, id, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, valueId, productAttributeMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        //[Route("{id}/values/{valueId}"), AcceptVerbs("DELETE")]
        //[AllowPermission(PageId.Product, Permission.Delete)]
        //[CheckPermission]
        //public async Task<IActionResult> DeleteValue(string id, string valueId)
        //{
        //    var result = await _productService.DeleteProductValue(CurrentUser.TenantId, id, valueId);
        //    if (result.Code <= 0)
        //        return BadRequest(result);
        //    return Ok(result);
        //}

        [Route("{id}/attributes/{attributeId}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.Product, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> DeleteValue(string id, string productId, string attributeId)
        {
            var result = await _productService.DeleteProductValueByAttributeId(CurrentUser.TenantId, id, attributeId);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        //[Route("{id}/values/listValues"), AcceptVerbs("POST"), ValidateModel]
        //[AllowPermission(PageId.Product, Permission.Insert)]
        //[CheckPermission]
        //public async Task<IActionResult> InsertListValue(string id, [FromBody]List<ProductAttributeMeta> listProductValueMeta)
        //{
        //    var result = await _productService.InsertListProductValue(CurrentUser.TenantId, id, CurrentUser.Id, CurrentUser.FullName,
        //        CurrentUser.Avatar, listProductValueMeta);
        //    //if (result.Code <= 0)
        //    //    return BadRequest(result);

        //    return Ok(result);
        //}

        [Route("{productId}/attributes"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> GetProductAttributeConfigByProductId(string productId)
        {
            var result = await _productService.GetProductCategoryAttributeByProductId(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, productId);
            return Ok(result);
        }
        #endregion

        #region Unit
        //[Route("{id}/units"), AcceptVerbs("POST"), ValidateModel]
        //[AllowPermission(PageId.Product, Permission.Insert)]
        //[CheckPermission]
        //public async Task<IActionResult> InsertUnit(string id, [FromBody]ProductListUnitMeta productListUnitMeta)
        //{
        //    var result = await _productService.InsertProductUnit(CurrentUser.TenantId, id, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, productListUnitMeta);
        //    if (result.Code <= 0)
        //        return BadRequest(result);

        //    return Ok(result);
        //}

        //[Route("{id}/units/{unitId}"), AcceptVerbs("POST"), ValidateModel]
        //[AllowPermission(PageId.Product, Permission.Update)]
        //[CheckPermission]
        //public async Task<IActionResult> UpdateUnit(string id, string unitId, [FromBody]ProductListUnitMeta productListUnitMeta)
        //{
        //    var result = await _productService.UpdateProductUnit(CurrentUser.TenantId, id, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, unitId, productListUnitMeta);
        //    if (result.Code <= 0)
        //        return BadRequest(result);
        //    return Ok(result);
        //}

        [Route("{id}/units/{unitId}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.Product, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> DeleteUnit(string id, string unitId)
        {
            var result = await _productService.DeleteProductUnit(CurrentUser.TenantId, id, unitId);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{productId}/units/{page}/{pageSize}"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> SearchUnitByProductId(string productId, int page = 1, int pageSize = 20)
        {
            var result = await _productService.GetUnitByProductId(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, productId, page, pageSize);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{productId}/product-units"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> SearchProductUnitByProductId(string productId)
        {
            var result = await _productService.GetProductUnitByProductId(CurrentUser.TenantId, productId);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }
        #endregion       
    }
}