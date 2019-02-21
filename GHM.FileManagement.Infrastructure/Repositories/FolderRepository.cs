using GHM.FileManagement.Domain.IRepositories;
using GHM.FileManagement.Domain.Models;
using GHM.FileManagement.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace GHM.FileManagement.Infrastructure.Repositories
{
    public class FolderRepository : RepositoryBase, IFolderRepository
    {
        private readonly IRepository<Folder> _folderRepository;

        public FolderRepository(IDbContext context) : base(context)
        {
            _folderRepository = Context.GetRepository<Folder>();
        }

        public async Task<bool> CheckExists(string tenantId, int? folderId)
        {
            return await _folderRepository.ExistAsync(x => x.TenantId == tenantId && x.Id == folderId && !x.IsDelete);
        }

        public async Task<bool> CheckName(string tenantId, string unsignName)
        {
            return await _folderRepository.ExistAsync(x => x.TenantId == tenantId && x.Name.Equals(unsignName) && !x.IsDelete);
        }

        //public async Task<bool> CheckEmptyFolder(int? folderId)
        //{
        //    if (!folderId.HasValue)
        //    {                                                                   
        //        folderId = -1;
        //    }

        //    List<FolderViewModel> list = await GetAllFolder(folderId);
        //    //kiem tra  them file co trong folder khong
        //    return list.Count == 0;
        //}

        public async Task<int> Insert(Folder folder)
        {
            _folderRepository.Create(folder);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(Folder folder)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateFolderIdPath(int? folderId, string idPath)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateChildrenIdPath(string oldIdPath, string newIdPath)
        {
            List<Folder> childrenSurveyGroup = await _folderRepository.GetsAsync(false, x => !x.IsDelete && x.IdPath.StartsWith(oldIdPath + "."));
            if (childrenSurveyGroup == null || !childrenSurveyGroup.Any())
            {
                return -1;
            }

            foreach (Folder surveyGroup in childrenSurveyGroup)
            {
                surveyGroup.IdPath = $"{newIdPath}.{surveyGroup.Id}";
            }
            return await Context.SaveChangesAsync();
        }

        public async Task<Folder> GetInfo(string tenantId, string userId, int folderId, bool isReadOnly = false)
        {
            return await _folderRepository.GetAsync(isReadOnly, x => !x.IsDelete && x.Id == folderId && x.TenantId == tenantId);
        }

        public async Task<Folder> GetInfo(string tenantId, string userId, string folderIdPath, bool isReadOnly = false)
        {
            return await _folderRepository.GetAsync(isReadOnly, x => x.IdPath == folderIdPath && !x.IsDelete
                && x.TenantId == tenantId && x.CreatorId == userId);
        }

        public async Task<int> Delete(string tenantId, string userId, int folderId)
        {
            Folder info = await GetInfo(tenantId, userId, folderId);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string tenantId, string userId, int folderId)
        {
            Folder info = await GetInfo(tenantId, userId, folderId);
            if (info == null)
                return -1;

            int folderChildCount = await GetChildCount(folderId);
            if (folderChildCount > 0)
                return -2;

            _folderRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> GetChildCount(int? folderId)
        {
            return await _folderRepository.CountAsync(x => x.ParentId == folderId && !x.IsDelete);
        }

        public async Task<List<FolderViewModel>> GetAllFolder(string tenantId, string userId, int? parentId)
        {
            return await Context.Set<Folder>().Where(x => x.TenantId == tenantId && x.CreatorId == userId
                    && !x.IsDelete && x.ParentId == parentId)
                .Select(x => new FolderViewModel
                {
                    Id = x.Id,
                    IdPath = x.IdPath,
                    Name = x.Name,
                    ParentId = x.ParentId,
                    CreatorId = x.CreatorId,
                    CreatorFullName = x.CreatorFullName,
                    //CreatorAvatar = x.CreatorAvatar,
                    CreateTime = x.CreateTime,
                    ChildCount = x.ChildCount,
                    ConcurrencyStamp = x.ConcurrencyStamp,
                }).AsNoTracking().ToListAsync();
        }

        public Task<List<FolderViewModel>> Search(string tenantId, string userId, string keyword, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Folder, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId && x.CreatorId == userId;
            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            IQueryable<FolderViewModel> query = Context.Set<Folder>().Where(spec)
                .Select(x => new FolderViewModel
                {
                    Id = x.Id,
                    IdPath = x.IdPath,
                    Name = x.Name,
                    ParentId = x.ParentId,
                    CreatorId = x.CreatorId,
                    //CreatorAvatar = x.CreatorAvatar,
                    CreatorFullName = x.CreatorFullName,
                    ChildCount = x.ChildCount,
                    CreateTime = x.CreateTime
                }).AsNoTracking();

            totalRows = query.Count();
            return query
                .OrderBy(x => x.IdPath).Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> UpdateChildCount(string tenantId, string userId, int folderId, int childCount)
        {
            Folder info = await GetInfo(tenantId, userId, folderId);
            if (info == null)
                return -1;

            info.ChildCount = childCount;
            return await Context.SaveChangesAsync();
        }

        public Task<List<Breadcrumb>> GetBreadcrumbByIdPath(string tenantId, string userId, string idPath)
        {
            Expression<Func<Folder, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId && x.CreatorId == userId
                                                       && (idPath.StartsWith(x.IdPath + ".") || x.IdPath == idPath);

            var query = Context.Set<Folder>().Where(spec)
                .Select(x => new
                {
                    x.Id,
                    x.IdPath,
                    x.Name,
                }).AsNoTracking().OrderBy(x => x.IdPath);

            var test = query.ToList();
            return query.Select(x => new Breadcrumb()
            {
                Id = x.Id,
                Name = x.Name,
            }).ToListAsync();
        }
    }
}
