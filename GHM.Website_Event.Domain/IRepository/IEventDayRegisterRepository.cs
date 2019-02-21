using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.Event.Domain.Constants;
using GHM.Website.Event.Domain.Models;
using GHM.Website.Event.Domain.ViewModels;

namespace GHM.Website.Event.Domain.IRepository
{
    public interface IEventDayRegisterRepository
    {
        Task<int> Insert(EventDayRegister eventDayRegister);
        Task<int> Delete(string eventDayId, string registerId);
        Task<int> DeleteByRegisterId(string registerId);
        Task<int> Inserts(List<EventDayRegister> eventDayRegisters);
        Task<int> Deletes(List<EventDayRegister> eventDayRegisters);
        Task<bool> CheckExists(string eventDayId, string registerId);
        //Task<List<EventDayRegisterViewModel>> GetListRegisterIds(string eventId, string registerId, string languageId);        
        Task<List<EventDayRegisterDetailViewModel>> GetListEventDaysRegisterDetail
            (string eventId, string registerId, string languageId);        
        Task<List<EventDayRegisterViewModel>> GetListEventDayRegister(string registerId, string languageId,
            EventDayStatus? status);
        Task<int> CountByEventDayId(string eventDayId);

        Task<int> UpdateStatus(string eventDayId,string registerId,EventDayStatus status);
    }
}
