using GHM.Infrastructure.ViewModels;
using GHM.WebsiteClient.Api.Domain.ViewModels;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.IServices
{
    public interface ILanguageService
    {
        Task<SearchResult<TenantLanguageViewModel>> GetLanguageSupportAsync(string tenantId);
    }
}
