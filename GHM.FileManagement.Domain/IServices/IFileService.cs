using GHM.Infrastructure.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.FileManagement.Domain.ModelMetas;
using GHM.FileManagement.Domain.Models;
using GHM.FileManagement.Domain.ViewModels;
using GHM.Infrastructure.ViewModels;
using Microsoft.AspNetCore.Http;

namespace GHM.FileManagement.Domain.IServices
{
    public interface IFileService
    {

        Task<ActionResultResponse<List<FileViewModel>>> UploadFiles(string tenantId, string creatorId, string creatorFullName, string creatorAvatar,
            int? folderId, IFormFileCollection formFileCollection);

        //Task<ActionResultResponse> Insert(string tenantId, string creatorId, string creatorFullName, string creatorAvatar, 
        //    int? folderId, IFormFileCollection fileMetas);

        Task<ActionResultResponse> Update(string tenantId, string userId, string fileId, FileMeta fileMeta);

        Task<ActionResultResponse> Delete(string tenantId, string userId, string fileId);

        Task<File> GetInfo(string tenantId, string userId, string fileId, bool isReadOnly = false);

        Task<List<FileViewModel>> GetsAll(string tenantId, string userId, int? folderId);

    }
}
