using GHM.Website.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IRepository
{
    public interface IPhotoRepository
    {
        Task<List<PhotoViewModel>> Search(string tenantId, string imageGroupId, int page, int pageSize, out int totalRows);

        Task<List<PhotoViewModel>> SelectTop(string tenantId, bool? isActive, int top);

        Task<int> Insert(List<Photo> photo);

        Task<int> Update(List<Photo> photos);

        Task<int> Update(Photo photo);

        Task<int> Delete(string photoId);

        Task<int> Delete(List<string> photoIds);

        Task<int> DeleteByAlbumId(string albumId);

        Task<int> ForceDelete(string photoId);

        Task<Photo> GetInfo(string photoId, bool isReadonly = false);

        Task<Photo> GetInfo(string tenantId, string photoId, bool isReadonly = false);

        Task<List<Photo>> GetsByAlbumId(string tenantId, string albumId, bool isReadOnly = false);

        Task<List<Photo>> GetsByAlbumId(string tenantId, string albumId, int page, int pageSize, out int totalRows);
    }
}
