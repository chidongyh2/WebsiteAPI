using GHM.Infrastructure.Constants;

namespace GHM.Infrastructure.Models
{
    public class PagePermission
    {
        public PageId PageId { get; set; }
        public Permission[] Permissions { get; set; }

        public PagePermission(PageId pageId, Permission[] permissions)
        {
            PageId = pageId;
            Permissions = permissions;
        }
    }
}
