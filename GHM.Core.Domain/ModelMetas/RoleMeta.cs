using System.Collections.Generic;

namespace GHM.Core.Domain.ModelMetas
{
    public class RoleMeta
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string ConcurrencyStamp { get; set; }
        public List<string> UserIds { get; set; }
        public RolePagePermissionMeta[] RolePagePermissions { get; set; }
    }

    public class RolePagePermissionMeta
    {
        public int PageId { get; set; }
        public int Permissions { get; set; }
    }
}
