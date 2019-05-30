using System.Collections.Generic;
using System.Diagnostics;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Services;
using Microsoft.AspNetCore.Mvc;
using GHM.Website.TTMedic.Models;
using Microsoft.Extensions.Configuration;
using GHM.Website.TTMedic.ViewModels;
using GHM.Infrastructure.ViewModels;
using GHM.Infrastructure.Models;
using Microsoft.Extensions.Caching.Memory;
using GHM.Website.TTMedic.Constants;
using System;
using System.Xml.Linq;
using System.Linq;
using System.Globalization;
using System.Text;
using GHM.Website.TTMedic.Utils;
using System.Text.RegularExpressions;

namespace GHM.Website.TTMedic.Controllers
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
            var tenantId = _configuration.GetSection("TenantId").Value;
            var apiService = _configuration.GetApiServiceInfo();
            var httpClientService = new HttpClientService();

            var listVaue = await httpClientService.GetAsync<List<ValueViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/core-values/{apiService.TenantId}/{CultureInfo.CurrentCulture.Name}");
            ViewBag.ListValue = listVaue;

            var resultListPhoto = await httpClientService.GetAsync<SearchResult<AlbumWithItemViewModel>>
                ($"{requestUrl.ApiGatewayUrl}/api/v1/website/albums/{apiService.TenantId}/{AlbumType.Photo}");
            ViewBag.AlbumViewModel = resultListPhoto?.Items;

            var listPhoto = new List<AlbumItemViewModel>();
            if (resultListPhoto?.Items != null)
            {
                foreach (var albums in resultListPhoto?.Items)
                {
                    if (albums != null && albums.AlbumItems != null && albums.AlbumItems.Count > 0)
                    {
                        foreach (var photo in albums.AlbumItems)
                        {
                            listPhoto.Add(photo);
                        }
                    }
                }
            }
            ViewBag.ListPhoto = listPhoto;

            var listAlbum = await httpClientService.GetAsync<SearchResult<AlbumViewModel>>
               ($"{requestUrl.ApiGatewayUrl}/api/v1/website/albums/{apiService.TenantId}/groups/{(int)AlbumType.Photo}");
            ViewBag.ListAlbum = listAlbum?.Items;
            //ViewBag.ListNewsHot = await httpClientService.GetAsync<List<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/hot/{apiService.TenantId}/4");

            var newsFounder = await httpClientService.GetAsync<NewsDetailViewModel>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/client/{apiService.TenantId}/nha-sang-lap/{CultureInfo.CurrentCulture.Name}");
            ViewBag.NewsFounder = newsFounder;

            var newsAboutUS = await httpClientService.GetAsync<NewsDetailViewModel>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/client/{apiService.TenantId}/ve-chung-toi/{CultureInfo.CurrentCulture.Name}");
            ViewBag.NewsAboutUS = newsAboutUS;

            var newsAtive = await httpClientService.GetAsync<NewsDetailViewModel>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/client/{apiService.TenantId}/giai-phap-quan-ly-tong-the-cho-doanh-nghiep/{CultureInfo.CurrentCulture.Name}");
            ViewBag.NewsAtive = newsAtive;

            var test = await httpClientService.GetAsync<NewsDetailViewModel>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/client/{apiService.TenantId}/he-thong-quan-ly/{CultureInfo.CurrentCulture.Name}");
            ViewBag.Test = test;

            var Activity = await httpClientService.GetAsync<NewsDetailViewModel>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/client/{apiService.TenantId}/tuyen-ngon-hoat-dong/{CultureInfo.CurrentCulture.Name}");
            ViewBag.activity = Activity;

            return View();
        }

        [Route("gui-lien-he"), AcceptVerbs("POST")]
        public async Task<JsonResult> Send(string fullName, string phoneNumber, string email, string title, string content)
        {
            if (string.IsNullOrWhiteSpace(fullName))
            {
                return Json(-1);
            }

            if (string.IsNullOrWhiteSpace(phoneNumber))
            {
                return Json(-2);
            }

            var emailPattern = "^([0-9a-zA-Z]([-\\.\\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\\w]*[0-9a-zA-Z]\\.)+[a-zA-Z]{2,9})$";
            if (!string.IsNullOrWhiteSpace(email) && !Regex.IsMatch(email, emailPattern))
            {
                return Json(-3);
            }

            //if (string.IsNullOrWhiteSpace(title))
            //{
            //    return Json(-4);
            //}

            if (string.IsNullOrWhiteSpace(content))
            {
                return Json(-5);
            }
            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            var feedbackMeta = new FeedbackMeta
            {
                FullName = fullName,
                PhoneNumber = phoneNumber,
                Email = email,
                Title = title,
                Content = content,
            };

            var result = await new HttpClientService()
                .PostAsync<ActionResultResponse<string>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/feedbacks/{apiService.TenantId}", feedbackMeta);

            return Json(result);

        }
        //public async Task<IActionResult> About()
        //{
        //    var requestUrl = _configuration.GetApiUrl();
        //    var apiService = _configuration.GetApiServiceInfo();
        //    ViewData["Message"] = "Your application description page.";
        //    var result = await new HttpClientService()
        //        .GetAsync<List<News>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/home-page/{apiService.TenantId}/10");
        //    return View();
        //}

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

        //[Route("sitemap.xml")]
        //[ResponseCache(Duration = 86400, Location = ResponseCacheLocation.Any, NoStore = false)]
        //public async Task<ContentResult> SitemapXml()
        //{
        //    IReadOnlyCollection<SitemapNode> sitemapNodes = await GetSitemapNodes(Url);
        //    string xml = GetSitemapDocument(sitemapNodes);

        //    return Content(xml, "text/xml", Encoding.UTF8);
        //}

        //    private async Task<IReadOnlyCollection<SitemapNode>> GetSitemapNodes(IUrlHelper urlHelper)
        //    {
        //        List<SitemapNode> nodes = new List<SitemapNode>
        //        {
        //            new SitemapNode(Common.AbsoluteAction(urlHelper, "Index", "Home"), 1),
        //            new SitemapNode(Common.AbsoluteAction(urlHelper, "Index", "Contact"), 1),
        //            new SitemapNode(Common.AbsoluteAction(urlHelper, "Photo", "Album"), 1),
        //            new SitemapNode(Common.AbsoluteAction(urlHelper, "Video", "Album"), 1),
        //        };

        //        var requestUrl = _configuration.GetApiUrl();
        //        var apiService = _configuration.GetApiServiceInfo();

        //        var listNews = await new HttpClientService()
        //          .GetAsync<SearchResult<string>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/sitemap/{apiService.TenantId}");

        //        var listNewsSeoLink = listNews?.Items;
        //        if (listNewsSeoLink != null && listNewsSeoLink.Any())
        //        {
        //            foreach (var newSeoLink in listNewsSeoLink)
        //            {
        //                nodes.Add(new SitemapNode(Common.AbsoluteAction(urlHelper, "Detail", "News", new { seoLink = newSeoLink }), 0.8));
        //            }
        //        }

        //        var listCategory = await new HttpClientService()
        //         .GetAsync<SearchResult<string>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/categories/sitemap/{apiService.TenantId}");

        //        var listCategorySeoLink = listCategory?.Items;
        //        if (listCategorySeoLink != null && listCategorySeoLink.Any())
        //        {
        //            foreach (var categorySeoLink in listCategorySeoLink)
        //            {
        //                nodes.Add(new SitemapNode(Common.AbsoluteAction(urlHelper, "Index", "News", new { seoLink = categorySeoLink }), 0.8));
        //            }
        //        }

        //        return nodes;
        //    }      
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
