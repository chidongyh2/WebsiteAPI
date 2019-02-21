using System.Globalization;
using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.IServices;
using GHM.Website.Domain.ModelMetas;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Website.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class VideoGroupsController : GhmControllerBase
    {
        private readonly IVideoGroupService _videoGroupService;
        public VideoGroupsController(IVideoGroupService videoGroupService)
        {
            _videoGroupService = videoGroupService;
        }

        [AcceptVerbs("GET")]
        [AllowPermission(PageId.VideoGroup, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, bool? isActive, int page = 1, int pageSize = 20)
        {
            var result = await _videoGroupService.Search(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, keyword, isActive, page, pageSize);
            return Ok(result);
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.VideoGroup, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]VideoGroupMeta videoGroupMeta)
        {
            var result = await _videoGroupService.Insert(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, videoGroupMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.VideoGroup, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]VideoGroupMeta videoGroupMeta)
        {
            var result = await _videoGroupService.Update(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, id, videoGroupMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.VideoGroup, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Detail(string id)
        {
            var result = await _videoGroupService.GetDetail(CurrentUser.TenantId, id);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.VideoGroup, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _videoGroupService.Delete(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

    }
}