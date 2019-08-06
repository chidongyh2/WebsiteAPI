using GHM.Infrastructure.ViewModels;
using GHM.WebsiteClient.Api.Domain.Constants;
using GHM.WebsiteClient.Api.Domain.ViewModels;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.IServices
{
    public interface IAlbumService
    {
        Task<SearchResult<AlbumWithItemViewModel>> SearchAlbumWithItem(string tenantId, string languageId, AlbumType type, int page, int pageSize);
    }
}
