using System;
using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using GHM.Warehouse.Domain.Constants;
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

    public class SuppliersController : GhmControllerBase
    {
        private readonly ISupplierService _supplierService;

        public SuppliersController(ISupplierService supplierService)
        {
            _supplierService = supplierService;
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Supplier, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]SupplierMeta supplierMeta)
        {
            var result = await _supplierService.Insert(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, supplierMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Supplier, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]SupplierMeta supplierMeta)
        {
            var result = await _supplierService.Update(id, CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, supplierMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}/status/{isActive}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.ProductCategory, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateStatus(string id, bool isActive)
        {
            var result = await _supplierService.UpdateStatus(CurrentUser.TenantId, id, isActive);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.Supplier, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _supplierService.Delete(id, CurrentUser.TenantId);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Supplier, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetDetail(string id)
        {
            var result = await _supplierService.GetDetail(CurrentUser.TenantId, id, ContactType.Supplier);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        [AcceptVerbs("GET")]
        [AllowPermission(PageId.Supplier, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, string address, bool? isActive, int page = 1, int pageSize = 20)
        {
            var result = await _supplierService.Search(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, keyword, address, isActive, page, pageSize);
            return Ok(result);
        }

        [Route("suggestions"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Supplier, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Suggestions(string keyword, int page, int pageSize)
        {
            return Ok(await _supplierService.Suggestions(CurrentUser.TenantId, keyword, page, pageSize));
        }
    }
}