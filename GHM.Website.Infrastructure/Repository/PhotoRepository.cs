using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace GHM.Website.Infrastructure.Repository
{
    public class PhotoRepository : RepositoryBase, IPhotoRepository
    {
        private readonly IRepository<Photo> _photoRepository;

        public PhotoRepository(IDbContext context) : base(context)
        {
            _photoRepository = Context.GetRepository<Photo>();
        }

        public Task<List<PhotoViewModel>> Search(string tenantId, string imageGroupId, int page, int pageSize,
            out int totalRows)
        {
            Expression<Func<Photo, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId;

            if (!string.IsNullOrEmpty(imageGroupId))
            {
                spec = spec.And(x => x.AlbumId == imageGroupId);
            }

            var query = Context.Set<Photo>()
                .Where(spec)
                .Select(x => new PhotoViewModel
                {
                    Id = x.Id,
                    Url = x.Url,
                    Title = x.Title,
                    Description = x.Description,
                })
                .AsNoTracking();

            totalRows = query.Count();

            return query
                .OrderByDescending(x => x.Id)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<List<PhotoViewModel>> SelectTop(string tenantId, bool? isActive, int top)
        {
            Expression<Func<Photo, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId;

            return await Context.Set<Photo>()
                .Where(spec)
                .Select(x => new PhotoViewModel
                {
                    Id = x.Id,
                    Url = x.Url,
                    CreateTime = x.CreateTime,
                    Title = x.Title,
                    Description = x.Description
                })
                .OrderByDescending(x => x.CreateTime)
                .Skip(1)
                .Take(top)
                .ToListAsync();
        }

        public async Task<int> Insert(List<Photo> image)
        {
            _photoRepository.Creates(image);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(List<Photo> photos)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(Photo image)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string imageId)
        {
            var info = await GetInfo(imageId);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(List<string> photoIds)
        {
            var photos = await _photoRepository.GetsAsync(false, x => photoIds.Contains(x.Id));
            if (photos == null || !photos.Any())
                return -1;

            foreach (var photo in photos)
            {
                photo.IsDelete = true;
            }
            return await Context.SaveChangesAsync();
        }

        public async Task<int> DeleteByAlbumId(string albumId)
        {
            var photos = await _photoRepository.GetsAsync(false, x => x.AlbumId == albumId && !x.IsDelete);
            if (photos == null || !photos.Any())
                return -1;

            foreach (var photo in photos)
            {
                photo.IsDelete = true;
            }
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string imageId)
        {
            var info = await GetInfo(imageId);
            if (info == null)
                return -1;

            _photoRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<Photo> GetInfo(string imageId, bool isReadonly = false)
        {
            return await _photoRepository.GetAsync(isReadonly, x => x.Id == imageId && !x.IsDelete);
        }

        public async Task<Photo> GetInfo(string tenantId, string imageId, bool isReadonly = false)
        {
            return await _photoRepository.GetAsync(isReadonly, x => x.TenantId == tenantId && x.Id == imageId && !x.IsDelete);
        }

        public async Task<List<Photo>> GetsByAlbumId(string tenantId, string albumId, bool isReadOnly = false)
        {
            return await _photoRepository.GetsAsync(isReadOnly, x => !x.IsDelete && x.TenantId == tenantId && x.AlbumId == albumId);
        }

        public Task<List<Photo>> GetsByAlbumId(string tenantId, string albumId, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Photo, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId && x.AlbumId == albumId;
            var sort = Context.Filters.Sort<Photo, DateTime>(x => x.CreateTime, true);
            var paging = Context.Filters.Page<Photo>(page, pageSize);
            totalRows = _photoRepository.Count(spec);
            return _photoRepository.GetsAsync(true, spec, sort, paging);
        }
    }
}
