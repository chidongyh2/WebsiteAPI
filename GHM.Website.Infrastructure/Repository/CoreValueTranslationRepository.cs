using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;

namespace GHM.Website.Infrastructure.Repository
{
    public class CoreValueTranslationRepository : RepositoryBase, ICoreValueTranslationRepository
    {
        private readonly IRepository<CoreValueTranslation> _coreValueTranslationRepository;
        public CoreValueTranslationRepository(IDbContext context) : base(context)
        {
            _coreValueTranslationRepository = Context.GetRepository<CoreValueTranslation>();
        }

        public async Task<int> Insert(CoreValueTranslation coreValueTranslation)
        {
            _coreValueTranslationRepository.Create(coreValueTranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(CoreValueTranslation coreValueTranslation)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<CoreValueTranslation> coreValueTranslations)
        {
            _coreValueTranslationRepository.Creates(coreValueTranslations);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string coreValueId)
        {
            var info = await _coreValueTranslationRepository.GetsAsync(false, x => x.CoreValueId == coreValueId);
            if (info == null || !info.Any())
                return -1;
            foreach (var coreValueTranslation in info)
            {
                coreValueTranslation.IsDelete = true;
            }
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string coreValueId)
        {
            var info = await _coreValueTranslationRepository.GetsAsync(false, x => x.CoreValueId == coreValueId);
            if (info == null || !info.Any())
                return -1;

            _coreValueTranslationRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<CoreValueTranslation> GetInfo(string tenantId, string languageId, string coreValueId, bool isReadOnly = false)
        {
            return await _coreValueTranslationRepository.GetAsync(isReadOnly, x => x.TenantId == tenantId && x.LanguageId == languageId && x.CoreValueId == coreValueId && !x.IsDelete);
        }

        public async Task<List<CoreValueTranslation>> GetsCoreValueId(string coreValueId, bool isReadOnly = false)
        {
            return await _coreValueTranslationRepository.GetsAsync(true, x => x.CoreValueId == coreValueId && !x.IsDelete);
        }

        public async Task<bool> CheckExists(string coreValueId, string tenantId, string languageId, string name)
        {
            name = name.Trim();
            return await _coreValueTranslationRepository.ExistAsync(x =>
                x.CoreValueId != coreValueId && x.TenantId == tenantId && x.LanguageId == languageId && x.Name == name && !x.IsDelete);
        }

    
    }
}
