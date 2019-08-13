using System;
using System.Collections.Generic;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Services;
using GHM.Infrastructure.ViewModels;
using GHM.Website.JadesSpa.Constants;
using GHM.Website.JadesSpa.Models;
using GHM.Website.JadesSpa.Utils;
using GHM.Website.JadesSpa.ViewModels;
using GHM.Website.Domain.Models.WebsiteSetting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using System.Globalization;
using System.Linq;
using DeviceDetectorNET;
using DeviceDetectorNET.Parser;
using GHM.WebsiteClient.Api.Domain.IServices;
using System.Threading.Tasks;
using Position = GHM.WebsiteClient.Api.Domain.Constants.Position;
using GHM.Infrastructure.Constants;
using Newtonsoft.Json;

namespace GHM.Website.JadesSpa.Controllers
{
    public abstract class BaseController : Controller
    {
        private readonly IConfiguration _configuration;
        private IMemoryCache _cache;
        private readonly IMenuService _menuService;
        private readonly ISettingService _settingService;
        private readonly ISocialNetworkService _socialNetworkService;
        private readonly IBranchContactService _branchContactService;
        private readonly ILanguageService _languageService;
        public object DeviceDeectorNET { get; private set; }

        public BaseController(IConfiguration configuration, IMemoryCache cache, IBranchContactService branchContactService,
            IMenuService menuService, ISettingService settingService, ISocialNetworkService socialNetworkService, ILanguageService languageService)
        {
            _configuration = configuration;
            _cache = cache;
            _settingService = settingService;
            _socialNetworkService = socialNetworkService;
            _menuService = menuService;
            _branchContactService = branchContactService;
            _languageService = languageService;
        }


        public async override void OnActionExecuting(ActionExecutingContext context)
        {
            base.OnActionExecuting(context);
            var listManinMenu = Task.Run(() => GetMainMenu()).Result;
            ViewBag.MainNav = listManinMenu;
            ViewBag.WebsiteSetting = Task.Run(() => GetSetting()).Result;
            ViewBag.SocialNetwork = Task.Run(() => GetSocialNetwork()).Result;
            ViewBag.FooterMenuNav = Task.Run(() => GetFooterMenu()).Result;
            ViewBag.BranchContacts = Task.Run(() => GetBranchAsync()).Result;
            var path = $"{Request.Path}";
            var absoluteUri = $"{Request.Host}{Request.Path}";
            var menuInfo = listManinMenu?.Where(x => x.NamePath != null && path == "/" +x.NamePath || x.Url == absoluteUri).FirstOrDefault();
            var image = menuInfo == null || string.IsNullOrEmpty(menuInfo.Image) ? "/images/bannerNews.jpg" : menuInfo.Image;
            ViewBag.ImageBanner = image;

            ViewBag.Url = _configuration.GetApiUrl()?.FileUrl;

            ViewBag.ListLanguage = Task.Run(() => GetLanguage()).Result;
            ViewBag.CurrentLanguage = CultureInfo.CurrentCulture.Name;

            DeviceDetector.SetVersionTruncation(VersionTruncation.VERSION_TRUNCATION_NONE);
            var userAgent = Request.Headers["User-Agent"];
            ViewBag.DeviceType = DeviceDetector.GetInfoFromUserAgent(userAgent)?.Match?.DeviceType;
        }

