﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Services;
using GHM.Website.JadesSpa.Models;
using GHM.WebsiteClient.Api.Domain.IServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.Globalization;

namespace GHM.Website.JadesSpa.Controllers
{
    public class ContactController : BaseController
    {
        private readonly IConfiguration _configuration;
        private readonly IMemoryCache _cache;
        private readonly IFeedbackService _feedbackService;
        public ContactController(IConfiguration configuration, IMemoryCache cache, IFeedbackService feedbackService, IBranchContactService branchContactService,
            IMenuService menuService, ISettingService settingService, ISocialNetworkService socialNetworkService,ILanguageService languageService)
            : base(configuration, cache, branchContactService, menuService, settingService, socialNetworkService,languageService)
        {
            _configuration = configuration;
            _cache = cache;
            _feedbackService = feedbackService;
        }

        [Route("lien-he")]
        public IActionResult Index()
        {
            var breadcrumbs = new List<Breadcrumb>
            {
                new Breadcrumb()
                {
                    Name = Resources.Resource.Contact,
                    IsCurrent = true,
                }
            };

            ViewBag.Breadcrumb = breadcrumbs;
            return View();
        }
        [HttpPost]
        //[ValidateAntiForgeryToken]
        [Route("gui-lien-he")]
        public async Task<JsonResult> Send(string fullName, string phoneNumber, string email, string title, string content)
        {
            if (string.IsNullOrWhiteSpace(fullName))
            {
                return Json(-1);
            }
            if (string.IsNullOrWhiteSpace(phoneNumber))
            {
                return Json(-2);
            }

            var emailPattern = "^([0-9a-zA-Z]([-\\.\\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\\w]*[0-9a-zA-Z]\\.)+[a-zA-Z]{2,9})$";
            if (!string.IsNullOrWhiteSpace(email) && !Regex.IsMatch(email, emailPattern))
            {
                return Json(-3);
            }

            //if (string.IsNullOrWhiteSpace(title))
            //{
            //    return Json(-4);
            //}

            if (string.IsNullOrWhiteSpace(content))
            {
                return Json(-5);
            }
            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            var feedbackMeta = new FeedbackMeta
            {
                FullName = fullName,
                PhoneNumber = phoneNumber,
                Email = email,
                Title = title,
                Content = content,
            };

            var feedbackMetaData = JsonConvert.DeserializeObject<GHM.WebsiteClient.Api.Domain.ModelMetas.FeedbackMeta>(JsonConvert.SerializeObject(feedbackMeta));

            //var result = await new HttpClientService()
            //    .PostAsync<ActionResultResponse<string>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/feedbacks/{apiService.TenantId}", feedbackMeta);
            var result = await _feedbackService.Insert(apiService.TenantId, feedbackMetaData);

            return Json(result);
        }
    }
}