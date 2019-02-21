using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;

namespace GHM.Website.Infrastructure.Repository
{
    public class MailTempContentTranslationRepository : RepositoryBase, IMailTempContentTranslationRepository
    {
        private readonly IRepository<MailTempContentTranslation> _mailTempContentTranslationRepository;

        public MailTempContentTranslationRepository(IDbContext context) : base(context)
        {
            _mailTempContentTranslationRepository = Context.GetRepository<MailTempContentTranslation>();
        }

        public async Task<int> Insert(MailTempContentTranslation mailTempContentTranslation)
        {
            _mailTempContentTranslationRepository.Create(mailTempContentTranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<MailTempContentTranslation> mailTempContentTranslations)
        {
            _mailTempContentTranslationRepository.Creates(mailTempContentTranslations);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(string mailTempContentId, string tenantId, string languageId,
            MailTempContentTranslation mailTempContentTranslation)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<MailTempContentTranslation> GetInfo(string tenantId, string mailTempContentId, string languageId, bool isReadOnly = false)
        {
            return await _mailTempContentTranslationRepository.GetAsync(isReadOnly, x => x.MailTempContentId == mailTempContentId && x.TenantId == tenantId && x.LanguageId == languageId);
        }

        public async Task<bool> CheckExistsById(string tenantId, string mailTempContentId, string languageId, bool isReadOnly = false)
        {
            return await _mailTempContentTranslationRepository.ExistAsync(x => x.MailTempContentId == mailTempContentId && x.TenantId == tenantId && x.LanguageId == languageId);
        }

        public async Task<List<MailTempContentTranslation>> GetAll(string tenantId, string mailTempContentId, bool isReadOnly = false)
        {
            return await _mailTempContentTranslationRepository.GetsAsync(isReadOnly, x => x.TenantId == tenantId && x.MailTempContentId == mailTempContentId);
        }
    }
}
