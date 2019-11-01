using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Website.Nelly.Models;
using GHM.WebSite.Nelly.Helper;
using GHM.WebSite.Nelly.ViewModels;
using GHM.WebsiteClient.Api.Domain.IServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace GHM.Website.Nelly.Controllers
{
    public class ContactController : BaseController
    {
        private readonly IConfiguration _configuration;
        private readonly IMemoryCache _cache;
        private readonly IFeedbackService _feedbackService;
        private readonly ICoreService _coreService;

        public ContactController(IConfiguration configuration, IMemoryCache cache, IFeedbackService feedbackService,
            IBrandService brandService, IBranchContactService branchContactService, ICoreService coreService,
             IMenuService menuService, ISettingService settingService, ISocialNetworkService socialNetworkService, ILanguageService languageService)
             : base(configuration, cache, brandService, branchContactService, menuService, settingService, socialNetworkService, languageService)
        {
            _configuration = configuration;
            _cache = cache;
            _feedbackService = feedbackService;
            _coreService = coreService;
        }

        [Route("lien-he")]
        [Route("lien-he.html")]
        public async Task<IActionResult> Index()
        {
            var listProvince = await _coreService.GetProvinceByNationId(1);
            ViewBag.ListProvice = JsonConvertHelper.GetObjectFromObject<List<ObjectViewModel>>(listProvince);
            var breadcrumbs = new List<Breadcrumb>
            {
                new Breadcrumb()
                {
                    Name = "Liên hệ",
                    IsCurrent = true,
                }
            };

            ViewBag.Breadcrumb = breadcrumbs;
            return View();
        }

        [Route("dang-ky-dai-ly")]
        [Route("dang-ky-dai-ly.html")]
        public async Task<IActionResult> Agency()
        {
            var listProvince = await _coreService.GetProvinceByNationId(1);
            ViewBag.ListProvice = JsonConvertHelper.GetObjectFromObject<List<ObjectViewModel>>(listProvince);

            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        [Route("gui-lien-he")]
        public async Task<JsonResult> Send(FeedbackMeta feedback)
        {
            if (!ModelState.IsValid)
            {
                return Json(GetErrorsInModelState());
            }            

            var apiService = _configuration.GetApiServiceInfo();            

            var feedbackMetaData = JsonConvert.DeserializeObject<GHM.WebsiteClient.Api.Domain.ModelMetas.FeedbackMeta>(JsonConvert.SerializeObject(feedback));
           
            var result = await _feedbackService.Insert(apiService.TenantId, feedbackMetaData);

            return Json(result);
        }
    }
}