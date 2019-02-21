using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Core.Api.Controllers
{
    [Authorize]
    [ApiVersion("1.0")]
    [Produces("application/json")]
    [Route("api/v{version:apiVersion}/user-settings")]
    public class UserSettingController : GhmControllerBase
    {
        private readonly IUserSettingRepository _userSettingRepository;

        public UserSettingController(IUserSettingRepository userSettingRepository)
        {
            _userSettingRepository = userSettingRepository;
        }

        [Route("change-theme/{themeName}"), AcceptVerbs("GET")]
        public async Task<IActionResult> Save(string themeName)
        {
            var result = await _userSettingRepository.Save(new UserSetting
            {
                UserId = CurrentUser.Id,
                Key = "ThemeName",
                Value = themeName,
                GroupKey = "ThemeSettings"
            });
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("close-sidebar/{isClose}"), AcceptVerbs("GET")]
        public async Task<IActionResult> CloseSidebar(bool isClose)
        {
            var result = await _userSettingRepository.Save(new UserSetting
            {
                UserId = CurrentUser.Id,
                Key = "IsCloseSidebar",
                Value = isClose.ToString(),
                GroupKey = "ThemeSettings"
            });
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [AcceptVerbs("GET")]
        public async Task<IActionResult> GetUserSettings()
        {
            return Ok(await _userSettingRepository.GetsByUserId(x => new
            {
                x.Key,
                x.Value
            }, CurrentUser.Id));
        }
    }
}