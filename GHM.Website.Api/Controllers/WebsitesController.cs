using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.IServices;
using GHM.Website.Domain.ModelMetas;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Website.Api.Controllers
{
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class WebsitesController : ControllerBase
    {
        private readonly IMenuService _menuService;
        public WebsitesController(IMenuService menuService)
        {
            _menuService = menuService;
        }
        [Route("{id}/items/menu/{tenantId}/{languageId?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetAllActivatedMenuItem(string tenantId, string id, string languageId)
        {
            var result = await _menuService.GetAllActivatedMenuItem(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, id);
            return Ok(result);
        }

        [Route("position/{position}/items/menu/{tenantId}/{languageId?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetMenuItemByPosition(string tenantId, Position position, string languageId)
        {
            var result = await _menuService.GetAllActivatedMenuItemByPosition(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, position);
            return Ok(result);
        }

        [Route("get-all-menu-position/{position}/{tenantId}/{languageId?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetAllMenuPositon(Position position, string tenantId, string languageId)
        {
            var result = await _menuService.GetAllActivatedMenuByPosition(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, position);
            return Ok(result);

        }

        [Route("get-by-seoLink"), AcceptVerbs("POST")]
        public async Task<IActionResult> GetInfoBySeoLink(CategoryClientMeta categoryMeta)
        {
            var result = await _menuService.GetDetailBySeoLink(categoryMeta.TenantId, categoryMeta.SeoLink, categoryMeta.LanguageId ?? CultureInfo.CurrentCulture.Name);

            return Ok(result);
        }
    }
}