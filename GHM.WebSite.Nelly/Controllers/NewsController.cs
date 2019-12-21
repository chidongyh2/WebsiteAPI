using GHM.WebsiteClient.Api.Domain.IServices;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;

namespace GHM.Website.Nelly.Controllers
{
    public class NewsController : BaseController
    {
        private readonly IConfiguration _configuration;
        private readonly IMemoryCache _cache;
        private readonly INewsService _newsService;
        public NewsController(IConfiguration configuration, IMemoryCache cache, INewsService newsService,
            IBrandService brandService, IBranchContactService branchContactService,
            IMenuService menuService, ISettingService settingService, ISocialNetworkService socialNetworkService, ILanguageService languageService)
            : base(configuration, cache, brandService, branchContactService, menuService, settingService, socialNetworkService, languageService)
        {
            _newsService = newsService;
            _configuration = configuration;
            _cache = cache;
        }
    }
}
