using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.Models;

namespace GHM.Website.Domain.IRepository
{
    public interface IAlbumTranslationRepository
    {
        Task<int> Insert(AlbumTranslation albumTranslation);

        Task<int> Update(AlbumTranslation albumTranslation);

        Task<int> Inserts(List<AlbumTranslation> albumTranslations);

        Task<int> Delete(string albumId);

        Task<int> ForceDelete(string albumId);

        Task<AlbumTranslation> GetInfo(string albumId, string languageId, bool isReadOnly = false);

        Task<List<AlbumTranslation>> GetsByAlbumId(string albumId, bool isReadOnly = false);

        Task<bool> CheckExists(string albumId, string tenantId, string languageId, string title);

        Task<bool> CheckExistsBySeoLink(string albumId, string tenantId, string languageId, string seoLink);
    }
}
