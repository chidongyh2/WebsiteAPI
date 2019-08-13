using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Services;
using GHM.Infrastructure.ViewModels;
using GHM.Website.JadesSpa.Constants;
using GHM.Website.JadesSpa.Models;
using GHM.Website.JadesSpa.ViewModels;
using GHM.WebsiteClient.Api.Domain.IServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;

namespace GHM.Website.JadesSpa.Controllers
{
    public class AlbumController : BaseController
    {
        private readonly IConfiguration _configuration;
        private readonly IMemoryCache _cache;

        public AlbumController(IConfiguration configuration, IMemoryCache cache, IBranchContactService branchContactService,
            IMenuService menuService, ISettingService settingService, ISocialNetworkService socialNetworkService, ILanguageService languageService)
            : base(configuration, cache, branchContactService, menuService, settingService, socialNetworkService, languageService)
        {
            _configuration = configuration;
            _cache = cache;
        }

        [Route("video")]
        public async Task<IActionResult> Index()
        {
            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            var httpClientService = new HttpClientService();
            var listAlbum = await httpClientService.GetAsync<SearchResult<AlbumViewModel>>
               ($"{requestUrl.ApiGatewayUrl}/api/v1/website/albums/{apiService.TenantId}/groups/{(int)AlbumType.Video}/{CultureInfo.CurrentCulture.Name}");

            ViewBag.ListAlbum = listAlbum?.Items;

            var breadcrumbs = new List<Breadcrumb>
            {
                new Breadcrumb()
                {
                    Name = "Video",
                    IsCurrent = true,
                }
            };

            ViewBag.Breadcrumb = breadcrumbs;
            return View();
        }

        [Route("get-video-by-album"), AcceptVerbs("GET")]
        public async Task<JsonResult> GetVideoByAlbum(string seoLink, int page, int pageSize)
        {
            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            var httpClientService = new HttpClientService();

            var listVideo = await httpClientService.GetAsync<SearchResult<AlbumItemViewModel>>
                ($"{requestUrl.ApiGatewayUrl}/api/v1/website/albums/search/{apiService.TenantId}/{seoLink}/{page}/{pageSize}/{CultureInfo.CurrentCulture.Name}");

            return Json(listVideo);
        }
    }
}