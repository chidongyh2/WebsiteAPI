using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.ModelMetas;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.Resources;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.SqlServer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace GHM.Core.Infrastructure.Repository
{
    public class RolePageRepository : RepositoryBase, IRolePageRepository
    {
        private readonly IRepository<RolesPages> _rolePageRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmCoreResource> _resourceService;

        public RolePageRepository(IDbContext context, IResourceService<SharedResource> sharedResourceService, IResourceService<GhmCoreResource> resourceService) : base(context)
        {
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
            _rolePageRepository = Context.GetRepository<RolesPages>();
        }

        public async Task<ActionResultResponse> Insert(RolesPages rolePage)
        {
            var isExists = await CheckExists(rolePage.PageId, rolePage.RoleId);
            if (isExists)
                return new ActionResultResponse(-1, _resourceService.GetString("Role page already assigned."));

            _rolePageRepository.Create(rolePage);
            var result = await Context.SaveChangesAsync();
            return new ActionResultResponse(result, result > 0 ? _resourceService.GetString("Role page assign successful.")
                : _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));
        }

        public async Task<int> Inserts(List<RolesPages> rolePages)
        {
            _rolePageRepository.Creates(rolePages);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string roleId, int pageId)
        {
            var info = await _rolePageRepository.GetAsync(false, x => x.PageId == pageId && x.RoleId == roleId);
            if (info == null)
                return -1;

            _rolePageRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdatePermission(string roleId, int pageId, int permissions)
        {
            var rolePageInfo = await _rolePageRepository.GetAsync(false, x => x.RoleId == roleId && x.PageId == pageId);
            if (rolePageInfo != null)
            {
                rolePageInfo.Permissions = permissions;
                return await Context.SaveChangesAsync();
            }

            _rolePageRepository.Create(new RolesPages
            {
                RoleId = roleId,
                PageId = pageId,
                Permissions = permissions
            });
            return await Context.SaveChangesAsync();
        }

        public async Task<bool> CheckExists(int pageId, string roleId)
        {
            return await _rolePageRepository.ExistAsync(x =>
                x.PageId == pageId && x.RoleId == roleId);
        }

        public async Task<List<RolesPages>> GetsByPageId(int pageId, bool isReadOnly = false)
        {
            return await _rolePageRepository.GetsAsync(true, x => x.PageId == pageId);
        }

        public async Task<List<RolesPages>> GetsByRoleId(string roleId, bool isReadOnly = false)
        {
            return await _rolePageRepository.GetsAsync(true, x => x.RoleId == roleId);
        }

        public async Task<List<RolesPagesViewModel>> GetsByRoleId(string languageId, string roleId)
        {
            return await Context.Set<RolesPages>().Where(x => x.RoleId == roleId)
                .Join(Context.Set<Page>(), rp => rp.PageId, p => p.Id, (rp, p) => new { rp, p })
                .Join(Context.Set<PageTranslation>().Where(x => x.LanguageId == languageId), rpp => rpp.p.Id,
                    pt => pt.PageId, (rpp, pt) => new RolesPagesViewModel
                    {
                        RoleId = rpp.rp.RoleId,
                        PageId = rpp.p.Id,
                        PageName = pt.Name,
                        IdPath = rpp.p.IdPath,
                        Permissions = rpp.rp.Permissions
                    })
                    .OrderBy(x => x.IdPath)
                    .AsNoTracking()
                    .ToListAsync();
        }

        public async Task<List<RolesPagesViewModel>> GetsByUserId(string userId)
        {
            var query = Context.Set<IdentityUserRole<string>>().Where(x => x.UserId == userId)
                .GroupJoin(Context.Set<RolesPages>(), userRole => userRole.RoleId, rolePage => rolePage.RoleId,
                    (userRole, rolePage) => new { userRole, rolePage })
                .SelectMany(x => x.rolePage.DefaultIfEmpty(), (x, rolePage) => new RolesPagesViewModel
                {
                    RoleId = x.userRole.RoleId,
                    PageId = rolePage != null ? rolePage.PageId : (int?)null,
                    Permissions = rolePage != null ? rolePage.Permissions : (int?)null
                });
            return await query.ToListAsync();
        }

        public async Task<ActionResultResponse> DeleteByPageId(int pageId)
        {
            var listRolesPages = await GetsByPageId(pageId);
            if (listRolesPages == null || !listRolesPages.Any())
                return new ActionResultResponse(-1, _resourceService.GetString("List role page by pageId does not exists."));

            _rolePageRepository.Deletes(listRolesPages);
            var result = await Context.SaveChangesAsync();
            return new ActionResultResponse(result, result > 0 ? _resourceService.GetString("Delete role page by pageId successful.")
                : _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));
        }

        public async Task<int> DeleteByRoleIdAndPageIds(string roleId, List<int> pageId)
        {
            var listRolePages =
                await _rolePageRepository.GetsAsync(false, x => x.RoleId == roleId && pageId.Contains(x.PageId));
            if (listRolePages == null || !listRolePages.Any())
                return -1;

            _rolePageRepository.Deletes(listRolePages);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateRolePagePermission(string roleId, List<RolePagePermissionMeta> rolePagePermissions)
        {
            var listRolePages = await _rolePageRepository.GetsAsync(false, x => x.RoleId == roleId
                                                                                && rolePagePermissions
                                                                                    .Select(rp => rp.PageId)
                                                                                    .Contains(x.PageId));
            if (listRolePages == null || !listRolePages.Any())
                return -1;

            foreach (var rolePage in listRolePages)
            {
                var rolePagePermission = rolePagePermissions.FirstOrDefault(x => x.PageId == rolePage.PageId);
                if (rolePagePermission == null)
                    continue;

                rolePage.Permissions = rolePagePermission.Permissions;
            }
            return await Context.SaveChangesAsync();
        }

        public async Task<ActionResultResponse> DeleteByRoleId(string roleId)
        {
            var listRolesPages = await GetsByRoleId(roleId);
            if (listRolesPages == null || !listRolesPages.Any())
                return new ActionResultResponse(-1, _resourceService.GetString("List role page by roleId does not exists."));

            _rolePageRepository.Deletes(listRolesPages);
            var result = await Context.SaveChangesAsync();
            return new ActionResultResponse(result, result > 0 ? _resourceService.GetString("Delete role page by roleId successful.")
                : _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));
        }

        public async Task<int> ForceDeleteByRoleId(string roleId)
        {
            var rolePages = await _rolePageRepository.GetsAsync(false, x => x.RoleId == roleId);
            if (rolePages == null || !rolePages.Any())
                return -1;

            _rolePageRepository.Deletes(rolePages);
            return await Context.SaveChangesAsync();
        }

        public async Task<RolesPages> GetInfo(string roleId, int pageId)
        {
            return await _rolePageRepository.GetAsync(true, x => x.RoleId == roleId && x.PageId == pageId);
        }
    }
}
