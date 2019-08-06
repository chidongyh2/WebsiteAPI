using GHM.Infrastructure.ViewModels;
using GHM.WebsiteClient.Api.Domain.Constants;
using GHM.WebsiteClient.Api.Domain.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.IServices
{
    public interface IAlbumService
    {
        Task<SearchResult<AlbumWithItemViewModel>> SearchAlbumWithItemAsync(string tenantId, string languageId, AlbumType type, int page, int pageSize);
        Task<SearchResult<AlbumWithItemViewModel>> SearchAlbumWithItemByListAlbumId(string tenantId, string languageId, List<string> albumIds);
        Task<SearchResult<AlbumItemViewModel>> SearchAlbumItemAsync(string tenantId, string languageId, string albumSeoLink, int page, int pageSize);
        Task<SearchResult<AlbumViewModel>> SearchClientAsync(string tenantId, string languageId, AlbumType type, int page, int pageSize);
    }
}
