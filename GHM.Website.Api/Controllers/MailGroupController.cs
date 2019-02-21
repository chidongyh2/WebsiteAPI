using System.Globalization;
using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using GHM.Website.Domain.IServices;
using GHM.Website.Domain.ModelMetas;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Website.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/mailgroups")]
    public class MailGroupController : GhmControllerBase
    {
        private readonly IMailTempGroupService _mailGroupService;
        public MailGroupController(IMailTempGroupService mailGroupService)
        {
            _mailGroupService = mailGroupService;
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.MailType, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]MailTempGroupMeta mailGroupMeta)
        {
            var result = await _mailGroupService.Insert(CurrentUser.TenantId, mailGroupMeta);
            //var result = await _mailGroupService.Insert("1", mailGroupMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{mailgroupId}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.MailType, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetDetail(string id)
        {
            var result = await _mailGroupService.GetDetail(CurrentUser.TenantId, id);
            //   var result = _mailGroupService.GetDetail("1", Id);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.MailType, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _mailGroupService.Delete(CurrentUser.TenantId, id);
            //var result = await _mailTypeService.Delete("1", id);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("mailgroup/{id}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.MailType, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]MailTempGroupMeta mailGroupMeta)
        {
            var result = await _mailGroupService.Update(id, mailGroupMeta);
            //var result = await _mailGroupService.Update("1", mailGroupMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{sugesstions}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.MailType, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, int page = 1, int pageSize = 20)
        {
            var result = await _mailGroupService.Search(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, keyword, page, pageSize,
                out int _);
            return Ok(result);
        }

    }
}