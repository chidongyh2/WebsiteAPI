using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.Models.WebsiteSetting;
using GHM.Website.ModelToys.Models;
using GHM.Website.ModelToys.Utils;
using GHM.WebSite.Nelly.Helper;
using GHM.WebSite.Nelly.Models;
using GHM.WebSite.Nelly.ViewModels;
using GHM.WebsiteClient.Api.Domain.IServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using State = GHM.WebSite.Nelly.Models.State;

namespace GHM.Website.ModelToys.Controllers
{
    public class ContactController : BaseController
    {
        private readonly IConfiguration _configuration;
        private readonly IMemoryCache _cache;
        private readonly IFeedbackService _feedbackService;
        private readonly ICoreService _coreService;
        private readonly IAgencyInfoService _agencyInfoService;
        private readonly ISettingService _settingService;

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
            _settingService = settingService;
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

            var feedbackMetaData = JsonConvertHelper.GetObjectFromObject<GHM.WebsiteClient.Api.Domain.ModelMetas.FeedbackMeta>(feedback);
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

            var agencyMetaData = JsonConvertHelper.GetObjectFromObject<GHM.WebsiteClient.Api.Domain.ModelMetas.AgencyInfoMeta>(agencyMeta);
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

            var listSettings = await _settingService.GetWebsiteSettingsAsync(apiService.TenantId, CultureInfo.CurrentCulture.Name);

            var settings = listSettings.Items.Select(x => new Setting
            {
                Key = x.Key,
                ConcurrencyStamp = x.ConcurrencyStamp,
                DisplayName = x.DisplayName,
                GroupId = x.GroupId,
                LanguageId = x.LanguageId,
                Value = x.Value
            }).ToList();

            var websiteSetting = new WebsiteSetting();
            string convention = typeof(WebsiteSetting).Namespace;

            var commentNotAllow = Common.GetSettingValue(settings, string.Format("{0}.CommentNotAllow", convention));
            if (!string.IsNullOrEmpty(commentNotAllow))
            {
                var listComment = commentNotAllow.Split(',');
                if (listComment != null && listComment.Any())
                {
                    foreach (var comment in listComment)
                    {
                        if (commentMeta.Content.Contains(comment))
                        {
                            return Json($"Bạn không được phép bình luận từ {comment}");
                        }
                    }
                }
            }

            var commentMetaData = JsonConvertHelper.GetObjectFromObject<WebsiteClient.Api.Domain.ModelMetas.CommentMeta>(commentMeta);
            commentMetaData.TenantId = apiService.TenantId;

            var result = await _feedbackService.InsertComment(commentMetaData);
            return Json(result);
        }

        [Route("get-comment")]
        public async Task<JsonResult> GetComment(string objectId, int objectType, int page = 1, int pageSize = 20)
        {
            var apiService = _configuration.GetApiServiceInfo();
            var commentMeta = await _feedbackService.GetComment(apiService.TenantId, objectId, objectType, page, pageSize);
            var comment = JsonConvertHelper.GetObjectFromObject<SearchResult<CommentViewModel>>(commentMeta);

            var result = RenderTree(comment.Items, null);

            return Json(new { Items = result, comment.TotalRows });
        }

        private List<TreeData> RenderTree(List<CommentViewModel> comments, int? parentId)
        {
            var tree = new List<TreeData>();
            var parents = comments.Where(x => x.ParentId == parentId).ToList();
            if (parents.Any())
            {
                parents.ForEach(parent =>
                {
                    var treeData = new TreeData
                    {
                        Id = parent.Id,
                        Text = parent.FullName,
                        ParentId = parent.ParentId,
                        IdPath = parent.IdPath,
                        Data = parent,
                        ChildCount = parent.ChildCount,
                        Icon = string.Empty,
                        State = new State()
                        {
                            Opened = !parentId.HasValue
                        },
                        Children = parent.ChildCount > 0 ? RenderTree(comments, parent.Id) : null
                    };
                    tree.Add(treeData);
                });
            }
            return tree;
        }
    }
}