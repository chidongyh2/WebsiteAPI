using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using GHM.WebsiteClient.Api.Domain.Constants;
using GHM.WebsiteClient.Api.Domain.IServices;
using GHM.WebsiteClient.Api.Domain.ModelMetas;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GHM.WebsiteClient.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenusController : ControllerBase
    {
        private readonly IMenuService _menuService;
        public MenusController(IMenuService menuService)
        {
            _menuService = menuService;
        }

        [Route("{id}/items/menu/{tenantId}/{languageId?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetAllActivatedMenuItem(string tenantId, string id, string languageId)
        {
            var result = await _menuService.GetAllActivatedMenuItemAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, id);
            return Ok(result);
        }

        [Route("position/{position}/items/menu/{tenantId}/{languageId?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetMenuItemByPosition(string tenantId, Position position, string languageId)
        {
            var result = await _menuService.GetAllActivatedMenuItemByPositionAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, position);
            return Ok(result);
        }

        [Route("get-all-menu-position/{position}/{tenantId}/{languageId?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetAllMenuPositon(Position position, string tenantId, string languageId)
        {
            var result = await _menuService.GetAllActivatedMenuByPositionAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, position);
            return Ok(result);

        }

        [Route("get-by-seoLink"), AcceptVerbs("POST")]
        public async Task<IActionResult> GetInfoBySeoLink(CategoryClientMeta categoryMeta)
        {
            var result = await _menuService.GetDetailBySeoLinkAsync(categoryMeta.TenantId, categoryMeta.SeoLink, categoryMeta.LanguageId ?? CultureInfo.CurrentCulture.Name);

            return Ok(result);
        }
    }
}