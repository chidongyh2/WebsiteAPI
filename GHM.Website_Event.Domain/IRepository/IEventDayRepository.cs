using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.Event.Domain.Constants;
using GHM.Website.Event.Domain.Models;
using GHM.Website.Event.Domain.ViewModels;

namespace GHM.Website.Event.Domain.IRepository
{
    public interface IEventDayRepository
    {
        Task<List<EventDayViewModel>> Search(string languageId,  string eventId, bool? isActive,
            int page, int pageSize, out int totalRows);

        Task<int> Insert(EventDay eventDay);

        Task<int> Update(EventDay eventDay);

        Task<int> Delete(string eventDayId);

        Task<int> ForceDelete(string eventDayId);

        Task<EventDay> GetInfo(string eventDayId, bool isReadonly = false);

        Task<int> UpdateTotal(string eventDayId,int totalRegisters, int totalAccompanyPersons);
        Task<List<EventDay>> GetListEvenDayByEventId(string eventId, bool isReadonly = false);
    }
}
