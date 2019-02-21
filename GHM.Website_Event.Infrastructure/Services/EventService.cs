using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.EventBus.Constants;
using GHM.Infrastructure.Constants;
using GHM.Website.Event.Domain.IRepository;
using GHM.Website.Event.Domain.IServices;
using GHM.Website.Event.Domain.ModelMetas;
using GHM.Website.Event.Domain.Models;
using GHM.Website.Event.Domain.Resources;
using GHM.Website.Event.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Event.Domain.Constants;
using GHM.Infrastructure.Services;
using Microsoft.Extensions.Configuration;
using GHM.Events;
using GHM.Infrastructure.Helpers;

namespace GHM.Website.Event.Infrastructure.Services
{
    public class EventService : IEventService
    {
        private readonly IEventRepository _eventRepository;
        private readonly IEventTranslationRepository _eventTranslationRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWebsiteEventResource> _websiteEventResourceService;
        private readonly IConfiguration _configuration;
        private readonly IRegisterRepository _registerRepository;
        private readonly IEventDayRepository _eventDayRepository;
        private readonly IEventAlbumRepository _eventAlbumRepository;

        public EventService(IEventRepository eventRepository,
            IEventTranslationRepository eventTranslationRepository,
           IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWebsiteEventResource> websiteEventResourceService,
             IConfiguration configuration,
            IRegisterRepository registerRepository,
            IEventDayRepository eventDayRepository,
            IEventAlbumRepository eventAlbumRepository
        )
        {
            _eventRepository = eventRepository;
            _eventTranslationRepository = eventTranslationRepository;
            _sharedResourceService = sharedResourceService;
            _websiteEventResourceService = websiteEventResourceService;
            _configuration = configuration;
            _registerRepository = registerRepository;
            _eventDayRepository = eventDayRepository;
            _eventAlbumRepository = eventAlbumRepository;
        }

        public async Task<SearchResult<EventViewModel>> Search(string tenantId, string languageId, string keyword, string creatorId,
            ApproverStatus? status, bool? isActive, DateTime? startDate, DateTime? endDate, int page, int pageSize)
        {
            var apiUrls = _configuration.GetApiUrl();
            bool isCheck = false;
            if (apiUrls != null)
            {
                var listApprover = await new HttpClientService()
                      .GetAsync<List<ApproverConfigViewModel>>($"{apiUrls.CoreApiUrl}/approver-configs/search/{tenantId}/{(int)ApproverConfigType.Event}");
                if (!string.IsNullOrEmpty(creatorId))
                {
                    isCheck = listApprover.Any(x => x.UserId.Contains(creatorId));
                }
            }
            var items = await _eventRepository.Search(tenantId, languageId, keyword, creatorId, status, isActive, startDate, endDate, isCheck, page,
                pageSize, out var totalRows);
            return new SearchResult<EventViewModel>
            {
                TotalRows = totalRows,
                Items = items
            };
        }

        public async Task<SearchResult<EventClientViewModel>> SearchClient(string tenantId, string languageId, int page, int pageSize)
        {
            var items = await _eventRepository.SearchClient(tenantId, languageId, page, pageSize, out var totalRows);
            return new SearchResult<EventClientViewModel>
            {
                TotalRows = totalRows,
                Items = items
            };
        }

        public async Task<ActionResultResponse<string>> Insert(string tenantId, string creatorId, string creatorFullName, string creatorAvatar, EventMeta eventMeta)
        {
            if (eventMeta.StartDate.HasValue && eventMeta.EndDate.HasValue)
            {
                if (DateTime.Compare(eventMeta.StartDate.Value, eventMeta.EndDate.Value) > 0)
                {
                    return new ActionResultResponse<string>(-1, _websiteEventResourceService.GetString("Start time greater than end time."));
                }
            }

            var eventId = Guid.NewGuid().ToString();
            var events = new Domain.Models.Event
            {
                Id = eventId,
                ConcurrencyStamp = eventId,
                IsActive = eventMeta.IsActive,
                StartDate = eventMeta.StartDate,
                EndDate = eventMeta.EndDate,
                LimitedUsers = eventMeta.LimitedUsers,
                IsAllowRegisterWhenOverload = eventMeta.IsAllowRegisterWhenOverload,
                LimitedAccompanyPersons = eventMeta.LimitedAccompanyPersons,
                StaffOnly = eventMeta.StaffOnly,
                IsAllowRegister = eventMeta.IsAllowRegister,
                IsAllowAccompanyPerson = eventMeta.IsAllowAccompanyPerson,
                Thumbnail = eventMeta.Thumbnail,
                Status = ApproverStatus.Draft,
                TenantId = tenantId,
                CreatorId = creatorId,
                CreatorFullName = creatorFullName,
                CreatorAvatar = creatorAvatar
            };

            var result = await _eventRepository.Insert(events);

            if (result <= 0)
                return new ActionResultResponse<string>(result,
                    _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));


