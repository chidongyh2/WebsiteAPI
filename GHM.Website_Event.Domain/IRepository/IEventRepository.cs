using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.Event.Domain.Constants;
using GHM.Website.Event.Domain.ViewModels;

namespace GHM.Website.Event.Domain.IRepository
{
    public interface IEventRepository
    {
        Task<List<EventViewModel>> Search(string tenantId, string languageId, string keyword, string creatorId,
            ApproverStatus? status, bool? isActive, DateTime? startDate, DateTime? endDate , bool isCheck, int page, int pageSize, out int totalRows);

        Task<List<EventClientViewModel>> SearchClient(string tenantId, string languageId, int page, int pageSize, out int totalRows);

        Task<int> Insert(Models.Event events);

        Task<int> Update(Models.Event events);

        Task<int> Delete(string eventId);

        Task<int> ForceDelete(string eventId);

        Task<Models.Event> GetInfo(string eventId, bool isReadonly = false);

        Task<Models.Event> GetInfo(string tenantId, string eventId, bool isReadonly = false);

        Task<List<EventViewModel>> GetAllEventByApproverUserId(string tenantId, string approverUserId, string languageId);

        Task<int> UpdateEventStatus(string eventId, ApproverStatus approverStatus);

        Task<EventDetailClientViewModel> GetDetailClient(string tenantId, string languageId, string seoLink);
    }
}
