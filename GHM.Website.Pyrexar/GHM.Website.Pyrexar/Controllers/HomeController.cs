using Microsoft.AspNetCore.Mvc;
using GHM.Website.Pyrexar.Constants;
using System;
using GHM.Website.Pyrexar.ViewModels;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Caching.Memory;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Services;
using System.Threading.Tasks;
using GHM.Infrastructure.ViewModels;
using GHM.Infrastructure.Models;
using GHM.Website.Pyrexar.Models;
using System.Globalization;
using System.Xml.Linq;
using System.Collections.Generic;
using GHM.Website.Pyrexar.Utils;
using System.Linq;
using System.Text;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;

namespace GHM.Website.Pyrexar.Controllers
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

            var researchSeoLink = CultureInfo.CurrentCulture.Name == "vi-VN" ? "nghien-cuu" : "research";
            var listResearch = await httpClientService.GetAsync<SearchResult<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/getNewsByCategory/{apiService.TenantId}/{researchSeoLink}/1/3/{CultureInfo.CurrentCulture.Name}");
            ViewBag.ListResearch = listResearch?.Items;

            var productSeoLink = CultureInfo.CurrentCulture.Name == "vi-VN" ? "san-pham" : "product";
            var listProducts = await httpClientService.GetAsync<SearchResult<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/getNewsByCategory/{apiService.TenantId}/{productSeoLink}/1/6/{CultureInfo.CurrentCulture.Name}");
            ViewBag.ListProduct = listProducts?.Items;

            var homeSeoLink = CultureInfo.CurrentCulture.Name == "vi-VN" ? "trang-chu" : "home";
            var listNewsInHome = await httpClientService.GetAsync<SearchResult<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/getNewsByCategory/{apiService.TenantId}/{homeSeoLink}/1/6/{CultureInfo.CurrentCulture.Name}");
            ViewBag.ListNewsInHome = listNewsInHome?.Items;

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

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View();
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
