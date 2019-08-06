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


        //#region Photos
        //[Route("{tenantId}/{type}/{page?}/{pageSize?}"), AcceptVerbs("GET")]
        //public async Task<IActionResult> GetAlbumPhotos(string tenantId, AlbumType type, int page = 1, int pageSize = 20)
        //{
        //    var result = await _albumService.SearchAlbumWithItem(tenantId, CultureInfo.CurrentCulture.Name, type, page, pageSize);
        //    if (result.Code <= 0)
        //        return BadRequest(result);

        //    return Ok(result);
        //}

        //[Route("{tenantId}/album-width-item/{languageId?}"), AcceptVerbs("POST")]
        // public async Task<IActionResult> GetAlbumWidthItem(string tenantId, string languageId, [FromBody]List<string> albumIds)
        //{
        //    var result = await _albumService.SearchAlbumWithItemByListAlbumId(tenantId, CultureInfo.CurrentCulture.Name, albumIds);
        //    if (result.Code <= 0)
        //        return BadRequest(result);

        //    return Ok(result);
        //}

        //[Route("search/{tenantId}/{seoLink}/{page}/{pageSize}/{language?}"), AcceptVerbs("GET")]
        //  public async Task<IActionResult> GetAlbumItems(string tenantId, string seoLink, string language, int page = 1, int pageSize = 20)
        //{
        //    var result = await _albumService.SearchAlbumItem(tenantId, language ?? CultureInfo.CurrentCulture.Name, seoLink, page, pageSize);
        //    if (result.Code <= 0)
        //        return BadRequest(result);

        //    return Ok(result);
        //}

        //[Route("{tenantId}/groups/{type}/{language?}"), AcceptVerbs("GET")]
        //public async Task<IActionResult> SearchAlbum(string tenantId, AlbumType type, string language)
        //{
        //    var result = await _albumService.SearchClient(tenantId, language ?? CultureInfo.CurrentCulture.Name, type,
        //        1, Int16.MaxValue);
        //    return Ok(result);
        //}

        //[Route("{tenantId}/video-detail/{id}"), AcceptVerbs("GET")]
        //public async Task<IActionResult> GetVideoDetail(string tenantId, string id)
        //{
        //    var result = await _videoService.GetDetail(tenantId, CultureInfo.CurrentCulture.Name, id);
        //    return Ok(result);
        //}

        //[Route("{tenantId}/video-all/{page}/{pageSize}/{languageId?}"), AcceptVerbs("GET")]
        //public async Task<IActionResult> GetAllVideo(string tenantId, string languageId, int page = 1, int pageSize = 20)
        //{
        //    var result = await _videoService.Search(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, string.Empty, null, null, page, pageSize);
        //    return Ok(result);
        //}
        //#endregion

        //#region Client
        //[Route("client"), AcceptVerbs("POST"), ValidateModel]
        //public async Task<IActionResult> InsertClient([FromBody]AlbumMeta albumMeta)
        //{
        //    var result = await _albumService.Insert(albumMeta.TenantId, albumMeta.UserId, albumMeta.FullName, albumMeta.Avatar, albumMeta);
        //    if (result.Code <= 0)
        //        return BadRequest(result);

        //    return Ok(result);
        //}

        //[Route("client/{tenantId}/{languageId?}"), AcceptVerbs("POST"), ValidateModel]
        //    public async Task<IActionResult> SearchByAlbumIds(string tenantId, string languageId, [FromBody]List<string> albumIds)
        //{
        //    var result = await _albumService.SearchByAlbumIds(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, albumIds);
        //    if (result.Code < 0)
        //        return BadRequest(result);

        //    return Ok(result);
        //}

        //[Route("client/{tenantId}/{albumId}"), AcceptVerbs("DELETE")]
        // public async Task<IActionResult> DeleteClient(string tenantId, string albumId)
        //{
        //    var result = await _albumService.Delete(tenantId, albumId);
        //    if (result.Code < 0)
        //        return BadRequest(result);

        //    return Ok(result);
        //}

        //[Route("client/{tenantId}/{albumId}"), AcceptVerbs("GET")]
        // public async Task<IActionResult> GetDetailClient(string tenantId, string albumId)
        //{
        //    var result = await _albumService.GetDetail(tenantId, albumId);
        //    if (result.Code < 0)
        //        return BadRequest(result);

        //    return Ok(result);
        //}

        //[Route("client/{tenantId}/update/{albumId}"), AcceptVerbs("POST"), ValidateModel]
        //public async Task<IActionResult> UpdateClient(string tenantId, string albumId, [FromBody]AlbumMeta albumMeta)
        //{
        //    var result = await _albumService.Update(albumMeta.TenantId, albumMeta.UserId, albumMeta.FullName,
        //         albumMeta.Avatar, albumId, albumMeta);

        //    if (result.Code <= 0)
        //        return BadRequest(result);

        //    return Ok(result);
        //}
        //#endregion
    }
}