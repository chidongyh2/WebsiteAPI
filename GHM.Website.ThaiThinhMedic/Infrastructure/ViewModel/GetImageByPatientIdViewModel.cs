using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.ViewModel
{
    public class GetImageByPatientIdViewModel
    {
        public long IDs { get; set; }
        public long? IDPhieuKham { get; set; }
        public string SoPhieuKham { get; set; }
        public string MaBenhNhan { get; set; }
        public DateTime? NgayDenKham { get; set; }
        public string MaBacSy { get; set; }
        public string MaYTa { get; set; }
        public string DuongDanFileAnh { get; set; }
        public string TenFileAnh { get; set; }
        public Byte[] Anh { get; set; }
        public string MaPhieuKhamMau { get; set; }
        public int? Size { get; set; }
        public bool? IsPublic { get; set; }
        public string AnhBase64 { get; set; }
    }
}
