using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.WebsiteClient.Api.Domain.ModelMetas;
using GHM.WebsiteClient.Api.Domain.ViewModels;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.IServices
{
    public interface IEventService
    {
        Task<SearchResult<EventClientViewModel>> SearchClientAsync(string tenantId, string languageId, int page, int pageSize);
        Task<ActionResultResponse<EventShowClientViewModel>> GetEventDetailShowClientAsync(string tenantId, string languageId, string seoLink);

        Task<ActionResultResponse<string>> InsertAsync(string eventId,  RegisterMeta registerMeta);
    }
}
