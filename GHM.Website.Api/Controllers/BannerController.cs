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
    [Route("api/v{version:apiVersion}/banners")]
    public class BannerController : GhmControllerBase
    {
        private readonly IBannerService _bannerService;
        public BannerController(IBannerService bannerService)
        {
            _bannerService = bannerService;
        }     

        [AcceptVerbs("GET")]
        [AllowPermission(PageId.WebsiteBanner, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, BannerType? bannerType, int page = 1, int pageSize = 20)
        {
            var result = await _bannerService.Search(CurrentUser.TenantId, bannerType, keyword, page, pageSize);
            return Ok(result);
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.WebsiteBanner, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]BannerMeta bannerMeta)
        {
            var result = await _bannerService.Insert(CurrentUser.TenantId, bannerMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.WebsiteBanner, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _bannerService.Delete(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{bannerId}/items/{bannerItemId}"), AcceptVerbs("DELETE")]       
        [AllowPermission(PageId.WebsiteBanner, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string bannerId, string bannerItemId)
        {
            var result = await _bannerService.DeleteBannerItem(bannerId, bannerItemId);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{bannerId}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.WebsiteBanner, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetDetail(string bannerId)
        {
            var result = await _bannerService.GetDetail(CurrentUser.TenantId, bannerId);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.WebsiteBanner, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]BannerMeta bannerMeta)
        {
            var result = await _bannerService.Update(CurrentUser.TenantId, id, bannerMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{bannerId}/items/{bannerItemId}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.WebsiteBanner, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string bannerId, string bannerItemId, [FromBody]BannerItemMeta bannerItemMeta)
        {
            var result = await _bannerService.UpdateBannerItem(bannerItemId, bannerItemMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        #region Client
        [Route("{tenantId}/home-page/{bannerId}"), AcceptVerbs("GET")]
        //[AllowPermission(PageId.WebsiteBanner, Permission.View)]
        //[CheckPermission]
        public async Task<IActionResult> GetBannerInHomePage(string tenantId, string bannerId)
        {
            var result = await _bannerService.GetDetail(tenantId, bannerId);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{tenantId}/position/{position}"), AcceptVerbs("GET")]
        //[AllowPermission(PageId.WebsiteBanner, Permission.View)]
        //[CheckPermission]
        public async Task<IActionResult> GetBannerByPosition(string tenantId, Position position)
        {
            var result = await _bannerService.GetBannerItemByPosition(tenantId, position);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }
        #endregion
    }
}