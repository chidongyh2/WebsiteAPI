using System.Collections.Generic;
using System.Globalization;
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
    [Route("api/v{version:apiVersion}/[controller]")]

    public class SettingsController : GhmControllerBase
    {
        private readonly ISettingService _settingService;

        public SettingsController(ISettingService settingService)
        {
            _settingService = settingService;
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Setting, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Save([FromBody]List<SettingMeta> settingMetas)
        {
            foreach (var settingMeta in settingMetas)
            {
                settingMeta.TenantId = CurrentUser.TenantId;
                settingMeta.UserId = CurrentUser.Id;
                settingMeta.FullName = CurrentUser.FullName;
            }

            var result = await _settingService.Save(settingMetas);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{languageId}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Setting, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetWebsiteSetting(string languageId)
        {
            var result =
                await _settingService.GetWebsiteSettings(CurrentUser.TenantId, languageId);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        //Client
        [Route("get-setting/{tenantId}/{languageId?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetWebsiteSetting(string tenantId, string languageId)
        {
            var result =
                await _settingService.GetWebsiteSettings(tenantId, languageId ?? CultureInfo.CurrentCulture.Name);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }
    }
}