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
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class JobsController : GhmControllerBase
    {
        private readonly IJobService _jobService;

        public JobsController(IJobService jobService)
        {
            _jobService = jobService;
        }

        /// <param name="keyword">Từ khóa tìm kiếm</param>
        /// <param name="isActive">Đã kích hoạt chưa</param>
        /// <param name="page">Trang hiện tại</param>
        /// <param name="pageSize">Số bản ghi trên trang</param>
        /// <returns></returns>
        [AcceptVerbs("GET")]
        [AllowPermission(PageId.Jobs, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, bool? isActive)
        {
            var result = await _jobService.Search(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, keyword, isActive);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("gets-all"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Jobs, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetAll()
        {
            var result = await _jobService.GetsAll(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name);            
            return Ok(result);
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Jobs, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]JobMeta jobMeta)
        {
            var result = await _jobService.Insert(CurrentUser.TenantId, jobMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Jobs, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(int id, [FromBody]JobMeta jobMeta)
        {
            var result = await _jobService.Update(CurrentUser.TenantId, id, jobMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Jobs, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Detail(int id)
        {
            var result = await _jobService.GetDetail(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, id);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.Jobs, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _jobService.Delete(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("trees"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetJobTree()
        {
            var trees = await _jobService.GetFullJobTree(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name);
            return Ok(trees);
        }

        [Route("get-for-select"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetAllJobForSelect(string keyword, int page = 1, int pageSize = 20)
        {
            return Ok(await _jobService.GetJobForSelect(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, keyword, page, pageSize));
        }
    }
}