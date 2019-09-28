using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Services;
using Microsoft.AspNetCore.Mvc;
using GHM.Website.Nelly.Models;
using Microsoft.Extensions.Configuration;
using GHM.Website.Nelly.ViewModels;
using GHM.Infrastructure.ViewModels;
using Microsoft.Extensions.Caching.Memory;
using GHM.Website.Nelly.Constants;
using System;
using System.Xml.Linq;
using System.Linq;
using System.Globalization;
using System.Text;
using GHM.Website.Nelly.Utils;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Http;
using GHM.Infrastructure.Constants;
using DeviceDetectorNET;
using GHM.WebsiteClient.Api.Domain.IServices;
using Newtonsoft.Json;
using GHM.WebSite.Nelly.Helper;

namespace GHM.Website.Nelly.Controllers
{
    public class HomeController : BaseController
    {
        private readonly IConfiguration _configuration;
        private readonly IMemoryCache _cache;
        private readonly INewsService _newsService;
        private readonly IBannerService _bannerService;
        private readonly IVideoService _videoService;
        private readonly IProductService _productService;
        private readonly IMenuService _menuService;
        private readonly ICoreValueService _coreService;

        public HomeController(IConfiguration configuration, IMemoryCache cache,
            INewsService newsService, IVideoService videoService, IBannerService bannerService,
            IBrandService brandService, IBranchContactService branchContactService,
            IMenuService menuService, ISettingService settingService,
            ISocialNetworkService socialNetworkService, ILanguageService languageService,
            IProductService productService, ICoreValueService coreValueService)
            : base(configuration, cache, brandService, branchContactService, menuService, settingService, socialNetworkService, languageService)
        {
            _configuration = configuration;
            _newsService = newsService;
            _cache = cache;
            _videoService = videoService;
            _menuService = menuService;
            _bannerService = bannerService;
            _productService = productService;
            _coreService = coreValueService;
        }

