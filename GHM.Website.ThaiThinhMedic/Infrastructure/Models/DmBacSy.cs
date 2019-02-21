using System;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Models
{
    public class DmBacSy
    {
        public string MaBacSy { get; set; }
        public string HoTen { get; set; }
        public string MaKhoa { get; set; }
        public string NoiCongTac { get; set; }
        public string DienThoai { get; set; }
        public string DiaChi { get; set; }
        public string ChuyenNganh { get; set; }
        public string BangCapChuyenMon { get; set; }
        public string QuaTrinhCongTac { get; set; }
        public int? KeDon { get; set; } // 0 - thu thuat / 1 - kham/ 2- ca kham va thu thuat
        public bool? HienSoDienThoai { get; set; } // 0- khong hien trong cac bao cao co ten bac sy
        public bool? Dung { get; set; }
        public string Col1 { get; set; }
        public string Col2 { get; set; }
        public string Col3 { get; set; }
        public string Col4 { get; set; }
        public string Col5 { get; set; }
        public string GhiChu { get; set; }
        public bool? KhamDoan { get; set; }
        public string QueQuan { get; set; }
        public DateTime? NgayBatDauLamViec { get; set; }
        public string ChuyenMonSau { get; set; }
        public string DanhGiaCuaKhachHang { get; set; }
        public string MaHocHam { get; set; }
        public string MaHocVi { get; set; }
        public DateTime? NgaySinh { get; set; }
        public string MaChucDanh { get; set; }
        public string MaChucVu { get; set; }
        public byte[] Anh { get; set; }
        public bool? ChiaSeThongTin { get; set; }
        public int? SoCaSangKm { get; set; }
        public int? SoCaChieuKm { get; set; }
        public int? SoCaToiKm { get; set; }

        public DmBacSy()
        {
            HienSoDienThoai = true;
            KhamDoan = false;
            ChiaSeThongTin = true;
            SoCaSangKm = 0;
            SoCaChieuKm = 0;
            SoCaToiKm = 0;
        }
    }

}
