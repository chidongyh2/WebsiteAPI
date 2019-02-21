using System;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.ViewModels
{
    public class DatHenDichVuViewModel
    {
        public long Id { get; set; }
        public DateTime? StartTime { get; set; }
        public DateTime? EndTime { get; set; }
        public string MaBenhNhan { get; set; }       
        public string TenBenhNhan { get; set; }
        public string SoDienThoai { get; set; }
        public string SoPhieuDatHen { get; set; }
        public string CaHenKham { get; set; }
        public string GioDatHen { get; set; }
        public string MaDichVu { get; set; }
        public string MaBacSy { get; set; }
        public string TenBacSy { get; set; }
        public string TenDichVu { get; set; }
        public string GhiChu { get; set; }
        public string Email { get; set; }
        public string DiaChi { get; set; }
    }
}
