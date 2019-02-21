using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.FileManagement.Domain.Models;
using GHM.FileManagement.Domain.ViewModels;

namespace GHM.FileManagement.Domain.IRepositories
{
    public interface IFileRepository
    {
        Task<List<FileViewModel>> Search(string tenantId, string userId, string keyword, int? folderId, int page,
            int pageSize, out int totalRows);

        Task<int> Insert(List<File> files);

        Task<int> Update(File file);

        Task<int> Delete(string tenantId, string userId, string fileId);

        Task<int> ForceDelete(string tenantId, string userId, string fileId);

        Task<File> GetInfo(string tenantId, string userId, string fileId, bool isReadOnly = false);        

        Task<bool> CheckExistsByFolderId(int? folderId);

        Task<List<FileViewModel>> GetAll(string tenantId, string userId, int? folderId);
    }
}
