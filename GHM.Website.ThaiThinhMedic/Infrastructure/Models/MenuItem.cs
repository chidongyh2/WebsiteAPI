using System;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Models
{
    public class MenuItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string UnsignName { get; set; }
        public int MenuId { get; set; } // Mã nhóm menu
        public long? ObjectId { get; set; } // Mã đối tượng menu
        public byte ObjectType { get; set; } // Loại đối tượng menu: 0: Custom 1: Nhóm 2: Bài viết        
        public string Url { get; set; } // Đường dẫn khi click vào link
        public bool IsActive { get; set; }
        public int? ParentId { get; set; } // Mã menu cha
        public string IdPath { get; set; } // IdPath
        public string NamePath { get; set; } // IdPath
        public DateTime CreateTime { get; set; }
        public string CreatorId { get; set; }
        public string CreatorFullName { get; set; }
        public byte Order { get; set; }

        public MenuItem()
        {
            CreateTime = DateTime.Now;
            Order = 0;
        }
    }
}
