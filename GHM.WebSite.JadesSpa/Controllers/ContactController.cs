using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Services;
using GHM.Website.JadesSpa.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;

namespace GHM.Website.JadesSpa.Controllers
{
    public class ContactController : BaseController
    {
        private readonly IConfiguration _configuration;
        private readonly IMemoryCache _cache;
        public ContactController(IConfiguration configuration, IMemoryCache cache): base(configuration, cache)
        {
            _configuration = configuration;
            _cache = cache;
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

        [Route("gui-lien-he"), AcceptVerbs("POST")]
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

            var result = await new HttpClientService()
                .PostAsync<ActionResultResponse<string>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/feedbacks/{apiService.TenantId}", feedbackMeta);

            return Json(result);
        }
    }
}