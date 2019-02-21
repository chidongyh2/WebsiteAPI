using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Event.Domain.ModelMetas;
using GHM.Website.Event.Domain.ViewModels;
using System.Threading.Tasks;

namespace GHM.Website.Event.Domain.IServices
{
    public interface IEventAlbumService
    {
        Task<SearchResult<AlbumViewModel>> Search(string tenantId, string eventId, string languageId, int page, int pageSize);

        Task<ActionResultResponse<string>> Insert(string tenantId, string eventId, EventAlbumMeta eventAlbumMeta);

        Task<ActionResultResponse> Update(string tenantId, string eventId, string albumId, EventAlbumMeta eventAlbumMeta);

        Task<ActionResultResponse> Delete(string tenantId, string eventId, string albumId);

        Task<ActionResultResponse<AlbumDetailViewModel>> GetDetail(string tenantId, string eventId, string albumId);
    }
}
