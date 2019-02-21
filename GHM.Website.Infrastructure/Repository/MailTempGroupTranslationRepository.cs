using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;

namespace GHM.Website.Infrastructure.Repository
{
    public class MailGroupTranslationRepository : RepositoryBase, IMailTempGroupTranslationRepository
    {
        private readonly IRepository<MailTempGroupTranslation> _mailGroupTranslationRepository;

        public MailGroupTranslationRepository(IDbContext context) : base(context)
        {
            _mailGroupTranslationRepository = Context.GetRepository<MailTempGroupTranslation>();
        }

        public async Task<bool> CheckExistsById(string tenantId, string mailGroupId, string languageId, bool isReadOnly = false)
        {
            return await _mailGroupTranslationRepository.ExistAsync(x => x.TenantId == tenantId && x.MailTempGroupId == mailGroupId && x.LanguageId == languageId);
        }

        public async Task<List<MailTempGroupTranslation>> GetAll(string tenantId, string mailTempGroupId)
        {
            var result = await _mailGroupTranslationRepository.GetsReadOnlyAsync(x => x.TenantId == tenantId && x.MailTempGroupId == mailTempGroupId);
            return result;
        }


        public async Task<int> ForceDelete(string tenantId, string mailTempGroupId, string languageId)
        {
            var mailgrouptranslationInfo = await GetInfo(tenantId, mailTempGroupId, languageId);
            if (mailgrouptranslationInfo == null)
                return -1;

            _mailGroupTranslationRepository.Delete(mailgrouptranslationInfo);
            return await Context.SaveChangesAsync();
        }

        public async Task<MailTempGroupTranslation> GetInfo(string tenantId, string mailTempGroupId, string languageId, bool isReadOnly = false)
        {
            return await _mailGroupTranslationRepository.GetAsync(isReadOnly, x => x.TenantId == tenantId && x.MailTempGroupId == mailTempGroupId && x.LanguageId == languageId);
        }

        public async Task<int> Insert(MailTempGroupTranslation mailgrouptranslation)
        {
            _mailGroupTranslationRepository.Create(mailgrouptranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<MailTempGroupTranslation> mailGroupTranslations)
        {
            _mailGroupTranslationRepository.Creates(mailGroupTranslations);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(MailTempGroupTranslation mailGroupTranslation)
        {
            return await Context.SaveChangesAsync();
        }
    }
}
