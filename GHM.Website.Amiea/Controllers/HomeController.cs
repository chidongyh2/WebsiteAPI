using System.Collections.Generic;
using System.Diagnostics;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Services;
using Microsoft.AspNetCore.Mvc;
using GHM.Website.Amiea.Models;
using Microsoft.Extensions.Configuration;
using GHM.Website.Amiea.ViewModels;
using GHM.Infrastructure.ViewModels;
using GHM.Infrastructure.Models;
using Microsoft.Extensions.Caching.Memory;
using GHM.Website.Amiea.Constants;
using System;
using System.Xml.Linq;
using System.Linq;
using System.Globalization;
using System.Text;
using GHM.Website.Amiea.Utils;

namespace GHM.Website.Amiea.Controllers
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
            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            var httpClientService = new HttpClientService();
            ViewBag.ListVideoHomePage = await httpClientService.GetAsync<List<VideoViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/videos/home-page/{apiService.TenantId}/6");

            var listPhoto = await httpClientService.GetAsync<SearchResult<AlbumItemViewModel>>
            ($"{requestUrl.ApiGatewayUrl}/api/v1/website/albums/search/{apiService.TenantId}/thiet-bi-pmu-amiea/1/6");
            ViewBag.ListPhoto = listPhoto?.Items;

            ViewBag.ListNewsHot = await httpClientService.GetAsync<List<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/hot/{apiService.TenantId}/4");

            var listProducts = await httpClientService.GetAsync<SearchResult<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/category/{apiService.TenantId}/san-pham/1/4");

            ViewBag.ListProduct = listProducts?.Items;

            if (_cache.TryGetValue(CacheParam.Banner, out BannerViewModel banners))
            {
                ViewBag.MainBanner = banners;
            }
            else
            {
                var listBannerInHome = await httpClientService.GetAsync<ActionResultResponse<BannerViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/banners/{apiService.TenantId}/position/{(int)Position.Top}");
                _cache.Set(CacheParam.Banner, listBannerInHome?.Data, TimeSpan.FromHours(1));

                ViewBag.MainBanner = listBannerInHome?.Data;
            }

            return View();
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
        
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
        
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
