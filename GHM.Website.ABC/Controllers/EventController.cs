﻿using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Services;
using GHM.Infrastructure.ViewModels;
using GHM.Website.ABC.ModelMetas;
using GHM.Website.ABC.Models;
using GHM.Website.ABC.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
namespace GHM.Website.ABC.Controllers
{
    public class EventController : BaseController
    {
        // GET: /<controller>/
        private readonly IConfiguration _configuration;
        private readonly IMemoryCache _cache;

        public EventController(IConfiguration configuration, IMemoryCache cache) : base(configuration, cache)
        {
            _configuration = configuration;
            _cache = cache;
        }

        [Route("su-kien")]
        public async Task<IActionResult> Index()
        {
            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            var httpClientService = new HttpClientService();

            var listEvent = await httpClientService.GetAsync<SearchResult<EventViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/events/events/all/{apiService.TenantId}/1/9/{CultureInfo.CurrentCulture.Name}");
            ViewBag.Events = listEvent?.Items;

            var breadcrumbs = new List<Breadcrumb>
            {
                new Breadcrumb()
                {
                    Name = Resources.Resource.Events,
                    IsCurrent = true,
                }
            };

            ViewBag.Breadcrumb = breadcrumbs;
            return View();
        }

        [Route("su-kien/{seoLink}.html")]
        public async Task<IActionResult> Detail(string seoLink)
        {
            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            var httpClientService = new HttpClientService();
            var eventInfo = await httpClientService.GetAsync<ActionResultResponse<EventShowClientViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/events/events/get-detail/{apiService.TenantId}/{seoLink}/{CultureInfo.CurrentCulture.Name}");

            if (eventInfo != null)
            {
                var youtube = eventInfo?.Data?.Albums?.Where(x => x.Type == Constants.AlbumType.Video).FirstOrDefault()?.AlbumItems.FirstOrDefault();
                ViewBag.Video = youtube;
                var images = eventInfo?.Data?.Albums?.Where(x => x.Type == Constants.AlbumType.Photo).FirstOrDefault()?.AlbumItems;
                ViewBag.ImageLibrary = images;
            }

            ViewBag.EventInfo = eventInfo?.Data;
            return View();
        }

        [Route("get-all-event"), AcceptVerbs("GET")]
        public async Task<JsonResult> GetListEvent(int page, int pageSize)
        {
            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            var httpClientService = new HttpClientService();

            var listEvent = await httpClientService.GetAsync<SearchResult<EventViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/events/events/all/{apiService.TenantId}/{page}/{pageSize}/{CultureInfo.CurrentCulture.Name}");
            return Json(listEvent);
        }

        [Route("dang-ky-su-kien")]
        public async Task<IActionResult> RegisterEvent(string seoLink)
        {
            seoLink = "digital-blading--dot-pha-de-khac-biet";
            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            var httpClientService = new HttpClientService();
            var eventInfo = await httpClientService.GetAsync<ActionResultResponse<EventShowClientViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/events/events/get-detail/{apiService.TenantId}/{seoLink}/{CultureInfo.CurrentCulture.Name}");

            if (eventInfo != null)
            {
                var listVideo = eventInfo?.Data?.Albums?.Where(x => x.Type == Constants.AlbumType.Video).FirstOrDefault()?.AlbumItems;
                ViewBag.Videos = listVideo;
            }

            ViewBag.EventInfo = eventInfo?.Data;

            var listNews = await httpClientService.GetAsync<SearchResult<SocialNetworkViewModel>>($"{requestUrl.ApiGatewayUrl}/api/v1/website/social-networks/{apiService.TenantId}/alls");
            ViewBag.SocialNetwork = listNews?.Items;

            return View();
        }

        [Route("dang-ky-su-kien"), AcceptVerbs("POST")]
        public async Task<JsonResult> Send(string eventId, string fullName, string phoneNumber, string email, string address, int type, List<string> eventDays)
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

            if (string.IsNullOrWhiteSpace(address))
            {
                return Json(-5);
            }

            if (eventDays == null || eventDays.Count == 0)
            {
                return Json(-6);
            }

            var listEventDayRegister = new List<EventDayRegisterMeta>();
            foreach (var item in eventDays)
            {
                listEventDayRegister.Add(new EventDayRegisterMeta
                {
                    EventDayId = item,
                });
            }

            var requestUrl = _configuration.GetApiUrl();
            var apiService = _configuration.GetApiServiceInfo();
            var feedbackMeta = new RegisterMeta
            {
                FullName = fullName,
                PhoneNumber = phoneNumber,
                Email = email,
                Address = type == 1 ? address : "",
                Note = type == 2 ? address : "",
                Role = Constants.RegisterRole.WalkInGuest,
                EventDayRegisters = listEventDayRegister
            };

            var result = await new HttpClientService()
                .PostAsync<ActionResultResponse<string>>($"{requestUrl.ApiGatewayUrl}/api/v1/events/events/client/{eventId}/registers", feedbackMeta);

            return Json(result);
        }
    }
}
