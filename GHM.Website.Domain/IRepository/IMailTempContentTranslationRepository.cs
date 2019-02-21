using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Website.Domain.Models;

namespace GHM.Website.Domain.IRepository
{
    public interface IMailTempContentTranslationRepository
    {
        Task<int> Insert(MailTempContentTranslation mailTempContentTranslation);

        Task<int> Inserts(List<MailTempContentTranslation> mailTempContentTranslations);

        Task<int> Update(string mailTempContentId, string tenantId, string languageId, MailTempContentTranslation mailTempContentTranslation);

        Task<MailTempContentTranslation> GetInfo(string mailTempContentId, string tenantId, string languageId, bool isReadOnly = false);

        Task<bool> CheckExistsById(string mailTempContentId, string tenantId, string languageId, bool isReadOnly = false);

        Task<List<MailTempContentTranslation>> GetAll(string tenantId, string mailTempContentId, bool isReadOnly = false);

    }
}
