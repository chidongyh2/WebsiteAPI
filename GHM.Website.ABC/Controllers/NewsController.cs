using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Services;
using GHM.Infrastructure.ViewModels;
using GHM.Website.ABC.Models;
using GHM.Website.ABC.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;

namespace GHM.Website.ABC.Controllers
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

        //[Route("tin-tuc")]
        //public async Task<ActionResult> Index()
        //{
        //    var requestUrl = _configuration.GetApiUrl();
        //    var apiService = _configuration.GetApiServiceInfo();
        //    var httpClientService = new HttpClientService();
        //    var listNews = await httpClientService.GetAsync<SearchResult<CategoryWidthNewsViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/category-with-news/{apiService.TenantId}/5/{CultureInfo.CurrentCulture.Name}");
        //    ViewBag.ListCategoryWidthNews = listNews.Items;

        //    var breadcrumbs = new List<Breadcrumb>
        //    {
        //        new Breadcrumb()
        //        {
        //            Name = Resources.Resource.News,
        //            IsCurrent = true,
        //        }
        //    };

        //    ViewBag.Breadcrumb = breadcrumbs;
        //    return View();
        //}

        [Route("{seoLink}/{page?}/{pageSize?}")]
        public async Task<ActionResult> CategoryNews(string seoLink, int page = 1, int pageSize = 12)
        {
            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            var httpClientService = new HttpClientService();

            var categoryInfo = await httpClientService.GetAsync<CategoryTranslationViewModel>($"{requestUrl.ApiGatewayUrl}/api/v1/website/categories/category/{apiService.TenantId}/{seoLink}/{CultureInfo.CurrentCulture.Name}");
            ViewBag.CategoryInfo = categoryInfo;

            if (categoryInfo?.ChildCount > 0)
            {
                var listCategoryWidthNews = await httpClientService.GetAsync<SearchResult<CategoryWidthNewsViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/get-list-category-width-news/{apiService.TenantId}/{seoLink}/5/{CultureInfo.CurrentCulture.Name}");
                ViewBag.ListCategoryWidthNews = listCategoryWidthNews?.Items;
            }
            else
            {
                var listNews = await httpClientService.GetAsync<SearchResult<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/getNewsByCategory/{apiService.TenantId}/{seoLink}/{page}/{pageSize}/{CultureInfo.CurrentCulture.Name}");
                ViewBag.ListNews = listNews?.Items;
                ViewBag.TotalRows = listNews?.TotalRows;
            }

            ViewBag.SeoLink = seoLink;
            ViewBag.Page = page;

            var breadcrumbs = new List<Breadcrumb>
            {
                 new Breadcrumb()
                {
                    Name = categoryInfo.Name,
                    IsCurrent = true,
                },
            };

            ViewBag.Breadcrumb = breadcrumbs;

            return View();
        }

        [Route("{seoLink}.html")]
        public async Task<ActionResult> Detail(string seoLink)
        {
            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            var httpClientService = new HttpClientService();

            var newsDetail = await httpClientService.GetAsync<NewsDetailViewModel>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/client/{apiService.TenantId}/{seoLink}/{CultureInfo.CurrentCulture.Name}");

            var listNewsRelated = await httpClientService.GetAsync<List<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/related/{apiService.TenantId}/{seoLink}/20");
            ViewBag.listNewRelated = listNewsRelated;

            var listEvent = await httpClientService.GetAsync<SearchResult<EventViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/events/events/all/{apiService.TenantId}/1/10/{CultureInfo.CurrentCulture.Name}");
            ViewBag.ListEventSideBar = listEvent?.Items;

            var breadcrumbs = new List<Breadcrumb>
            {
                new Breadcrumb()
                {
                    Name = Resources.Resource.News,
                    IsCurrent = false,
                    NamePath = "tin-tuc",
                    Url = "tin-tuc",
                }
            };

            ViewBag.Breadcrumb = breadcrumbs;

            return View(newsDetail);
        }
    }
}
