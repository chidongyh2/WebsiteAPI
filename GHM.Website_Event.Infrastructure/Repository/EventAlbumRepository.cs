using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Event.Domain.IRepository;
using GHM.Website.Event.Domain.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace GHM.Website.Event.Infrastructure.Repository
{
    public class EventAlbumRepository : RepositoryBase, IEventAlbumRepository
    {
        private readonly IRepository<EventAlbum> _eventAlbumRepository;
        public EventAlbumRepository(IDbContext context) : base(context)
        {
            _eventAlbumRepository = Context.GetRepository<EventAlbum>();
        }

        public Task<List<string>> Search(string tenantId, string eventId, bool? isActive, int page, int pageSize, out int totalRows)
        {
            Expression<Func<EventAlbum, bool>> spec = x => !x.IsDelete && x.EventId == eventId;

            if (isActive.HasValue)
            {
                spec = spec.And(x => x.IsActive == isActive);
            }

            var query = Context.Set<EventAlbum>().Where(spec).Select(x => x.AlbumId).AsNoTracking();

            totalRows = query.Count();
            return query.Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Insert(EventAlbum eventAlbum)
        {
            _eventAlbumRepository.Create(eventAlbum);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(EventAlbum eventAlbum)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string eventAlbumId)
        {
            var info = await GetInfo(eventAlbumId);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<EventAlbum> GetInfo(string id, bool isReadonly = false)
        {
            return await _eventAlbumRepository.GetAsync(isReadonly, x => x.Id == id && !x.IsDelete);
        }

        public async Task<int> ForceDelete(string eventDayId)
        {
            var info = await GetInfo(eventDayId);
            if (info == null)
                return -1;

            _eventAlbumRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<bool> CheckExistsEventAlbum(string tenantId, string eventId, string albumId)
        {
            return await _eventAlbumRepository.ExistAsync(x => !x.IsDelete && x.TenantId == tenantId && x.EventId == eventId && x.AlbumId == albumId);
        }

        public async Task<EventAlbum> GetInfo(string tenantId, string eventAlbumId, bool isReadonly = false)
        {
            return await _eventAlbumRepository.GetAsync(isReadonly, x => x.TenantId == tenantId && x.Id == eventAlbumId && !x.IsDelete);
        }

        public async Task<EventAlbum> GetInfo(string tenantId, string eventId, string albumId, bool isReadonly = false)
        {
            return await _eventAlbumRepository.GetAsync(isReadonly, x => x.TenantId == tenantId && x.EventId == eventId && x.AlbumId == albumId && !x.IsDelete);
        }
    }
}