        private async Task<List<MenuItemViewModel>> GetMainMenu()
        {
            if (_cache.TryGetValue($"{CacheParam.MainNav}{CultureInfo.CurrentCulture.Name}", out List<MenuItemViewModel> menus))
            {
                return Task.Run(() => menus).Result;
            }
            var apiService = _configuration.GetApiServiceInfo();
            //var result = new HttpClientService()
            //    .GetAsync<List<MenuItemViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/menus/position/{(int)Position.Top}/items/menu/{apiService.TenantId}/{CultureInfo.CurrentCulture.Name}");

            var result = await _menuService.GetAllActivatedMenuItemByPositionAsync(apiService.TenantId, CultureInfo.CurrentCulture.Name, Position.Top);

            var data = result.Select(x => new MenuItemViewModel
            {
                Id = x.Id,
                ChildCount = x.ChildCount,
                Description = x.Description,
                Icon = x.Icon,
                IdPath = x.IdPath,
                Image = x.Image,
                IsActive = x.IsActive,
                Level = x.Level,
                MenuId = x.MenuId,
                Name = x.Name,
                NamePath = x.NamePath,
                Order = x.Order,
                OrderPath = x.OrderPath,
                ParentId = x.ParentId,
                ParentName = x.ParentName,
                SubjectId = x.SubjectId,
                SubjectType = (SubjectType)x.SubjectType,
                Url = x.Url
            }).ToList();
            _cache.Set($"{CacheParam.MainNav}{CultureInfo.CurrentCulture.Name}", data, TimeSpan.FromHours(2));

            return data;
        }

        private async Task<WebsiteSetting> GetSetting()
        {
            if (_cache.TryGetValue($"{CacheParam.Setting}{CultureInfo.CurrentCulture.Name}", out WebsiteSetting setting))
            {
                return Task.Run(() => setting).Result;
            }

            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            string convention = "GHM.Website.Domain.Models.WebsiteSetting";

            //var listSettings = new HttpClientService()
            //    .GetAsync<SearchResult<Setting>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/settings/get-setting/{apiService.TenantId}/{CultureInfo.CurrentCulture.Name}");

            var listSettings = await _settingService.GetWebsiteSettingsAsync(apiService.TenantId, CultureInfo.CurrentCulture.Name);

            var settings = listSettings.Items.Select( x => new Setting {
                Key = x.Key,
                ConcurrencyStamp = x.ConcurrencyStamp,
                DisplayName = x.DisplayName,
                GroupId = x.GroupId,
                LanguageId = x.LanguageId,
                Value = x.Value
            }).ToList();

            var websiteSetting = new WebsiteSetting();

            if (settings == null)
                return websiteSetting;

            websiteSetting.Brand = Common.GetSettingValue(settings, string.Format("{0}.Brand", convention));
            websiteSetting.Favicon = Common.GetSettingValue(settings, string.Format("{0}.Favicon", convention));
            websiteSetting.Instruction = Common.GetSettingValue(settings, string.Format("{0}.Instruction", convention));
            websiteSetting.IpBlocking = Common.GetSettingValue(settings, string.Format("{0}.IpBlocking", convention));
            websiteSetting.MetaDescription = Common.GetSettingValue(settings, string.Format("{0}.MetaDescription", convention));
            websiteSetting.MetaTitle = Common.GetSettingValue(settings, string.Format("{0}.MetaTitle", convention));
            websiteSetting.Logo = Common.GetSettingValue(settings, string.Format("{0}.Logo", convention));
            websiteSetting.MetaKeyword = Common.GetSettingValue(settings, string.Format("{0}.MetaKeyword", convention));
            websiteSetting.Fanpage = Common.GetSettingValue(settings, string.Format("{0}.Fanpage", convention));
            websiteSetting.GoogleMap = Common.GetSettingValue(settings, string.Format("{0}.GoogleMap", convention));
            websiteSetting.Hotline = Common.GetSettingValue(settings, string.Format("{0}.Hotline", convention));
            websiteSetting.LogoMobile = Common.GetSettingValue(settings, string.Format("{0}.LogoMobile", convention));
            websiteSetting.ZaloId = Common.GetSettingValue(settings, string.Format("{0}.ZaloId", convention));

            _cache.Set($"{CacheParam.Setting}{CultureInfo.CurrentCulture.Name}", websiteSetting, TimeSpan.FromHours(2));

            return websiteSetting;
        }

