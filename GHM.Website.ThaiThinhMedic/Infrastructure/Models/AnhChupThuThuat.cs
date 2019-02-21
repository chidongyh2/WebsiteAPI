
using System;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Models
{
    public class AnhChupThuThuat
    {
        public long IDs { get; set; }
        public long? IdPhieuKham { get; set; }
        public string SoPhieuKham { get; set; }
        public string MaBenhNhan { get; set; }
        public DateTime? NgayDenKham { get; set; }
        public string MaBacSy { get; set; }
        public string MaYTa { get; set; }
        public string DuongDanFileAnh { get; set; }
        public string TenFileAnh { get; set; }
        public byte[] Anh { get; set; }
        public string MaPhieuKhamMau { get; set; }
        public int? Size { get; set; }
        public bool? IsPublic { get; set; }
        public string AnhBase64 { get; set; }
    }

}