        public async Task<ActionResult> Index()
        {
            var apiService = _configuration.GetApiServiceInfo();

            var listProductCategoryHomePage = await _productService.ProductCategorySearch(apiService.TenantId, CultureInfo.CurrentCulture.Name, string.Empty, null, true, null, 10);
            var listProductCategoryHomePageData = JsonHelper.GetObjectFromObject<List<ProductCategorySearchViewModel>>(listProductCategoryHomePage);
            ViewBag.ListProductCategoryHomePage = listProductCategoryHomePageData;

            var listProductCategoryHot = await _productService.ProductCategorySearch(apiService.TenantId, CultureInfo.CurrentCulture.Name, string.Empty, true, null, null, int.MaxValue);
            var listProductCategoryHotData = JsonHelper.GetObjectFromObject<List<ProductCategorySearchViewModel>>(listProductCategoryHot);
            ViewBag.ListProductCategoryHot = listProductCategoryHotData;
            ViewBag.ProductCategoryId = listProductCategoryHot.FirstOrDefault()?.Id;

            var products = await _productService.ProductSearchByCategory(apiService.TenantId, CultureInfo.CurrentCulture.Name, listProductCategoryHot.FirstOrDefault().SeoLink, null, null, 1, 20);
            ViewBag.ListProduct = products?.Items;

            var listProductCategorySolution = await _productService.ProductCategorySearch(apiService.TenantId, CultureInfo.CurrentCulture.Name, string.Empty, null, null, true, 20);
            var listProductCategorySolutionData = JsonHelper.GetObjectFromObject<List<ProductCategorySearchViewModel>>(listProductCategorySolution);
            ViewBag.ListProductCategorySolution = listProductCategorySolutionData;

            var listVideoHomePage = await _videoService.ListTopVideoAsync(apiService.TenantId, CultureInfo.CurrentCulture.Name, 20);
            var listVideoHomePageData = JsonHelper.GetObjectFromObject<List<VideoViewModel>>(listVideoHomePage);
            ViewBag.ListVideoHomePage = listVideoHomePageData;

            var listCategoryWidthNews = await _newsService.GetListCategoryWidthNewsAsync(apiService.TenantId, CultureInfo.CurrentCulture.Name, 2, true, 10);
            var listNewsData = JsonHelper.GetObjectFromObject<List<CategoryWidthNewsViewModel>>(listCategoryWidthNews?.Items);

            if (listNewsData != null && listNewsData.Any())
            {
                var newsHostHomePage = listNewsData.FirstOrDefault();
                ViewBag.NewsHostHomePage = newsHostHomePage;
                ViewBag.NewHomePage = listNewsData.Where(x => x.CategoryId != newsHostHomePage?.CategoryId).FirstOrDefault();
            }

            #region cache home
            //if (_cache.TryGetValue($"{CacheParam.MenuMiddle}{CultureInfo.CurrentCulture.Name}", out MenuDetailViewModel CategoryMiddleCache))
            //{
            //    ViewBag.MenuContact = CategoryMiddleCache;
            //}
            //else
            //{
            var menuMiddle = await _menuService.GetAllActivatedMenuByPositionAsync(apiService.TenantId, CultureInfo.CurrentCulture.Name, WebsiteClient.Api.Domain.Constants.Position.Middle);
            var menuMiddleData = JsonHelper.GetObjectFromObject<MenuDetailViewModel>(menuMiddle);
            _cache.Set($"{CacheParam.MenuMiddle}{CultureInfo.CurrentCulture.Name}", menuMiddleData, TimeSpan.FromHours(1));
            ViewBag.MenuContact = menuMiddleData;
            //}

            //if (_cache.TryGetValue(CacheParam.Banner, out BannerViewModel banners))
            //{
            //    ViewBag.MainBanner = banners;
            //}
            //else
            //{
            var listBannerInHomeData = await _bannerService.GetBannerItemByPositionAsync(apiService.TenantId, (int)Position.Top);
            var listBannerInHome = JsonHelper.GetObjectFromObject<BannerViewModel>(listBannerInHomeData.Data);
            _cache.Set(CacheParam.Banner, listBannerInHome, TimeSpan.FromHours(1));

            ViewBag.MainBanner = listBannerInHome;
            //}
            #endregion
            return View();
        }

