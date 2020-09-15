using GHM.WebsiteClient.Api.Domain.IServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;

namespace GHM.Website.ModelToys.Controllers
{
    public class NotFoundController : BaseController
    {

        public NotFoundController(IConfiguration configuration, IMemoryCache cache,
            IBrandService brandService, IBranchContactService branchContactService,
             IMenuService menuService, ISettingService settingService, ISocialNetworkService socialNetworkService, ILanguageService languageService)
             : base(configuration, cache, brandService, branchContactService, menuService, settingService, socialNetworkService, languageService)
        {
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}