using System.Globalization;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Services;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Pyrexar.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;

namespace GHM.Website.Pyrexar.Controllers
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

        [Route("thu-vien-video/{page?}/{pageSize?}")]
        public async Task<IActionResult> Video(int page = 1, int pageSize = 12)
        {
            var requestUrl = _configuration.GetApiUrl();
            var tenantId = _configuration.GetSection("TenantId").Value;
            var apiService = _configuration.GetApiServiceInfo();
            var httpClientService = new HttpClientService();

            var listVideo = await httpClientService.GetAsync<SearchResult<AlbumItemViewModel>>
                ($"{requestUrl.ApiGatewayUrl}/api/v1/website/albums/{apiService.TenantId}/video-all/{page}/{pageSize}/{CultureInfo.CurrentCulture.Name}");
            ViewBag.ListVideo = listVideo?.Items;
            ViewBag.TotalRows = listVideo?.TotalRows;
            ViewBag.Page = page;
            return View();
        }      
    }
}