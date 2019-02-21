using System.Collections.Generic;
using GHM.FileManagement.Domain.ModelMetas;
using GHM.FileManagement.Domain.Models;
using GHM.FileManagement.Domain.ViewModels;
using GHM.Infrastructure.Models;
using System.Threading.Tasks;

namespace GHM.FileManagement.Domain.IServices
{
    public interface IFolderService
    {
        Task<ActionResultResponse<Folder>> Insert(string tenantId, string creatorId, string creatorFullName, FolderMeta folderMeta);

        Task<ActionResultResponse> Update(string tenantId, string lastUpdateUserId, string lastUpdateFullName, int folderId,
            FolderMeta folderMeta);

        Task<ActionResultResponse> Delete(string tenantId, string userId, int folderId);

        //Task<SearchResult<FolderFileForSelectViewModel>> Search(string tenantId, string keyword, string languageId, int page, int pageSize,
        //    out int totalRows);

        Task<ActionResultResponse<Folder>> GetDetail(string tenantId, string userId, int folderId);

        Task<List<FolderViewModel>> GetsAll(string tenantId, string userId, int? parentId);

        Task<ActionResultResponse> UpdateName(string tenantId, string lastUpdateUserId, string lastUpdateFullName,
            int folderId, string concurrencyStamp, string name);

        Task<FolderSearchViewModel> Search(string tenantId, string userId, string keyword, int page, int pageSize);

        Task<List<Breadcrumb>> GetBreadcrumbs(string tenantId, string userId, int? folderId);
    }
}
