﻿using System;
using System.Collections.Generic;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Services;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Nelly.Constants;
using GHM.Website.Nelly.Models;
using GHM.Website.Nelly.Utils;
using GHM.Website.Nelly.ViewModels;
using GHM.Website.Domain.Models.WebsiteSetting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using System.Globalization;
using System.Linq;
using DeviceDetectorNET;
using DeviceDetectorNET.Parser;

namespace GHM.Website.Nelly.Controllers
{
    public abstract class BaseController : Controller
    {
        private readonly IConfiguration _configuration;
        private IMemoryCache _cache;

        public object DeviceDeectorNET { get; private set; }

        public BaseController(IConfiguration configuration, IMemoryCache cache)
        {
            _configuration = configuration;
            _cache = cache;
        }

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            base.OnActionExecuting(context);
            var listManinMenu = GetMainMenu();
            ViewBag.MainNav = listManinMenu;
            ViewBag.WebsiteSetting = GetSetting();
            ViewBag.BranchContacts = GetBranch();
            ViewBag.SocialNetwork = GetSocialNetwork();
            ViewBag.ListBrands = GetAllBrand();
            ViewBag.FooterMenuNav = GetFooterMenu();
            var path = $"{Request.Path}";
            var absoluteUri = $"{Request.Host}{Request.Path}";
            var menuInfo = listManinMenu?.Where(x => x.NamePath != null && path == "/" +x.NamePath || x.Url == absoluteUri).FirstOrDefault();
            var image = menuInfo == null || string.IsNullOrEmpty(menuInfo.Image) ? "/images/bannerNews.jpg" : menuInfo.Image;
            ViewBag.ImageBanner = image;

            ViewBag.Url = _configuration.GetApiUrl()?.FileUrl;

            ViewBag.ListLanguage = GetLanguage();
            ViewBag.CurrentLanguage = CultureInfo.CurrentCulture.Name;

            DeviceDetector.SetVersionTruncation(VersionTruncation.VERSION_TRUNCATION_NONE);
            var userAgent = Request.Headers["User-Agent"];
            ViewBag.DeviceType = DeviceDetector.GetInfoFromUserAgent(userAgent)?.Match?.DeviceType;
        }

        private List<MenuItemViewModel> GetMainMenu()
        {
            if (_cache.TryGetValue($"{CacheParam.MainNav}{CultureInfo.CurrentCulture.Name}", out List<MenuItemViewModel> menus))
            {
                return menus;
            }

            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();

            var result = new HttpClientService()
                .GetAsync<List<MenuItemViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/menus/position/{(int)Position.Top}/items/menu/{apiService.TenantId}/{CultureInfo.CurrentCulture.Name}");

            _cache.Set(CacheParam.MainNav, result?.Result, TimeSpan.FromHours(2));
            return result?.Result;
        }

        private WebsiteSetting GetSetting()
        {
            if (_cache.TryGetValue($"{CacheParam.Setting}{CultureInfo.CurrentCulture.Name}", out WebsiteSetting setting))
            {
                return setting;
            }

            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            string convention = typeof(WebsiteSetting).Namespace;

            var listSettings = new HttpClientService()
                .GetAsync<SearchResult<Setting>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/settings/get-setting/{apiService.TenantId}/{CultureInfo.CurrentCulture.Name}");

            var settings = listSettings.Result?.Items;

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

            _cache.Set(CacheParam.Setting, websiteSetting, TimeSpan.FromHours(2));

            return websiteSetting;
        }

        private List<BranchContactSearchViewModel> GetBranch()
        {
            if (_cache.TryGetValue($"{CacheParam.Branch}{CultureInfo.CurrentCulture.Name}", out List<BranchContactSearchViewModel> branchs))
            {
                return branchs;
            }

            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();

            var result = new HttpClientService()
                .GetAsync<SearchResult<BranchContactSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/branchs/alls/{apiService.TenantId}/{CultureInfo.CurrentCulture.Name}");

            _cache.Set(CacheParam.Branch, result?.Result?.Items, TimeSpan.FromHours(2));

            return result?.Result?.Items;
        }

        private List<SocialNetworkViewModel> GetSocialNetwork()
        {
            if (_cache.TryGetValue($"{CacheParam.SocialNetwork}{CultureInfo.CurrentCulture.Name}", out List<SocialNetworkViewModel> socialNetwork))
            {
                return socialNetwork;
            }
            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();

            var result = new HttpClientService()
                .GetAsync<SearchResult<SocialNetworkViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/social-networks/{apiService.TenantId}/alls");

            _cache.Set(CacheParam.SocialNetwork, result?.Result?.Items, TimeSpan.FromHours(2));

            return result?.Result?.Items;
        }

        private List<BrandSearchViewModel> GetAllBrand()
        {
            if (_cache.TryGetValue($"{CacheParam.Brand}{CultureInfo.CurrentCulture.Name}", out List<BrandSearchViewModel> brands))
            {
                return brands;
            }

            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();

            var result = new HttpClientService()
                .GetAsync<SearchResult<BrandSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/brands/{apiService.TenantId}/alls");
            _cache.Set(CacheParam.Brand, result?.Result?.Items, TimeSpan.FromHours(2));

            return result?.Result?.Items;
        }

        private List<MenuItemViewModel> GetFooterMenu()
        {
            if (_cache.TryGetValue($"{CacheParam.FooterNav}{CultureInfo.CurrentCulture.Name}", out List<MenuItemViewModel> menus))
            {
                return menus;
            }

            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();

            var result = new HttpClientService()
                .GetAsync<List<MenuItemViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/menus/position/{(int)Position.Bottom}/items/menu/{apiService.TenantId}/{CultureInfo.CurrentCulture.Name}");

            _cache.Set(CacheParam.FooterNav, result?.Result, TimeSpan.FromHours(2));

            return result?.Result;
        }

        private List<TenantLanguageViewModel> GetLanguage()
        {
            if (_cache.TryGetValue($"{CacheParam.Language}{CultureInfo.CurrentCulture.Name}", out List<TenantLanguageViewModel> languages))
            {
                return languages;
            }

            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();

            var result = new HttpClientService()
               .GetAsync<SearchResult<TenantLanguageViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/core/languages/support/{apiService.TenantId}");

            _cache.Set(CacheParam.Language, result?.Result?.Items, TimeSpan.FromHours(2));

            return result?.Result?.Items;
        }
    }
}