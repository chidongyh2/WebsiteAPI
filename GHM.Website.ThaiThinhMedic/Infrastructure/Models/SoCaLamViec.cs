
using System;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Models
{
    public class SoCaLamViec
    {
        public long Id { get; set; }
        public DateTime? Ngay { get; set; }
        public string CaLamViec { get; set; }
        public string MaBacSy { get; set; }
        public string MaPhongKham { get; set; }
        public string MaDichVu { get; set; }
        public int? SoCa { get; set; }
        public int? ThoiGianMotCa { get; set; }
        public double? DonGiaDichVu { get; set; }
        public int? PhanTramKm { get; set; }
        public double? DonGiaKm { get; set; }

        public SoCaLamViec()
        {
            ThoiGianMotCa = 0;
            DonGiaDichVu = 0;
            PhanTramKm = 0;
            DonGiaKm = 0;
        }
    }

}
