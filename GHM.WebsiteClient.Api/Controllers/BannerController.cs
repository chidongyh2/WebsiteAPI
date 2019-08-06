using GHM.WebsiteClient.Api.Domain.Constants;
using GHM.WebsiteClient.Api.Domain.IServices;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BannerController : ControllerBase
    {
        private readonly IBannerService _bannerService;
        public BannerController(IBannerService bannerService)
        {
            _bannerService = bannerService;
        }

        [Route("{tenantId}/home-page/{bannerId}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetBannerInHomePage(string tenantId, string bannerId)
        {
            var result = await _bannerService.GetDetailAsync(tenantId, bannerId);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{tenantId}/position/{position}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetBannerByPosition(string tenantId, Position position)
        {
            var result = await _bannerService.GetBannerItemByPositionAsync(tenantId, position);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }
    }
}