using System;
using System.Linq;
using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.Models;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.SqlServer;
using Microsoft.AspNetCore.Identity;

namespace GHM.Core.Infrastructure.Repository
{
    public class UserPermissionRepository : RepositoryBase, IUserPermissionRepository
    {
        public UserPermissionRepository(IDbContext context) : base(context)
        {
        }

        public bool CheckPermission(string userId, int pageId, int permission)
        {
            var query = Context.Set<UserAccount>().Where(x => x.Id == userId)
                .Join(Context.Set<IdentityUserRole<string>>(), userAccount => userAccount.Id,
                    usersRoles => usersRoles.UserId, (userAccount, usersRoles) => usersRoles.RoleId)
                .Join(Context.Set<RolesPages>().Where(x => x.PageId == pageId), roleId => roleId,
                    rolesPages => rolesPages.RoleId, (roleId, rolesPages) => rolesPages.Permissions);

            var permissions = query.ToList();
            return permissions.Any() && permissions.Any(x => (x & permission) == permission);
        }
    }
}
