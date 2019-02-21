using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.CustomAttributes;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.ModelMetas;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Website.ThaiThinhMedic.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class VideoController : GhmControllerBase
    {
        private readonly IVideoRepository _videoRepository;

        public VideoController(IVideoRepository videoRepository)
        {
            _videoRepository = videoRepository;
        }

        [Route("insert"), AcceptVerbs("POST"), ValidateModel]
        public async Task<IActionResult> Insert([FromBody]VideoMeta video)
        {
            var result = await _videoRepository.Insert(video);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("update"), AcceptVerbs("POST"), ValidateModel]
        public async Task<IActionResult> Update([FromBody]VideoMeta video)
        {
            var result = await _videoRepository.Update(video);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("delete/{id}"), AcceptVerbs("DELETE")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _videoRepository.Delete(id);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("search"), AcceptVerbs("GET")]
        public async Task<IActionResult> Search(string keyword, bool? isActive, int page = 1, int pageSize = 20)
        {
            var items = await _videoRepository.Search(keyword, isActive, page, pageSize, out var totalRows);
            return Ok(new
            {
                items,
                totalRows
            });
        }
    }
}