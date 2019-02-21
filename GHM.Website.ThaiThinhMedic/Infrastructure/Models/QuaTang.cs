using System;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Models
{
    public class QuaTang
    {
        public string MaQuaTang { get; set; }
        public string Nhom { get; set; }
        public string TenQuaTang { get; set; }
        public DateTime? NgayApDung { get; set; }
        public string MucDich { get; set; }
        public string GhiChu { get; set; }
        public int? Loai { get; set; }
        public bool? Dung { get; set; }
    }
}
