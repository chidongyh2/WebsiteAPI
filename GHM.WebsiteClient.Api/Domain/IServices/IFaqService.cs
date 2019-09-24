using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.WebsiteClient.Api.Domain.ModelMetas;
using GHM.WebsiteClient.Api.Domain.ViewModels;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.IServices
{
    public interface IFaqService
    {
        Task<SearchResult<FaqViewModel>> SearchClientAsync(string tenantId, string languageId, int page, int pageSize);
    }
}
