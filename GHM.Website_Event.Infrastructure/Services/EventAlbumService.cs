using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.Services;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Event.Domain.IRepository;
using GHM.Website.Event.Domain.IServices;
using GHM.Website.Event.Domain.ModelMetas;
using GHM.Website.Event.Domain.Models;
using GHM.Website.Event.Domain.Resources;
using GHM.Website.Event.Domain.ViewModels;
using Microsoft.Extensions.Configuration;

namespace GHM.Website.Event.Infrastructure.Services
{
    public class EventAlbumService : IEventAlbumService
    {
        private readonly IEventAlbumRepository _eventAlbumRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWebsiteEventResource> _websiteEventResourceService;
        private readonly IConfiguration _configuration;

        public EventAlbumService(IEventAlbumRepository eventAlbumRepository, IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWebsiteEventResource> websiteEventResourceService, IConfiguration configuration)
        {
            _eventAlbumRepository = eventAlbumRepository;
            _sharedResourceService = sharedResourceService;
            _websiteEventResourceService = websiteEventResourceService;
            _configuration = configuration;
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string eventId, string albumId)
        {
            var eventAlbumInfo = await _eventAlbumRepository.GetInfo(tenantId, eventId, albumId);
            if (eventAlbumInfo == null)
                return new ActionResultResponse(-1, _websiteEventResourceService.GetString("Event Album not exists"));

            var result = await _eventAlbumRepository.Delete(eventAlbumInfo.Id);
            if (result <= 0)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            await DeleteAlbum(tenantId, albumId);
            return new ActionResultResponse(result, _websiteEventResourceService.GetString("Delete album Success"));
        }

        public async Task<ActionResultResponse<AlbumDetailViewModel>> GetDetail(string tenantId, string eventId, string albumId)
        {
            var eventAlbumInfo = await _eventAlbumRepository.GetInfo(tenantId, eventId, albumId);
            if (eventAlbumInfo == null)
                return new ActionResultResponse<AlbumDetailViewModel>(-1, _websiteEventResourceService.GetString("Event Album not exists"));

            var apiUrls = _configuration.GetApiUrl();
            return await new HttpClientService()
                    .GetAsync<ActionResultResponse<AlbumDetailViewModel>>($"{apiUrls.WebsiteApiUrl}/albums/client/{tenantId}/{albumId}");
        }

        public async Task<ActionResultResponse<string>> Insert(string tenantId, string eventId, EventAlbumMeta eventAlbumMeta)
        {
            var apiUrls = _configuration.GetApiUrl();
            if (apiUrls == null)
                return new ActionResultResponse<string>(-1, _sharedResourceService.GetString("Missing some configuration. Please contact with administrator."));

            var resultInsertAlbum = await new HttpClientService()
                    .PostAsync<ActionResultResponse<string>>($"{apiUrls.WebsiteApiUrl}/albums/client", eventAlbumMeta.Album);

            if (resultInsertAlbum == null || resultInsertAlbum?.Code <= 0)
                return new ActionResultResponse<string>(-2, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            var eventAlbum = new EventAlbum()
            {
                Id = Guid.NewGuid().ToString(),
                TenantId = tenantId,
                EventId = eventId,
                AlbumId = resultInsertAlbum.Data,
                IsActive = true
            };

            var result = await _eventAlbumRepository.Insert(eventAlbum);
            if (result <= 0)
            {
                await DeleteAlbum(tenantId, resultInsertAlbum.Data);
                return new ActionResultResponse<string>(-2, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));
            }

            return new ActionResultResponse<string>(result, _sharedResourceService.GetString("Insert album success"), "", eventAlbum.Id);
        }

        public async Task<SearchResult<AlbumViewModel>> Search(string tenantId, string eventId, string languageId, int page, int pageSize)
        {
            var listEventAlbum = await _eventAlbumRepository.Search(tenantId, eventId, null, page, pageSize, out var totalRows);
            if (listEventAlbum == null || listEventAlbum.Count == 0)
                return new SearchResult<AlbumViewModel>
                {
                    Items = null,
                };

            var apiUrls = _configuration.GetApiUrl();
            return await new HttpClientService()
                    .PostAsync<SearchResult<AlbumViewModel>>($"{apiUrls.WebsiteApiUrl}/albums/client/{tenantId}/{languageId}", listEventAlbum);
        }

        public async Task<ActionResultResponse> Update(string tenantId, string eventId, string albumId, EventAlbumMeta eventAlbumMeta)
        {
            var eventAlbumInfo = await _eventAlbumRepository.GetInfo(tenantId, eventId, albumId);
            if (eventAlbumInfo == null)
                return new ActionResultResponse(-1, _websiteEventResourceService.GetString("Event Album not exists"));

            var apiUrls = _configuration.GetApiUrl();
            return await new HttpClientService()
                    .PostAsync<ActionResultResponse>($"{apiUrls.WebsiteApiUrl}/albums/client/{tenantId}/update/{albumId}", eventAlbumMeta.Album);
        }

        private async Task DeleteAlbum(string tenantId, string albumId)
        {
            var apiUrls = _configuration.GetApiUrl();

            await new HttpClientService()
                           .DeleteAsync<ActionResultResponse<string>>($"{apiUrls.WebsiteApiUrl}/albums/client/{tenantId}/{albumId}");
        }
    }
}
