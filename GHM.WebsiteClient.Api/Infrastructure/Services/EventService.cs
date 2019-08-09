using Dapper;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.WebsiteClient.Api.Domain.Constants;
using GHM.WebsiteClient.Api.Domain.IServices;
using GHM.WebsiteClient.Api.Domain.ModelMetas;
using GHM.WebsiteClient.Api.Domain.Models;
using GHM.WebsiteClient.Api.Domain.Resources;
using GHM.WebsiteClient.Api.Domain.ViewModels;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Infrastructure.Services
{
    public class EventService : IEventService
    {
        private readonly string _connectionString;
        private readonly ILogger<EventService> _logger;
        private readonly IResourceService<GhmWebsiteResource> _websiteResourceService;
        public EventService(string connectionString, ILogger<EventService> logger, IResourceService<GhmWebsiteResource> websiteResourceService)
        {
            _connectionString = connectionString;
            _logger = logger;
            _websiteResourceService = websiteResourceService;
        }

        public async Task<ActionResultResponse<EventShowClientViewModel>> GetEventDetailShowClientAsync(string tenantId, string languageId, string seoLink)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@tenantId", tenantId);
                    param.Add("@languageId", languageId);
                    param.Add("@seoLink", seoLink);

                    using (var multi = await con.QueryMultipleAsync("[dbo].[spEvent_GetDetailClient]", param, commandType: CommandType.StoredProcedure))
                    {
                        var eventInfo = (await multi.ReadFirstOrDefaultAsync<EventDetailClientViewModel>());
                        var listEventDay = (await multi.ReadAsync<EventDayViewModel>()).ToList();
                        var listInvitations = (await multi.ReadAsync<RegisterSearchViewModel>()).ToList();
                        var albums = (await multi.ReadAsync<AlbumWithItemViewModel>()).ToList();

                        var eventShowClient = new EventShowClientViewModel
                        {
                            EventInfo = eventInfo,
                            EventDays = listEventDay,
                            Invitations = listInvitations,
                            Albums = albums
                        };

                        return new ActionResultResponse<EventShowClientViewModel>
                        {
                            Data = eventShowClient
                        };
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spEvent_GetDetailClient EventService Error.");
                return new ActionResultResponse<EventShowClientViewModel>();
            }
        }

        public async Task<ActionResultResponse<string>> InsertAsync(string eventId, RegisterMeta registerMeta)
        {
            var infoEvent = await GetInfoEvent(eventId);
            if (infoEvent == null)
                return new ActionResultResponse<string>(-1, _websiteResourceService.GetString("Event does not exists. Please try again."));

            if (infoEvent.Status != ApproverStatus.Approved)
                return new ActionResultResponse<string>(-2, _websiteResourceService.GetString("Event not approved. Please try again."));


            var registerId = Guid.NewGuid().ToString();
            var register = new Register
            {
                Id = registerId,
                ConcurrencyStamp = registerId,
                EventId = eventId,
                Note = registerMeta.Note,
                RegisterTime = DateTime.Now,
                IsStaff = registerMeta.IsStaff,
                CreatorId = string.Empty,
                CreatorFullName = string.Empty,
                CreatorAvatar = string.Empty,
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
                        register.FullName = registerMeta.FullName;
                        register.PhoneNumber = registerMeta.PhoneNumber;
                        register.Email = registerMeta.Email;
                        register.Address = registerMeta.Address;
                        register.UserId = registerMeta.UserId;
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

            var isExists = await CheckExistsRegister(registerId, eventId, register.FullName, register.PhoneNumber);
            if (isExists)
            {
                return new ActionResultResponse<string>(-4, _websiteResourceService.GetString("Register name: \"{0}\" already exists.", register.FullName));
            }

            var result = await InsertRegisterAsync(register);
            if (result <= 0)
                return new ActionResultResponse<string>(result, _websiteResourceService.GetString(ErrorMessage.SomethingWentWrong));

            #region insertEventDayRegister.
            if (registerMeta.EventDayRegisters != null && registerMeta.EventDayRegisters.Any())
            {
                var resultInsertEventDayRegister = await InsertEventDayRegister();
                if (resultInsertEventDayRegister.Code <= 0)
                    return resultInsertEventDayRegister;
            }
            #endregion

            var listEventDay = await GetListEvenDayByEventId(eventId);
            foreach (var eventDay in listEventDay)
            {
                await UpdateTotalEventDay(eventDay.Id);
            }

            return new ActionResultResponse<string>(1, _websiteResourceService.GetString("Add new register successful."),
                    string.Empty, eventId);

            async Task<ActionResultResponse<string>> InsertEventDayRegister()
            {
                var eventDayRegisters = new List<EventDayRegister>();
                foreach (var eventDayRegister in registerMeta.EventDayRegisters)
                {
                    var infoEventDay = await GetInfoEventDay(eventDayRegister.EventDayId);

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
                                    _websiteResourceService.GetString("Limited users when overload. Please contact with administrator."));
                            }
                        }
                    }

                    var isEventDayRegisterExists = await CheckExistsEventDay(eventDayRegister.EventDayId, registerId);

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
                                    return new ActionResultResponse<string>(-6, _websiteResourceService.GetString("Accompany persons when overload. Please contact with administrator."));
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

                        foreach (var accompanyPerson in accompanyPersons)
                        {
                             await InsertAccompanyPersonAsync(accompanyPerson);
                        }
                    }

                }

                var resulteventDayRegister = 0;
                foreach (var eventDayRegister in eventDayRegisters)
                {
                    resulteventDayRegister =  await InsertEventDayRegisterAsync(eventDayRegister);
                }
                
                if (resulteventDayRegister > 0)
                    return new ActionResultResponse<string>(1, _websiteResourceService.GetString("Add new event day register successful."));

                await RollbackInsertEventDayRegister();
                await RollbackInsertRegister();
                return new ActionResultResponse<string>(-7, _websiteResourceService.GetString("Can not insert event day register. Please contact with administrator."));
            }

            async Task RollbackInsertRegister()
            {
                await DeleteRegister(registerId);
            }

            async Task RollbackInsertEventDayRegister()
            {
                await DeleteEventDayRegister(registerId);
            }
        }


        #region Private
        private async Task<EventViewModel> GetInfoEvent(string eventId)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@eventId", eventId);
                    return await con.QuerySingleOrDefaultAsync<EventViewModel>("[dbo].[spEvent_GetInfoEvent]", param, commandType: CommandType.StoredProcedure);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spEvent_GetInfoEvent Error.");
                return null;
            }

        }

        private async Task<EventDayViewModel> GetInfoEventDay(string eventDayId)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@EventDayId", eventDayId);
                    return await con.QuerySingleOrDefaultAsync<EventDayViewModel>("[dbo].[spEvent_GetInfoEventDay]", param, commandType: CommandType.StoredProcedure);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spEvent_GetInfoEventDay Error.");
                return null;
            }

        }

        private async Task<bool> CheckExistsRegister(string id, string eventId, string fullName, string phoneNunber)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    var sql = @"
					SELECT IIF (EXISTS (SELECT 1 FROM Registers WHERE Id != @Id AND EventId = @EventId AND FullName = @FullName AND PhoneNumber = @PhoneNumber), 1, 0)";

                    var result = await con.ExecuteScalarAsync<bool>(sql, new { Id = id , EventId = eventId , FullName = fullName , PhoneNumber = phoneNunber });
                    return result;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "CheckExistsRegister Error.");
                return false;
            }
        }

        private async Task<bool> CheckExistsEventDay(string eventDayId, string registerId)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    var sql = @"
					SELECT IIF (EXISTS (SELECT 1 FROM EventDayRegisters WHERE EventDayId = @EventDayId AND RegisterId = @RegisterId), 1, 0)";

                    var result = await con.ExecuteScalarAsync<bool>(sql, new { EventDayId = eventDayId, RegisterId = registerId });
                    return result;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "CheckExistsRegister Error.");
                return false;
            }
        }

        private async Task<int> UpdateTotalEventDay(string eventDayId)
        {
            try
            {
                int rowAffected = 0;
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@eventDayId", eventDayId);
                    rowAffected = await con.ExecuteAsync("[dbo].[spEvent_UpdateTotal]", param, commandType: CommandType.StoredProcedure);
                }
                return rowAffected;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spEvent_UpdateTotal Error.");
                return -1;
            }
        }

        private async Task<int> DeleteRegister(string registerId)
        {
            try
            {
                int rowAffected = 0;
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@registerId", registerId);
                    rowAffected = await con.ExecuteAsync("[dbo].[spEvent_DeleteRegister]", param, commandType: CommandType.StoredProcedure);
                }
                return rowAffected;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spEvent_DeleteRegister Error.");
                return -1;
            }
        }

        private async Task<int> DeleteEventDayRegister(string registerId)
        {
            try
            {
                int rowAffected = 0;
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@registerId", registerId);
                    rowAffected = await con.ExecuteAsync("[dbo].[spEvent_DeleteEventDayRegister]", param, commandType: CommandType.StoredProcedure);
                }
                return rowAffected;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spEvent_DeleteEventDayRegister Error.");
                return -1;
            }
        }

        private async Task<List<EventDayViewModel>> GetListEvenDayByEventId(string eventId)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@eventId", eventId);
                    var results = await con.QueryAsync<EventDayViewModel>("[dbo].[spEvent_GetListEvenDayByEventId]", param, commandType: CommandType.StoredProcedure);
                    return results.ToList();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spEvent_GetListEvenDayByEventId Error.");
                return new List<EventDayViewModel>();
            }
        }


        private async Task<int> InsertRegisterAsync(Register register)
        {
            try
            {
                int rowAffected = 0;
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@Id", register.Id);
                    param.Add("@EventId", register.EventId);
                    param.Add("@FullName", register.FullName);
                    param.Add("@Avatar", register.Avatar);
                    param.Add("@PhoneNumber", register.PhoneNumber);
                    param.Add("@Email", register.Email);
                    param.Add("@Address", register.Address);
                    param.Add("@Note", register.Note);
                    param.Add("@UserId", register.UserId);
                    if (register.RegisterTime != null && register.RegisterTime != DateTime.MinValue)
                    {
                        param.Add("@RegisterTime", register.RegisterTime);
                    }
                    if (register.CreateTime != null && register.CreateTime != DateTime.MinValue)
                    {
                        param.Add("@CreateTime", register.CreateTime);
                    }
                    param.Add("@CreatorId", register.CreatorId);
                    param.Add("@CreatorFullName", register.CreatorFullName);
                    param.Add("@CreatorAvatar", register.CreatorAvatar);
                    param.Add("@IsStaff", register.IsStaff);
                    param.Add("@ConcurrencyStamp", register.ConcurrencyStamp);
                    param.Add("@LastUpdateAvatar", register.LastUpdateAvatar);
                    if (register.LastUpdate != null && register.LastUpdate != DateTime.MinValue)
                    {
                        param.Add("@LastUpdate", register.LastUpdate);
                    }
                    param.Add("@LastUpdateUserId", register.LastUpdateUserId);
                    param.Add("@LastUpdateFullName", register.LastUpdateFullName);
                    param.Add("@Role", register.Role);
                    rowAffected = await con.ExecuteAsync("[dbo].[spEvent_RegisterInsert]", param, commandType: CommandType.StoredProcedure);
                }
                return rowAffected;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spEvent_RegisterInsert Error.");
                return -1;
            }
        }

        private async Task<int> InsertEventDayRegisterAsync(EventDayRegister eventDayRegister)
        {
            try
            {
                int rowAffected = 0;
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@EventDayId", eventDayRegister.EventDayId);
                    param.Add("@RegisterId", eventDayRegister.RegisterId);
                    param.Add("@Status", eventDayRegister.Status);
                    rowAffected = await con.ExecuteAsync("[dbo].[spspEvent_EventDayRegisterInsert]", param, commandType: CommandType.StoredProcedure);
                }
                return rowAffected;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spspEvent_EventDayRegisterInsert Error.");
                return -1;
            }
        }


        private async Task<int> InsertAccompanyPersonAsync(AccompanyPerson accompanyPerson)
        {
            try
            {
                int rowAffected = 0;
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@Id", accompanyPerson.Id);
                    param.Add("@RegisterId", accompanyPerson.RegisterId);
                    param.Add("@FullName", accompanyPerson.FullName);
                    param.Add("@PhoneNumber", accompanyPerson.PhoneNumber);
                    param.Add("@Status", accompanyPerson.Status);
                    param.Add("@EventDayId", accompanyPerson.EventDayId);
                    rowAffected = await con.ExecuteAsync("[dbo].[spEvent_AccompanyPersonInsert]", param, commandType: CommandType.StoredProcedure);
                }
                return rowAffected;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spEvent_AccompanyPersonInsert Error.");
                return -1;
            }
        }

        #endregion

        public async Task<SearchResult<EventClientViewModel>> SearchClientAsync(string tenantId, string languageId, int page, int pageSize)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@tenantId", tenantId);
                    param.Add("@languageId", languageId);
                    param.Add("@page", page);
                    param.Add("@pageSize", pageSize);

                    using (var multi = await con.QueryMultipleAsync("[dbo].[spEvent_SearchClient]", param, commandType: CommandType.StoredProcedure))
                    {
                        return new SearchResult<EventClientViewModel>
                        {
                            TotalRows = (await multi.ReadAsync<int>()).SingleOrDefault(),
                            Items = (await multi.ReadAsync<EventClientViewModel>()).ToList()
                        };
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spEvent_SearchClient EventService Error.");
                return new SearchResult<EventClientViewModel> { TotalRows = 0, Items = null };
            }
        }
    }
}
