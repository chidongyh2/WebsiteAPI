using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.SqlServer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace GHM.Core.Infrastructure.Repository
{
    public class UserRoleRepository : RepositoryBase, IUserRoleRepository
    {
        private readonly IRepository<IdentityUserRole<string>> _userRoleRepository;
        public UserRoleRepository(IDbContext context) : base(context)
        {
            _userRoleRepository = Context.GetRepository<IdentityUserRole<string>>();
        }


        public async Task<int> Insert(string userId, string roleId)
        {
            _userRoleRepository.Create(new IdentityUserRole<string> { UserId = userId, RoleId = roleId });
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(IReadOnlyCollection<string> userIds, string roleId)
        {
            var listUserRoles = new List<IdentityUserRole<string>>();
            listUserRoles.AddRange(userIds.Select(x => new IdentityUserRole<string>
            {
                RoleId = roleId,
                UserId = x
            }));
            _userRoleRepository.Creates(listUserRoles);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> AddUsers(string roleId, ICollection<string> userIds)
        {
            var userRoles = userIds.Select(userId => new IdentityUserRole<string>
            {
                UserId = userId,
                RoleId = roleId
            })
                .ToList();
            _userRoleRepository.Creates(userRoles);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string userId, string roleId)
        {
            var info = await _userRoleRepository.GetAsync(false, x => x.UserId == userId && x.RoleId == roleId);
            if (info == null)
                return -1;

            _userRoleRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<bool> CheckExists(string userId, string roleId)
        {
            return await _userRoleRepository.ExistAsync(x => x.UserId == userId && x.RoleId == roleId);
        }

        public async Task<bool> CheckIsSupperAdmin(string userId)
        {
            return await _userRoleRepository.ExistAsync(x =>
                x.UserId == userId && x.RoleId == DefaultConstant.SupperAdministratorId);
        }

        public async Task<bool> CheckPermission(string userId, int pageId, int permission)
        {
            // Check is supper admin.
            var isSupperAdmin = await _userRoleRepository.ExistAsync(x => x.RoleId == "SuperAdministrator");
            if (isSupperAdmin)
                return true;

            // Check has permission inside list permissions.
            var permissions = Context.Set<IdentityUserRole<string>>().Where(x => x.UserId == userId)
                .Join(Context.Set<RolesPages>().Where(x => x.PageId == pageId), userRole => userRole.RoleId, rolePage => rolePage.RoleId,
                    (userRole, rolePage) => rolePage.Permissions)
                .ToList();

            return permissions.Any(x => (x & permission) == permission);
        }

        public async Task<bool> CheckPermission(string userId, List<PagePermission> pagePermissions)
        {
            // Check is supper admin.
            var isSupperAdmin = await _userRoleRepository.ExistAsync(x => x.RoleId == "SuperAdministrator");
            if (isSupperAdmin)
                return true;

            var pageIds = pagePermissions.Select(x => (int)x.PageId).ToList();

            // Check has permission inside list permissions.
            var queryPermissions = Context.Set<IdentityUserRole<string>>().Where(x => x.UserId == userId)
                .Join(Context.Set<RolesPages>().Where(x => pageIds.Contains(x.PageId)), userRole => userRole.RoleId, rolePage => rolePage.RoleId,
                    (userRole, rolePage) => new
                    {
                        rolePage.PageId,
                        rolePage.Permissions
                    })
                .ToList();

            if (!queryPermissions.Any())
                return false;

            foreach (var pagePermission in pagePermissions)
            {
                var permissions = queryPermissions
                    .Where(x => x.PageId == (int)pagePermission.PageId)
                    .Select(x => x.Permissions).ToList();
                if (!permissions.Any()) continue;

                var isHasPermission = pagePermission.Permissions.Any(permission =>
                    permissions.Any(x => (x & (int)permission) == (int)permission));
                if (isHasPermission)
                    return true;
            }
            return false;
        }

        public async Task<bool> CheckPermission(string userId, int pageId, int[] permissions)
        {
            // Check is supper admin.
            var isSupperAdmin = await _userRoleRepository.ExistAsync(x => x.RoleId == "SuperAdministrator");
            if (isSupperAdmin)
                return true;

            // Check has permission inside list permissions.
            var queryPermissions = Context.Set<IdentityUserRole<string>>().Where(x => x.UserId == userId)
                .Join(Context.Set<RolesPages>().Where(x => x.PageId == pageId), userRole => userRole.RoleId, rolePage => rolePage.RoleId,
                    (userRole, rolePage) => rolePage.Permissions)
                .ToList();

            return permissions.Select(permission => queryPermissions.Any(x => (x & permission) == permission))
                .Any(isHasPermission => isHasPermission);
        }

        public async Task<List<UserRoleSearchViewModel>> GetsByUserId(string userId, bool isReadOnly = false)
        {
            var query = Context.Set<IdentityUserRole<string>>().Where(x => x.UserId == userId)
                .Join(Context.Set<RolesPages>(), userRole => userRole.RoleId,
                    rolesPages => rolesPages.RoleId, (userRole, rolesPages) => new UserRoleSearchViewModel
                    {
                        UserId = userRole.UserId,
                        PageId = rolesPages.PageId,
                        RoleId = userRole.RoleId,
                        Permissions = rolesPages.Permissions
                    }).AsNoTracking();

            return await query.ToListAsync();
        }

        public async Task<List<UserRoleSearchViewModel>> GetsByRoleId(string roleId, bool isReadOnly = false)
        {
            var query = Context.Set<IdentityUserRole<string>>().Where(x => x.RoleId == roleId)
                .Join(Context.Set<RolesPages>(), userRole => userRole.RoleId,
                    rolesPages => rolesPages.RoleId, (userRole, rolesPages) => new UserRoleSearchViewModel
                    {
                        UserId = userRole.UserId,
                        PageId = rolesPages.PageId,
                        RoleId = userRole.RoleId,
                        Permissions = rolesPages.Permissions
                    }).AsNoTracking();

            return await query.ToListAsync();
        }

        public async Task<List<UserRoleViewModel>> GetUserByRoleId(string roleId)
        {
            var query = Context.Set<IdentityUserRole<string>>().Where(x => x.RoleId == roleId)
                .Join(Context.Set<UserAccount>().Where(x => !x.IsDelete), userRole => userRole.UserId,
                    userAccount => userAccount.Id, (userRole, userAccount) => new UserRoleViewModel
                    {
                        UserId = userRole.UserId,
                        FullName = userAccount.FullName,
                        Avatar = userAccount.Avatar,
                        UserName = userAccount.UserName
                    });

            return await query.AsNoTracking().ToListAsync();
        }

        public async Task<int> DeleteByUserId(string userId)
        {
            var listUserRoles = await _userRoleRepository.GetsAsync(false, x => x.UserId == userId);
            if (listUserRoles == null || !listUserRoles.Any())
                return -1;

            _userRoleRepository.Deletes(listUserRoles);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> DeleteByRoleId(string roleId)
        {
            var listUserRoles = await _userRoleRepository.GetsAsync(false, x => x.RoleId == roleId);
            if (listUserRoles == null || !listUserRoles.Any())
                return -1;

            _userRoleRepository.Deletes(listUserRoles);
            return await Context.SaveChangesAsync();
        }

        public async Task<bool> CheckExist(string userId)
        {
            return await _userRoleRepository.ExistAsync(x => x.UserId == userId);
        }
    }
}
