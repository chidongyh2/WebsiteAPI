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
    public class VideosController : GhmControllerBase
    {
        private readonly IVideoService _videoService;
        public VideosController(IVideoService videoService)
        {
            _videoService = videoService;
        }
        /// <param name="keyword">Từ khóa tìm kiếm</param>
        /// <param name="isActive">Đã kích hoạt chưa</param>
        /// <param name="page">Trang hiện tại</param>
        /// <param name="pageSize">Số bản ghi trên trang</param>
        /// <returns></returns>

        [AcceptVerbs("GET")]
        [AllowPermission(PageId.WebsiteVideo, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, VideoType? type, bool? isActive, int page = 1, int pageSize = 20)
        {
            var result = await _videoService.Search(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, keyword, type, isActive, page, pageSize);
            return Ok(result);
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.WebsiteVideo, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]VideoMeta videoMeta)
        {
            var result = await _videoService.Insert(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, videoMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.WebsiteVideo, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]VideoMeta videoMeta)
        {
            var result = await _videoService.Update(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, id, videoMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.WebsiteVideo, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Detail(string id)
        {
            var result = await _videoService.GetDetail(CurrentUser.TenantId, id);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.WebsiteVideo, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _videoService.Delete(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/status/{isActive}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.WebsiteVideo, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateStatus(string id, bool isActive)
        {
            var result = await _videoService.UpdateStatus(CurrentUser.TenantId, id, isActive);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/home-page/{isHomePage}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.WebsiteVideo, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateIsHomePage(string id, bool isHomePage)
        {
            var result = await _videoService.UpdateIsHomePage(CurrentUser.TenantId, id, isHomePage);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        #region Client
        [Route("home-page/{tenantId}/{selectTop}/{languageId?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> ListTopVideo(string tenantId, int selectTop, string languageId)
        {
            var result = await _videoService.ListTopVideo(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, selectTop);
            return Ok(result);
        }

        [Route("album/{tenantId}/{albumId}/{languageId?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> ListVideo(string tenantId, string albumId, string languageId, int page = 1, int pageSize = 6)
        {
            var result = await _videoService.ListVideo(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, albumId, page, pageSize);
            return Ok(result);
        }

        #endregion
    }
}