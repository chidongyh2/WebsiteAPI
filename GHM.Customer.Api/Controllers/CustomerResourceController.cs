using System.Globalization;
using System.Threading.Tasks;
using GHM.Customer.Domain.IServices;
using GHM.Customer.Domain.ModelMetas;
using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Customer.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/patient-resources")]

    public class CustomerResourceController : GhmControllerBase
    {

        private readonly ICustomerResourceService _customerResourceService;

        public CustomerResourceController(ICustomerResourceService customerResourceService)
        {
            _customerResourceService = customerResourceService;
        }

        /// <param name="keyword">Từ khóa tìm kiếm</param>
        /// <param name="isActive">Đã kích hoạt chưa</param>
        /// <param name="page">Trang hiện tại</param>
        /// <param name="pageSize">Số bản ghi trên trang</param>
        /// <returns></returns>
        [AcceptVerbs("GET")]
        [AllowPermission(PageId.CustomerResource, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> SearchCustomerResource(string keyword, bool? isActive, int page = 1, int pageSize = 20)
        {
            var result = await _customerResourceService.Search(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, keyword, isActive, page, pageSize);
            //   var result = await _patientResourceService.Search("1", "vi", keyword, isActive, page, pageSize);
            return Ok(result);
        }

        [AcceptVerbs("POST")]
        [AllowPermission(PageId.CustomerResource, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> InsertCustomerResource([FromBody]CustomerResourceMeta customerResourceMeta)
        {
            var result = await _customerResourceService.Insert(CurrentUser.TenantId, customerResourceMeta);
            //   var result = await _patientResourceService.Insert("1", patientResourceMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.CustomerResource, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateCustomerResource(string id, [FromBody]CustomerResourceMeta customerResourceMeta)
        {
            var result = await _customerResourceService.Update(CurrentUser.TenantId, id, customerResourceMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.CustomerResource, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> DetailCustomerResource(string id)
        {
            var result = await _customerResourceService.GetDetail(CurrentUser.TenantId, id);
            //   var result = await _patientResourceService.GetDetail("1", id);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.CustomerResource, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> DeleteCustomerResource(string id)
        {
            var result = await _customerResourceService.Delete(CurrentUser.TenantId, id);
            //   var result = await _patientResourceService.Delete("1", id);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("get-for-select"), AcceptVerbs("GET")]
        public async Task<IActionResult> SearchForSelect(string keyword, int page = 1, int pageSize = 20)
        {
            return Ok(await _customerResourceService.SearchForSelect(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, keyword, page, pageSize));
        }
    }
}