using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;
namespace GHM.Website.Infrastructure.Repository
{
 public   class AgencyInfoTranslationRepository : RepositoryBase, IAgencyInfoTranslationRepository
    {
        private readonly IRepository<AgencyInfoTranslation> _agencyInfoTranslationRepository;
        public AgencyInfoTranslationRepository(IDbContext context) : base(context)
        {
            _agencyInfoTranslationRepository = Context.GetRepository<AgencyInfoTranslation>();
        }

        public async Task<int> Insert(AgencyInfoTranslation agencyInfoTranslation)
        {
            _agencyInfoTranslationRepository.Create(agencyInfoTranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(AgencyInfoTranslation agencyInfoTranslation)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<AgencyInfoTranslation> agencyInfoTranslations)
        {
            _agencyInfoTranslationRepository.Creates(agencyInfoTranslations);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string agencyInfoId)
        {
            var info = await _agencyInfoTranslationRepository.GetsAsync(false, x => x.AgencyInfoId == agencyInfoId);
            if (info == null || !info.Any())
                return -1;
            foreach (var agencyInfoTranslation in info)
            {
                agencyInfoTranslation.IsDelete = true;
            }
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string agencyInfoId)
        {
            var info = await _agencyInfoTranslationRepository.GetsAsync(false, x => x.AgencyInfoId == agencyInfoId);
            if (info == null || !info.Any())
                return -1;

            _agencyInfoTranslationRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<AgencyInfoTranslation> GetInfo(string tenantId, string languageId, string agencyInfoId, bool isReadOnly = false)
        {
            return await _agencyInfoTranslationRepository.GetAsync(isReadOnly, x => x.TenantId == tenantId && x.LanguageId == languageId && x.AgencyInfoId == agencyInfoId && !x.IsDelete);
        }

        public async Task<List<AgencyInfoTranslation>> GetsAgencyInfoId(string agencyInfoId, bool isReadOnly = false)
        {
            return await _agencyInfoTranslationRepository.GetsAsync(true, x => x.AgencyInfoId == agencyInfoId && !x.IsDelete);
        }

        public async Task<bool> CheckExists(string agencyInfoId, string tenantId, string languageId, string name)
        {
            name = name.Trim();
            return await _agencyInfoTranslationRepository.ExistAsync(x =>
                x.AgencyInfoId != agencyInfoId && x.TenantId == tenantId && x.LanguageId == languageId && x.AgencyName  == name && !x.IsDelete);
        }
    }
}
