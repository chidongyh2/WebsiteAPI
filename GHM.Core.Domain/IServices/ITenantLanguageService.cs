using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;

namespace GHM.Core.Domain.IServices
{
    public interface ITenantLanguageService
    {
        Task<ActionResultResponse> Save(TenantLanguage tenantLanguage);

        Task<ActionResultResponse> UpdateActiveStatus(string tenantId, string languageId, bool isActive);

        Task<ActionResultResponse> UpdateDefaultStatus(string tenantId, string languageId, bool isDefault);

        Task<ActionResultResponse> Delete(string tenantId, string languageId);

        Task<SearchResult<TenantLanguageViewModel>> GetsByTenantId(string tenantId);

        Task<SearchResult<TenantLanguageViewModel>> GetLanguageSupport(string tenantId);
    }
}
