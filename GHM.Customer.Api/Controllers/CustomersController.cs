using System;
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
    [Route("api/v{version:apiVersion}/[controller]")]
    public class CustomersController : GhmControllerBase
    {
        private readonly ICustomerService _customerService;
        private readonly ICustomerContactService _customerContactService;
        private readonly IContactCustomerService _contactCustomerService;

        public CustomersController(ICustomerService customerService, ICustomerContactService customerContactService,
            IContactCustomerService contactCustomerService)
        {
            _customerService = customerService;
            _customerContactService = customerContactService;
            _contactCustomerService = contactCustomerService;
        }

        #region Customer

        [Route("checkCustomers/{fullName}/{contactValue}"), AcceptVerbs("POST"), ValidateModel]
        //[CheckPermission(PageId.Position, Permission.Update)]
        public async Task<IActionResult> CheckExistsCustomer(string fullName, string contactValue)
        {
            var result = await _customerService.CheckExistsCustomer(CurrentUser.TenantId, fullName, contactValue);

            return Ok(result);
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Customer, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]CustomerMeta customerMeta)
        {
            var result = await _customerService.Insert(CurrentUser.TenantId, customerMeta);
            //var result = await _CustomerService.Insert("1", CustomerMeta);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Customer, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]CustomerMeta customerMeta)
        {
            var result = await _customerService.Update(CurrentUser.TenantId, id, customerMeta);
            //var result = await _CustomerService.Update("1", id, CustomerMeta);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.Customer, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _customerService.ForceDelete(CurrentUser.TenantId, id);
            //var result = await _CustomerService.ForceDelete("1", id);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Customer, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetDetail(string id)
        {
            var result = await _customerService.GetDetail(id);
            //var result = await _CustomersubjectService.GetDetail("MaKH", "vi", id);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{tenantId}/{customerId}"), AcceptVerbs("GET")]
        //   [CheckPermission(PageId.Customer, Permission.View)]
        public async Task<IActionResult> GetDetailSummary(string tenantId, string customerId)
        {
            var result = await _customerService.GetDetailSummary(tenantId, customerId);
            return Ok(result);
        }


        [AcceptVerbs("GET")]
        [AllowPermission(PageId.Customer, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, DateTime? createDate, int page = 1, int pageSize = 20)
        {
            var result = await _customerService.Search(CurrentUser.TenantId, keyword, createDate, page, pageSize);
            return Ok(result);
        }

        [Route("allcustomer/date/{fromDate}/{todate}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Customer, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetAllCustomer(DateTime fromDate, DateTime toDate, int page = 1, int pageSize = 20)
        {
            var result = await _customerService.GetAllCustomer(CurrentUser.TenantId, fromDate, toDate, page, pageSize);
            return Ok(result);
        }

        [Route("allcustomer/months/{month}/{year}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Customer, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetTotalCustomerInMonths(int month, int year)
        {
            var result = await _customerService.GetTotalCustomerInMonths(CurrentUser.TenantId, month, year);
            return Ok(result);
        }

        [Route("allcustomer/{month}/{year}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Customer, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetAllCustomerInMonth(int month, int year, int page = 1, int pageSize = 20)
        {
            var result = await _customerService.GetAllCustomerInMonth(CurrentUser.TenantId, month, year, page, pageSize);
            return Ok(result);
        }

        [Route("GetCustomerId/{tenantId}/{fullName}/{phone}/{email}/{address}"), AcceptVerbs("GET")]
        //[CheckPermission(PageId.Customer, Permission.View)]
        public async Task<IActionResult> GetCustomerId(string tenantId, string fullName, string phone, string email, string address)
        {
            var result = await _customerService.GetCustomerId(tenantId, fullName, phone, email, address);
            return Ok(result);
        }

        [Route("suggestions"), AcceptVerbs("GET")]
        //[CheckPermission(PageId.Customer, Permission.View)]
        public async Task<IActionResult> Suggestions(string keyword)
        {            
            return Ok(await _customerService.Suggestions(CurrentUser.TenantId, keyword, 1, 20));
        }

        #endregion

        #region CustomerContact
        [Route("{CustomerId}/CustomerContacts")]
        [AcceptVerbs("POST"), ValidateModel]
        //[CheckPermission(PageId.Position, Permission.Insert)]
        public async Task<IActionResult> Insert(string customerId, [FromBody]CustomerContactMeta customerContactMeta)
        {
            var result = await _customerContactService.Insert(CurrentUser.TenantId, customerContactMeta);
            //var result = await _CustomerContactService.Insert("1", CustomerContactMeta);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{CustomerId}/CustomerContacts/{id}"), AcceptVerbs("POST"), ValidateModel]
        //[CheckPermission(PageId.Position, Permission.Update)]
        public async Task<IActionResult> Update(string customerId, string id, [FromBody]CustomerContactMeta customerContactMeta)
        {
            var result = await _customerContactService.Update(CurrentUser.TenantId, id, customerContactMeta);
            //var result = await _CustomerContactService.Update("1", id, CustomerContactMeta);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{CustomerId}/CustomerContacts/{id}"), AcceptVerbs("DELETE")]
        //[CheckPermission(PageId.ConfigCustomerSubject, Permission.Delete)]
        public async Task<IActionResult> Delete(string customerId, string id)
        {
            var result = await _customerContactService.ForceDelete(CurrentUser.TenantId, id);
            //var result = await _CustomerContactService.ForceDelete("1", id);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        #endregion

        #region ContactCustomer
        [Route("{CustomerId}/contactCustomers")]
        [AcceptVerbs("POST"), ValidateModel]
        //[CheckPermission(PageId.Position, Permission.Insert)]
        public async Task<IActionResult> Insert(string customerId, [FromBody]ContactCustomerMeta contactCustomerMeta)
        {
            var result = await _contactCustomerService.Insert(CurrentUser.TenantId, contactCustomerMeta);
            //var result = await _contactCustomerService.Insert("1", contactCustomerMeta);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{CustomerId}/contactCustomers/{id}"), AcceptVerbs("POST"), ValidateModel]
        //[CheckPermission(PageId.Position, Permission.Update)]
        public async Task<IActionResult> Update(string customerId, string id, [FromBody]ContactCustomerMeta contactCustomerMeta)
        {
            var result = await _contactCustomerService.Update(CurrentUser.TenantId, id, contactCustomerMeta);
            //var result = await _contactCustomerService.Update("1", id, contactCustomerMeta);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{CustomerId}/contactCustomers/{id}"), AcceptVerbs("DELETE")]
        //[CheckPermission(PageId.ConfigCustomerSubject, Permission.Delete)]
        public async Task<IActionResult> DeleteContactCustomer(string customerId, string id)
        {
            var result = await _contactCustomerService.ForceDelete(CurrentUser.TenantId, id);
            //var result = await _contactCustomerService.ForceDelete("1", id);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }



        #endregion
    }
}