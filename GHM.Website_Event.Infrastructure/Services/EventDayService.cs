using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Website.Event.Domain.IRepository;
using GHM.Website.Event.Domain.IServices;
using GHM.Website.Event.Domain.ModelMetas;
using GHM.Website.Event.Domain.Models;
using GHM.Website.Event.Domain.Resources;
using GHM.Website.Event.Domain.ViewModels;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;

namespace GHM.Website.Event.Infrastructure.Services
{
    public class EventDayService : IEventDayService
    {
        private readonly IEventDayRepository _eventDayRepository;
        private readonly IEventDayTranslationRepository _eventDayTranslationRepository;
        private readonly IEventRepository _eventRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWebsiteEventResource> _websiteEventResourceService;
        public EventDayService(IEventDayRepository eventDayRepository,
            IEventDayTranslationRepository eventDayTranslationRepository,
            IEventRepository eventRepository,
            IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWebsiteEventResource> websiteEventResourceService
        )
        {
            _eventDayRepository = eventDayRepository;
            _eventDayTranslationRepository = eventDayTranslationRepository;
            _eventRepository = eventRepository;
            _sharedResourceService = sharedResourceService;
            _websiteEventResourceService = websiteEventResourceService;
        }

        public async Task<SearchResult<EventDayViewModel>> Search(string eventId, string languageId, bool? isActive, int page, int pageSize)
        {
            var items = await _eventDayRepository.Search(languageId, eventId, isActive, page, pageSize, out var totalRows);
            return new SearchResult<EventDayViewModel>
            {
                TotalRows = totalRows,
                Items = items
            };
        }

        public async Task<ActionResultResponse<string>> Insert(string eventId, string creatorId, string creatorFullName, string creatorAvatar, EventDayMeta eventDayMeta)
        {
            var infoEvent = await _eventRepository.GetInfo(eventId);
            if (infoEvent == null)
                return new ActionResultResponse<string>(-1, _websiteEventResourceService.GetString("Event does not exists."));

            if (infoEvent.StartDate.HasValue && infoEvent.EndDate.HasValue)
            {
                if (DateTime.Compare(eventDayMeta.EventDate, infoEvent.StartDate.Value) < 0)
                {
                    return new ActionResultResponse<string>(-2, _websiteEventResourceService.GetString("Event day smaller than start time."));
                }

                if (DateTime.Compare(eventDayMeta.EventDate, infoEvent.EndDate.Value) > 0)
                {
                    return new ActionResultResponse<string>(-3, _websiteEventResourceService.GetString("Event day greater than end time."));
                }
            }

            if (eventDayMeta.StartHour.HasValue)
            {
                if ((int)(eventDayMeta.StartHour.Value) < 0 || (int)(eventDayMeta.StartHour.Value) > 24)
                {
                    return new ActionResultResponse<string>(-4, _websiteEventResourceService.GetString("Start hour invalid input."));
                }
            }

            if (eventDayMeta.EndHour.HasValue)
            {
                if ((int)(eventDayMeta.EndHour.Value) < 0 || (int)(eventDayMeta.EndHour.Value) > 24)
                {
                    return new ActionResultResponse<string>(-5, _websiteEventResourceService.GetString("End hour invalid input."));
                }
            }

            if (eventDayMeta.StartMinute.HasValue)
            {
                if ((int)(eventDayMeta.StartMinute.Value) < 0 || (int)(eventDayMeta.StartMinute.Value) > 60)
                {
                    return new ActionResultResponse<string>(-6, _websiteEventResourceService.GetString("Start minute invalid input."));
                }
            }

            if (eventDayMeta.EndMinute.HasValue)
            {
                if ((int)(eventDayMeta.EndMinute.Value) < 0 || (int)(eventDayMeta.EndMinute.Value) > 60)
                {
                    return new ActionResultResponse<string>(-7, _websiteEventResourceService.GetString("End minute invalid input."));
                }
            }


            var eventDayId = Guid.NewGuid().ToString();
            var eventDay = new EventDay
            {
                Id = eventDayId,
                ConcurrencyStamp = eventDayId,
                IsActive = eventDayMeta.IsActive,
                StartHour = eventDayMeta.StartHour,
                StartMinute = eventDayMeta.StartMinute,
                EndHour = eventDayMeta.EndHour,
                EndMinute = eventDayMeta.EndMinute,
                LimitedUsers = eventDayMeta.LimitedUsers,
                StaffOnly = eventDayMeta.StaffOnly,
                EventDate = eventDayMeta.EventDate,
                IsAllowAccompanyPerson = eventDayMeta.IsAllowAccompanyPerson,
                LimitedAccompanyPersons = eventDayMeta.LimitedAccompanyPersons,
                EventId = eventId,
                CreatorId = creatorId,
                CreatorFullName = creatorFullName,
                CreatorAvatar = creatorAvatar
            };

            var result = await _eventDayRepository.Insert(eventDay);

            if (result <= 0)
                return new ActionResultResponse<string>(result,
                    _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));


