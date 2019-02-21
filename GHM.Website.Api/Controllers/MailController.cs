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
    [Route("api/v{version:apiVersion}/mails")]
    public class MailController : GhmControllerBase
    {
        private readonly IMailService _mailService;
        public MailController(IMailService mailService)
        {
            _mailService = mailService;
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Mail, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]MailMeta mailMeta)
        {
            var result = await _mailService.Insert(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, mailMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Mail, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetDetail(string id)
        {
            var result = await _mailService.GetDetail(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.Mail, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _mailService.Delete(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.Mail, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]MailMeta mailMeta)
        {
            var result = await _mailService.Update(CurrentUser.TenantId, id, CurrentUser.Id, CurrentUser.FullName, mailMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [AcceptVerbs("GET")]
        [AllowPermission(PageId.MailType, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(int page = 1, int pageSize = 20)
        {
            var result = await _mailService.Search(CurrentUser.TenantId, page, pageSize);
            return Ok(result);
        }

    }
}