using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;
namespace GHM.Website.Infrastructure.Repository
{
 public   class FaqTranslationRepository : RepositoryBase, IFaqTranslationRepository
    {
        private readonly IRepository<FaqTranslation> _faqTranslationRepository;
        public FaqTranslationRepository(IDbContext context) : base(context)
        {
            _faqTranslationRepository = Context.GetRepository<FaqTranslation>();
        }

        public async Task<int> Insert(FaqTranslation faqTranslation)
        {
            _faqTranslationRepository.Create(faqTranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(FaqTranslation faqTranslation)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<FaqTranslation> faqTranslations)
        {
            _faqTranslationRepository.Creates(faqTranslations);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string faqId)
        {
            var info = await _faqTranslationRepository.GetsAsync(false, x => x.FaqId == faqId);
            if (info == null || !info.Any())
                return -1;
            foreach (var videoTranslation in info)
            {
                videoTranslation.IsDelete = true;
            }
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string faqId)
        {
            var info = await _faqTranslationRepository.GetsAsync(false, x => x.FaqId == faqId);
            if (info == null || !info.Any())
                return -1;

            _faqTranslationRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<FaqTranslation> GetInfo(string tenantId, string languageId, string faqId, bool isReadOnly = false)
        {
            return await _faqTranslationRepository.GetAsync(isReadOnly, x => x.TenantId == tenantId && x.LanguageId == languageId && x.FaqId == faqId && !x.IsDelete);
        }

        public async Task<List<FaqTranslation>> GetsFaqId(string faqId, bool isReadOnly = false)
        {
            return await _faqTranslationRepository.GetsAsync(true, x => x.FaqId == faqId && !x.IsDelete);
        }

        public async Task<bool> CheckExists(string faqId, string tenantId, string languageId, string question)
        {
            question = question.Trim();
            return await _faqTranslationRepository.ExistAsync(x =>
                x.FaqId != faqId && x.TenantId == tenantId && x.LanguageId == languageId && x.Question == question && !x.IsDelete);
        }
    }
}