            #region insert Translation.
            if (eventMeta.EventTranslations.Count > 0)
            {
                var resultInsertTranslation = await InsertEventTranslation();
                if (resultInsertTranslation.Code <= 0)
                    return resultInsertTranslation;
            }
            #endregion

            await SendNotificationToApprover(tenantId, creatorId, creatorFullName, creatorAvatar, eventId);
            return new ActionResultResponse<string>(1, _websiteEventResourceService.GetString("Add new event successful."),
                string.Empty, eventId);

            #region Local functions
            async Task<ActionResultResponse<string>> InsertEventTranslation()
            {
                var apiUrls = _configuration.GetApiUrl();
                if (apiUrls == null)
                    return new ActionResultResponse<string>(-5,
                        _sharedResourceService.GetString(
                            "Missing some configuration. Please contact with administrator."));

                var eventTags = new List<TagSubjectViewModel>();
                var eventTranslations = new List<EventTranslation>();
                foreach (var eventTranslation in eventMeta.EventTranslations)
                {
                    // Check name exists.
                    //var isNameExists = await _eventTranslationRepository.CheckExists( eventId,
                    //    eventTranslation.LanguageId, eventTranslation.Name);
                    //if (isNameExists)
                    //{
                    //    await RollbackInsertEvent();
                    //    return new ActionResultResponse<string>(-1,
                    //        _websiteEventResourceService.GetString("Event name: \"{0}\" already exists.",
                    //            eventTranslation.Name));
                    //}

                    var eventTranslationInsert = new EventTranslation
                    {
                        EventId = eventId,
                        LanguageId = eventTranslation.LanguageId.Trim(),
                        Name = eventTranslation.Name.Trim(),
                        MetaTitle = eventTranslation.MetaTitle?.Trim(),
                        Description = eventTranslation.Description?.Trim(),
                        MetaDescription = eventTranslation.MetaDescription?.Trim(),
                        Content = eventTranslation.Content?.Trim(),
                        UnsignName = eventTranslation.Name?.StripVietnameseChars().ToUpper(),
                        Address = eventTranslation?.Address?.Trim()
                    };

                    eventTranslationInsert.SeoLink = !string.IsNullOrEmpty(eventTranslation.SeoLink)
                        ? eventTranslation.SeoLink.ToUrlString() : eventTranslation.Name.ToUrlString();

                    // Check Seolink exists.
                    var isSeolinkExists = await _eventTranslationRepository.CheckSeoLinkExists(eventId,
                        eventTranslation.LanguageId, eventTranslationInsert.SeoLink);
                    if (isSeolinkExists)
                    {
                        await RollbackInsertEvent();
                        return new ActionResultResponse<string>(-2,
                            _websiteEventResourceService.GetString("Seo link: \"{0}\" already exists.",
                                eventTranslationInsert.SeoLink));
                    }

                    eventTranslations.Add(eventTranslationInsert);

                    var eventTagInsert = new TagSubjectViewModel
                    {
                        TenantId = tenantId,
                        CreatorId = creatorId,
                        CreatorFullName = creatorFullName,
                        CreatorAvata = creatorAvatar,
                        Type = TagType.Event,
                        SubjectId = eventId,
                        LanguageId = eventTranslation.LanguageId.Trim(),
                        Tags = eventTranslation.Tags
                    };
                    eventTags.Add(eventTagInsert);
                }

                var resultTag = await new HttpClientService()
                    .PostAsync<ActionResultResponse>($"{apiUrls.CoreApiUrl}/tags", eventTags);

                var resultTranslation = await _eventTranslationRepository.Inserts(eventTranslations);
                if (resultTranslation > 0)
                    return new ActionResultResponse<string>(resultTranslation,
                        _websiteEventResourceService.GetString("Add new event translation successful."));

                await RollbackInsertEventTranslation();
                await RollbackInsertEvent();

                return new ActionResultResponse<string>(-3,
                    _websiteEventResourceService.GetString("Can not insert event translation. Please contact with administrator."));
            }

