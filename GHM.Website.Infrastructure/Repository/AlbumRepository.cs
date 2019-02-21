using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace GHM.Website.Infrastructure.Repository
{
    public class AlbumRepository : RepositoryBase, IAlbumRepository
    {
        private readonly IRepository<Album> _imageGroupRepository;

        public AlbumRepository(IDbContext context) : base(context)
        {
            _imageGroupRepository = Context.GetRepository<Album>();
        }

        public Task<List<AlbumViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive, AlbumType? type,
            int page, int pageSize, out int totalRows)
        {
            Expression<Func<Album, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId;
            Expression<Func<AlbumTranslation, bool>> specTranslation = pt => pt.LanguageId == languageId && !pt.IsDelete;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            if (isActive.HasValue)
            {
                spec = spec.And(x => x.IsActive == isActive.Value);
            }

            if (type.HasValue)
            {
                spec = spec.And(x => x.Type == type);
            }

            var query = Context.Set<Album>().Where(spec)
                .Join(Context.Set<AlbumTranslation>().Where(specTranslation), x => x.Id, at => at.AlbumId, (x, at) =>
                    new AlbumViewModel
                    {
                        Id = x.Id,
                        Title = at.Title,
                        Description = at.Description,
                        IsActive = x.IsActive,
                        Thumbnail = x.Thumbnail,
                        Type = x.Type,
                        CreateTime = x.CreateTime,
                        SeoLink = at.SeoLink
                    }).AsNoTracking();

            totalRows = query.Count();

            return query
                .OrderByDescending(x => x.Id)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public Task<List<AlbumViewModel>> SearchClient(string tenantId, string languageId, AlbumType type,
           int page, int pageSize, out int totalRows)
        {
            Expression<Func<Album, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId &&
            (!x.IsPublic.HasValue || x.IsPublic.Value) && x.IsActive
            && x.Type == type;
            Expression<Func<AlbumTranslation, bool>> specTranslation = pt => pt.LanguageId == languageId && !pt.IsDelete;

            var query = Context.Set<Album>().Where(spec)
                .Join(Context.Set<AlbumTranslation>().Where(specTranslation), x => x.Id, at => at.AlbumId, (x, at) =>
                    new AlbumViewModel
                    {
                        Id = x.Id,
                        Title = at.Title,
                        Description = at.Description,
                        IsActive = x.IsActive,
                        Thumbnail = x.Thumbnail,
                        Type = x.Type,
                        CreateTime = x.CreateTime,
                        SeoLink = at.SeoLink
                    }).AsNoTracking();

            totalRows = query.Count();

            return query
                .OrderByDescending(x => x.Id)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public Task<List<AlbumViewModel>> SearchByAlbumIds(string tenantId, string languageId, List<string> albumIds)
        {
            if (albumIds == null || !albumIds.Any())
                return null;

            Expression<Func<Album, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId && albumIds.Contains(x.Id);
            Expression<Func<AlbumTranslation, bool>> specTranslation = pt => pt.LanguageId == languageId && !pt.IsDelete;

            var query = Context.Set<Album>().Where(spec)
                .Join(Context.Set<AlbumTranslation>().Where(specTranslation), x => x.Id, at => at.AlbumId, (x, at) =>
                    new AlbumViewModel
                    {
                        Id = x.Id,
                        Title = at.Title,
                        Description = at.Description,
                        IsActive = x.IsActive,
                        Thumbnail = x.Thumbnail,
                        Type = x.Type,
                        SeoLink = at.SeoLink
                    }).AsNoTracking();

            return query
                .OrderByDescending(x => x.Id)
                .ToListAsync();
        }

        public async Task<int> Insert(Album imageGroup)
        {
            _imageGroupRepository.Create(imageGroup);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(Album imageGroup)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string id)
        {
            var info = await GetInfo(id);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string id)
        {
            var info = await GetInfo(id);
            if (info == null)
                return -1;

            _imageGroupRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<Album> GetInfo(string id, bool isReadonly = false)
        {
            return await _imageGroupRepository.GetAsync(isReadonly, x => x.Id == id && !x.IsDelete);
        }

        public async Task<Album> GetInfo(string tenantId, string id, bool isReadonly = false)
        {
            return await _imageGroupRepository.GetAsync(isReadonly, x => x.TenantId == tenantId && x.Id == id && !x.IsDelete);
        }

        public async Task<AlbumViewModel> GetInfo(string tenantId, string languageId, string seoLink, bool isReadonly = false)
        {
            seoLink = seoLink?.Trim();
            var query = Context.Set<Album>().Where(x => x.IsActive && !x.IsDelete && x.TenantId == tenantId)
                .Join(Context.Set<AlbumTranslation>().Where(x => x.LanguageId == languageId && x.SeoLink.Equals(seoLink)), a => a.Id,
                    at => at.AlbumId,
                    (a, at) => new AlbumViewModel
                    {
                        Id = a.Id,
                        Title = at.Title,
                        Description = at.Description,
                        IsActive = a.IsActive,
                        Thumbnail = a.Thumbnail,
                        Type = a.Type,
                        CreateTime = a.CreateTime,
                        SeoLink = at.SeoLink
                    }).AsNoTracking();
            return await query.FirstOrDefaultAsync();
        }
    }
}
