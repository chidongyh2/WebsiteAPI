using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using GHM.WebsiteClient.Api.Domain.IServices;
using GHM.WebsiteClient.Api.Domain.ModelMetas;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GHM.WebsiteClient.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        private readonly IEventService _eventService;
        private readonly IAlbumService _albumService;
        public EventsController(IEventService eventService, IAlbumService albumService)
        {
            _eventService = eventService;
            _albumService = albumService;
        }


        [Route("all/{tenantId}/{page}/{pageSize}/{languageId?}")]
        public async Task<IActionResult> Search(string tenantId, string languageId, int page = 1, int pageSize = 20)
        {
            var result = await _eventService.SearchClientAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, page, pageSize);
            return Ok(result);
        }

        [Route("get-detail/{tenantId}/{seoLink}/{languageId?}")]
        public async Task<IActionResult> GetDetailShowCLient(string tenantId, string languageId, string seoLink)
        {
            var result = await _eventService.GetEventDetailShowClientAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, seoLink);
            foreach (var albumItem in result.Data.Albums)
            {
                albumItem.AlbumItems = await _albumService.GetAlbumItems(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, albumItem.Id, albumItem.Type, 1, 20);
            }

                return Ok(result);
        }

        [Route("client/{id}/registers"), AcceptVerbs("POST")]
        public async Task<IActionResult> InsertRegisterClient(string id, [FromBody]RegisterMeta registerMeta)
        {
            var result = await _eventService.InsertAsync(id, registerMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

    }
}