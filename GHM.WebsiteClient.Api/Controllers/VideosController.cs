using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using GHM.WebsiteClient.Api.Domain.IServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GHM.WebsiteClient.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VideosController : ControllerBase
    {
        private readonly IVideoService _videoService;
        public VideosController(IVideoService videoService)
        {
            _videoService = videoService;
        }

        [Route("home-page/{tenantId}/{selectTop}/{languageId?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> ListTopVideo(string tenantId, int selectTop, string languageId)
        {
            var result = await _videoService.ListTopVideoAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, selectTop);
            return Ok(result);
        }

        [Route("album/{tenantId}/{albumId}/{languageId?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> ListVideo(string tenantId, string albumId, string languageId, int page = 1, int pageSize = 6)
        {
            var result = await _videoService.ListVideoAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, albumId, page, pageSize);
            return Ok(result);
        }
    }
}