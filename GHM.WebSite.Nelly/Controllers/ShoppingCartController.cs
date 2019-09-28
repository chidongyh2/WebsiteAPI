using GHM.Website.Nelly.Controllers;
using GHM.WebsiteClient.Api.Domain.IServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;

namespace GHM.WebSite.Nelly.Controllers
{
    [Route("gio-hang")]
    public class ShoppingCartController : BaseController
    {
        private readonly IConfiguration _configuration;
        private readonly IMemoryCache _cache;

        public ShoppingCartController(IConfiguration configuration, IMemoryCache cache,
            IBrandService brandService, IBranchContactService branchContactService,
             IMenuService menuService, ISettingService settingService, ISocialNetworkService socialNetworkService, ILanguageService languageService)
             : base(configuration, cache, brandService, branchContactService, menuService, settingService, socialNetworkService, languageService)
        {
            _configuration = configuration;
            _cache = cache;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        [Route("buy/{productId}")]
        public async Task<IActionResult> Buy(string productId, int? number)
        {
            return View("Index");
        }

        [Route("remove/{productId}")]
        public async Task<JsonResult> Remove(string productId)
        {
            return Json(1);
        }
    }
}
