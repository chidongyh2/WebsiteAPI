using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Models;

namespace GHM.Core.Domain.IRepository
{
    public interface ITenantLanguageRepository
    {
        Task<TenantLanguage> GetInfo(string tenantId, string languageId);

        Task<int> Insert(TenantLanguage tenantLanguage);

        Task<int> Update(TenantLanguage tenantLanguage);

        Task<int> Delete(string tenantId, string languageId);

        Task<int> ForceDeleteByTenantId(string tenantId);

        Task<int> DeactiveLanguages(List<TenantLanguage> tenantLanguages);

        Task<int> UpdateActiveStatus(string tenantId, string languageId, bool isActive);

        Task<int> UpdateDefaultStatus(string tenantId, string languageId, bool isDefault);

        Task<List<TenantLanguage>> GetLanguageByTenantId(string tenantId);

        Task<List<TenantLanguageViewModel>> GetAllLanguage(string tenantId);

        Task<List<TenantLanguageViewModel>> GetLanguageSupport(string tenantId);
    }
}
