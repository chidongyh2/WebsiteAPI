using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Services;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Pyrexar.Models;
using GHM.Website.Pyrexar.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;

namespace GHM.Website.Pyrexar.Controllers
{
    public class NewsController : BaseController
    {
        private readonly IConfiguration _configuration;
        private readonly IMemoryCache _cache;
        public NewsController(IConfiguration configuration, IMemoryCache cache) : base(configuration, cache)
        {
            _configuration = configuration;
            _cache = cache;
        }

        [Route("{seoLink}/{page?}/{pageSize?}")]
        public async Task<ActionResult> Index(string seoLink, int page = 1, int pageSize = 20)
        {
            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            
            var httpClientService = new HttpClientService();
            var listNews = await httpClientService.GetAsync<SearchResult<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/category/{apiService.TenantId}/{seoLink}/{page}/{pageSize}/{CultureInfo.CurrentCulture.Name}");

            ViewBag.ListNews = listNews?.Items;
            ViewBag.TotalRows = listNews?.TotalRows;

            var newsSeoLink = CultureInfo.CurrentCulture.Name == "vi-VN" ? "tin-tuc" : "blog";
            var listNewsRecent = await httpClientService.GetAsync<SearchResult<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/category/{apiService.TenantId}/{newsSeoLink}/{1}/{30}/{CultureInfo.CurrentCulture.Name}");

            ViewBag.ListNewsRecent = listNewsRecent?.Items;
            ViewBag.SeoLink = seoLink;

            ViewBag.Page = page;
            return View();
        }

        [Route("{seoLink}.html")]
        public async Task<ActionResult> Detail(string seoLink)
        {
            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            var httpClientService = new HttpClientService();

            var newsDetail = await httpClientService.GetAsync<NewsDetailViewModel>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/client/{apiService.TenantId}/{seoLink}/{CultureInfo.CurrentCulture.Name}");

            var newsSeoLink = CultureInfo.CurrentCulture.Name == "vi-VN" ? "tin-tuc" : "blog";
            var listNews = await httpClientService.GetAsync<SearchResult<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/category/{apiService.TenantId}/{"tin-tuc"}/{1}/{30}/{CultureInfo.CurrentCulture.Name}");
            ViewBag.ListNewsRecent = listNews?.Items;

            return View(newsDetail);
        }
    }
}