            async Task RollbackInsertEvent()
            {
                await _eventRepository.ForceDelete(eventId);
            }

            async Task RollbackInsertEventTranslation()
            {
                await _eventTranslationRepository.Delete(eventId);
            }

            #endregion Local functions
        }

        public async Task<ActionResultResponse<string>> Update(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string eventId, EventMeta eventMeta)
        {
            var apiUrls = _configuration.GetApiUrl();
            if (apiUrls == null)
                return new ActionResultResponse<string>(-5,
                    _sharedResourceService.GetString(
                        "Missing some configuration. Please contact with administrator."));
            var eventTags = new List<TagSubjectViewModel>();

            if (eventMeta.StartDate.HasValue && eventMeta.EndDate.HasValue)
            {
                if (DateTime.Compare(eventMeta.StartDate.Value, eventMeta.EndDate.Value) > 0)
                {
                    return new ActionResultResponse<string>(-1, _websiteEventResourceService.GetString("Start time greater than end time."));
                }
            }

            var info = await _eventRepository.GetInfo(eventId);
            if (info == null)
                return new ActionResultResponse<string>(-1, _websiteEventResourceService.GetString("Event does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<string>(-2,
                    _websiteEventResourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.ConcurrencyStamp != eventMeta.ConcurrencyStamp)
                return new ActionResultResponse<string>(-3,
                    _websiteEventResourceService.GetString(
                        "The event already updated by other people. you are not allowed to edit the event information."));

            info.IsActive = eventMeta.IsActive;
            info.Thumbnail = eventMeta.Thumbnail;

            info.StartDate = eventMeta.StartDate;
            info.EndDate = eventMeta.EndDate;
            info.LimitedUsers = eventMeta.LimitedUsers;
            info.IsAllowRegisterWhenOverload = eventMeta.IsAllowRegisterWhenOverload;
            info.LimitedAccompanyPersons = eventMeta.LimitedAccompanyPersons;
            info.StaffOnly = eventMeta.StaffOnly;
            info.IsAllowRegister = eventMeta.IsAllowRegister;
            info.IsAllowAccompanyPerson = eventMeta.IsAllowAccompanyPerson;

            info.ConcurrencyStamp = Guid.NewGuid().ToString();
            info.LastUpdate = DateTime.Now;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;
            info.LastUpdateAvatar = lastUpdateAvatar;

            await _eventRepository.Update(info);

            #region translation.
            if (eventMeta.EventTranslations.Count > 0)
            {
                var resultUpdateTranslation = await UpdateEventTranslation();
                if (resultUpdateTranslation.Code <= 0)
                    return resultUpdateTranslation;
            }
            #endregion

            return new ActionResultResponse<string>(1, _websiteEventResourceService.GetString("Update event successful."),
                string.Empty, info.ConcurrencyStamp);

            async Task<ActionResultResponse<string>> UpdateEventTranslation()
            {
                foreach (var eventTranslation in eventMeta.EventTranslations)
                {
                    //var isNameExists = await _eventTranslationRepository.CheckExists( info.Id,
                    //    eventTranslation.LanguageId, eventTranslation.Name);
                    //if (isNameExists)
                    //    return new ActionResultResponse(-4, _websiteEventResourceService.GetString("Event name: \"{0}\" already exists."));

                    var eventTranslationInfo =
                        await _eventTranslationRepository.GetInfo(info.Id, eventTranslation.LanguageId);
                    if (eventTranslationInfo != null)
                    {
                        eventTranslationInfo.Name = eventTranslation.Name.Trim();
                        eventTranslationInfo.MetaTitle = eventTranslation.MetaTitle?.Trim();
                        eventTranslationInfo.Description = eventTranslation.Description?.Trim();
                        eventTranslationInfo.MetaDescription = eventTranslation.MetaDescription?.Trim();
                        eventTranslationInfo.Content = eventTranslation.Content?.Trim();
                        eventTranslationInfo.UnsignName = eventTranslation.Name?.StripVietnameseChars().ToUpper();
                        eventTranslationInfo.Address = eventTranslation.Address?.Trim();
                        if (!string.IsNullOrEmpty(eventTranslation.SeoLink))
                        {
                            eventTranslationInfo.SeoLink = eventTranslation.SeoLink.ToUrlString();
                        }
                        else
                        {
                            eventTranslationInfo.SeoLink = eventTranslation.Name.ToUrlString();
                        }

                        // Check Seolink exists.
                        var isSeolinkExists = await _eventTranslationRepository.CheckSeoLinkExists(eventId,
                            eventTranslation.LanguageId, eventTranslationInfo.SeoLink);
                        if (isSeolinkExists)
                        {
                            return new ActionResultResponse<string>(-5,
                                _websiteEventResourceService.GetString("Seo link: \"{0}\" already exists.",
                                    eventTranslationInfo.SeoLink));
                        }

                        await _eventTranslationRepository.Update(eventTranslationInfo);
                    }
                    else
                    {
                        var eventTranslationInsert = new EventTranslation
                        {
                            EventId = eventId,
                            LanguageId = eventTranslation.LanguageId.Trim(),
                            Name = eventTranslation.Name.Trim(),
                            MetaTitle = eventTranslation.MetaTitle?.Trim(),
                            Description = eventTranslation.Description?.Trim(),
                            MetaDescription = eventTranslation.MetaDescription?.Trim(),
                            Content = eventTranslation.Content?.Trim(),
                            Address = eventTranslation.Address?.Trim(),
                            UnsignName = eventTranslation.Name.StripVietnameseChars().ToUpper()
                        };

                        if (!string.IsNullOrEmpty(eventTranslation.SeoLink))
                        {
                            eventTranslationInsert.SeoLink = eventTranslation.SeoLink.ToUrlString();
                        }
                        else
                        {
                            eventTranslationInsert.SeoLink = eventTranslation.Name.ToUrlString();
                        }

                        // Check Seolink exists.
                        var isSeolinkExists = await _eventTranslationRepository.CheckSeoLinkExists(eventId,
                            eventTranslation.LanguageId, eventTranslationInsert.SeoLink);
                        if (isSeolinkExists)
                        {
                            return new ActionResultResponse<string>(-6,
                                _websiteEventResourceService.GetString("Seo link: \"{0}\" already exists.",
                                    eventTranslationInsert.SeoLink));
                        }

                        await _eventTranslationRepository.Insert(eventTranslationInsert);
                    }

                    var eventTagInsert = new TagSubjectViewModel
                    {
                        TenantId = tenantId,
                        CreatorId = lastUpdateUserId,
                        CreatorFullName = lastUpdateFullName,
                        CreatorAvata = lastUpdateAvatar,
                        Type = TagType.Event,
                        SubjectId = eventId,
                        LanguageId = eventTranslation.LanguageId.Trim(),
                        Tags = eventTranslation.Tags
                    };
                    eventTags.Add(eventTagInsert);

                }

                var resultTag = await new HttpClientService()
                    .PostAsync<ActionResultResponse>($"{apiUrls.CoreApiUrl}/tags", eventTags);

                return new ActionResultResponse<string>(1,
                    _websiteEventResourceService.GetString("Update event translation successful."), string.Empty, info.ConcurrencyStamp);

            }
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string eventId)
        {
            var info = await _eventRepository.GetInfo(eventId);
            if (info == null)
                return new ActionResultResponse(-1, _websiteEventResourceService.GetString("Event does not exists. Please try again."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.Status != ApproverStatus.Draft && info.Status != ApproverStatus.Decline)
                return new ActionResultResponse(-1, _websiteEventResourceService.GetString("Event is used. Please try again."));

            var infoReg = await _registerRepository.GetInfoByEventId(eventId);
            if (infoReg.Count > 0)
                return new ActionResultResponse(-1, _websiteEventResourceService.GetString("event is already exists. Please try again."));

            var result = await _eventRepository.Delete(eventId);
            return new ActionResultResponse(result, _websiteEventResourceService.GetString("Delete event successful."));
        }

        public async Task<ActionResultResponse<EventDetailViewModel>> GetDetail(string tenantId, string eventId)
        {
            var info = await _eventRepository.GetInfo(eventId);
            if (info == null)
                return new ActionResultResponse<EventDetailViewModel>(-1, _websiteEventResourceService.GetString("Event does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<EventDetailViewModel>(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var apiUrls = _configuration.GetApiUrl();
            if (apiUrls == null)
                return new ActionResultResponse<EventDetailViewModel>(-5,
                    _sharedResourceService.GetString(
                        "Missing some configuration. Please contact with administrator."));

            var resultTag = await new HttpClientService()
                .GetAsync<List<SubjectTagViewModel>>($"{apiUrls.CoreApiUrl}/tags/{tenantId}/{eventId}");

            var eventTranslations = await _eventTranslationRepository.GetByEventId(eventId);

            var eventDetail = new EventDetailViewModel
            {
                Id = info.Id,
                ConcurrencyStamp = info.ConcurrencyStamp,
                CreateTime = info.CreateTime,
                CreatorId = info.CreatorId,
                CreatorFullName = info.CreatorFullName,
                CreatorAvatar = info.CreatorAvatar,
                IsActive = info.IsActive,
                StartDate = info.StartDate,
                EndDate = info.EndDate,
                Thumbnail = info.Thumbnail,
                Status = info.Status,
                SentTime = info.SentTime,
                ApprovedTime = info.ApprovedTime,
                ApproverId = info.ApproverId,
                ApproverFullName = info.ApproverFullName,
                ApproverAvatar = info.ApproverAvatar,
                DeclineReason = info.DeclineReason,
                LimitedUsers = info.LimitedUsers,
                IsAllowRegisterWhenOverload = info.IsAllowRegisterWhenOverload,
                LimitedAccompanyPersons = info.LimitedAccompanyPersons,
                StaffOnly = info.StaffOnly,
                IsAllowRegister = info.IsAllowRegister,
                IsAllowAccompanyPerson = info.IsAllowAccompanyPerson,

                EventTranslations = eventTranslations?.Select(x => new EventTranslationViewModel
                {
                    LanguageId = x.LanguageId,
                    Name = x.Name,
                    MetaTitle = x.MetaTitle,
                    UnsignName = x.UnsignName,
                    Description = x.Description,
                    MetaDescription = x.MetaDescription,
                    SeoLink = x.SeoLink,
                    Content = x.Content,
                    Address = x.Address,
                    Tags = resultTag?.Where(t => t.LanguageId == x.LanguageId).ToList()
                }).ToList()
            };
            return new ActionResultResponse<EventDetailViewModel>
            {
                Code = 1,
                Data = eventDetail
            };
        }

        public async Task<ActionResultResponse> DeleteListEvent(List<string> listeventId)
        {
            foreach (var eventId in listeventId)
            {
                var result = await _eventRepository.Delete(eventId);
                if (result < 0)
                    return new ActionResultResponse(result,
                        _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));
            }
            return new ActionResultResponse(1, _websiteEventResourceService.GetString("Delete event successful."));
        }

        public async Task<ActionResultResponse> ChangeEventStatus(string tenantId, string userId, string fullName, string avatar,
            string eventId, ApproverStatus status, string declineReason)
        {
            var info = await _eventRepository.GetInfo(eventId);
            if (info == null)
                return new ActionResultResponse(-1, _websiteEventResourceService.GetString("Event does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2,
                    _websiteEventResourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.Status == ApproverStatus.Approved)
                return new ActionResultResponse(-3,
                    _websiteEventResourceService.GetString("Event has been approved. You can not change status of this event."));

            if (status == ApproverStatus.Decline && string.IsNullOrEmpty(declineReason))
                return new ActionResultResponse(-4,
                    _websiteEventResourceService.GetString("Please enter decline reason."));

            var oldStatus = info.Status;

            if (status == ApproverStatus.Pending)
            {
                info.Status = ApproverStatus.Pending;
                info.SentTime = DateTime.Now;
            }
            else if (status == ApproverStatus.Approved)
            {
                info.Status = ApproverStatus.Approved;
                info.ApprovedTime = DateTime.Now;
                info.ApproverId = userId;
                info.ApproverFullName = fullName;
                info.ApproverAvatar = avatar;
            }
            else if (status == ApproverStatus.Decline)
            {
                info.Status = ApproverStatus.Decline;
                info.DeclineReason = declineReason;
            }

            // Send notification to approver.
            if ((oldStatus == ApproverStatus.Draft || oldStatus == ApproverStatus.Decline)
                && status == ApproverStatus.Pending)
            {
                await SendNotificationToApprover(tenantId, userId, fullName, avatar, eventId);
            }

            // Send notification to creator.
            if ((oldStatus == ApproverStatus.Pending || oldStatus == ApproverStatus.Decline)
                && (status == ApproverStatus.Approved || status == ApproverStatus.Decline))
            {
                var isApprove = status == ApproverStatus.Approved;
                SendApproveMessageToCreator(tenantId, userId, fullName, avatar, eventId,
                    info.CreatorId,
                    isApprove);
            }

            var result = await _eventRepository.Update(info);

            if (result <= 0)
                return new ActionResultResponse(result, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            return new ActionResultResponse(result, _websiteEventResourceService.GetString("Update status event successful."));
        }

        public async Task<List<ActionResultResponse>> ChangeListEventStatus(string tenantId, List<string> listeventId, ApproverStatus status, string declineReason, string userId,
            string fullName, string avatar)
        {
            var listResult = new List<ActionResultResponse>();
            foreach (var eventId in listeventId)
            {
                var result = await ChangeEventStatus(tenantId, userId, fullName, avatar, eventId,
                    status, declineReason);
                listResult.Add(result);
            }
            return listResult;
        }

        public async Task<ActionResultResponse<EventShowClientViewModel>> GetEventDetailShowClient(string tenantId, string languageId, string seoLink)
        {
            var eventInfo = await _eventRepository.GetDetailClient(tenantId, languageId, seoLink);
            if (eventInfo == null)
                return new ActionResultResponse<EventShowClientViewModel>
                {
                    Code = -1,
                };

            var listEventDay = await _eventDayRepository.Search(languageId, eventInfo.Id, true, 1, int.MaxValue, out int totalRows);
            var listInvitations = await _registerRepository.SearchClient(eventInfo.Id, languageId, null);

            var albumIds = await _eventAlbumRepository.Search(tenantId, eventInfo.Id, true, 1, short.MaxValue, out var totalAlbumRows);

            var apiUrls = _configuration.GetApiUrl();
            var albums = await new HttpClientService()
                    .PostAsync<SearchResult<AlbumWithItemViewModel>>($"{apiUrls.WebsiteApiUrl}/albums/{tenantId}/album-width-item/{languageId}", albumIds);

            var eventShowClient = new EventShowClientViewModel
            {
                EventInfo = eventInfo,
                EventDays = listEventDay,
                Invitations = listInvitations,
                Albums = albums?.Items,
            };

            return new ActionResultResponse<EventShowClientViewModel>
            {
                Data = eventShowClient
            };
        }

        private async Task SendNotificationToApprover(string tenantId, string creatorId, string creatorFullName,
            string creatorAvatar,
            string eventId)
        {
            // Check if is send. Send event to approve for approve.
            var apiUrls = _configuration.GetApiUrl();
            if (apiUrls != null)
            {
                var listApprover = await new HttpClientService()
                      .GetAsync<List<ApproverConfigViewModel>>($"{apiUrls.CoreApiUrl}/approver-configs/search/{tenantId}/{(int)ApproverConfigType.Event}");

                if (listApprover != null && listApprover.Any())
                {
                    var notificationHelper = new NotificationHelper();
                    foreach (var approver in listApprover)
                    {
                        var notificationEvent = new NotificationEvent
                        {
                            TenantId = tenantId,
                            Title = $"<b>{creatorFullName}</b> {{send an event and waiting you for approve.}}",
                            Content = "",
                            SenderId = creatorId,
                            SenderFullName = creatorFullName,
                            SenderAvatar = creatorAvatar,
                            Url = $"/event/detail/{eventId}",
                            ReceiverId = approver.UserId,
                            Type = NotificationType.Info,
                            IsSystem = false
                        };
                        notificationHelper.Send(notificationEvent);
                    }
                }

            }
        }

        private void SendApproveMessageToCreator(string tenantId, string senderId, string senderFullName, string senderAvatar,
            string eventId, string receiverId, bool isApprove)
        {
            // TODO: Update for send with rabbitMQ later.
            var message = $"<b>{senderFullName}</b> {{{(isApprove ? "approved" : "declined")} your event.}}";
            var notification = new NotificationEvent
            {
                TenantId = tenantId,
                Title = message,
                Content = "",
                SenderId = senderId,
                SenderFullName = senderFullName,
                SenderAvatar = senderAvatar,
                Url = $"/event/detail/{eventId}",
                ReceiverId = receiverId,
                Type = NotificationType.Info,
                IsSystem = false
            };
            //_eventBus.Publish(notification);

            //var apiUrls = _configuration.GetApiUrl();
            //if (apiUrls != null)
            //{
            //    var httpClientService = new HttpClientService();
            //    var resultNotification = await httpClientService
            //        .PostAsync<int>($"{apiUrls.NotificationApiUrl}notifications/send",
            //            notification);
            //}
            new NotificationHelper().Send(notification);
        }
    }
}
