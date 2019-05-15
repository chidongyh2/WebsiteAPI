using System;
using System.Collections.Generic;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Services;
using GHM.Infrastructure.ViewModels;
using GHM.Website.GHMSoft.Constants;
using GHM.Website.GHMSoft.Models;
using GHM.Website.GHMSoft.Utils;
using GHM.Website.GHMSoft.ViewModels;
using GHM.Website.Domain.Models.WebsiteSetting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;

namespace GHM.Website.GHMSoft.Controllers
{
    public abstract class BaseController : Controller
    {
        private readonly IConfiguration _configuration;
        private IMemoryCache _cache;
        public BaseController(IConfiguration configuration, IMemoryCache cache)
        {
            _configuration = configuration;
            _cache = cache;
        }

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            base.OnActionExecuting(context);
            ViewBag.MainNav = GetMainMenu();
            ViewBag.WebsiteSetting = GetSetting();
            ViewBag.BranchContacts = GetBranch();
            ViewBag.SocialNetwork = GetSocialNetwork();
        }

        private List<MenuItemViewModel> GetMainMenu()
        {
            //if (_cache.TryGetValue(CacheParam.MainNav, out List<MenuItemViewModel> menus))
            //{
            //    return menus;
            //}

            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();

            var result = new HttpClientService()
                .GetAsync<List<MenuItemViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/menus/position/{(int)Position.Top}/items/menu/{apiService.TenantId}");

            // _cache.Set(CacheParam.MainNav, result?.Result, TimeSpan.FromHours(2));

            return result?.Result;
        }

        private WebsiteSetting GetSetting()
        {
            //if (_cache.TryGetValue(CacheParam.Setting, out WebsiteSetting setting))
            //{
            //    return setting;
            //}

            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            string convention = typeof(WebsiteSetting).Namespace;

            var listSettings = new HttpClientService()
                .GetAsync<SearchResult<Setting>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/settings/get-setting/{apiService.TenantId}");

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

            _cache.Set(CacheParam.Setting, websiteSetting, TimeSpan.FromHours(2));

            return websiteSetting;
        }

        private List<BranchContactSearchViewModel> GetBranch()
        {
            //if (_cache.TryGetValue(CacheParam.Branch, out List<BranchContactSearchViewModel> branchs))
            //{
            //    return branchs;
            //}

            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();

            var result = new HttpClientService()
                .GetAsync<SearchResult<BranchContactSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/branchs/alls/{apiService.TenantId}");

            _cache.Set(CacheParam.Branch, result?.Result?.Items, TimeSpan.FromHours(2));

            return result?.Result?.Items;
        }

        private List<SocialNetworkViewModel> GetSocialNetwork()
        {
            //if (_cache.TryGetValue(CacheParam.SocialNetwork, out List<SocialNetworkViewModel> socialNetwork))
            //{
            //    return socialNetwork;
            //}

            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            
            var result = new HttpClientService()
                .GetAsync<SearchResult<SocialNetworkViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/social-networks/{apiService.TenantId}/alls");

            _cache.Set(CacheParam.SocialNetwork, result?.Result?.Items, TimeSpan.FromHours(2));

            return result?.Result?.Items;
        }
    }
}