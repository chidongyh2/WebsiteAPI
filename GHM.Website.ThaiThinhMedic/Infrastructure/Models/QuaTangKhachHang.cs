using System;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Models
{
    public class QuaTangKhachHang
    {
        public long IDQuaTang { get; set; }
        public DateTime Ngay { get; set; }
        public string MaQuanTang { get; set; }
        public string MaKhachHang { get; set; }
        public string MaNguoiPhat { get; set; }
        public bool? Dung { get; set; }
    }
}
