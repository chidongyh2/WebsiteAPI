using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Services;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Amiea.Models;
using GHM.Website.Amiea.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;

namespace GHM.Website.Amiea.Controllers
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
        public async Task<ActionResult> Index(string seoLink, int page = 1, int pageSize = 6)
        {
            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            var httpClientService = new HttpClientService();
            pageSize = seoLink == "tin-tuc" || seoLink.Contains("su-kien") ? 12 : 6;
            var listNews = await httpClientService.GetAsync<SearchResult<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/category/{apiService.TenantId}/{seoLink}/{page}/{pageSize}");

            ViewBag.ListNews = listNews?.Items;
            ViewBag.TotalRows = listNews?.TotalRows;
            ViewBag.SeoLink = seoLink;

            var categoryInfo = await httpClientService.GetAsync<CategoryTranslationViewModel>($"{requestUrl.ApiGatewayUrl}/api/v1/website/categories/category/{apiService.TenantId}/{seoLink}");
            ViewBag.CategoryInfo = categoryInfo;

            var categoryProductRelations = await httpClientService.GetAsync<ActionResultResponse<CategoryTranslationViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/categories/category-relations/{apiService.TenantId}/{seoLink}");
            ViewBag.CategoryProductRelations = categoryProductRelations?.Data;

            if (categoryProductRelations != null && categoryProductRelations?.Data != null)
            {
                var listProducts = await httpClientService.GetAsync<SearchResult<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/category/{apiService.TenantId}/{categoryProductRelations?.Data?.SeoLink}/1/4");
                ViewBag.ListProduct = listProducts?.Items;
            }

            var listNewsHot = await httpClientService.GetAsync<List<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/hot/{apiService.TenantId}/4");
            ViewBag.ListNewsHot = listNewsHot;

            ViewBag.Page = page;

            return View();
        }

        [Route("{seoLink}.html")]
        public async Task<ActionResult> Detail(string seoLink)
        {
            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            var httpClientService = new HttpClientService();

            var newsDetail = await httpClientService.GetAsync<NewsDetailViewModel>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/client/{apiService.TenantId}/{seoLink}");

            var listNewsRelated = await httpClientService.GetAsync<List<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/related/{apiService.TenantId}/{seoLink}/4");
            ViewBag.listNewRelated = listNewsRelated;

            var listProducts = await httpClientService.GetAsync<SearchResult<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/category/{apiService.TenantId}/san-pham/1/4");

            ViewBag.ListProduct = listProducts?.Items;

            return View(newsDetail);
        }
    }
}
