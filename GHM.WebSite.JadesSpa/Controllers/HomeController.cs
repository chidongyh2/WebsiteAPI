using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Services;
using Microsoft.AspNetCore.Mvc;
using GHM.Website.JadesSpa.Models;
using Microsoft.Extensions.Configuration;
using GHM.Website.JadesSpa.ViewModels;
using GHM.Infrastructure.ViewModels;
using GHM.Infrastructure.Models;
using Microsoft.Extensions.Caching.Memory;
using GHM.Website.JadesSpa.Constants;
using System;
using System.Xml.Linq;
using System.Linq;
using System.Globalization;
using System.Text;
using GHM.Website.JadesSpa.Utils;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Http;
using GHM.Infrastructure.Constants;

namespace GHM.Website.JadesSpa.Controllers
{
    public class HomeController : BaseController
    {
        private readonly IConfiguration _configuration;
        private readonly IMemoryCache _cache;
        public HomeController(IConfiguration configuration, IMemoryCache cache) : base(configuration, cache)
        {
            _configuration = configuration;
            _cache = cache;
        }

        public async Task<ActionResult> Index()
        {
            var absoluteUri = $"{Request.Host}{Request.Path}";
            //if (absoluteUri.Contains("pmuasia.amiea.vn"))
            //{
            //    return Redirect("/dang-ky-su-kien");
            //}

            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            var httpClientService = new HttpClientService();
            ViewBag.ListVideoHomePage = await httpClientService.GetAsync<List<VideoViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/videos/home-page/{apiService.TenantId}/20/{CultureInfo.CurrentCulture.Name}");

            var listNews = await httpClientService.GetAsync<List<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/home-page/{apiService.TenantId}/5/{CultureInfo.CurrentCulture.Name}");
            ViewBag.ListNews = listNews;

            //var listMenuContact = await httpClientService.GetAsync<List<MenuItemViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/menus/position/{(int)Position.Middle}/items/menu/{apiService.TenantId}/{CultureInfo.CurrentCulture.Name}");
            //ViewBag.MenuContact = listMenuContact;

            var listResponseCustomer = await httpClientService.GetAsync<SearchResult<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/getNewsByCategory/{apiService.TenantId}/y-kien-khach-hang/1/20/{CultureInfo.CurrentCulture.Name}");
            ViewBag.ListResponseCustomer = listResponseCustomer?.Items;

            var listServices = await httpClientService.GetAsync<SearchResult<CategorySearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/categories/category-home-page/{apiService.TenantId}/{CultureInfo.CurrentCulture.Name}");
            ViewBag.ListServices = listServices?.Items;

            //var middleMenu = await httpClientService.GetAsync<MenuDetailViewModel>($"{requestUrl.ApiGatewayUrl}/api/v1/website/menus/get-all-menu-position/{(int)Position.Middle}/{apiService.TenantId}/{CultureInfo.CurrentCulture.Name}");
            //ViewBag.MiddleMenu = middleMenu;
            var categoryMiddle = await httpClientService.GetAsync<ActionResultResponse<CategoryWidthNewsViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/get-news-width-parent-category/{apiService.TenantId}/tai-sao-lua-chon-jade-spa/5/{CultureInfo.CurrentCulture.Name}");
            ViewBag.CategoryMiddle = categoryMiddle?.Data;
            //if (_cache.TryGetValue(CacheParam.Banner, out BannerViewModel banners))
            //{
            //    ViewBag.MainBanner = banners;
            //}
            //else
            //{
            var listBannerInHome = await httpClientService.GetAsync<ActionResultResponse<BannerViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/banners/{apiService.TenantId}/position/{(int)Position.Top}");
            _cache.Set(CacheParam.Banner, listBannerInHome?.Data, TimeSpan.FromHours(1));

            ViewBag.MainBanner = listBannerInHome?.Data;
            //}
            return View();
        }
        public async Task<ActionResult> Coordinator(string segment, int page = 1, int pageSize = 12)
        {
            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            var httpClientService = new HttpClientService();
            ViewBag.Page = page;
            ViewBag.PageSize = pageSize;
            var menuInfo = await httpClientService.PostAsync<MenuItemViewModel>($"{requestUrl.ApiGatewayUrl}/api/v1/website/menus/get-by-seoLink",
                new Dictionary<string, string> {
                    {"TenantId", apiService.TenantId },
                    {"seoLink", segment },
                    {"languageId", CultureInfo.CurrentCulture.Name }
                });
            if (menuInfo == null)
            {
                string[] segmentArray = segment.Split('.');
                bool isNews = segmentArray[1].ToLower().Equals("html");
                bool isProduct = segmentArray[1].ToLower().Equals("htm");
                if (isNews)
                {
                    var newInfo = await httpClientService.PostAsync<NewsDetailViewModel>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/get-detail-frombody",
                  new Dictionary<string, string> {
                        {"TenantId", apiService.TenantId },
                        {"seoLink", segmentArray[0] },
                        {"languageId", CultureInfo.CurrentCulture.Name }
                  });

                    if (newInfo != null)
                    {
                        var newsRelated = await httpClientService.GetAsync<List<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/getNewsRelatedById/{apiService.TenantId}/{newInfo.Id}/{CultureInfo.CurrentCulture.Name}/1/4");
                        ViewBag.NewsRelated = newsRelated;
                        return View("../News/Detail", newInfo);
                    }
                    else
                    {
                        return View("../NotFound/Index");
                    }
                } else
                {
                    return View("../NotFound/Index");
                }
            }
            else
            {
                if (menuInfo.SubjectType == SubjectType.NewsCategory)
                {
                    var categoryWithNews = await httpClientService.GetAsync<ActionResultResponse<CategoryWidthNewsViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/getNewsByCategoryById/{apiService.TenantId}/{menuInfo.SubjectId}/{page}/{pageSize}/{CultureInfo.CurrentCulture.Name}");
                    var listNewsRelated = await httpClientService.GetAsync<List<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/related-by-category/{apiService.TenantId}/{categoryWithNews.Data.SeoLink}/5/{CultureInfo.CurrentCulture.Name}");
                    var listNewsHot = await httpClientService.GetAsync<List<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/newest/{apiService.TenantId}/5/{CultureInfo.CurrentCulture.Name}");
                    ViewBag.ListNewsHot = listNewsHot == null ? null : listNewsHot;
                    ViewBag.CategoryId = categoryWithNews.Data.CategoryId;
                    return View("../News/CategoryNews", categoryWithNews.Data);
                }
                else if (menuInfo.SubjectType == SubjectType.News)
                {
                    var newsDetail = await httpClientService.GetAsync<NewsDetailViewModel>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/detail/{apiService.TenantId}/{menuInfo.SubjectId}/{CultureInfo.CurrentCulture.Name}");
                    if (newsDetail == null)
                    {
                        return View("../NotFound/Index");
                    }
                    var newsRelated = await httpClientService.GetAsync<List<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/getNewsRelatedById/{apiService.TenantId}/{newsDetail.Id}/{CultureInfo.CurrentCulture.Name}/1/4");
                    ViewBag.NewsRelated = newsRelated;
                    ViewBag.NewsDetail = newsDetail;
                    //var listNewsRelated = await httpClientService.GetAsync<List<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/getNewsRelatedById/{apiService.TenantId}/{menuInfo.SubjectId}/{CultureInfo.CurrentCulture.Name}/20");
                    //ViewBag.ListNewsRelated = listNewsRelated;
                    return View("../News/Detail", newsDetail);
                }
                else
                {
                    return View("../NotFound/Index");
                }
            }


        }
        public async Task<IActionResult> About()
        {
            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            ViewData["Message"] = "Your application description page.";
            var result = await new HttpClientService()
                .GetAsync<List<News>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/home-page/{apiService.TenantId}/10");
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

            var test = Response.Cookies.ToString();
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
