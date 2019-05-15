using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Services;
using GHM.Website.ABC.Constants;
using GHM.Website.ABC.Models;
using GHM.Website.ABC.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;

namespace GHM.Website.ABC.Controllers
{
    public class BrandController : BaseController
    {
        private readonly IConfiguration _configuration;
        private readonly IMemoryCache _cache;
        public BrandController(IConfiguration configuration, IMemoryCache cache) : base(configuration, cache)
        {
            _configuration = configuration;
            _cache = cache;
        }

        [Route("thuong-hieu/nellydevuyst")]
        public async Task<IActionResult> NellyDevuyst()
        {
            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            var httpClientService = new HttpClientService();
            var breadcrumbs = new List<Breadcrumb>
            {
                 new Breadcrumb()
                {
                    Name = Resources.Resource.Brand,
                    IsCurrent = false,
                    NamePath = "thuong-hieu",
                    Url = "thuong-hieu",
                },
                new Breadcrumb()
                {
                    Name = "Nellydevuyst",
                    IsCurrent = true,
                }
            };

            var bannerId = "ffe5f2df-5863-4abb-a29e-fb722a9df0ff";
            var listBanner = await httpClientService.GetAsync<ActionResultResponse<BannerViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/banners/{apiService.TenantId}/home-page/{bannerId}");
            ViewBag.Banner = listBanner?.Data;

            ViewBag.Breadcrumb = breadcrumbs;
            return View();
        }

        [Route("thuong-hieu/amiea")]
        public async Task<IActionResult> Amiea()
        {
            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            var httpClientService = new HttpClientService();
            var breadcrumbs = new List<Breadcrumb>
            {
                 new Breadcrumb()
                {
                    Name = Resources.Resource.Brand,
                    IsCurrent = false,
                    NamePath = "thuong-hieu",
                    Url = "thuong-hieu",
                },
                new Breadcrumb()
                {
                    Name = "Amiea",
                    IsCurrent = true,
                }
            };

            var bannerId = "5160a665-1b48-4b9c-865b-be92fb4230bd";
            var listBanner = await httpClientService.GetAsync<ActionResultResponse<BannerViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/banners/{apiService.TenantId}/home-page/{bannerId}");
            ViewBag.Banner = listBanner?.Data;

            var listBannerBranch = await httpClientService.GetAsync<ActionResultResponse<BannerViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/banners/{apiService.TenantId}/position/{(int)Position.Middle}");
            ViewBag.BannerBranch = listBannerBranch?.Data;

            ViewBag.Breadcrumb = breadcrumbs;
            return View();
        }

        [Route("thuong-hieu/spa")]
        public async Task<IActionResult> Spa()
        {
            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            var httpClientService = new HttpClientService();

            var bannerId = "570c3ecd-fa7a-4305-9ee4-7166759f5f83";
            var listBanner = await httpClientService.GetAsync<ActionResultResponse<BannerViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/banners/{apiService.TenantId}/home-page/{bannerId}");
            ViewBag.Banner = listBanner?.Data;
            var breadcrumbs = new List<Breadcrumb>
            {
                 new Breadcrumb()
                {
                    Name = Resources.Resource.Brand,
                    IsCurrent = false,
                    NamePath = "thuong-hieu",
                    Url = "thuong-hieu",
                },
                new Breadcrumb()
                {
                    Name = "BCL Spa",
                    IsCurrent = true,
                }
            };

            ViewBag.Breadcrumb = breadcrumbs;
            return View();
        }

        [Route("thuong-hieu/gaya")]
        public async Task<IActionResult> Gaya()
        {
            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            var httpClientService = new HttpClientService();
            var breadcrumbs = new List<Breadcrumb>
            {
                 new Breadcrumb()
                {
                    Name = Resources.Resource.Brand,
                    IsCurrent = false,
                    NamePath = "thuong-hieu",
                    Url = "thuong-hieu",
                },
                new Breadcrumb()
                {
                    Name = "Gaya",
                    IsCurrent = true,
                }
            };

            var bannerId = "b50effaf-330c-4e37-a982-ace4ebdaaea3";
            var listBanner = await httpClientService.GetAsync<ActionResultResponse<BannerViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/banners/{apiService.TenantId}/home-page/{bannerId}");
            ViewBag.Banner = listBanner?.Data;

            ViewBag.Breadcrumb = breadcrumbs;
            return View();
        }
    }
}
