using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.FileManagement.Domain.IRepositories;
using GHM.FileManagement.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using Microsoft.EntityFrameworkCore;
using File = GHM.FileManagement.Domain.Models.File;

namespace GHM.FileManagement.Infrastructure.Repositories
{
    public class FileRepository : RepositoryBase, IFileRepository
    {

        private readonly IRepository<File> _fileRepository;

        public FileRepository(IDbContext context) : base(context)
        {
            _fileRepository = Context.GetRepository<File>();
        }

        public async Task<File> GetInfo(string tenantId, string userId, string fileId, bool isReadOnly = false)
        {
            return await _fileRepository.GetAsync(isReadOnly, x => x.Id == fileId && !x.IsDelete);
        }

        public async Task<int> Delete(string tenantId, string userId, string fileId)
        {
            var fileInfo = await GetInfo(tenantId, userId, fileId);
            if (fileInfo == null)
                return -1;

            fileInfo.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string tenantId, string userId, string fileId)
        {
            var fileInfo = await GetInfo(tenantId, userId, fileId);
            if (fileInfo == null)
                return -1;

            _fileRepository.Delete(fileInfo);
            return await Context.SaveChangesAsync();
        }

        public async Task<List<FileViewModel>> SearchAnyFile(string tenantId, string userId, string keyword)
        {
            Expression<Func<File, bool>> spec = f => !f.IsDelete && f.TenantId == tenantId && f.CreatorId == userId;
            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            return await Context.Set<File>().Where(spec).Select(x => new FileViewModel
            {
                Id = x.Id,
                Name = x.Name,
                Extension = x.Extension,
                Type = x.Type,
                Url = x.Url,
                CreateTime = x.CreateTime,
                ConcurrencyStamp = x.ConcurrencyStamp,
                CreatorId = x.CreatorId,
                CreatorAvatar = x.CreatorAvatar,
                CreatorFullName = x.CreatorFullName,
                FolderId = x.FolderId,
                LastUpdate = x.LastUpdate,
                Size = x.Size
            }).ToListAsync();
        }

        public async Task<int> Insert(List<File> files)
        {
            _fileRepository.Creates(files);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(File file)
        {
            return await Context.SaveChangesAsync();
        }

        public Task<List<FileViewModel>> Search(string tenantId, string userId, string keyword, int? folderId, int page,
            int pageSize, out int totalRows)
        {
            Expression<Func<File, bool>> spec = t => !t.IsDelete && t.TenantId == tenantId;
            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            if (folderId.HasValue)
            {
                spec = spec.And(x => x.FolderId == folderId);
            }

            var query = Context.Set<File>().Where(spec)
                .Select(x => new FileViewModel
                {
                    Id = x.Id,
                    Name = x.Name,
                    Extension = x.Extension,
                    Type = x.Type,
                    Url = x.Url,
                    CreatorId = x.CreatorId,
                    CreatorFullName = x.CreatorFullName,
                    CreatorAvatar = x.CreatorAvatar,
                    CreateTime = x.CreateTime,
                    ConcurrencyStamp = x.ConcurrencyStamp,
                    FolderId = x.FolderId,
                    LastUpdate = x.LastUpdate,
                    Size = x.Size
                }).AsNoTracking();

            totalRows = _fileRepository.Count(spec);
            return query
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<bool> CheckExistsByFolderId(int? folderId)
        {
            return await _fileRepository.ExistAsync(x => x.FolderId == folderId && !x.IsDelete);
        }

        public async Task<List<FileViewModel>> GetAll(string tenantId, string userId, int? folderId)
        {
            Expression<Func<File, bool>> spec = f => !f.IsDelete && f.TenantId == tenantId && f.CreatorId == userId
                && f.FolderId == folderId;

            var query = await Context.Set<File>().Where(spec).Select(x => new FileViewModel()
            {
                Id = x.Id,
                Name = x.Name,
                Extension = x.Extension,
                Type = x.Type,
                Url = x.Url,
                CreatorId = x.CreatorId,
                CreatorFullName = x.CreatorFullName,
                CreatorAvatar = x.CreatorAvatar,
                CreateTime = x.CreateTime,
                ConcurrencyStamp = x.ConcurrencyStamp,
                FolderId = x.FolderId,
                LastUpdate = x.LastUpdate,
                Size = x.Size
            }).ToListAsync();

            return query;
        }


    }
}
