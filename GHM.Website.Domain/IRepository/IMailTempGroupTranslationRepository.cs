using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Website.Domain.Models;

namespace GHM.Website.Domain.IRepository
{
    public interface IMailTempGroupTranslationRepository
    {
   
        Task<int> Insert(MailTempGroupTranslation mailGroupTranslation);

        Task<int> Inserts(List<MailTempGroupTranslation> mailGroupTranslations);

        Task<int> Update(MailTempGroupTranslation mailGroupTranslation);

        Task<int> ForceDelete(string tenantId, string mailTempGroupId, string languageId);

        Task<MailTempGroupTranslation> GetInfo(string tenantId, string mailTempGroupId, string languageId, bool isReadOnly = false);

        Task<bool> CheckExistsById(string tenantId, string mailTempGroupId, string languageId, bool isReadOnly = false);

        Task<List<MailTempGroupTranslation>> GetAll(string tenantId, string mailGroupId);

    }
}
