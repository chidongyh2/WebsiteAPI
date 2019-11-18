using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Website.Nelly.Models;
using GHM.WebSite.Nelly.Helper;
using GHM.WebSite.Nelly.Models;
using GHM.WebSite.Nelly.ViewModels;
using GHM.WebsiteClient.Api.Domain.IServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.Globalization;

namespace GHM.Website.Nelly.Controllers
{
    public class ContactController : BaseController
    {
        private readonly IConfiguration _configuration;
        private readonly IMemoryCache _cache;
        private readonly IFeedbackService _feedbackService;
        private readonly ICoreService _coreService;
        private readonly IAgencyInfoService _agencyInfoService;

        public ContactController(IConfiguration configuration, IMemoryCache cache,
            IFeedbackService feedbackService, IAgencyInfoService agency,
            IBrandService brandService, IBranchContactService branchContactService, ICoreService coreService,
             IMenuService menuService, ISettingService settingService, ISocialNetworkService socialNetworkService, ILanguageService languageService)
             : base(configuration, cache, brandService, branchContactService, menuService, settingService, socialNetworkService, languageService)
        {
            _configuration = configuration;
            _cache = cache;
            _feedbackService = feedbackService;
            _coreService = coreService;
            _agencyInfoService = agency;
        }

        [Route("lien-he")]
        [Route("lien-he.html")]
        public async Task<IActionResult> Index()
        {
            var apiService = _configuration.GetApiServiceInfo();
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
            ViewBag.ListAgency = await _agencyInfoService.AgencyInfoGetClient(apiService.TenantId, CultureInfo.CurrentCulture.Name,
                null, null);
            return View();
        }

        [Route("dang-ky-dai-ly")]
        [Route("dang-ky-dai-ly.html")]
        public async Task<IActionResult> Agency()
        {
            var listProvince = await _coreService.GetProvinceByNationId(1);
            ViewBag.ListProvice = JsonConvertHelper.GetObjectFromObject<List<ObjectViewModel>>(listProvince);
            ViewBag.Message = "Chúc mừng bạn đã đăng ký đại lý thành công. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất để xác nhận.";
            return View();
        }

        [Route("search-agency")]
        public async Task<JsonResult> GetAgnecy(int? provinceId, int? distinctId)
        {
            var apiService = _configuration.GetApiServiceInfo();

            return Json(await _agencyInfoService.AgencyInfoGetClient(apiService.TenantId, CultureInfo.CurrentCulture.Name,
                provinceId, distinctId));
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

        [HttpPost]
        [ValidateAntiForgeryToken]
        [Route("dang-ky-dai-ly")]
        public async Task<JsonResult> AgencyRegister(AgencyMeta agencyMeta)
        {
            if (!ModelState.IsValid)
            {
                return Json(GetErrorsInModelState());
            }

            var apiService = _configuration.GetApiServiceInfo();

            var agencyMetaData = JsonConvert.DeserializeObject<GHM.WebsiteClient.Api.Domain.ModelMetas.AgencyInfoMeta>(JsonConvert.SerializeObject(agencyMeta));
            agencyMetaData.TenantId = apiService.TenantId;
            var result = await _agencyInfoService.Insert(CultureInfo.CurrentCulture.Name, agencyMetaData);

            return Json(result);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        [Route("comment")]
        public async Task<JsonResult> Comment(CommentMeta commentMeta)
        {
            if (!ModelState.IsValid)
            {
                return Json(GetErrorsInModelState());
            }

            var apiService = _configuration.GetApiServiceInfo();

            var commentMetaData = JsonConvert.DeserializeObject<WebsiteClient.Api.Domain.ModelMetas.CommentMeta>(JsonConvert.SerializeObject(commentMeta));
            commentMetaData.TenantId = apiService.TenantId;
            var result = await _feedbackService.InsertComment(commentMetaData);

            return Json(result);
        }
    }
}