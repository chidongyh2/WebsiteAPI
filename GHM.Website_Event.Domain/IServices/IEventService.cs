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
    public interface IEventService
    {
        Task<SearchResult<EventViewModel>> Search(string tenantId, string languageId, string keyword,
            string creatorId, ApproverStatus? status, bool? isActive, DateTime? startDate, DateTime? endDate , int page, int pageSize);

        Task<SearchResult<EventClientViewModel>> SearchClient(string tenantId, string languageId, int page, int pageSize);

        Task<ActionResultResponse<string>> Insert(string tenantId, string creatorId, string creatorFullName, string creatorAvatar, EventMeta eventMeta);

        Task<ActionResultResponse<string>> Update(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string eventId, EventMeta eventMeta);

        Task<ActionResultResponse> Delete(string tenantId, string eventId);

        Task<ActionResultResponse<EventDetailViewModel>> GetDetail(string tenantId, string eventId);

        Task<ActionResultResponse> DeleteListEvent(List<string> listeventId);

        Task<ActionResultResponse> ChangeEventStatus(string tenantId, string userId, string fullName, string avatar,
            string eventId, ApproverStatus status, string declineReason);

        Task<List<ActionResultResponse>> ChangeListEventStatus(string tenantId, List<string> listeventId,
            ApproverStatus status, string declineReason, string userId, string fullName, string avatar);

        Task<ActionResultResponse<EventShowClientViewModel>> GetEventDetailShowClient(string tenantId, string languageId, string seoLink);
    }
}