            #region insert Translation.
            if (eventDayMeta.EventDayTranslations.Count > 0)
            {
                var resultInsertTranslation = await InsertEventDayTranslation();
                if (resultInsertTranslation.Code <= 0)
                    return resultInsertTranslation;
            }
            #endregion

            return new ActionResultResponse<string>(1, _websiteEventResourceService.GetString("Add new event day successful."),
                string.Empty, eventId);

            #region Local functions
            async Task<ActionResultResponse<string>> InsertEventDayTranslation()
            {
                var eventDayTranslations = new List<EventDayTranslation>();
                foreach (var eventDayTranslation in eventDayMeta.EventDayTranslations)
                {
                    //// Check name exists.
                    //var isNameExists = await _eventDayTranslationRepository.CheckExists(eventId,
                    //    eventDayTranslation.LanguageId, eventDayTranslation.Name);
                    // if (isNameExists)
                    // {
                    //     await RollbackInsertEventDay();
                    //     return new ActionResultResponse<string>(-2,
                    //         _websiteEventResourceService.GetString("Event name: \"{0}\" already exists.",
                    //             eventDayTranslation.Name));
                    // }

                    var eventDayTranslationInsert = new EventDayTranslation
                    {
                        EventDayId = eventDayId,
                        LanguageId = eventDayTranslation.LanguageId.Trim(),
                        Name = eventDayTranslation.Name.Trim(),
                        Description = eventDayTranslation.Description?.Trim(),
                        Address = eventDayTranslation.Address?.Trim()
                    };

                    eventDayTranslations.Add(eventDayTranslationInsert);
                }

                var resultTranslation = await _eventDayTranslationRepository.Inserts(eventDayTranslations);
                if (resultTranslation > 0)
                    return new ActionResultResponse<string>(resultTranslation,
                        _websiteEventResourceService.GetString("Add new event day translation successful."));

                await RollbackInsertEventDayTranslation();
                await RollbackInsertEventDay();

                return new ActionResultResponse<string>(-4,
                    _websiteEventResourceService.GetString("Can not insert event day translation. Please contact with administrator."));
            }

            async Task RollbackInsertEventDay()
            {
                await _eventDayRepository.ForceDelete(eventId);
            }

            async Task RollbackInsertEventDayTranslation()
            {
                await _eventDayTranslationRepository.Delete(eventId);
            }

            #endregion Local functions
        }

