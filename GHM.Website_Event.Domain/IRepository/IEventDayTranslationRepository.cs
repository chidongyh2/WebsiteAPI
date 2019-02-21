using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.Event.Domain.Models;
using GHM.Website.Event.Domain.ViewModels;
namespace GHM.Website.Event.Domain.IRepository
{
    public interface IEventDayTranslationRepository
    {
        Task<int> Insert(EventDayTranslation eventDayTranslation);

        Task<int> Update(EventDayTranslation eventDayTranslation);

        Task<int> Inserts(List<EventDayTranslation> eventDayTranslations);

        Task<int> Delete(string eventDayId);

        Task<EventDayTranslation> GetInfo(string eventDayId, string languageId, bool isReadOnly = false);

        Task<string> GetEventDayIdName(string eventDayId, string languageId);

        Task<List<EventDayTranslationViewModel>> GetByEventDayId(string eventDayId, bool isReadOnly = false);

        Task<bool> CheckExists(string eventDayId, string languageId, string name);
        Task<string> GetNameByEventDayId(string eventDayId, string languageId);
       }
}
