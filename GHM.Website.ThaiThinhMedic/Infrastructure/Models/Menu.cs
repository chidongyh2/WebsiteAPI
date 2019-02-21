using System;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Models
{
    public class Menu
    {
        public int Id { get; set; }
        public string Name { get; set; } // Tên menu
        public string UnsignName { get; set; } // Tên không dâu để tìm kiếm
        public DateTime CreateTime { get; set; } // Thời gian tạo
        public string CreatorId { get; set; } // Mã người tạo
        public string CreatorFullName { get; set; } // Tên người tạo

        public Menu()
        {
            CreateTime = System.DateTime.Now;
        }
    }
}
