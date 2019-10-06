using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using GHM.Website.Domain.IServices;
using GHM.Website.Domain.ModelMetas;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;
using System.Threading.Tasks;
using System;

namespace GHM.Website.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class FaqsController : GhmControllerBase
    {
        private readonly IFaqService _faqService;
        private readonly IFaqGroupService _faqGroupService;
        public FaqsController(IFaqService faqService, IFaqGroupService faqGroupService)
        {
            _faqService = faqService;
            _faqGroupService = faqGroupService;
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Faq, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]FaqMeta faqMeta)
        {
            var result = await _faqService.Insert(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, faqMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Faq, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]FaqMeta faqMeta)
        {
            var result = await _faqService.Update(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, id, faqMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Faq, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Detail(string id)
        {
            var result = await _faqService.GetDetail(CurrentUser.TenantId, id);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.Faq, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _faqService.Delete(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        #region Group
        [AcceptVerbs("GET")]
        [AllowPermission(PageId.Faq, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, bool? isActive, int page = 1, int pageSize = 20)
        {
            try
            {
                var result = await _faqGroupService.Search(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, keyword, isActive, page, pageSize);
                return Ok(result);
            }
            catch (Exception ex)
            {
                var test = ex;
                return Ok(1);
            }
        }

        [Route("group")]
        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Faq, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> FaqGroupInsert([FromBody]FaqGroupMeta faqGroupMeta)
        {
            var result = await _faqGroupService.Insert(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, faqGroupMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("group/{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Faq, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> FaqGroupUpdate(string id, [FromBody]FaqGroupMeta faqGroupMeta)
        {
            var result = await _faqGroupService.Update(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, id, faqGroupMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("group/{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Faq, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> FaqGroupDetail(string id)
        {
            var result = await _faqGroupService.GetDetail(CurrentUser.TenantId, id);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("group/{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.Faq, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> FaqGroupDelete(string id)
        {
            var result = await _faqGroupService.Delete(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }
        #endregion
    }
}