        public async Task<ActionResultResponse> Update(string eventId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string eventDayId, EventDayMeta eventDayMeta)
        {
            var infoEvent = await _eventRepository.GetInfo(eventId);
            if (infoEvent == null)
                return new ActionResultResponse(-1, _websiteEventResourceService.GetString("Event does not exists."));

            if (infoEvent.StartDate.HasValue && infoEvent.EndDate.HasValue)
            {
                if (DateTime.Compare(eventDayMeta.EventDate, infoEvent.StartDate.Value) < 0)
                {
                    return new ActionResultResponse(-2, _websiteEventResourceService.GetString("Event day smaller than start time."));
                }

                if (DateTime.Compare(eventDayMeta.EventDate, infoEvent.EndDate.Value) > 0)
                {
                    return new ActionResultResponse(-3, _websiteEventResourceService.GetString("Event day greater than end time."));
                }
            }

            if (eventDayMeta.StartHour.HasValue)
            {
                if ((int)(eventDayMeta.StartHour.Value) < 0 || (int)(eventDayMeta.StartHour.Value) > 24)
                {
                    return new ActionResultResponse(-4, _websiteEventResourceService.GetString("Start hour invalid input."));
                }
            }

            if (eventDayMeta.EndHour.HasValue)
            {
                if ((int)(eventDayMeta.EndHour.Value) < 0 || (int)(eventDayMeta.EndHour.Value) > 24)
                {
                    return new ActionResultResponse(-5, _websiteEventResourceService.GetString("End hour invalid input."));
                }
            }

            if (eventDayMeta.StartMinute.HasValue)
            {
                if ((int)(eventDayMeta.StartMinute.Value) < 0 || (int)(eventDayMeta.StartMinute.Value) > 60)
                {
                    return new ActionResultResponse(-6, _websiteEventResourceService.GetString("Start minute invalid input."));
                }
            }

            if (eventDayMeta.EndMinute.HasValue)
            {
                if ((int)(eventDayMeta.EndMinute.Value) < 0 || (int)(eventDayMeta.EndMinute.Value) > 60)
                {
                    return new ActionResultResponse(-7, _websiteEventResourceService.GetString("End minute invalid input."));
                }
            }

            var info = await _eventDayRepository.GetInfo(eventDayId);
            if (info == null)
                return new ActionResultResponse(-8, _websiteEventResourceService.GetString("Event day does not exists."));

            if (info.EventId != eventId)
                return new ActionResultResponse(-9,
                    _websiteEventResourceService.GetString("Event day does not exists. Please try again."));

            if (info.ConcurrencyStamp != eventDayMeta.ConcurrencyStamp)
                return new ActionResultResponse(-10,
                    _websiteEventResourceService.GetString(
                        "The event day already updated by other people. you are not allowed to edit the event day information."));

            info.IsActive = eventDayMeta.IsActive;
            info.StartHour = eventDayMeta.StartHour;
            info.StartMinute = eventDayMeta.StartMinute;
            info.EndHour = eventDayMeta.EndHour;
            info.EndMinute = eventDayMeta.EndMinute;
            info.LimitedUsers = eventDayMeta.LimitedUsers;
            info.StaffOnly = eventDayMeta.StaffOnly;
            info.EventDate = eventDayMeta.EventDate;
            info.IsAllowAccompanyPerson = eventDayMeta.IsAllowAccompanyPerson;
            info.LimitedAccompanyPersons = eventDayMeta.LimitedAccompanyPersons;
            info.ConcurrencyStamp = Guid.NewGuid().ToString();
            info.LastUpdate = DateTime.Now;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;
            info.LastUpdateAvatar = lastUpdateAvatar;

            await _eventDayRepository.Update(info);

            #region translation.
            if (eventDayMeta.EventDayTranslations.Count > 0)
            {
                var resultUpdateTranslation = await UpdateEventDayTranslation();
                if (resultUpdateTranslation.Code <= 0)
                    return resultUpdateTranslation;
            }
            #endregion

            return new ActionResultResponse(1, _websiteEventResourceService.GetString("Update event day successful."));

            async Task<ActionResultResponse> UpdateEventDayTranslation()
            {
                foreach (var eventDayTranslation in eventDayMeta.EventDayTranslations)
                {
                    //var isNameExists = await _eventDayTranslationRepository.CheckExists(info.Id,
                    //    eventDayTranslation.LanguageId, eventDayTranslation.Name);
                    //if (isNameExists)
                    //    return new ActionResultResponse(-4, _websiteEventResourceService.GetString("Event day name: \"{0}\" already exists."));

                    var eventDayTranslationInfo =
                        await _eventDayTranslationRepository.GetInfo(info.Id, eventDayTranslation.LanguageId);
                    try
                    {
                        if (eventDayTranslationInfo != null)
                        {
                            eventDayTranslationInfo.Name = eventDayTranslation.Name.Trim();
                            eventDayTranslationInfo.Description = eventDayTranslation.Description?.Trim();
                            eventDayTranslationInfo.Address = eventDayTranslation.Address?.Trim();

                            await _eventDayTranslationRepository.Update(eventDayTranslationInfo);
                        }
                        else
                        {
                            var eventDayTranslationInsert = new EventDayTranslation
                            {
                                EventDayId = eventDayId,
                                LanguageId = eventDayTranslation.LanguageId.Trim(),
                                Name = eventDayTranslation.Name.Trim(),
                                Description = eventDayTranslation.Description?.Trim(),
                                Address = eventDayTranslation.Address?.Trim()
                            };

                            await _eventDayTranslationRepository.Insert(eventDayTranslationInsert);
                        }
                    }
                    catch (Exception e)
                    {
                        Console.WriteLine(e);
                        throw;
                    }
                }
                return new ActionResultResponse(1,
                    _websiteEventResourceService.GetString("Update event day translation successful."));
            }

        }

