using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.Event.Domain.ModelMetas;
using GHM.Website.Event.Domain.ViewModels;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Event.Domain.Constants;
using GHM.Website.Event.Domain.Models;

namespace GHM.Website.Event.Domain.IServices
{
  public  interface IRegisterService
    {
        Task<SearchResult<RegisterSearchViewModel>> Search(string eventId, string languageId, string fullName, string phoneNumber, 
            string email, string eventDayId, EventDayStatus? status, int page, int pageSize);

        Task<ActionResultResponse<string>> Insert(string eventId, string creatorId, string creatorFullName, string creatorAvatar, RegisterMeta registerMeta);

        Task<ActionResultResponse> Update(string eventId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string registerId, RegisterMeta registerMeta);

        Task<ActionResultResponse> Delete(string eventId, string registerId);

        Task<ActionResultResponse<RegisterDetailViewModel>> GetDetail(string eventId, string registerId, string languageId);

        Task<SearchResult<AccompanyPersonSearchViewModel>> SearchAccompanyPersons(string eventId, string registerId, string languageId);

        Task<ActionResultResponse> UpdateStatusEventDayRegister(string eventId, string eventDayId, string registerId,EventDayStatus status);

        Task<ActionResultResponse> UpdateStatusAccompanyPerson(string eventId, string id,  EventDayStatus status);
    }
}