        public async Task<ActionResult> Coordinator(string segment, int page = 1, int pageSize = 12)
        {
            var apiService = _configuration.GetApiServiceInfo();
            ViewBag.Page = page;
            ViewBag.PageSize = pageSize;
            var menuInfo = await _menuService.GetDetailBySeoLinkAsync(apiService.TenantId, segment, CultureInfo.CurrentCulture.Name);

            if (menuInfo == null)
            {
                string[] segmentArray = segment.Split('.');
                bool isNews = segmentArray[1].ToLower().Equals("html");
                bool isProduct = segmentArray[1].ToLower().Equals("htm");
                if (isNews)
                {
                    var newInfo = await _newsService.GetClientAsync(apiService.TenantId, CultureInfo.CurrentCulture.Name, segmentArray[0]);

                    if (newInfo != null)
                    {
                        await _newsService.UpdateViewNewsAsync(apiService.TenantId, newInfo.Id, CultureInfo.CurrentCulture.Name);

                        var newsHost = await _newsService.GetListTopNewsHotAsync(apiService.TenantId, CultureInfo.CurrentCulture.Name, 4);
                        ViewBag.NewsHot = JsonHelper.GetObjectFromObject<List<NewsSearchViewModel>>(newsHost);

                        var newData = JsonHelper.GetObjectFromObject<NewsDetailViewModel>(newInfo);
                        return View("../News/Detail", newData);
                    }
                    else
                    {
                        return View("../NotFound/Index");
                    }
                }
                else
                {
                    return View("../NotFound/Index");
                }
            }
            else
            {
                if (menuInfo.SubjectType == (GHM.WebsiteClient.Api.Domain.Constants.SubjectType)SubjectType.NewsCategory)
                {
                    var categoryWithNews = await _newsService.GetNewsByCategoryIdAsync(apiService.TenantId, CultureInfo.CurrentCulture.Name, int.Parse(menuInfo.SubjectId), page, pageSize);
                    var categoryWithNewsData = JsonHelper.GetObjectFromObject<CategoryWidthNewsViewModel>(categoryWithNews.Data);

                    ViewBag.CategoryId = categoryWithNews.Data.CategoryId;
                    if (categoryWithNewsData != null)
                    {
                        return View("../News/CategoryNews", categoryWithNewsData);
                    }
                    else
                    {
                        return View("../NotFound/Index");
                    }
                }
                else if (menuInfo.SubjectType == (GHM.WebsiteClient.Api.Domain.Constants.SubjectType)SubjectType.News)
                {
                    var newsDetail = await _newsService.GetDetailForClientAsync(apiService.TenantId, menuInfo.SubjectId, CultureInfo.CurrentCulture.Name);
                    if (newsDetail == null)
                    {
                        return View("../NotFound/Index");
                    }
                    await _newsService.UpdateViewNewsAsync(apiService.TenantId, newsDetail.Id, CultureInfo.CurrentCulture.Name);

                    var newsHost = await _newsService.GetListTopNewsHotAsync(apiService.TenantId, CultureInfo.CurrentCulture.Name, 4);
                    var newData = JsonHelper.GetObjectFromObject<NewsDetailViewModel>(newsDetail);

                    ViewBag.NewsHot = JsonHelper.GetObjectFromObject<List<NewsSearchViewModel>>(newsHost);
                    ViewBag.NewsDetail = newData;

                    return View("../News/Detail", newData);
                }
                else
                {
                    return View("../NotFound/Index");
                }
            }
        }

        [Route("gioi-thieu")]
        public async Task<IActionResult> About()
        {
            var apiService = _configuration.GetApiServiceInfo();
            var listCoreValue = await _coreService.GetAllActivatedCoreValueAsync(apiService.TenantId, CultureInfo.CurrentCulture.Name);
            if (listCoreValue != null)
            {
                ViewBag.ListCoreValue = JsonHelper.GetObjectFromObject<List<ValueViewModel>>(listCoreValue);
            }

            //if (_cache.TryGetValue($"{CacheParam.MenuMiddle}{CultureInfo.CurrentCulture.Name}", out MenuDetailViewModel CategoryMiddleCache))
            //{
            //    ViewBag.MenuContact = CategoryMiddleCache;
            //}
            //else
            //{
            var menuMiddle = await _menuService.GetAllActivatedMenuByPositionAsync(apiService.TenantId, CultureInfo.CurrentCulture.Name, WebsiteClient.Api.Domain.Constants.Position.Middle);
            var menuMiddleData = JsonHelper.GetObjectFromObject<MenuDetailViewModel>(menuMiddle);
            _cache.Set($"{CacheParam.MenuMiddle}{CultureInfo.CurrentCulture.Name}", menuMiddleData, TimeSpan.FromHours(1));
            ViewBag.MenuContact = menuMiddleData;
            //}

            return View();
        }

        [Route("change-language/{languageId}")]
        public async Task<ActionResult> ChangeLanguage(string languageId, string url)
        {
            Response.Cookies.Append(
                CookieRequestCultureProvider.DefaultCookieName,
                CookieRequestCultureProvider.MakeCookieValue(new RequestCulture(languageId)),
                new CookieOptions { Expires = DateTimeOffset.UtcNow.AddYears(1) }
            );

            return Redirect(url);
        }

        //[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        //public IActionResult Error()
        //{
        //    return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        //}

