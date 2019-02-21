using System;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Event.Domain.Constants;
using GHM.Website.Event.Domain.ModelMetas;
using GHM.Website.Event.Domain.ViewModels;

namespace GHM.Website.Event.Domain.IServices
{
  public  interface IEventDayService
    {
        Task<SearchResult<EventDayViewModel>> Search(string eventId, string languageId, bool? isActive, int page, int pageSize);

        Task<ActionResultResponse<string>> Insert(string eventId, string creatorId, string creatorFullName, string creatorAvatar, EventDayMeta eventDayMeta);

        Task<ActionResultResponse> Update(string eventId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string eventDayId, EventDayMeta eventDayMeta);

        Task<ActionResultResponse> Delete(string eventId, string eventDayId);

        Task<ActionResultResponse<EventDayDetailViewModel>> GetDetail(string eventId, string eventDayId);

    }
}