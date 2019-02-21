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
    [Route("api/v{version:apiVersion}/customer-subjects")]
    public class CustomerSubjectController : GhmControllerBase
    {
        private readonly ICustomerSubjectService _customerSubjectService;

        public CustomerSubjectController(ICustomerSubjectService customersubjectService)
        {
            _customerSubjectService = customersubjectService;
        }

        [Route("giangnv"), AcceptVerbs("GET")]
        [AllowPermission(PageId.CustomerSubject, Permission.View)]
        [CheckPermission]
        public IActionResult ReturnValue()
        {
            return Ok("1");
        }

        [AcceptVerbs("GET")]
        [AllowPermission(PageId.CustomerSubject, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, float? totalReduction,
            bool? isActive, int page = 1, int pageSize = 20)
        {
            var result = await _customerSubjectService.Search(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, keyword, totalReduction,
                isActive, page, pageSize);
            return Ok(result);
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.CustomerSubject, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]CutomerSubjectMeta customerSubjectMeta)
        {
            var result = await _customerSubjectService.Insert(CurrentUser.TenantId, customerSubjectMeta);
            //var result = await _patientsubjectService.Insert("MaKH", patientsubjectMeta);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.CustomerSubject, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]CutomerSubjectMeta customerSubjectMeta)
        {
            var result = await _customerSubjectService.Update(CurrentUser.TenantId, id, customerSubjectMeta);
            //var result = await _patientsubjectService.Update("MaKH", id, patientsubjectMeta);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.CustomerSubject, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _customerSubjectService.Delete(CurrentUser.TenantId, id);
            //var result = await _patientsubjectService.Delete("MaKH", id);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.CustomerSubject, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetDetail(string id)
        {
            var result = await _customerSubjectService.GetDetail(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, id);
            //var result = await _patientsubjectService.GetDetail("MaKH", "vi", id);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

    }
}
