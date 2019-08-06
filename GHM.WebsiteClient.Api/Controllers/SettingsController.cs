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
    public class SettingsController : ControllerBase
    {
        private readonly ISettingService _settingService;

        public SettingsController(ISettingService settingService)
        {
            _settingService = settingService;
        }

        [Route("get-setting/{tenantId}/{languageId?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetWebsiteSetting(string tenantId, string languageId)
        {
            var result =
                await _settingService.GetWebsiteSettingsAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }
    }
}