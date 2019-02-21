using System;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Models
{
    public class BenhNhan
    {
        public string MaBenhNhan { get; set; }
        public string HoTenBenhNhan { get; set; }
        public DateTime? NgayThang { get; set; }
        public string NgaySinh { get; set; }
        public string ThangSinh { get; set; }
        public string NamSinh { get; set; }
        public DateTime? NgayThangNamSinh { get; set; }
        public string Tuoi { get; set; }
        public bool? MaGioiTinh { get; set; } // 0 - nu / 1 - nam
        public string MaDanToc { get; set; }
        public string ThonPhoXaPhuong { get; set; }
        public string MaTinhThanh { get; set; }
        public string MaQuanHuyen { get; set; }
        public string DiaChi { get; set; }
        public string NoiCongTac { get; set; }
        public string SoCmnd { get; set; }
        public string MaNgheNghiep { get; set; }
        public string MaDoiTuong { get; set; }
        public string MaNguonKhach { get; set; }
        public string SoDienThoai { get; set; }
        public string Email { get; set; }
        public DateTime? NgayVaoKham { get; set; }
        public DateTime? NgayKhamCuoi { get; set; }
        public string MaDoanKham { get; set; }
        public string NguoiLienHe { get; set; }
        public string DienThoaiNguoiLienHe { get; set; }
        public string MaQuanHe { get; set; }
        public string GhiChu { get; set; }
        public string Col1 { get; set; } // Người tạo bênh nhân
        public string Col2 { get; set; }
        public string Col3 { get; set; }
        public string Col4 { get; set; }
        public string Col5 { get; set; }
        public double? Col6 { get; set; }
        public double? Col7 { get; set; }
        public double? Col8 { get; set; }
        public double? Col9 { get; set; }
        public bool? Col10 { get; set; }
        public int? NgayTuoi { get; set; }
        public int? ThangTuoi { get; set; }
        public string MatKhau { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordSalt { get; set; }
        public byte[] PasswordHash { get; set; }

        public BenhNhan()
        {
            NgayThang = System.DateTime.Now;
            NgayVaoKham = System.DateTime.Now;
            MaGioiTinh = false;
            MaDanToc = "01";
            MaTinhThanh = "";
            MaQuanHuyen = "";
            MaNgheNghiep = "K";
            SoCmnd = "";
            NoiCongTac = "";
            MaDoiTuong = "";
            MaNguonKhach = "N00001";
            MaDoanKham = "";
            NguoiLienHe = "";
            DienThoaiNguoiLienHe = "";
            Col6 = 0;
            Col7 = 0;
            Col8 = 0;
            Col9 = 0;
            ThonPhoXaPhuong = "";
            NgayKhamCuoi = DateTime.Now;
            MaQuanHe = "";
            GhiChu = "";
            Col1 = "";
            Col2 = "";
            Col3 = "";
            Col4 = "";
            Col5 = "";
            Col10 = false;
        }
    }

}
