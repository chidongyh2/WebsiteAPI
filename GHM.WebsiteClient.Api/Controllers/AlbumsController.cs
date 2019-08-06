using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.CustomAttributes;
using GHM.WebsiteClient.Api.Domain.Constants;
using GHM.WebsiteClient.Api.Domain.IServices;
using GHM.WebsiteClient.Api.Domain.ModelMetas;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GHM.WebsiteClient.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlbumsController : ControllerBase
    {
        private readonly IAlbumService _albumService;
        private readonly IVideoService _videoService;

        public AlbumsController(IAlbumService imageGroupService, IVideoService videoService)
        {
            _albumService = imageGroupService;
            _videoService = videoService;
        }


        #region Photos
        [Route("{tenantId}/{type}/{page?}/{pageSize?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetAlbumPhotos(string tenantId, AlbumType type, int page = 1, int pageSize = 20)
        {
            var result = await _albumService.SearchAlbumWithItemAsync(tenantId, CultureInfo.CurrentCulture.Name, type, page, pageSize);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        //[Route("{tenantId}/album-width-item/{languageId?}"), AcceptVerbs("POST")]
        //public async Task<IActionResult> GetAlbumWidthItem(string tenantId, string languageId, [FromBody]List<string> albumIds)
        //{
        //    var result = await _albumService.SearchAlbumWithItemByListAlbumId(tenantId, CultureInfo.CurrentCulture.Name, albumIds);
        //    if (result.Code <= 0)
        //        return BadRequest(result);

        //    return Ok(result);
        //}

        [Route("search/{tenantId}/{seoLink}/{page}/{pageSize}/{language?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetAlbumItems(string tenantId, string seoLink, string language, int page = 1, int pageSize = 20)
        {
            var result = await _albumService.SearchAlbumItemAsync(tenantId, language ?? CultureInfo.CurrentCulture.Name, seoLink, page, pageSize);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{tenantId}/groups/{type}/{language?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> SearchAlbum(string tenantId, AlbumType type, string language)
        {
            var result = await _albumService.SearchClientAsync(tenantId, language ?? CultureInfo.CurrentCulture.Name, type,
                1, Int16.MaxValue);
            return Ok(result);
        }

        [Route("{tenantId}/video-detail/{id}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetVideoDetail(string tenantId, string id)
        {
            var result = await _videoService.GetDetailAsync(tenantId, CultureInfo.CurrentCulture.Name, id);
            return Ok(result);
        }

        [Route("{tenantId}/video-all/{page}/{pageSize}/{languageId?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetAllVideo(string tenantId, string languageId, int page = 1, int pageSize = 20)
        {
            var result = await _videoService.SearchAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, page, pageSize);
            return Ok(result);
        }
        #endregion
    }
}