        public async Task<ActionResultResponse> Delete(string eventId, string eventDayId)
        {
            var infoEvent = await _eventRepository.GetInfo(eventId);
            if (infoEvent == null)
                return new ActionResultResponse(-1, _websiteEventResourceService.GetString("Event does not exists."));

            var info = await _eventDayRepository.GetInfo(eventDayId);
            if (info == null)
                return new ActionResultResponse(-2, _websiteEventResourceService.GetString("Event day does not exists. Please try again."));

            if (info.EventId != eventId)
                return new ActionResultResponse(-3, _sharedResourceService.GetString("Event day does not exists. Please try again."));

            var result = await _eventDayRepository.Delete(eventDayId);
            return new ActionResultResponse(result, _websiteEventResourceService.GetString("Delete event day successful."));
        }

        public async Task<ActionResultResponse<EventDayDetailViewModel>> GetDetail(string eventId, string eventDayId)
        {
            var infoEvent = await _eventRepository.GetInfo(eventId);
            if (infoEvent == null)
                return new ActionResultResponse<EventDayDetailViewModel>(-1,
                    _websiteEventResourceService.GetString("Event does not exists."));

            var info = await _eventDayRepository.GetInfo(eventDayId);
            if (info == null)
                return new ActionResultResponse<EventDayDetailViewModel>(-2,
                    _websiteEventResourceService.GetString("Event day does not exists. Please try again."));

            if (info.EventId != eventId)
                return new ActionResultResponse<EventDayDetailViewModel>(-3,
                    _sharedResourceService.GetString("Event day does not exists. Please try again."));

            var eventDayTranslations = await _eventDayTranslationRepository.GetByEventDayId(eventDayId);

            var eventDayDetail = new EventDayDetailViewModel
            {
                Id = info.Id,
                EventId = info.EventId,
                IsActive = info.IsActive,
                TotalRegisters = info.TotalRegisters,
                TotalAccompanyPersons = info.TotalAccompanyPersons,
                StartHour = info.StartHour,
                StartMinute = info.StartMinute,
                EndHour = info.EndHour,
                EndMinute = info.EndMinute,
                ConcurrencyStamp = info.ConcurrencyStamp,
                LimitedUsers = info.LimitedUsers,
                StaffOnly = info.StaffOnly,
                EventDate = info.EventDate,
                IsAllowAccompanyPerson = info.IsAllowAccompanyPerson,
                LimitedAccompanyPersons = info.LimitedAccompanyPersons,

                EventDayTranslations = eventDayTranslations?.Select(x => new EventDayTranslationViewModel
                {
                    LanguageId = x.LanguageId,
                    Name = x.Name,
                    Description = x.Description,
                    Address = x.Address
                }).ToList()
            };
            return new ActionResultResponse<EventDayDetailViewModel>
            {
                Code = 1,
                Data = eventDayDetail
            };
        }
    }
}
