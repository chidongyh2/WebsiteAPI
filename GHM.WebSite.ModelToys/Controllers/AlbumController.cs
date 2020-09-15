using GHM.Infrastructure.Extensions;
using GHM.Website.ModelToys.Models;
using GHM.WebsiteClient.Api.Domain.IServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;

namespace GHM.Website.ModelToys.Controllers
{
    public class AlbumController : BaseController
    {
        private readonly IConfiguration _configuration;
        private readonly IMemoryCache _cache;
        private readonly IVideoService _videoService;

        public AlbumController(IConfiguration configuration, IMemoryCache cache, IBrandService brandService,
        IBranchContactService branchContactService, IVideoService videService,
        IMenuService menuService, ISettingService settingService, ISocialNetworkService socialNetworkService, ILanguageService languageService)
           : base(configuration, cache, brandService, branchContactService, menuService, settingService, socialNetworkService, languageService)
        {
            _configuration = configuration;
            _cache = cache;
            _videoService = videService;
        }

        [Route("video")]
        [Route("video.html")]
        public async Task<IActionResult> Index()
        {
            var apiService = _configuration.GetApiServiceInfo();
            var listVideo = await _videoService.ListVideoAsync(apiService.TenantId, CultureInfo.CurrentCulture.Name, null, 1, 100);
            ViewBag.ListVideo = JsonConvert.DeserializeObject<List<VideoViewModel>>(JsonConvert.SerializeObject(listVideo?.Items));

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
    }
}