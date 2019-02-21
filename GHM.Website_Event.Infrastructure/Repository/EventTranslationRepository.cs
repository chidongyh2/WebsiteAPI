using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Website.Event.Domain.IRepository;
using GHM.Website.Event.Domain.Models;
using GHM.Website.Event.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;
namespace GHM.Website.Event.Infrastructure.Repository
{
  public  class EventTranslationRepository : RepositoryBase, IEventTranslationRepository
    {
        private readonly IRepository<EventTranslation> _eventTranslationRepository;
        public EventTranslationRepository(IDbContext context) : base(context)
        {
            _eventTranslationRepository = Context.GetRepository<EventTranslation>();
        }

        public async Task<int> Insert(EventTranslation eventTranslation)
        {
            _eventTranslationRepository.Create(eventTranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(EventTranslation eventTranslation)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<EventTranslation> eventTranslations)
        {
            _eventTranslationRepository.Creates(eventTranslations);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string eventId)
        {
            var info = await _eventTranslationRepository.GetsAsync(false, x => x.EventId == eventId);
            if (info == null || !info.Any())
                return -1;

            _eventTranslationRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<EventTranslation> GetInfo(string eventId, string languageId, bool isReadOnly = false)
        {
            return await _eventTranslationRepository.GetAsync(isReadOnly, x => x.EventId == eventId && x.LanguageId == languageId );
        }

        public async Task<string> GetEventIdName(string eventId, string languageId)
        {
            return await _eventTranslationRepository.GetAsAsync(x => x.Name,
                x => x.LanguageId == languageId && x.EventId == eventId);
        }

        public async Task<List<EventTranslationViewModel>> GetByEventId(string eventId, bool isReadOnly = false)
        {
            return await _eventTranslationRepository.GetsAsAsync(x => new EventTranslationViewModel
            {
                LanguageId = x.LanguageId,
                Name = x.Name,
                MetaTitle = x.MetaTitle,
                UnsignName = x.UnsignName,
                Description = x.Description,
                MetaDescription = x.MetaDescription,
                SeoLink = x.SeoLink,
                Content = x.Content,
                Address = x.Address
            }, x => x.EventId == eventId);
        }

        public async Task<bool> CheckExists(string eventId, string languageId, string name)
        {
            name = name.Trim();
            return await _eventTranslationRepository.ExistAsync(x =>
                x.EventId != eventId && x.LanguageId == languageId && x.Name == name );
        }

        public async Task<bool> CheckSeoLinkExists(string eventId, string languageId, string seolink)
        {
            seolink = seolink.Trim();
            return await _eventTranslationRepository.ExistAsync(x =>
                x.EventId != eventId && x.LanguageId == languageId && x.SeoLink == seolink);
        }
    }
}
