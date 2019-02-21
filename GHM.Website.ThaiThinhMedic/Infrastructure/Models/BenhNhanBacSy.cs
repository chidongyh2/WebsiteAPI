
using System;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Models
{
    public class BenhNhanBacSy
    {
        public long Id { get; set; }
        public DateTime? NgayDenKham { get; set; }
        public long? IdPhieuKham { get; set; }
        public string SoPhieuKham { get; set; }
        public string MaBacSy { get; set; }
        public string MaBenhNhan { get; set; }
        public string DichVuLam { get; set; }
        public string CaLamViec { get; set; }
        public int? TrangThai { get; set; }
        public int? Stt { get; set; }
        public string MaPhongKham { get; set; }
        public string LyDoKham { get; set; }
        public string TrieuChung { get; set; }
        public string ChanDoan { get; set; }
        public string ChiDinhDieuTri { get; set; }
        public string LoiDan { get; set; }
        public string NoiDungTaiKham { get; set; }
        public string MaYTaHoTro { get; set; }
        public bool? UuTien { get; set; }
        public string GioDatHen { get; set; }
        public bool? BatThuong { get; set; }
        public string GhiChu { get; set; }
        public bool? KiemTra { get; set; }
        public string CachThuc { get; set; }
        public string TrinhBay { get; set; }
        public string SoChiTiet { get; set; }
        public string Do { get; set; }
        public string NhanDinh { get; set; }
        public string NhanXet { get; set; }
        public string NoiDungChuyenMon { get; set; }
        public string Col1 { get; set; }
        public string Col2 { get; set; }
        public string Col3 { get; set; }
        public string TenBacSy { get; set; }
        public string MaDoiTuong { get; set; }
        public string MaNhanVien { get; set; }
        public DateTime? NgayHenKham { get; set; }

        public BenhNhanBacSy()
        {
            BatThuong = false;
        }
    }
}
