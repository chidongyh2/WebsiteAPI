using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.Domain.Models;

namespace GHM.Website.Domain.IRepository
{
    public interface ICoreValueTranslationRepository
    {
        Task<int> Insert(CoreValueTranslation coreValueTranslation);

        Task<int> Update(CoreValueTranslation coreValueTranslation);

        Task<int> Inserts(List<CoreValueTranslation> coreValueTranslations);

        Task<int> Delete(string coreValueId);

        Task<int> ForceDelete(string coreValueId);

        Task<CoreValueTranslation> GetInfo(string tenantId, string languageId, string coreValueId, bool isReadOnly = false);

        Task<List<CoreValueTranslation>> GetsCoreValueId(string coreValueId, bool isReadOnly = false);

        Task<bool> CheckExists(string coreValueId, string tenantId, string languageId, string name);
    }
}
