using System;
using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Services;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Nelly.Models;
using GHM.Website.Nelly.ViewModels;
using GHM.WebSite.Nelly.Helper;
using GHM.WebsiteClient.Api.Domain.IServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

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

        [Route("view-more-news"), AcceptVerbs("POST")]
        public async Task<IActionResult> GetNewsByCategory(int categoryId, int page = 3, int pageSize = 6)
        {
            var apiService = _configuration.GetApiServiceInfo();

            var listNews = await _newsService.GetNewsByCategoryIdAsync(apiService.TenantId, CultureInfo.CurrentCulture.Name, categoryId, page, pageSize);
            var listNewsData = JsonHelper.GetObjectFromObject<CategoryWidthNewsViewModel>(listNews.Data);
            return Json(listNewsData.ListNews);
        }        
    }
}
