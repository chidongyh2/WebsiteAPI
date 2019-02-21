using GHM.Website.Event.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GHM.Website.Event.Domain.IRepository
{
    public interface IEventAlbumRepository
    {
        Task<int> Insert(EventAlbum eventAlbum);

        Task<int> Update(EventAlbum eventAlbum);

        Task<int> Delete(string id);

        Task<int> ForceDelete(string id);

        Task<EventAlbum> GetInfo(string id, bool isReadonly = false);

        Task<EventAlbum> GetInfo(string tenantId, string id, bool isReadonly = false);
        Task<EventAlbum> GetInfo(string tenantId, string eventId, string albumId, bool isReadonly = false);

        Task<bool> CheckExistsEventAlbum(string tenantId, string eventId, string albumId);

        Task<List<string>> Search(string tenantId, string eventId, bool? isActive, int page, int pageSize, out int totalRows);
    }
}
