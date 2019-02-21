using GHM.FileManagement.Domain.Models;
using GHM.FileManagement.Domain.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GHM.FileManagement.Domain.IRepositories
{
    public interface IFolderRepository
    {
        Task<bool> CheckExists(string tenantId, int? folderId);

        //Task<bool> CheckEmptyFolder(int? folderId);

        Task<bool> CheckName(string tenantId, string unsignName);

        Task<int> Insert(Folder folder);

        Task<int> Update(Folder folder);

        Task<int> UpdateFolderIdPath(int? folderId, string idPath);

        Task<int> UpdateChildrenIdPath(string oldIdPath, string newIdPath);

        Task<Folder> GetInfo(string tenantId, string userId, int folderId, bool isReadOnly = false);

        Task<Folder> GetInfo(string teantnId, string userId, string folderIdPath, bool isReadOnly = false);

        Task<int> Delete(string tenantId, string userId, int folderId);

        Task<int> ForceDelete(string tenantId, string userId, int folderId);

        Task<int> GetChildCount(int? folderId);

        Task<int> UpdateChildCount(string tenantId, string userId, int folderId, int childCount);

        Task<List<FolderViewModel>> GetAllFolder(string tenantId, string userId, int? parentId);

        Task<List<FolderViewModel>> Search(string tenantId, string userId, string keyword, int page, int pageSize, out int totalRows);

        Task<List<Breadcrumb>> GetBreadcrumbByIdPath(string tenantId, string userId, string idPath);
    }
}
