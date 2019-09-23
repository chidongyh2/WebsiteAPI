using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.Domain.Models;

namespace GHM.Website.Domain.IRepository
{
    public interface IAgencyInfoTranslationRepository
    {
        Task<int> Insert(AgencyInfoTranslation agencyInfoTranslation);

        Task<int> Update(AgencyInfoTranslation agencyInfoTranslation);

        Task<int> Inserts(List<AgencyInfoTranslation> agencyInfoTranslations);

        Task<int> Delete(string agencyInfoId);

        Task<int> ForceDelete(string agencyInfoId);

        Task<AgencyInfoTranslation> GetInfo(string tenantId, string languageId, string agencyInfoId, bool isReadOnly = false);

        Task<List<AgencyInfoTranslation>> GetsAgencyInfoId(string agencyInfoId, bool isReadOnly = false);

        Task<bool> CheckExists(string agencyInfoId, string tenantId, string languageId, string question);
    }
}
