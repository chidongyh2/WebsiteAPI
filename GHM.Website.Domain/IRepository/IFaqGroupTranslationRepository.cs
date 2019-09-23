using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.Domain.Models;

namespace GHM.Website.Domain.IRepository
{
    public interface IFaqGroupTranslationRepository
    {
        Task<int> Insert(FaqGroupTranslation faqGroupTranslation);

        Task<int> Update(FaqGroupTranslation faqGroupTranslation);

        Task<int> Inserts(List<FaqGroupTranslation> faqGroupTranslations);

        Task<int> Delete(string faqGroupId);

        Task<int> ForceDelete(string faqGroupId);

        Task<FaqGroupTranslation> GetInfo(string tenantId, string languageId, string faqGroupId, bool isReadOnly = false);

        Task<List<FaqGroupTranslation>> GetsFaqId(string faqGroupId, bool isReadOnly = false);

        Task<bool> CheckExists(string faqGroupId, string tenantId, string languageId, string name);
    }
}
