using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.Event.Domain.Models;
using GHM.Website.Event.Domain.ViewModels;
namespace GHM.Website.Event.Domain.IRepository
{
    public interface IEventTranslationRepository
    {
        Task<int> Insert(EventTranslation eventTranslation);

        Task<int> Update(EventTranslation eventTranslation);

        Task<int> Inserts(List<EventTranslation> eventTranslations);

        Task<int> Delete(string eventId);

        Task<EventTranslation> GetInfo(string eventId, string languageId, bool isReadOnly = false);

        Task<string> GetEventIdName(string eventId, string languageId);

        Task<List<EventTranslationViewModel>> GetByEventId(string eventId, bool isReadOnly = false);

        Task<bool> CheckExists(string eventId, string languageId, string name);

        Task<bool> CheckSeoLinkExists(string eventId, string languageId, string seolink);
    }
}
