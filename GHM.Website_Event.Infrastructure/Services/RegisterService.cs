using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Extensions;
using GHM.Website.Event.Domain.IRepository;
using GHM.Website.Event.Domain.IServices;
using GHM.Website.Event.Domain.ModelMetas;
using GHM.Website.Event.Domain.Models;
using GHM.Website.Event.Domain.Resources;
using GHM.Website.Event.Domain.ViewModels;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.Services;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Event.Domain.Constants;
using Microsoft.Extensions.Configuration;

namespace GHM.Website.Event.Infrastructure.Services
{
    public class RegisterService : IRegisterService
    {
        private readonly IRegisterRepository _registerRepository;
        private readonly IEventDayRegisterRepository _eventDayRegisterRepository;
        private readonly IAccompanyPersonRepository _accompanyPersonRepository;
        private readonly IEventRepository _eventRepository;
        private readonly IEventDayRepository _eventDayRepository;
        private readonly IConfiguration _configuration;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWebsiteEventResource> _websiteEventResourceService;
        public RegisterService(IRegisterRepository registerRepository,
            IEventDayRegisterRepository eventDayRegisterRepository,
            IAccompanyPersonRepository accompanyPersonRepository,
            IEventRepository eventRepository,
            IEventDayRepository eventDayRepository,
            IConfiguration configuration,
            IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWebsiteEventResource> websiteEventResourceService
        )
        {
            _registerRepository = registerRepository;
            _eventDayRegisterRepository = eventDayRegisterRepository;
            _accompanyPersonRepository = accompanyPersonRepository;
            _eventRepository = eventRepository;
            _eventDayRepository = eventDayRepository;
            _configuration = configuration;
            _sharedResourceService = sharedResourceService;
            _websiteEventResourceService = websiteEventResourceService;
        }

        public async Task<SearchResult<RegisterSearchViewModel>> Search(string eventId, string languageId, string fullName, string phoneNumber,
            string email, string eventDayId, EventDayStatus? status, int page, int pageSize)
        {
            var items = await _registerRepository.Search(eventId, languageId, fullName, phoneNumber, email, eventDayId, status, null, page,
                pageSize, out var totalRows);
            foreach (var item in items)
            {
                item.EventDayRegisters = await _eventDayRegisterRepository.GetListEventDayRegister(item.Id, languageId, status);
            }

            return new SearchResult<RegisterSearchViewModel>
            {
                TotalRows = totalRows,
                Items = items
            };
        }

