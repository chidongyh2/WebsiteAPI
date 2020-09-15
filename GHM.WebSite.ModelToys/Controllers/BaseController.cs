using DeviceDetectorNET;
using DeviceDetectorNET.Parser;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Extensions;
using GHM.Website.Domain.Models.WebsiteSetting;
using GHM.Website.ModelToys.Constants;
using GHM.Website.ModelToys.Models;
using GHM.Website.ModelToys.Utils;
using GHM.Website.ModelToys.ViewModels;
using GHM.WebsiteClient.Api.Domain.IServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Position = GHM.WebsiteClient.Api.Domain.Constants.Position;

namespace GHM.Website.ModelToys.Controllers
{
    public abstract class BaseController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly IMenuService _menuService;
        private readonly ISettingService _settingService;
        private readonly ISocialNetworkService _socialNetworkService;
        private readonly IBrandService _brandService;
        private readonly IBranchContactService _branchContactService;
        private readonly ILanguageService _languageService;
        private IMemoryCache _cache;

        public object DeviceDeectorNET { get; private set; }

        public BaseController(IConfiguration configuration, IMemoryCache cache, IBrandService brandService,
            IBranchContactService branchContactService,
           IMenuService menuService, ISettingService settingService, ISocialNetworkService socialNetworkService, ILanguageService languageService)
        {
            _configuration = configuration;
            _cache = cache;
            _settingService = settingService;
            _socialNetworkService = socialNetworkService;
            _menuService = menuService;
            _brandService = brandService;
            _languageService = languageService;
            _branchContactService = branchContactService;
        }

        public async override void OnActionExecuting(ActionExecutingContext context)
        {
            base.OnActionExecuting(context);
            var listManinMenu = Task.Run(() => GetMainMenu()).Result;
            ViewBag.MainNav = listManinMenu;
            ViewBag.WebsiteSetting = Task.Run(() => GetSetting()).Result;
            ViewBag.SocialNetwork = Task.Run(() => GetSocialNetwork()).Result;
            ViewBag.FooterMenuNav = Task.Run(() => GetFooterMenu()).Result;
            ViewBag.Brands = Task.Run(() => GetBrandAsync()).Result;
            ViewBag.BranchContacts = Task.Run(() => GetBranchAsync()).Result;
            var path = $"{Request.Path}";
            var absoluteUri = $"{Request.Host}{Request.Path}";
            //var menuInfo = listManinMenu?.Where(x => x.NamePath != null && path == "/" + x.NamePath || x.Url == absoluteUri).FirstOrDefault();
            //var image = menuInfo?.Image;
            //ViewBag.ImageBanner = image;

            ViewBag.Url = _configuration.GetApiUrl()?.FileUrl;

            ViewBag.ListLanguage = GetLanguage();
            ViewBag.CurrentLanguage = CultureInfo.CurrentCulture.Name;

            DeviceDetector.SetVersionTruncation(VersionTruncation.VERSION_TRUNCATION_NONE);
            var userAgent = Request.Headers["User-Agent"];
            ViewBag.DeviceType = DeviceDetector.GetInfoFromUserAgent(userAgent)?.Match?.DeviceType;
        }

        private async Task<List<MenuItemViewModel>> GetMainMenu()
        {
            //if (_cache.TryGetValue($"{CacheParam.MainNav}{CultureInfo.CurrentCulture.Name}", out List<MenuItemViewModel> menus))
            //{
            //    return menus;
            //}

           try
            {
                var apiService = _configuration.GetApiServiceInfo();

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

                //_cache.Set($"{CacheParam.MainNav}{CultureInfo.CurrentCulture.Name}", data, TimeSpan.FromHours(1));

                return data;
            }catch(Exception e)
            {
                throw e;
            }
        }

        private async Task<WebsiteSetting> GetSetting()
        {
            if (_cache.TryGetValue($"{CacheParam.Setting}{CultureInfo.CurrentCulture.Name}", out WebsiteSetting setting))
                return setting;

            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            string convention = typeof(WebsiteSetting).Namespace;

            var listSettings = await _settingService.GetWebsiteSettingsAsync(apiService.TenantId, CultureInfo.CurrentCulture.Name);

            var settings = listSettings.Items.Select(x => new Setting
            {
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
            websiteSetting.TrackingBody = Common.GetSettingValue(settings, string.Format("{0}.TrackingBody", convention));
            websiteSetting.TrackingHeader = Common.GetSettingValue(settings, string.Format("{0}.TrackingHeader", convention));
            websiteSetting.GoogleAnalytics = Common.GetSettingValue(settings, string.Format("{0}.GoogleAnalytics", convention));
            websiteSetting.CommentNotAllow = Common.GetSettingValue(settings, string.Format("{0}.CommentNotAllow", convention));
            websiteSetting.FanPageFacebookId = Common.GetSettingValue(settings, string.Format("{0}.FanPageFacebookId", convention));

            _cache.Set(CacheParam.Setting, websiteSetting, TimeSpan.FromHours(1));

            return websiteSetting;
        }

        private async Task<List<BrandSearchViewModel>> GetBrandAsync()
        {
            if (_cache.TryGetValue($"{CacheParam.Brand}{CultureInfo.CurrentCulture.Name}", out List<BrandSearchViewModel> brands))
            {
                return brands;
            }

            var apiService = _configuration.GetApiServiceInfo();
            var result = await _brandService.SearchAsync(apiService.TenantId);

            var data = JsonConvert.DeserializeObject<List<BrandSearchViewModel>>(JsonConvert.SerializeObject(result));

            _cache.Set($"{CacheParam.Brand}{CultureInfo.CurrentCulture.Name}", data, TimeSpan.FromHours(1));

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

            _cache.Set($"{CacheParam.SocialNetwork}{CultureInfo.CurrentCulture.Name}", data, TimeSpan.FromHours(1));

            return data;
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

            _cache.Set($"{CacheParam.Branch}{CultureInfo.CurrentCulture.Name}", data, TimeSpan.FromHours(1));

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

            _cache.Set($"{CacheParam.FooterNav}{CultureInfo.CurrentCulture.Name}", data, TimeSpan.FromHours(1));

            return data;
        }

        protected IEnumerable<string> GetErrorsInModelState()
        {
            return ModelState.Keys.SelectMany(k => ModelState[k].Errors).Select(m => m.ErrorMessage);
        }

        private async Task<List<TenantLanguageViewModel>> GetLanguage()
        {
            if (_cache.TryGetValue($"{CacheParam.Language}{CultureInfo.CurrentCulture.Name}", out List<TenantLanguageViewModel> languages))
            {
                return Task.Run(() => languages).Result;
            }

            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();

            var result = await _languageService.GetLanguageSupportAsync(apiService.TenantId);
            var data = JsonConvert.DeserializeObject<List<TenantLanguageViewModel>>(JsonConvert.SerializeObject(result.Items));

            _cache.Set($"{CacheParam.Language}{CultureInfo.CurrentCulture.Name}", data, TimeSpan.FromHours(1));

            return data;
        }
    }
}