using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.Domain.Models;

namespace GHM.Website.Domain.IRepository
{
  public  interface IFaqTranslationRepository
    {
        Task<int> Insert(FaqTranslation faqTranslation);

        Task<int> Update(FaqTranslation faqTranslation);

        Task<int> Inserts(List<FaqTranslation> faqTranslations);

        Task<int> Delete(string faqId);

        Task<int> ForceDelete(string faqId);

        Task<FaqTranslation> GetInfo(string tenantId, string languageId, string faqId, bool isReadOnly = false);

        Task<List<FaqTranslation>> GetsFaqId(string faqId, bool isReadOnly = false);

        Task<bool> CheckExists(string faqId, string tenantId, string languageId, string name);
    }
}
