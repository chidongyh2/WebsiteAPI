using System;
using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using GHM.Website.Event.Domain.Constants;
using GHM.Website.Event.Domain.IServices;
using GHM.Website.Event.Domain.ModelMetas;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Website.Event.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class EventsController : GhmControllerBase
    {
        private readonly IEventService _eventService;
        private readonly IEventDayService _eventDayService;
        private readonly IRegisterService _registerService;
        private readonly IEventAlbumService _eventAlbumService;
        public EventsController(IEventService eventService, IEventDayService eventDayService,
            IRegisterService registerService, IEventAlbumService eventAlbumService)
        {
            _eventService = eventService;
            _eventDayService = eventDayService;
            _registerService = registerService;
            _eventAlbumService = eventAlbumService;
        }

        #region Event
        [AcceptVerbs("GET")]
        [AllowPermission(PageId.Event, Permission.View)]
        [AllowPermission(PageId.Event, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, string creatorId, ApproverStatus? status,
            bool? isActive, DateTime? startDate, DateTime? endDate, int page = 1, int pageSize = 20)
        {
            var result = await _eventService.Search(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name,
                keyword, creatorId, status, isActive, startDate, endDate, page, pageSize);
            return Ok(result);
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Event, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]EventMeta eventMeta)
        {
            var result = await _eventService.Insert(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, eventMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Event, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]EventMeta eventMeta)
        {
            var result = await _eventService.Update(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, id, eventMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/status/{statusId}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.Event, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> ChangeEventStatus(string id, ApproverStatus statusId, [FromBody]string declineReason)
        {
            var result = await _eventService.ChangeEventStatus(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, id, statusId, declineReason);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("change-list-event-status"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Event, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> ChangeListEventStatus([FromBody]ChangeListEventStatusMeta listEventStatusMeta)
        {
            var result = await _eventService.ChangeListEventStatus(CurrentUser.TenantId, listEventStatusMeta.EventIds,
                listEventStatusMeta.Status, listEventStatusMeta.declineReason, CurrentUser.Id, CurrentUser.FullName,
                CurrentUser.Avatar);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Event, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Detail(string id)
        {
            var result = await _eventService.GetDetail(CurrentUser.TenantId, id);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.Event, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _eventService.Delete(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("deletes"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Event, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> DeleteListEvent([FromBody]List<string> eventIds)
        {
            var result = await _eventService.DeleteListEvent(eventIds);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        #endregion Event

        #region EventDay
        [Route("{id}/days"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Event, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> InsertEventDay(string id, [FromBody]EventDayMeta eventDayMeta)
        {
            var result = await _eventDayService.Insert(id, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, eventDayMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}/days/{dayId}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Event, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateEventDay(string id, string dayId, [FromBody]EventDayMeta eventDayMeta)
        {
            var result = await _eventDayService.Update(id, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, dayId, eventDayMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/days/{dayId}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Event, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetDetailEventDay(string id, string dayId)
        {
            var result = await _eventDayService.GetDetail(id, dayId);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/days/{dayId}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.Event, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> DeleteEventDay(string id, string dayId)
        {
            var result = await _eventDayService.Delete(id, dayId);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/days"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Event, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> SearchEventDay(string id, bool? isActive, int page = 1, int pageSize = 20)
        {
            var result = await _eventDayService.Search(id, CultureInfo.CurrentCulture.Name, isActive, page, pageSize);
            return Ok(result);
        }

        [Route("{id}/all-days"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Event, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetAllActiveDays(string id)
        {
            return Ok(await _eventDayService.Search(id, CultureInfo.CurrentCulture.Name, true, 1, int.MaxValue));
        }

        #endregion EventDay

        #region Register
        [Route("{id}/registers"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Event, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> SearchRegister(string id, string fullName, string phoneNumber, string email, string eventDayId,
            EventDayStatus? status, int page = 1, int pageSize = 20)
        {
            var result = await _registerService.Search(id, CultureInfo.CurrentCulture.Name, fullName, phoneNumber, email, eventDayId, status,
                page, pageSize);
            return Ok(result);
        }

        [Route("{id}/registers"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Event, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> InsertRegister(string id, [FromBody]RegisterMeta registerMeta)
        {
            var result = await _registerService.Insert(id, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, registerMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}/registers/{registerId}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Event, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateRegister(string id, string registerId, [FromBody]RegisterMeta registerMeta)
        {
            var result = await _registerService.Update(id, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, registerId, registerMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}/registers/{registerId}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.Event, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> DeleteRegister(string id, string registerId)
        {
            var result = await _registerService.Delete(id, registerId);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}/registers/{registerId}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Event, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetRegisterDetail(string id, string registerId)
        {
            var result = await _registerService.GetDetail(id, registerId, CultureInfo.CurrentCulture.Name);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}/registers/AccompanyPerson/{registerId}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Event, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> SearchAccompanyPerson(string id, string registerId)
        {
            var result = await _registerService.SearchAccompanyPersons(id, registerId, CultureInfo.CurrentCulture.Name);
            return Ok(result);
        }

        [Route("{id}/registers/status/{eventDayId}/{registerId}/{status}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.Event, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateEventDayRegisterStatus(string id, string eventDayId, string registerId, EventDayStatus status)
        {
            var result = await _registerService.UpdateStatusEventDayRegister(id, eventDayId, registerId, status);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}/registers/accompanyperson-status/{accompanyPersonId}/{status}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.Event, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateAccompanyPersons(string id, string accompanyPersonId, EventDayStatus status)
        {
            var result = await _registerService.UpdateStatusAccompanyPerson(id, accompanyPersonId, status);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }
        #endregion Register

        #region Album
        [Route("{id}/albums"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Event, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> SearchAlbum(string id, int page = 1, int pageSize = 20)
        {
            var result = await _eventAlbumService.Search(CurrentUser.TenantId, id, CultureInfo.CurrentCulture.Name, page, pageSize);
            return Ok(result);
        }

        [Route("{id}/albums/{albumId}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Event, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetEventAlbumDetail(string id, string albumId)
        {
            var result = await _eventAlbumService.GetDetail(CurrentUser.TenantId, id, albumId);

            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/albums"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Event, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> InsertAlbum(string id, [FromBody]EventAlbumMeta eventAlbum)
        {
            eventAlbum.Album.TenantId = CurrentUser.TenantId;
            eventAlbum.Album.UserId = CurrentUser.Id;
            eventAlbum.Album.FullName = CurrentUser.FullName;
            eventAlbum.Album.Avatar = CurrentUser.Avatar;
            var result = await _eventAlbumService.Insert(CurrentUser.TenantId, id, eventAlbum);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}/albums/{albumId}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Event, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateAlbum(string id, string albumId, [FromBody]EventAlbumMeta eventAlbum)
        {
            eventAlbum.Album.TenantId = CurrentUser.TenantId;
            eventAlbum.Album.UserId = CurrentUser.Id;
            eventAlbum.Album.FullName = CurrentUser.FullName;
            eventAlbum.Album.Avatar = CurrentUser.Avatar;
            var result = await _eventAlbumService.Update(CurrentUser.TenantId, id, albumId, eventAlbum);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}/albums/{albumId}"), AcceptVerbs("DELETE"), ValidateModel]
        [AllowPermission(PageId.Event, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> DeleteAlbum(string id, string albumId)
        {
            var result = await _eventAlbumService.Delete(CurrentUser.TenantId, id, albumId);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        #endregion 
        #region Client
        [Route("all/{tenantId}/{page}/{pageSize}/{languageId?}")]
        [CheckPermission]
        public async Task<IActionResult> Search(string tenantId, string languageId, int page = 1, int pageSize = 20)
        {
            var result = await _eventService.SearchClient(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, page, pageSize);
            return Ok(result);
        }

        [Route("get-detail/{tenantId}/{seoLink}/{languageId?}")]
        [CheckPermission]
        public async Task<IActionResult> GetDetailShowCLient(string tenantId, string languageId, string seoLink)
        {
            var result = await _eventService.GetEventDetailShowClient(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, seoLink);
            return Ok(result);
        }

        [Route("client/{id}/registers"), AcceptVerbs("POST")]
        [CheckPermission]
        public async Task<IActionResult> InsertRegisterClient(string id, [FromBody]RegisterMeta registerMeta)
        {
            var result = await _registerService.Insert(id, "", "", "", registerMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }
        #endregion
    }
}