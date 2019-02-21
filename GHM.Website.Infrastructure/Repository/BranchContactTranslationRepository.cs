using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;

namespace GHM.Website.Infrastructure.Repository
{
    public class BranchContactTranslationRepository : RepositoryBase, IBranchContactTranslationRepository
    {
        private readonly IRepository<BranchContactTranslation> _branchContactTranslationRepository;

        public BranchContactTranslationRepository(IDbContext context) : base(context)
        {
            _branchContactTranslationRepository = Context.GetRepository<BranchContactTranslation>();
        }

        public async Task<bool> CheckExistsById(string tenantId, string branchContactId, string languageId, bool isReadOnly = false)
        {
            return await _branchContactTranslationRepository.ExistAsync(x => x.TenantId == tenantId && x.BranchContactId == branchContactId && 
                                                                    x.LanguageId == languageId);
        }

        public async Task<int> ForceDelete(string tenantId, string branchContactId, string languageId)
        {
            var branchcontacttranslationInfo = await GetInfo(tenantId, branchContactId, languageId);
            if (branchcontacttranslationInfo == null)
                return -1;

            _branchContactTranslationRepository.Delete(branchcontacttranslationInfo);
            return await Context.SaveChangesAsync();
        }

        public async Task<List<BranchContactTranslation>> GetAll(string branchContactId, string languageId, bool isReadOnly = false)
        {
            return await _branchContactTranslationRepository.GetsAsync(isReadOnly, x => x.BranchContactId  == branchContactId);
        }

        public async Task<BranchContactTranslation> GetInfo(string tenantId, string branchContactId, string languageId, bool isReadOnly = false)
        {
            return await _branchContactTranslationRepository.GetAsync(isReadOnly, x => x.TenantId == tenantId && x.BranchContactId == branchContactId && 
                                                                    x.LanguageId == languageId);
        }

        public async Task<int> Insert(BranchContactTranslation branchContactTranslation)
        {
            _branchContactTranslationRepository.Create(branchContactTranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<BranchContactTranslation> branchContactTranslations)
        {
            _branchContactTranslationRepository.Creates(branchContactTranslations);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(string tenantId, string branchContactId, string languageId, BranchContactTranslation branchContactTranslation)
        {
            return await Context.SaveChangesAsync();
        }
    }
}
