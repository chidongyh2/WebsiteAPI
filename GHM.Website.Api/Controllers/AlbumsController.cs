using System;
using System.Collections.Generic;
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

    public class AlbumsController : GhmControllerBase
    {
        private readonly IAlbumService _albumService;
        private readonly IVideoService _videoService;

        public AlbumsController(IAlbumService imageGroupService, IVideoService videoService)
        {
            _albumService = imageGroupService;
            _videoService = videoService;
        }

        #region Albums
        [AcceptVerbs("GET")]
        [AllowPermission(PageId.Album, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, bool? isActive, AlbumType? type, int page = 1, int pageSize = 20)
        {
            var result = await _albumService.Search(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, keyword, isActive, type,
                page, pageSize);
            return Ok(result);
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Album, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]AlbumMeta albumMeta)
        {
            var result = await _albumService.Insert(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, albumMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Album, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]AlbumMeta albumMeta)
        {
            var result = await _albumService.Update(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName,
                CurrentUser.Avatar, id, albumMeta);

            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Album, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Detail(string id)
        {
            var result = await _albumService.GetDetail(CurrentUser.TenantId, id);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("delete/{id}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.Album, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _albumService.Delete(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }
        #endregion

        #region Photos
        [Route("{tenantId}/{type}/{page?}/{pageSize?}"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> GetAlbumPhotos(string tenantId, AlbumType type, int page = 1, int pageSize = 20)
        {
            var result = await _albumService.SearchAlbumWithItem(tenantId, CultureInfo.CurrentCulture.Name,
                string.Empty, type,
                page, pageSize);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{tenantId}/album-width-item/{languageId?}"), AcceptVerbs("POST")]
        [CheckPermission]
        public async Task<IActionResult> GetAlbumWidthItem(string tenantId, string languageId, [FromBody]List<string> albumIds)
        {
            var result = await _albumService.SearchAlbumWithItemByListAlbumId(tenantId, CultureInfo.CurrentCulture.Name, albumIds);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("search/{tenantId}/{seoLink}/{page}/{pageSize}/{language?}"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> GetAlbumItems(string tenantId, string seoLink, string language, int page = 1, int pageSize = 20)
        {
            var result = await _albumService.SearchAlbumItem(tenantId, language ?? CultureInfo.CurrentCulture.Name, seoLink, page, pageSize);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{tenantId}/groups/{type}/{language?}"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> SearchAlbum(string tenantId, AlbumType type, string language)
        {
            var result = await _albumService.SearchClient(tenantId, language ?? CultureInfo.CurrentCulture.Name, type,
                1, Int16.MaxValue);
            return Ok(result);
        }

        [Route("{tenantId}/video-detail/{id}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetVideoDetail(string tenantId, string id)
        {
            var result = await _videoService.GetDetail(tenantId, CultureInfo.CurrentCulture.Name, id);
            return Ok(result);
        }

        [Route("{tenantId}/video-all/{page}/{pageSize}/{languageId?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetAllVideo(string tenantId, string languageId, int page = 1, int pageSize = 20)
        {
            var result = await _videoService.Search(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, string.Empty, null, null, page, pageSize);
            return Ok(result);
        }
        #endregion

        #region Client
        [Route("client"), AcceptVerbs("POST"), ValidateModel]
        [CheckPermission]
        public async Task<IActionResult> InsertClient([FromBody]AlbumMeta albumMeta)
        {
            var result = await _albumService.Insert(albumMeta.TenantId, albumMeta.UserId, albumMeta.FullName, albumMeta.Avatar, albumMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("client/{tenantId}/{languageId?}"), AcceptVerbs("POST"), ValidateModel]
        [CheckPermission]
        public async Task<IActionResult> SearchByAlbumIds(string tenantId, string languageId, [FromBody]List<string> albumIds)
        {
            var result = await _albumService.SearchByAlbumIds(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, albumIds);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("client/{tenantId}/{albumId}"), AcceptVerbs("DELETE")]
        [CheckPermission]
        public async Task<IActionResult> DeleteClient(string tenantId, string albumId)
        {
            var result = await _albumService.Delete(tenantId, albumId);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("client/{tenantId}/{albumId}"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> GetDetailClient(string tenantId, string albumId)
        {
            var result = await _albumService.GetDetail(tenantId, albumId);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("client/{tenantId}/update/{albumId}"), AcceptVerbs("POST"), ValidateModel]
        [CheckPermission]
        public async Task<IActionResult> UpdateClient(string tenantId, string albumId, [FromBody]AlbumMeta albumMeta)
        {
            var result = await _albumService.Update(albumMeta.TenantId, albumMeta.UserId, albumMeta.FullName,
                 albumMeta.Avatar, albumId, albumMeta);

            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }
        #endregion
    }
}