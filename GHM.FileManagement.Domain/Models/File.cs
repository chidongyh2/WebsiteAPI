using System;
using GHM.Infrastructure.Models;

namespace GHM.FileManagement.Domain.Models
{
    /// <summary>
    /// Model mapping với bảng trong database.
    /// </summary>

    public class File : EntityBase<string>
    {
        public string TenantId { get; set; }

        public string Name { get; set; }

        public string UnsignName { get; set; }

        public string Type { get; set; }

        public long Size { get; set; }

        public string Url { get; set; }       

        public string CreatorAvatar { get; set; }

        public string Extension { get; set; }

        public int? FolderId { get; set; }

        public bool IsDelete { get; set; }

        public File()
        {
            Id = Guid.NewGuid().ToString();
            ConcurrencyStamp = Guid.NewGuid().ToString();
            CreateTime = DateTime.Now;            
            IsDelete = false;
        }
    }

}
