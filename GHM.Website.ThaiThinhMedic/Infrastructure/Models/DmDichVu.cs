
using System.CodeDom.Compiler;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Models
{
    [GeneratedCodeAttribute("EF.Reverse.POCO.Generator", "2.15.2.0")]
    public class DmDichVu
    {
        public string MaDichVu { get; set; }
        public string TenDichVu { get; set; }
        public string DonViTinh { get; set; }
        public double? DonGiaDichVu { get; set; }
        public double? DonGiaTinhLuong { get; set; }
        public double? DonGiaDemRaNgoaiLam { get; set; }
        public double? DonGiaBaoHiem { get; set; }
        public double? TienTruVtyt { get; set; }
        public double? CanCuTinhLuong { get; set; }
        public string MaPhanLoaiDichVu { get; set; }
        public string MaViTriCoThe { get; set; }
        public int? PhanTramChiDinh { get; set; }
        public double? TienChiDinh { get; set; }
        public bool? KhamThuThuat { get; set; } // 0-kham/1-thu thuat
        public string MaPhieuKhamMau { get; set; }
        public bool? Dung { get; set; }
        public string GhiChu { get; set; }
        public int? Stt { get; set; }
        public int? Ttin { get; set; }
        public string Col1 { get; set; }
        public string Col2 { get; set; }
        public string Col3 { get; set; }
        public string Col4 { get; set; }
        public string Col5 { get; set; }
        public string Col6 { get; set; }
        public string Col7 { get; set; }
        public string Col8 { get; set; }
        public string Col9 { get; set; }
        public string Col10 { get; set; }
        public double? Col11 { get; set; }
        public double? Col12 { get; set; }
        public double? Col13 { get; set; }
        public double? Col14 { get; set; }
        public double? Col15 { get; set; }
        public double? PhanTramKm { get; set; }
        public double? DonGiaKm { get; set; }        

        public DmDichVu()
        {
            DonGiaTinhLuong = 0;
            DonGiaDemRaNgoaiLam = 0;
            CanCuTinhLuong = 0;
            Dung = true;
            PhanTramKm = 0;
            DonGiaKm = 0;            
        }
    }

}
