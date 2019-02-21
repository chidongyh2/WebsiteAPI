using GHM.Website.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IRepository
{
    public interface IAlbumRepository
    {
        Task<List<AlbumViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive, AlbumType? type,
            int page, int pageSize, out int totalRows);

        Task<List<AlbumViewModel>> SearchClient(string tenantId, string languageId, AlbumType type, int page, int pageSize, out int totalRows);

        Task<int> Insert(Album imageGroup);

        Task<int> Update(Album imageGroup);

        Task<int> Delete(string id);

        Task<int> ForceDelete(string id);

        Task<Album> GetInfo(string id, bool isReadonly = false);

        Task<Album> GetInfo(string tenantId, string id, bool isReadonly = false);

        Task<AlbumViewModel> GetInfo(string tenantId, string languageId, string seoLink, bool isReadonly = false);

        Task<List<AlbumViewModel>> SearchByAlbumIds(string tenantId, string languageId, List<string> albumIds);
    }
}
