using System;
using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;
using GHM.Core.Domain.IServices;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Core.Api.Controllers
{
    [Authorize]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    [Produces("application/json")]
    public class AppsController : GhmControllerBase
    {
        private readonly IAppService _appService;
        private readonly IResourceService<SharedResource> _sharedResourceService;

        public AppsController(IAppService appService, IResourceService<SharedResource> sharedResourceService)
        {
            _appService = appService;
            _sharedResourceService = sharedResourceService;
        }

        [AcceptVerbs("GET")]
        public async Task<IActionResult> InitApp()
        {
            var appSettings = await _appService.GetAppSettings(CurrentUser.Id, CurrentUser.TenantId,
                CultureInfo.CurrentCulture.Name);
            appSettings.CurrentUser = CurrentUser;
            return Ok(appSettings);
        }

        [Route("languages"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetPages()
        {
            return Ok(await _appService.GetLanguages(CurrentUser.TenantId));
        }

        [Route("permissions"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetPermissions()
        {
            if (CurrentUser == null)
                return Ok(null);

            return Ok(await _appService.GetPermissions(CurrentUser.Id));
        }

        [Route("settings"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetSettings()
        {
            if (CurrentUser == null)
                return Ok(null);

            return Ok(await _appService.GetSettings(CurrentUser.Id));
        }

        [Route("user"), AcceptVerbs("GET")]
        public IActionResult GetUser()
        {
            if (CurrentUser == null)
                return Ok(null);

            return Ok(new
            {
                CurrentUser.FullName,
                CurrentUser.Avatar,
                CurrentUser.Email,
                CurrentUser.TitlePrefixing,
                CurrentUser.PhoneNumber
            });
        }

        #region Search Form.
        [Route("list-active-search"), AcceptVerbs("GET")]
        public IActionResult GetListSearchByActiveStatus()
        {
            var listSearchActiveByStatus = new List<dynamic>
            {
                new {
                    Id = true,
                    Name = _sharedResourceService.GetString("Active")

                },
                new {
                    Id = false,
                    Name = _sharedResourceService.GetString("InActive")

                }
            };
            return Ok(listSearchActiveByStatus);
        }
        #endregion
    }
}