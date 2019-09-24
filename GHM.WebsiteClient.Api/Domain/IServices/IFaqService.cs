using GHM.Infrastructure.ViewModels;
using GHM.WebsiteClient.Api.Domain.ViewModels;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.IServices
{
    public interface IFaqService
    {
        Task<SearchResult<FaqViewModel>> FaqSearch(string tenantId, string languageId, string faqGroupId,
            string keyword, int page, int pageSize);

        Task<SearchResult<FaqGroupViewModel>> FaqGroupSearch(string tenantId, string languageId,
            string keyword, int page, int pageSize);
    }
}
