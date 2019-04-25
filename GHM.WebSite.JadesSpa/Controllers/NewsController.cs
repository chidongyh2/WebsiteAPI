﻿using System;
using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Services;
using GHM.Infrastructure.ViewModels;
using GHM.Website.JadesSpa.Models;
using GHM.Website.JadesSpa.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;

namespace GHM.Website.JadesSpa.Controllers
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
        [Route("view-more-news"), AcceptVerbs("POST")]
        public async Task<IActionResult> GetNewsByCategory(string categoryId, int page = 1, int pageSize = 6)
        {
            if(page == 1)
            {
                pageSize = 5;
            }
            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            var httpService = new HttpClientService();
            var listNews = await httpService.GetAsync<ActionResultResponse<CategoryWidthNewsViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/getNewsByCategoryById/{apiService.TenantId}/{categoryId}/{page}/{pageSize}/{CultureInfo.CurrentCulture.Name}");
            var item = listNews?.Data;

            return Json(listNews.Data.ListNews);
        }

        //[Route("tin-tuc")]
        //public async Task<ActionResult> Index(int page = 1, int pageSize = 12)
        //{
        //    var requestUrl = _configuration.GetApiUrl();
        //    var apiService = _configuration.GetApiServiceInfo();
        //    var httpClientService = new HttpClientService();
        //    var categoryWithNews = await httpClientService.GetAsync<ActionResultResponse<CategoryWidthNewsViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/getNewsByCategoryById/{apiService.TenantId}/{0}/ {page}/{pageSize}/{CultureInfo.CurrentCulture.Name}");
        //    // var listNewsRelated = await httpClientService.GetAsync<List<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/related-by-category/{apiService.TenantId}/{categoryWithNews.Data.SeoLink}/5/{CultureInfo.CurrentCulture.Name}");
        //    var listNewsHot = await httpClientService.GetAsync<List<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/newest/{apiService.TenantId}/5/{CultureInfo.CurrentCulture.Name}");
        //    ViewBag.ListNewsHot = listNewsHot;
        //    return View("../News/CategoryNews", categoryWithNews.Data);
        //}

        //[Route("search/{*seoLink}")]
        //public async Task<ActionResult> CategoryNews(string seoLink, int page = 1, int pageSize = 12)
        //{
        //    var requestUrl = _configuration.GetApiUrl();
        //    var apiService = _configuration.GetApiServiceInfo();
        //    var httpClientService = new HttpClientService();

        //   var menuInfo = await httpClientService.GetAsync<MenuItemViewModel>($"{requestUrl.ApiGatewayUrl}/api/v1/website/menu/get-by-seoLink/{apiService.TenantId}/{seoLink}/{CultureInfo.CurrentCulture.Name}");

        //   if(menuInfo == null)
        //    {
        //        return Redirect("../Home/Index");
        //    }
        //    else
        //    {
        //        if(menuInfo.SubjectType == SubjectType.NewsCategory)
        //        {
        //            var listNews = await httpClientService.GetAsync<SearchResult<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/getNewsByCategoryById/{apiService.TenantId}/{menuInfo.SubjectId}/{page}/{pageSize}/{CultureInfo.CurrentCulture.Name}");
        //            ViewBag.ListNews = listNews?.Items;
        //            ViewBag.TotalRows = listNews?.TotalRows;
        //            return View("../News/CategoryNews");
        //        } else if(menuInfo.SubjectType == SubjectType.News)
        //        {
        //            var newsDetail = await httpClientService.GetAsync<SearchResult<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/detail/{apiService.TenantId}/{menuInfo.SubjectId}/{page}/{pageSize}/{CultureInfo.CurrentCulture.Name}");
        //            ViewBag.NewsDetail = newsDetail;
        //            return View("../News/Detail");
        //        }
        //    }

            //var categoryInfo = await httpClientService.GetAsync<CategoryTranslationViewModel>($"{requestUrl.ApiGatewayUrl}/api/v1/website/categories/category/{apiService.TenantId}/{seoLink}/{CultureInfo.CurrentCulture.Name}");
            //ViewBag.CategoryInfo = categoryInfo;

            //if (categoryInfo?.ChildCount > 0)
            //{
            //    var listCategoryWidthNews = await httpClientService.GetAsync<SearchResult<CategoryWidthNewsViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/get-news-width-parent-category/{apiService.TenantId}/{seoLink}/5/{CultureInfo.CurrentCulture.Name}");
            //    ViewBag.ListCategoryWidthNews = listCategoryWidthNews?.Items;
            //}
            //else
            //{
            //var listNews = await httpClientService.GetAsync<SearchResult<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/category/{apiService.TenantId}/{seoLink}/{page}/{pageSize}/{CultureInfo.CurrentCulture.Name}");
            //    ViewBag.ListNews = listNews?.Items;
            //    ViewBag.TotalRows = listNews?.TotalRows;
            //}

            //ViewBag.SeoLink = seoLink;
            //ViewBag.Page = page;

            //var breadcrumbs = new List<Breadcrumb>
            //{
            //     new Breadcrumb()
            //    {
            //        Name = categoryInfo.Name,
            //        IsCurrent = true,
            //    },
            //};

            //ViewBag.Breadcrumb = breadcrumbs;

            //return View("../Home/Index");
        //}

        //[Route("{seoLink}.html")]
        //public async Task<ActionResult> Detail(string seoLink)
        //{
        //    var requestUrl = _configuration.GetApiUrl();
        //    var apiService = _configuration.GetApiServiceInfo();
        //    var httpClientService = new HttpClientService();

        //    var newsDetail = await httpClientService.GetAsync<NewsDetailViewModel>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/client/{apiService.TenantId}/{seoLink}/{CultureInfo.CurrentCulture.Name}");

        //    var listNewsRelated = await httpClientService.GetAsync<List<NewsSearchViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/related/{apiService.TenantId}/{seoLink}/20");
        //    ViewBag.listNewRelated = listNewsRelated;

        //    var listEvent = await httpClientService.GetAsync<SearchResult<EventViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/events/events/all/{apiService.TenantId}/1/10/{CultureInfo.CurrentCulture.Name}");
        //    ViewBag.ListEventSideBar = listEvent?.Items;

        //    var breadcrumbs = new List<Breadcrumb>
        //    {
        //        new Breadcrumb()
        //        {
        //            Name = Resources.Resource.News,
        //            IsCurrent = false,
        //            NamePath = "tin-tuc",
        //            Url = "tin-tuc",
        //        }
        //    };

        //    ViewBag.Breadcrumb = breadcrumbs;

        //    return View(newsDetail);
        //}
    }
}
