using System;

namespace GHM.FileManagement.Domain.ViewModels
{
    public class FileViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public DateTime CreateTime { get; set; }
        public DateTime? LastUpdate { get; set; }
        public string Type { get; set; }
        public float Size { get; set; }
        public string Url { get; set; }
        public string CreatorId { get; set; }
        public string CreatorFullName { get; set; }
        public string CreatorAvatar { get; set; }
        public string Extension { get; set; }
        public int? FolderId { get; set; }
        public int ChildrenCount { get; set; }
        public string ConcurrencyStamp { get; set; }
    }
}