        private async Task<List<BranchContactSearchViewModel>> GetBranchAsync()
        {
            if (_cache.TryGetValue($"{CacheParam.Branch}{CultureInfo.CurrentCulture.Name}", out List<BranchContactSearchViewModel> branchs))
            {
                return branchs;
            }

            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();

            //var result = new HttpClientService()
            //    .GetAsync<SearchResult<BranchContactSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/branchs/alls/{apiService.TenantId}/{CultureInfo.CurrentCulture.Name}");

            var result = await _branchContactService.SearchForClientAsync(apiService.TenantId, CultureInfo.CurrentCulture.Name);

            var data = JsonConvert.DeserializeObject<List<BranchContactSearchViewModel>>(JsonConvert.SerializeObject(result.Items));

            _cache.Set($"{CacheParam.Branch}{CultureInfo.CurrentCulture.Name}", data, TimeSpan.FromHours(2));

            return data;
        }

        private async Task<List<SocialNetworkViewModel>> GetSocialNetwork()
        {
            if (_cache.TryGetValue($"{CacheParam.SocialNetwork}{CultureInfo.CurrentCulture.Name}", out List<SocialNetworkViewModel> socialNetwork))
            {
                return Task.Run(() => socialNetwork).Result;
            }
            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();

            //var result = new HttpClientService()
            //    .GetAsync<SearchResult<SocialNetworkViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/social-networks/{apiService.TenantId}/alls");

            var result = await _socialNetworkService.SearchAsync(apiService.TenantId);

            var data = result.Select(x => new SocialNetworkViewModel
            {
                Icon = x.Icon,
                Id = x.Id,
                Image = x.Image,
                Name = x.Name,
                Order = x.Order,
                Url = x.Url
            }).ToList();

            _cache.Set($"{CacheParam.SocialNetwork}{CultureInfo.CurrentCulture.Name}", data, TimeSpan.FromHours(2));

            return data;
        }


        private async Task<List<MenuItemViewModel>> GetFooterMenu()
        {
            if (_cache.TryGetValue($"{CacheParam.FooterNav}{CultureInfo.CurrentCulture.Name}", out List<MenuItemViewModel> menus))
            {
                return Task.Run(() => menus).Result;
            }

            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();

            //var result = new HttpClientService()
            //    .GetAsync<List<MenuItemViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/menus/position/{(int)Position.Bottom}/items/menu/{apiService.TenantId}/{CultureInfo.CurrentCulture.Name}");

            var result = await _menuService.GetAllActivatedMenuItemByPositionAsync(apiService.TenantId, CultureInfo.CurrentCulture.Name, Position.Bottom);

            var data = result.Select(x => new MenuItemViewModel
            {
                Id = x.Id,
                ChildCount = x.ChildCount,
                Description = x.Description,
                Icon = x.Icon,
                IdPath = x.IdPath,
                Image = x.Image,
                IsActive = x.IsActive,
                Level = x.Level,
                MenuId = x.MenuId,
                Name = x.Name,
                NamePath = x.NamePath,
                Order = x.Order,
                OrderPath = x.OrderPath,
                ParentId = x.ParentId,
                ParentName = x.ParentName,
                SubjectId = x.SubjectId,
                SubjectType = (SubjectType)x.SubjectType,
                Url = x.Url
            }).ToList();
            _cache.Set($"{CacheParam.FooterNav}{CultureInfo.CurrentCulture.Name}", data, TimeSpan.FromHours(2));

            return data;
        }

        private async Task<List<TenantLanguageViewModel>> GetLanguage()
        {
            if (_cache.TryGetValue($"{CacheParam.Language}{CultureInfo.CurrentCulture.Name}", out List<TenantLanguageViewModel> languages))
            {
                return Task.Run(() => languages).Result;
            }

            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();

            //var result = new HttpClientService()
            //   .GetAsync<SearchResult<TenantLanguageViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/core/languages/support/{apiService.TenantId}");
            var result = await _languageService.GetLanguageSupportAsync(apiService.TenantId);
            var data = JsonConvert.DeserializeObject<List<TenantLanguageViewModel>>(JsonConvert.SerializeObject(result.Items));

            _cache.Set($"{CacheParam.Language}{CultureInfo.CurrentCulture.Name}", data, TimeSpan.FromHours(2));

            return data;
        }
    }
}