        public async Task<ActionResultResponse<string>> Insert(string eventId, string creatorId, string creatorFullName, string creatorAvatar,
            RegisterMeta registerMeta)
        {
            var infoEvent = await _eventRepository.GetInfo(eventId);
            if (infoEvent == null)
                return new ActionResultResponse<string>(-1, _websiteEventResourceService.GetString("Event does not exists. Please try again."));

            if (infoEvent.Status != ApproverStatus.Approved)
                return new ActionResultResponse<string>(-2, _websiteEventResourceService.GetString("Event not approved. Please try again."));

            var apiUrls = _configuration.GetApiUrl();
            if (apiUrls == null)
                return new ActionResultResponse<string>(-3,
                    _sharedResourceService.GetString(
                        "Missing some configuration. Please contact with administrator."));

            var registerId = Guid.NewGuid().ToString();
            var register = new Register
            {
                Id = registerId,
                ConcurrencyStamp = registerId,
                EventId = eventId,
                Note = registerMeta.Note,
                RegisterTime = DateTime.Now,
                IsStaff = registerMeta.IsStaff,
                CreatorId = creatorId,
                CreatorFullName = creatorFullName,
                CreatorAvatar = creatorAvatar,
                UserId = null,
                Role = registerMeta.Role,
                Avatar = registerMeta.Avatar,
            };

            switch (registerMeta.Role)
            {
                case RegisterRole.Employee:
                    if (!string.IsNullOrEmpty(registerMeta.UserId))
                    {
                        register.FullName = registerMeta.FullName;
                        register.PhoneNumber = registerMeta.PhoneNumber;
                        register.Email = registerMeta.Email;
                        register.Address = registerMeta.Address;
                        register.UserId = registerMeta.UserId;
                    }
                    break;

                case RegisterRole.Customer:
                    if (!string.IsNullOrEmpty(registerMeta.UserId))
                    {
                        var resultCustomer = await new HttpClientService()
                            .GetAsync<CustomerViewModel>($"{apiUrls.CustomerApiUrl}/Customers/{infoEvent.TenantId}/{registerMeta.UserId}");

                        register.FullName = resultCustomer.FullName;
                        register.PhoneNumber = resultCustomer.PhoneNumber;
                        register.Email = resultCustomer.Email;
                        register.Address = resultCustomer.Address;
                        register.UserId = registerMeta.UserId;
                    }
                    else
                    {
                        var resultCustomer = await new HttpClientService()
                            .GetAsync<string>($"{apiUrls.CustomerApiUrl}/Customers/GetCustomerId/{infoEvent.TenantId}/{registerMeta.FullName}/{registerMeta.PhoneNumber}/{registerMeta.Email}/{registerMeta.Address}");

                        register.FullName = registerMeta.FullName;
                        register.PhoneNumber = registerMeta.PhoneNumber;
                        register.Email = registerMeta.Email;
                        register.Address = registerMeta.Address;
                        register.UserId = resultCustomer;
                    }
                    break;

                case RegisterRole.WalkInGuest:
                case RegisterRole.Invitation:
                case RegisterRole.Professional:
                    register.FullName = registerMeta.FullName;
                    register.PhoneNumber = registerMeta.PhoneNumber;
                    register.Email = registerMeta.Email;
                    register.Address = registerMeta.Address;
                    break;
            }

            var isExists = await _registerRepository.CheckExists(registerId, eventId, register.FullName, register.PhoneNumber);
            if (isExists)
            {
                return new ActionResultResponse<string>(-4,
                       _websiteEventResourceService.GetString("Register name: \"{0}\" already exists.",
                           register.FullName));
            }

            var result = await _registerRepository.Insert(register);
            if (result <= 0)
                return new ActionResultResponse<string>(result,
                    _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            #region insertEventDayRegister.
            if (registerMeta.EventDayRegisters != null && registerMeta.EventDayRegisters.Any())
            {
                var resultInsertEventDayRegister = await InsertEventDayRegister();
                if (resultInsertEventDayRegister.Code <= 0)
                    return resultInsertEventDayRegister;
            }
            #endregion

            var listEventDay = await _eventDayRepository.GetListEvenDayByEventId(eventId);
            foreach (var eventDay in listEventDay)
            {
                await UpdateTotal(eventDay.Id);
            }

            return new ActionResultResponse<string>(1, _websiteEventResourceService.GetString("Add new register successful."),
                    string.Empty, eventId);

            async Task<ActionResultResponse<string>> InsertEventDayRegister()
            {
                var eventDayRegisters = new List<EventDayRegister>();
                foreach (var eventDayRegister in registerMeta.EventDayRegisters)
                {
                    var infoEventDay = await _eventDayRepository.GetInfo(eventDayRegister.EventDayId);

                    var isAllowAccompanyPerson = infoEventDay.IsAllowAccompanyPerson ?? infoEvent.IsAllowAccompanyPerson;
                    var limitedUsers = infoEventDay.LimitedUsers != null
                        ? infoEventDay.LimitedUsers
                        : infoEvent.LimitedUsers;
                    var limitedAccompanyUsers = infoEventDay.LimitedAccompanyPersons ?? infoEvent.LimitedAccompanyPersons;
                    var isAllowRegisterWhenOverload = infoEvent.IsAllowRegisterWhenOverload;

                    // neu ko bat cho dang ky vuot qua so nguoi
                    if (!isAllowRegisterWhenOverload)
                    {
                        if (limitedUsers > 0)
                        {
                            var userCount = infoEventDay.TotalRegisters + registerMeta.EventDayRegisters.Count;
                            if (userCount > limitedUsers)
                            {
                                return new ActionResultResponse<string>(-5,
                                    _websiteEventResourceService.GetString(
                                        "Limited users when overload. Please contact with administrator."));
                            }
                        }
                    }

                    var isEventDayRegisterExists =
                        await _eventDayRegisterRepository.CheckExists(eventDayRegister.EventDayId,
                            registerId);

                    if (isEventDayRegisterExists) continue;
                    var eventDayRegisterInsert = new EventDayRegister
                    {
                        RegisterId = registerId,
                        EventDayId = eventDayRegister.EventDayId,
                        Status = EventDayStatus.NotYet
                    };
                    eventDayRegisters.Add(eventDayRegisterInsert);

                    if (isAllowAccompanyPerson && eventDayRegister.AccompanyPersons != null && eventDayRegister.AccompanyPersons.Any())
                    {
                        var accompanyPersons = new List<AccompanyPerson>();
                        foreach (var accompanyPerson in eventDayRegister.AccompanyPersons)
                        {
                            if (limitedAccompanyUsers > 0)
                            {
                                var accompanyUserCount = eventDayRegister.AccompanyPersons.Count;
                                if (accompanyUserCount > limitedAccompanyUsers)
                                {
                                    return new ActionResultResponse<string>(-6,
                                        _websiteEventResourceService.GetString(
                                            "Accompany persons when overload. Please contact with administrator."));
                                }
                            }

                            var accompanyPersonInsert = new AccompanyPerson
                            {
                                Id = Guid.NewGuid().ToString(),
                                RegisterId = registerId,
                                FullName = accompanyPerson.FullName,
                                PhoneNumber = accompanyPerson.PhoneNumber,
                                EventDayId = eventDayRegister.EventDayId,
                                Status = EventDayStatus.NotYet
                            };
                            accompanyPersons.Add(accompanyPersonInsert);
                        }
                        await _accompanyPersonRepository.Inserts(accompanyPersons);
                    }

                }
                var resulteventDayRegister = await _eventDayRegisterRepository.Inserts(eventDayRegisters);
                if (resulteventDayRegister > 0)
                    return new ActionResultResponse<string>(resulteventDayRegister,
                        _websiteEventResourceService.GetString("Add new event day register successful."));

                await RollbackInsertEventDayRegister();
                await RollbackInsertRegister();
                return new ActionResultResponse<string>(-7,
                    _websiteEventResourceService.GetString(
                        "Can not insert event day register. Please contact with administrator."));
            }

            async Task RollbackInsertRegister()
            {
                await _registerRepository.Delete(registerId);
            }

            async Task RollbackInsertEventDayRegister()
            {
                await _eventDayRegisterRepository.DeleteByRegisterId(registerId);
            }

        }

        public async Task<ActionResultResponse> Update(string eventId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string registerId, RegisterMeta registerMeta)
        {
            var infoEvent = await _eventRepository.GetInfo(eventId);
            if (infoEvent == null)
                return new ActionResultResponse(-1, _websiteEventResourceService.GetString("Event does not exists. Please try again."));

            var info = await _registerRepository.GetInfo(registerId);
            if (info == null)
                return new ActionResultResponse(-1, _websiteEventResourceService.GetString("Register does not exists."));

            if (info.EventId != eventId)
                return new ActionResultResponse(-2,
                    _websiteEventResourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.ConcurrencyStamp != registerMeta.ConcurrencyStamp)
                return new ActionResultResponse(-3,
                    _websiteEventResourceService.GetString(
                        "The register already updated by other people. you are not allowed to edit the register information."));

            var apiUrls = _configuration.GetApiUrl();
            if (apiUrls == null)
                return new ActionResultResponse<string>(-4,
                    _sharedResourceService.GetString(
                        "Missing some configuration. Please contact with administrator."));

            switch (registerMeta.Role)
            {
                case RegisterRole.Employee:
                    if (!string.IsNullOrEmpty(registerMeta.UserId))
                    {
                        info.FullName = registerMeta.FullName;
                        info.PhoneNumber = registerMeta.PhoneNumber;
                        info.Email = registerMeta.Email;
                        info.Address = registerMeta.Address;
                        info.UserId = registerMeta.UserId;
                    }
                    break;

                case RegisterRole.Customer:
                    if (!string.IsNullOrEmpty(registerMeta.UserId))
                    {
                        var resultCustomer = await new HttpClientService()
                            .GetAsync<CustomerViewModel>($"{apiUrls.CustomerApiUrl}/Customers/{infoEvent.TenantId}/{registerMeta.UserId}");

                        info.FullName = resultCustomer.FullName;
                        info.PhoneNumber = resultCustomer.PhoneNumber;
                        info.Email = resultCustomer.Email;
                        info.Address = resultCustomer.Address;
                        info.UserId = registerMeta.UserId;
                        info.Avatar = registerMeta.Avatar;
                        info.Role = registerMeta.Role;
                    }
                    else
                    {
                        var resultCustomer = await new HttpClientService()
                            .GetAsync<string>($"{apiUrls.CustomerApiUrl}/Customers/GetCustomerId/{infoEvent.TenantId}/{registerMeta.FullName}/{registerMeta.PhoneNumber}/{registerMeta.Email}/{registerMeta.Address}");

                        info.FullName = registerMeta.FullName;
                        info.PhoneNumber = registerMeta.PhoneNumber;
                        info.Email = registerMeta.Email;
                        info.Address = registerMeta.Address;
                        info.UserId = resultCustomer;
                    }
                    break;

                case RegisterRole.WalkInGuest:
                case RegisterRole.Invitation:
                case RegisterRole.Professional:
                    info.FullName = registerMeta.FullName;
                    info.PhoneNumber = registerMeta.PhoneNumber;
                    info.Email = registerMeta.Email;
                    info.Address = registerMeta.Address;                   
                    break;
            }

            info.Avatar = registerMeta.Avatar;
            info.Role = registerMeta.Role;
            info.Note = registerMeta.Note;
            info.IsStaff = registerMeta.IsStaff;
            info.ConcurrencyStamp = Guid.NewGuid().ToString();
            info.LastUpdate = DateTime.Now;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;
            info.LastUpdateAvatar = lastUpdateAvatar;

            var isExists =
                await _registerRepository.CheckExists(registerId, eventId, info.FullName, info.PhoneNumber);
            if (isExists)
            {
                return new ActionResultResponse<string>(-5,
                    _websiteEventResourceService.GetString("Register name: \"{0}\" already exists.",
                        info.FullName));
            }

            await _registerRepository.Update(info);

            #region UpdateEventDayRegister.
            if (registerMeta.EventDayRegisters.Count > 0)
            {
                var resultUpdateEventDayRegister = await UpdateEventDayRegister();
                if (resultUpdateEventDayRegister.Code <= 0)
                    return resultUpdateEventDayRegister;
            }
            #endregion

            var listEventDay = await _eventDayRepository.GetListEvenDayByEventId(eventId);
            foreach (var eventDay in listEventDay)
            {
                await UpdateTotal(eventDay.Id);
            }
            return new ActionResultResponse(1, _websiteEventResourceService.GetString("Update register successful."));

            async Task<ActionResultResponse<string>> UpdateEventDayRegister()
            {
                await _eventDayRegisterRepository.DeleteByRegisterId(registerId);
                await _accompanyPersonRepository.DeleteByRegisterId(registerId);

                var eventDayRegisters = new List<EventDayRegister>();
                foreach (var eventDayRegister in registerMeta.EventDayRegisters)
                {
                    var infoEventDay = await _eventDayRepository.GetInfo(eventDayRegister.EventDayId);

                    var isAllowAccompanyPerson = infoEventDay.IsAllowAccompanyPerson ?? infoEvent.IsAllowAccompanyPerson;
                    var limitedUsers = infoEventDay.LimitedUsers ?? infoEvent.LimitedUsers;
                    var limitedAccompanyUsers = infoEventDay.LimitedAccompanyPersons ?? infoEvent.LimitedAccompanyPersons;
                    var isAllowRegisterWhenOverload = infoEvent.IsAllowRegisterWhenOverload;

                    // neu ko bat cho dang ky vuot qua so nguoi
                    if (!isAllowRegisterWhenOverload)
                    {
                        if (limitedUsers > 0)
                        {
                            var userCount = infoEventDay.TotalRegisters + registerMeta.EventDayRegisters.Count;
                            if (userCount > limitedUsers)
                            {
                                return new ActionResultResponse<string>(-6,
                                    _websiteEventResourceService.GetString(
                                        "Limited users when overload. Please contact with administrator."));
                            }
                        }
                    }

                    var isEventDayRegisterExists =
                        await _eventDayRegisterRepository.CheckExists(eventDayRegister.EventDayId,
                            registerId);

                    if (isEventDayRegisterExists) continue;
                    var eventDayRegisterInsert = new EventDayRegister
                    {
                        RegisterId = registerId,
                        EventDayId = eventDayRegister.EventDayId,
                        Status = EventDayStatus.NotYet
                    };
                    eventDayRegisters.Add(eventDayRegisterInsert);

                    if (isAllowAccompanyPerson)
                    {
                        var accompanyPersons = new List<AccompanyPerson>();
                        foreach (var accompanyPerson in eventDayRegister.AccompanyPersons)
                        {
                            if (limitedAccompanyUsers > 0)
                            {
                                var accompanyUserCount = eventDayRegister.AccompanyPersons.Count;
                                if (accompanyUserCount > limitedAccompanyUsers)
                                {
                                    return new ActionResultResponse<string>(-7,
                                        _websiteEventResourceService.GetString(
                                            "Accompany persons when overload. Please contact with administrator."));
                                }
                            }

                            var accompanyPersonInsert = new AccompanyPerson
                            {
                                Id = Guid.NewGuid().ToString(),
                                RegisterId = registerId,
                                FullName = accompanyPerson.FullName,
                                PhoneNumber = accompanyPerson.PhoneNumber,
                                EventDayId = eventDayRegister.EventDayId,
                                Status = EventDayStatus.NotYet
                            };
                            accompanyPersons.Add(accompanyPersonInsert);
                        }

                        await _accompanyPersonRepository.Inserts(accompanyPersons);
                    }

                }
                var resulteventDayRegister = await _eventDayRegisterRepository.Inserts(eventDayRegisters);
                if (resulteventDayRegister > 0)
                    return new ActionResultResponse<string>(resulteventDayRegister,
                        _websiteEventResourceService.GetString("Add new event day register successful."));

                return new ActionResultResponse<string>(-8,
                    _websiteEventResourceService.GetString(
                        "Can not insert event day register. Please contact with administrator."));
            }
        }

        public async Task<ActionResultResponse> Delete(string eventId, string registerId)
        {
            var infoEvent = await _eventRepository.GetInfo(eventId);
            if (infoEvent == null)
                return new ActionResultResponse(-1, _websiteEventResourceService.GetString("Event does not exists. Please try again."));

            var info = await _registerRepository.GetInfo(registerId);
            if (info == null)
                return new ActionResultResponse(-2, _websiteEventResourceService.GetString("Register does not exists. Please try again."));

            if (infoEvent.StartDate.HasValue)
            {
                if (DateTime.Compare(DateTime.Now, infoEvent.StartDate.Value) > 0)
                {
                    return new ActionResultResponse(-3, _websiteEventResourceService.GetString("Event is start.Please try again."));
                }
            }

            await _eventDayRegisterRepository.DeleteByRegisterId(registerId);
            await _accompanyPersonRepository.DeleteByRegisterId(registerId);

            var result = await _registerRepository.Delete(registerId);

            var listEventDay = await _eventDayRepository.GetListEvenDayByEventId(eventId);
            foreach (var eventDay in listEventDay)
            {
                await UpdateTotal(eventDay.Id);
            }

            return new ActionResultResponse(result, _websiteEventResourceService.GetString("Delete register successful."));
        }

        public async Task<ActionResultResponse<RegisterDetailViewModel>> GetDetail(string eventId, string registerId, string langaugeId)
        {
            var infoEvent = await _eventRepository.GetInfo(eventId);
            if (infoEvent == null)
                return new ActionResultResponse<RegisterDetailViewModel>(-1,
                    _websiteEventResourceService.GetString("Event does not exists. Please try again."));

            var info = await _registerRepository.GetInfo(registerId);
            if (info == null)
                return new ActionResultResponse<RegisterDetailViewModel>(-2,
                    _websiteEventResourceService.GetString("Register does not exists. Please try again."));

            var eventDayRegisters =
                await _eventDayRegisterRepository.GetListEventDaysRegisterDetail(eventId, registerId, langaugeId);

            if (eventDayRegisters != null && eventDayRegisters.Any())
            {
                // Get list accompany person.
                var accompanyPersons = await _accompanyPersonRepository.GetByRegisterId(registerId);

                foreach (var eventDayRegister in eventDayRegisters)
                {
                    var accompanyPersonDays = accompanyPersons.Where(x => x.EventDayId == eventDayRegister.EventDayId);
                    eventDayRegister.AccompanyPersons = accompanyPersonDays.ToList();
                }
            }

            var registerDetail = new RegisterDetailViewModel
            {
                Id = info.Id,
                ConcurrencyStamp = info.ConcurrencyStamp,
                EventId = eventId,
                FullName = info.FullName,
                Email = info.Email,
                PhoneNumber = info.PhoneNumber,
                Address = info.Address,
                Note = info.Note,
                UserId = info.UserId,
                RegisterTime = info.RegisterTime,
                IsStaff = info.IsStaff,
                Avatar = info.Avatar,
                Role = info.Role,
                EventDayRegisters = eventDayRegisters
            };
            return new ActionResultResponse<RegisterDetailViewModel>
            {
                Code = 1,
                Data = registerDetail
            };
        }

        public async Task<SearchResult<AccompanyPersonSearchViewModel>> SearchAccompanyPersons(string eventId, string registerId, string languageId)
        {
            var infoEvent = await _eventRepository.GetInfo(eventId);
            if (infoEvent == null)
                return new SearchResult<AccompanyPersonSearchViewModel>(-1, _websiteEventResourceService.GetString("Event does not exists. Please try again."));

            var items = await _accompanyPersonRepository.Search(registerId, languageId);
            return new SearchResult<AccompanyPersonSearchViewModel>
            {
                Items = items
            };

        }

        public async Task<ActionResultResponse> UpdateStatusEventDayRegister(string eventId, string eventDayId, string registerId, EventDayStatus status)
        {
            var infoEvent = await _eventRepository.GetInfo(eventId);
            if (infoEvent == null)
                return new ActionResultResponse(-1,
                    _websiteEventResourceService.GetString("Event does not exists. Please try again."));

            await _eventDayRegisterRepository.UpdateStatus(eventDayId, registerId, status);

            return new ActionResultResponse(1, _websiteEventResourceService.GetString("Update status successful."));
        }

        public async Task<ActionResultResponse> UpdateStatusAccompanyPerson(string eventId, string id, EventDayStatus status)
        {
            var infoEvent = await _eventRepository.GetInfo(eventId);
            if (infoEvent == null)
                return new ActionResultResponse(-1,
                    _websiteEventResourceService.GetString("Event does not exists. Please try again."));

            await _accompanyPersonRepository.UpdateStatus(id, status);

            return new ActionResultResponse(1, _websiteEventResourceService.GetString("Update status successful."));
        }

        private async Task<int> UpdateTotal(string eventDayId)
        {
            var totalRegisters = await _eventDayRegisterRepository.CountByEventDayId(eventDayId);
            var totalAccompanyPersons = await _accompanyPersonRepository.CountByEventDayId(eventDayId);
            var result = await _eventDayRepository.UpdateTotal(eventDayId, totalRegisters, totalAccompanyPersons);
            return result;
        }

    }
}
