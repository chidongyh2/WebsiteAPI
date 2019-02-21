using System;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Models
{
    public class VideoChupThuThuat
    {
        public long IDs { get; set; }
        public long? IdPhieuKham { get; set; }
        public string SoPhieuKham { get; set; }
        public string MaBenhNhan { get; set; }
        public DateTime? NgayDenKham { get; set; }
        public string MaBacSy { get; set; }
        public string MaYTa { get; set; }
        public string DuongDanFileAnh { get; set; }
        public string TenFileVideo { get; set; }
        public string DuongDan { get; set; }
        public string LinkWeb { get; set; }
        public bool? LayDiaCd { get; set; }
        public bool? DaGui { get; set; }
        public bool? DaConvert { get; set; }
        public bool? PublicVideo { get; set; }
        public int? ThoiLuongVideo { get; set; }

        public VideoChupThuThuat()
        {
            DaGui = false;
            DaConvert = false;
        }
    }

}
