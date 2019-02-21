using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Services;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Amiea.Constants;
using GHM.Website.Amiea.Models;
using GHM.Website.Amiea.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;

namespace GHM.Website.Amiea.Controllers
{
    public class AlbumController : BaseController
    {
        private readonly IConfiguration _configuration;
        private readonly IMemoryCache _cache;

        public AlbumController(IConfiguration configuration, IMemoryCache cache) : base(configuration, cache)
        {
            _configuration = configuration;
            _cache = cache;
        }

        public IActionResult Index()
        {
            return View();
        }

        [Route("thu-vien-anh")]
        public async Task<IActionResult> Photo()
        {
            var requestUrl = _configuration.GetApiUrl();
            var tenantId = _configuration.GetSection("TenantId").Value;
            var apiService = _configuration.GetApiServiceInfo();
            var httpClientService = new HttpClientService();

            var resultListPhoto = await httpClientService.GetAsync<SearchResult<AlbumWithItemViewModel>>
                ($"{requestUrl.ApiGatewayUrl}/api/v1/website/albums/{apiService.TenantId}/{AlbumType.Photo}");
            ViewBag.AlbumViewModel = resultListPhoto?.Items;

            var listPhoto = new List<AlbumItemViewModel>();
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

            ViewBag.ListPhoto = listPhoto;

            var listAlbum = await httpClientService.GetAsync<SearchResult<AlbumViewModel>>
               ($"{requestUrl.ApiGatewayUrl}/api/v1/website/albums/{apiService.TenantId}/groups/{(int)AlbumType.Photo}");
            ViewBag.ListAlbum = listAlbum?.Items;

            return View();
        }

        [Route("thu-vien-video")]
        public async Task<IActionResult> Video()
        {
            var requestUrl = _configuration.GetApiUrl();
            var tenantId = _configuration.GetSection("TenantId").Value;
            var apiService = _configuration.GetApiServiceInfo();
            var httpClientService = new HttpClientService();

            var resultVideo = await httpClientService.GetAsync<SearchResult<AlbumWithItemViewModel>>
                ($"{requestUrl.ApiGatewayUrl}/api/v1/website/albums/{apiService.TenantId}/{(int)AlbumType.Video}");
            ViewBag.AlbumViewModel = resultVideo?.Items;

            var listAlbum = await httpClientService.GetAsync<SearchResult<AlbumViewModel>>
                ($"{requestUrl.ApiGatewayUrl}/api/v1/website/albums/{apiService.TenantId}/groups/{(int)AlbumType.Video}");
            ViewBag.ListAlbum = listAlbum?.Items;

            return View();
        }

        [Route("thu-vien-video/{seoLink}/{page?}/{pageSize?}")]
        public async Task<IActionResult> VideoInAlbum(string seoLink, int page = 1, int pageSize = 12)
        {
            var requestUrl = _configuration.GetApiUrl();
            var tenantId = _configuration.GetSection("TenantId").Value;
            var apiService = _configuration.GetApiServiceInfo();
            var httpClientService = new HttpClientService();

            var listVideo = await httpClientService.GetAsync<SearchResult<AlbumItemViewModel>>
                ($"{requestUrl.ApiGatewayUrl}/api/v1/website/albums/search/{apiService.TenantId}/{seoLink}/{page}/{pageSize}");
            ViewBag.ListVideo = listVideo?.Items;
            ViewBag.TotalRows = listVideo?.TotalRows;

            var listAlbum = await httpClientService.GetAsync<SearchResult<AlbumViewModel>>
               ($"{requestUrl.ApiGatewayUrl}/api/v1/website/albums/{apiService.TenantId}/groups/{(int)AlbumType.Video}");

            ViewBag.ListAlbum = listAlbum?.Items;
            var albumInfo = listAlbum?.Items.Find(x => x.SeoLink == seoLink);
            ViewBag.TitleAlbum = albumInfo?.Title;
            ViewBag.SeoLink = seoLink;

            ViewBag.Page = page;

            return View();
        }

        [Route("thu-vien-anh/{seoLink}/{page?}/{pageSize?}")]
        public async Task<IActionResult> PhotoInAlbum(string seoLink, int page = 1, int pageSize = 12)
        {
            var requestUrl = _configuration.GetApiUrl();
            var tenantId = _configuration.GetSection("TenantId").Value;
            var apiService = _configuration.GetApiServiceInfo();
            var httpClientService = new HttpClientService();

            var listPhoto = await httpClientService.GetAsync<SearchResult<AlbumItemViewModel>>
                ($"{requestUrl.ApiGatewayUrl}/api/v1/website/albums/search/{apiService.TenantId}/{seoLink}/{page}/{pageSize}");
            ViewBag.ListPhoto = listPhoto?.Items;
            ViewBag.TotalRows = listPhoto?.TotalRows;

            var listAlbum = await httpClientService.GetAsync<SearchResult<AlbumViewModel>>
                ($"{requestUrl.ApiGatewayUrl}/api/v1/website/albums/{apiService.TenantId}/groups/{(int)AlbumType.Photo}");
            ViewBag.ListAlbum = listAlbum?.Items;
            ViewBag.TitleAlbum = listAlbum?.Items.Find(x => x.SeoLink == seoLink)?.Title;

            ViewBag.SeoLink = seoLink;

            ViewBag.Page = page;

            return View();
        }

        [Route("thu-vien-video/video/{id}.html")]
        public async Task<IActionResult> VideoDetail(string id)
        {
            var requestUrl = _configuration.GetApiUrl();
            var tenantId = _configuration.GetSection("TenantId").Value;
            var apiService = _configuration.GetApiServiceInfo();
            var httpClientService = new HttpClientService();

            var resultListNewsCategory = await httpClientService.GetAsync<SearchResult<AlbumWithItemViewModel>>
                ($"{requestUrl.ApiGatewayUrl}/api/v1/website/albums/{apiService.TenantId}/{(int)AlbumType.Video}");
            ViewBag.AlbumViewModel = resultListNewsCategory?.Items;

            var videoDetail = await httpClientService.GetAsync<ActionResultResponse<VideoViewModel>>
                ($"{requestUrl.ApiGatewayUrl}/api/v1/website/albums/{apiService.TenantId}/video-detail/{id}");

            ViewBag.VideoDetail = videoDetail?.Data;
            return View();
        }
    }
}