using System;
using System.Globalization;
using System.Threading.Tasks;
using GHM.Core.Domain.IServices;
using GHM.Core.Domain.ModelMetas;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Core.Api.Controllers
{
    [Authorize]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class PagesController : GhmControllerBase
    {
        private readonly IPageService _pageService;
        //private readonly IMessageSession _messageSession;

        public PagesController(IPageService pageService)
        {
            _pageService = pageService;
            //            _messageSession = messageSession1;
        }

        [Route("test"), AcceptVerbs("GET")]
        public async Task<IActionResult> Test()
        {
            return Ok("Test done");
        }

        [AcceptVerbs("GET")]
        [AllowPermission(PageId.ConfigPage, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, bool? isActive)
        {
            return Ok(await _pageService.Search(CultureInfo.CurrentCulture.Name, keyword, isActive));
        }

        [Route("{id}"), AcceptVerbs("GET")]
        public async Task<IActionResult> Detail(int id)
        {
            return Ok(await _pageService.Detail(id));
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.ConfigPage, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]PageMeta pageMeta)
        {
            var result = await _pageService.Insert(pageMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.ConfigPage, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update([FromBody]PageMeta pageMeta)
        {
            var result = await _pageService.Update(pageMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.ConfigPage, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _pageService.Delete(id);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("trees"), AcceptVerbs("GET")]
        [AllowPermission(PageId.ConfigPage, Permission.View, Permission.Insert, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> GetPageTree()
        {
            var result = await _pageService.GetFullPagesTree(CultureInfo.CurrentCulture.Name);
            return Ok(result);
        }

        [Route("activated"), AcceptVerbs("GET")]
        [AllowPermission(PageId.ConfigPage, Permission.View, Permission.Update, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> GetActivatedPages()
        {
            return Ok(await _pageService.SearchActivatedPages(CultureInfo.CurrentCulture.Name, CurrentUser.TenantId, string.Empty));
        }
    }
}
