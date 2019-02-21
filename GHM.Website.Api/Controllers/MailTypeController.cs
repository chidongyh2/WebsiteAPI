using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using GHM.Website.Domain.IServices;
using GHM.Website.Domain.ModelMetas;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Website.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/mail-types")]
    public class MailTypeController :  GhmControllerBase
    {
        private readonly IMailTypeService _mailTypeService;
        public MailTypeController(IMailTypeService mailTypeService)
        {
            _mailTypeService = mailTypeService;
        }     

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.MailType, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]MailTypeMeta emailType)
        {
            var result = await _mailTypeService.Insert(CurrentUser.TenantId, emailType);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{mailtypeId}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.MailType, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetDetail(string id)
        {
            var result = await _mailTypeService.GetInfo(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.MailType, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _mailTypeService.Delete(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("mailtype/{id}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.MailType, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]MailTypeMeta mailTypeMeta)
        {
            var result = await _mailTypeService.Update( id, mailTypeMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route(""), AcceptVerbs("GET")]
        [AllowPermission(PageId.MailType, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(int page = 1, int pageSize = 20)
        {
            var result = await _mailTypeService.Search(CurrentUser.TenantId, page, pageSize);
            return Ok(result);
        }
    }
}