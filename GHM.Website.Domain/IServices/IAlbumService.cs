using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IServices
{
    public interface IAlbumService
    {
        #region Administrator.
        Task<SearchResult<AlbumViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive, AlbumType? type, int page, int pageSize);

        Task<ActionResultResponse<string>> Insert(string tenantId, string creatorId, string creatorFullName, string creatorAvatar, AlbumMeta imageGroupMeta);

        Task<ActionResultResponse<string>> Update(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvata,
            string imageId, AlbumMeta imageGroupMeta);

        Task<ActionResultResponse> Delete(string tenantId, string imageGroupId);

        Task<ActionResultResponse<AlbumDetailViewModel>> GetDetail(string tenantId, string imageGroupId);

        Task<SearchResult<AlbumViewModel>> SearchByAlbumIds(string tenantId, string languageId, List<string> albumIds);
        #endregion

        #region Client
        Task<SearchResult<AlbumWithItemViewModel>> SearchAlbumWithItem(string tenantId, string languageId,
            string keyword, AlbumType type,
            int page, int pageSize);

        Task<SearchResult<AlbumWithItemViewModel>> SearchAlbumWithItemByListAlbumId(string tenantId, string languageId, List<string> albumIds);

        Task<SearchResult<AlbumItemViewModel>> SearchAlbumItem(string tenantId, string languageId, string albumSeoLink, int page,
            int pageSize);

        Task<SearchResult<AlbumViewModel>> SearchClient(string tenantId, string languageId, AlbumType type, int page, int pageSize);
        #endregion
    }
}
