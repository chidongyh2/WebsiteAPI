using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;

namespace GHM.Website.Infrastructure.Repository
{
    public class FaqGroupTranslationRepository : RepositoryBase, IFaqGroupTranslationRepository
    {
        private readonly IRepository<FaqGroupTranslation> _faqGroupTranslationRepository;
        public FaqGroupTranslationRepository(IDbContext context) : base(context)
        {
            _faqGroupTranslationRepository = Context.GetRepository<FaqGroupTranslation>();
        }
        public async Task<int> Insert(FaqGroupTranslation faqGroupTranslation)
        {
            _faqGroupTranslationRepository.Create(faqGroupTranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(FaqGroupTranslation faqGroupTranslation)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<FaqGroupTranslation> faqGroupTranslations)
        {
            _faqGroupTranslationRepository.Creates(faqGroupTranslations);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string faqGroupId)
        {
            var info = await _faqGroupTranslationRepository.GetsAsync(false, x => x.FaqGroupId == faqGroupId);
            if (info == null || !info.Any())
                return -1;
            foreach (var videoTranslation in info)
            {
                videoTranslation.IsDelete = true;
            }
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string faqGroupId)
        {
            var info = await _faqGroupTranslationRepository.GetsAsync(false, x => x.FaqGroupId == faqGroupId);
            if (info == null || !info.Any())
                return -1;

            _faqGroupTranslationRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<FaqGroupTranslation> GetInfo(string tenantId, string languageId, string faqGroupId, bool isReadOnly = false)
        {
            return await _faqGroupTranslationRepository.GetAsync(isReadOnly, x => x.TenantId == tenantId && x.LanguageId == languageId && x.FaqGroupId == faqGroupId && !x.IsDelete);
        }

        public async Task<List<FaqGroupTranslation>> GetsFaqId(string faqGroupId, bool isReadOnly = false)
        {
            return await _faqGroupTranslationRepository.GetsAsync(true, x => x.FaqGroupId == faqGroupId && !x.IsDelete);
        }

        public async Task<bool> CheckExists(string faqGroupId, string tenantId, string languageId, string name)
        {
            name = name.Trim();
            return await _faqGroupTranslationRepository.ExistAsync(x =>
                x.FaqGroupId != faqGroupId && x.TenantId == tenantId && x.LanguageId == languageId && x.Name == name && !x.IsDelete);
        }
    }
}