        [Route("robots.txt")]
        [ResponseCache(Duration = 1024, Location = ResponseCacheLocation.Any, NoStore = false)]
        public ContentResult RobotsText()
        {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.AppendLine("user-agent: *");
            stringBuilder.AppendLine("disallow: /error/");
            stringBuilder.AppendLine("allow: /error/foo");
            stringBuilder.Append("sitemap: ");
            //if (Request.Url != null)
            //{
            //    stringBuilder.AppendLine(Url.RouteUrl("GetSitemapXml", null, Request.Url.Scheme)?.TrimEnd('/'));
            //}

            return Content(stringBuilder.ToString(), "text/plain", Encoding.UTF8);
        }

        [Route("sitemap.xml")]
        [ResponseCache(Duration = 86400, Location = ResponseCacheLocation.Any, NoStore = false)]
        public async Task<ContentResult> SitemapXml()
        {
            IReadOnlyCollection<SitemapNode> sitemapNodes = await GetSitemapNodes(Url);
            string xml = GetSitemapDocument(sitemapNodes);

            return Content(xml, "text/xml", Encoding.UTF8);
        }

        private async Task<IReadOnlyCollection<SitemapNode>> GetSitemapNodes(IUrlHelper urlHelper)
        {
            List<SitemapNode> nodes = new List<SitemapNode>
            {
                new SitemapNode(Common.AbsoluteAction(urlHelper, "Index", "Home"), 1),
                new SitemapNode(Common.AbsoluteAction(urlHelper, "Index", "Contact"), 1),
                new SitemapNode(Common.AbsoluteAction(urlHelper, "Photo", "Album"), 1),
                new SitemapNode(Common.AbsoluteAction(urlHelper, "Video", "Album"), 1),
            };

            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();

            var listNews = await new HttpClientService()
              .GetAsync<SearchResult<string>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/sitemap/{apiService.TenantId}");

            var listNewsSeoLink = listNews?.Items;
            if (listNewsSeoLink != null && listNewsSeoLink.Any())
            {
                foreach (var newSeoLink in listNewsSeoLink)
                {
                    nodes.Add(new SitemapNode(Common.AbsoluteAction(urlHelper, "Detail", "News", new { seoLink = newSeoLink }), 0.8));
                }
            }

            var listCategory = await new HttpClientService()
             .GetAsync<SearchResult<string>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/categories/sitemap/{apiService.TenantId}");

            var listCategorySeoLink = listCategory?.Items;
            if (listCategorySeoLink != null && listCategorySeoLink.Any())
            {
                foreach (var categorySeoLink in listCategorySeoLink)
                {
                    nodes.Add(new SitemapNode(Common.AbsoluteAction(urlHelper, "Index", "News", new { seoLink = categorySeoLink }), 0.8));
                }
            }

            return nodes;
        }

        public string GetSitemapDocument(IEnumerable<SitemapNode> sitemapNodes)
        {
            XNamespace xmlns = "http://www.sitemaps.org/schemas/sitemap/0.9";
            XElement root = new XElement(xmlns + "urlset");

            foreach (SitemapNode sitemapNode in sitemapNodes)
            {
                if (string.IsNullOrEmpty(sitemapNode.Url))
                {
                    continue;
                }

                XElement urlElement = new XElement(
                    xmlns + "url",
                    new XElement(xmlns + "loc", Uri.EscapeUriString(sitemapNode.Url)),
                    sitemapNode.LastModified == null ? null : new XElement(
                        xmlns + "lastmod",
                        sitemapNode.LastModified.Value.ToLocalTime().ToString("yyyy-MM-ddTHH:mm:sszzz")),
                    sitemapNode.Frequency == null ? null : new XElement(
                        xmlns + "changefreq",
                        sitemapNode.Frequency.Value.ToString().ToLowerInvariant()),
                    sitemapNode.Priority == null ? null : new XElement(
                        xmlns + "priority",
                        sitemapNode.Priority.Value.ToString("F1", CultureInfo.InvariantCulture)));
                root.Add(urlElement);
            }

            XDocument document = new XDocument(root);
            return document.ToString();
        }
    }
}
