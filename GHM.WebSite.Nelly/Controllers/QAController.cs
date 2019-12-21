using GHM.Infrastructure.Extensions;
using GHM.Website.Nelly.Constants;
using GHM.Website.Nelly.Controllers;
using GHM.Website.Nelly.ViewModels;
using GHM.WebSite.Nelly.Helper;
using GHM.WebsiteClient.Api.Domain.IServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using System;
using System.Globalization;
using System.Threading.Tasks;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
namespace GHM.WebSite.Nelly.Controllers
{
    public class QAController : BaseController
    {
        private readonly IConfiguration _configuration;
        private readonly IMemoryCache _cache;
        private readonly IFaqService _faqService;
        private readonly IMenuService _menuService;

        public QAController(IConfiguration configuration, IMemoryCache cache,
            IBrandService brandService, IBranchContactService branchContactService,
            IMenuService menuService, ISettingService settingService, IFaqService faqService,
            ISocialNetworkService socialNetworkService, ILanguageService languageService)
            : base(configuration, cache, brandService, branchContactService, menuService, settingService, socialNetworkService, languageService)
        {
            _configuration = configuration;
            _cache = cache;
            _faqService = faqService;
            _menuService = menuService;
        }

        [Route("trung-tam-tro-giup")]
        [Route("trung-tam-tro-giup.html")]
        public async Task<IActionResult> Index(string group)
        {
            var apiService = _configuration.GetApiServiceInfo();
            ViewBag.ListFaqGroup = await _faqService.FaqGroupSearch(apiService.TenantId, CultureInfo.CurrentCulture.Name, string.Empty, 1, int.MaxValue);

            ViewBag.ListFaq = await _faqService.FaqSearch(apiService.TenantId, CultureInfo.CurrentCulture.Name,
                null, string.Empty, 1, int.MaxValue);
            ViewBag.GroupName = group;
            if (_cache.TryGetValue($"{CacheParam.MenuMiddle}{CultureInfo.CurrentCulture.Name}", out MenuDetailViewModel CategoryMiddleCache))
            {
                ViewBag.MenuContact = CategoryMiddleCache;
            }
            else
            {
                var menuMiddle = await _menuService.GetAllActivatedMenuByPositionAsync(apiService.TenantId, CultureInfo.CurrentCulture.Name, WebsiteClient.Api.Domain.Constants.Position.Middle);
                var menuMiddleData = JsonConvertHelper.GetObjectFromObject<MenuDetailViewModel>(menuMiddle);
                _cache.Set($"{CacheParam.MenuMiddle}{CultureInfo.CurrentCulture.Name}", menuMiddleData, TimeSpan.FromHours(1));
                ViewBag.MenuContact = menuMiddleData;
            }

            return View();
        }
    }
}
