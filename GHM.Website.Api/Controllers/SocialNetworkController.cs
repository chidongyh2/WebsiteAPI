using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using GHM.Website.Domain.IServices;
using GHM.Website.Domain.ModelMetas;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Website.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/social-networks")]
    public class SocialNetworkController : GhmControllerBase
    {
        private readonly ISocialNetworkService _socialNetworkService;
        public SocialNetworkController(ISocialNetworkService socialNetworkService)
        {
            _socialNetworkService = socialNetworkService;
        }

        #region Administrator   
        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.SocialNetwork, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]SocialNetworkMeta socialNetworkMeta)
        {
            var result = await _socialNetworkService.Insert(CurrentUser.TenantId, socialNetworkMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.SocialNetwork, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _socialNetworkService.Delete(id);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.SocialNetwork, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetDetail(string id)
        {
            var result = await _socialNetworkService.GetDetail(id);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.SocialNetwork, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]SocialNetworkMeta socialNetworkMeta)
        {
            var result = await _socialNetworkService.Update(id, socialNetworkMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [AcceptVerbs("GET")]
        [AllowPermission(PageId.SocialNetwork, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search()
        {
            var result = await _socialNetworkService.Search(CurrentUser.TenantId, string.Empty, 1, 1000);
            return Ok(result);
        }
        #endregion

        #region Clients.
        [Route("{tenantId}/alls"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> ClientSearch(string tenantId)
        {
            var result = await _socialNetworkService.Search(tenantId, string.Empty, 1, 1000);
            return Ok(result);
        }
        #endregion
    }
}