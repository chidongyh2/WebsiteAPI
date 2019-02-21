using GHM.Infrastructure.Models;

namespace GHM.FileManagement.Domain.Models
{
    public class Folder : EntityBase<int>
    {
        public string Name { get; set; }
        public int? ParentId { get; set; }
        public string TenantId { get; set; }
        //public string CreatorAvatar { get; set; }
        public string IdPath { get; set; }
        public bool IsDelete { get; set; }
        public string UnsignName { get; set; }
        public int ChildCount { get; set; }
    }
}
