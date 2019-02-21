using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Website.Event.Domain.IRepository;
using GHM.Website.Event.Domain.Models;
using GHM.Website.Event.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;
namespace GHM.Website.Event.Infrastructure.Repository
{
    public class EventDayTranslationRepository : RepositoryBase, IEventDayTranslationRepository
    {
        private readonly IRepository<EventDayTranslation> _eventDayTranslationRepository;
        public EventDayTranslationRepository(IDbContext context) : base(context)
        {
            _eventDayTranslationRepository = Context.GetRepository<EventDayTranslation>();
        }

        public async Task<int> Insert(EventDayTranslation eventDayTranslation)
        {
            _eventDayTranslationRepository.Create(eventDayTranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(EventDayTranslation eventDayTranslation)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<EventDayTranslation> eventDayTranslations)
        {
            _eventDayTranslationRepository.Creates(eventDayTranslations);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string eventDayId)
        {
            var info = await _eventDayTranslationRepository.GetsAsync(false, x => x.EventDayId == eventDayId);
            if (info == null || !info.Any())
                return -1;

            _eventDayTranslationRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<EventDayTranslation> GetInfo(string eventDayId, string languageId, bool isReadOnly = false)
        {
            return await _eventDayTranslationRepository.GetAsync(isReadOnly, x => x.EventDayId == eventDayId && x.LanguageId == languageId);
        }

        public async Task<string> GetEventDayIdName(string eventDayId, string languageId)
        {
            return await _eventDayTranslationRepository.GetAsAsync(x => x.Name,
                x => x.LanguageId == languageId && x.EventDayId == eventDayId);
        }

        public async Task<List<EventDayTranslationViewModel>> GetByEventDayId(string eventDayId, bool isReadOnly = false)
        {
            return await _eventDayTranslationRepository.GetsAsAsync(x => new EventDayTranslationViewModel()
            {
                LanguageId = x.LanguageId,
                Name = x.Name,
                Description = x.Description,
                Address = x.Address,
            }, x => x.EventDayId == eventDayId);
        }

        public async Task<bool> CheckExists(string eventDayId, string languageId, string name)
        {
            name = name.Trim();
            return await _eventDayTranslationRepository.ExistAsync(x =>
                x.EventDayId != eventDayId && x.LanguageId == languageId && x.Name == name);
        }

        public async Task<string> GetNameByEventDayId(string eventDayId, string languageId)
        {
            return await _eventDayTranslationRepository.GetAsAsync(x => x.Name,
                x => x.LanguageId == languageId && x.EventDayId == eventDayId);
        }
    }
}
