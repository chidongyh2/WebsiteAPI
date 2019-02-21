
using System;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Models
{
    public class DatHen
    {
        public long Id { get; set; }
        public string ResourceId { get; set; }
        public int? Status { get; set; }
        public string Subject { get; set; }
        public string Description { get; set; }
        public string Label { get; set; }
        public DateTime? StartTime { get; set; }
        public DateTime? EndTime { get; set; }
        public string Location { get; set; }
        public bool? AllDay { get; set; }
        public int? EventType { get; set; }
        public string RecurrenceInfo { get; set; }
        public string ReminderInfo { get; set; }
        public string MaBenhNhan { get; set; }
        public string SoPhieuDatHen { get; set; }
        public string CaHenKham { get; set; }
        public bool? KichHoat { get; set; }
        public bool? DaNhacHen { get; set; }
        public string GioDatHen { get; set; }
        public string MaDichVu { get; set; }
        public string MaBacSy { get; set; }
        public string TenBacSy { get; set; }
        public string Email { get; set; }
        public string DiaChi { get; set; }
        public string MaNguoiTao { get; set; }

        public DateTime NgayGioTao { get; set; }

        public string PromotionCode { get; set; }

        public decimal? PromotionServicePrice { get; set; }

        public decimal PromotionDiscountPrice { get; set; }

        public byte? PromotionDiscountPercent { get; set; }

        public decimal? PromotionTotalPayable { get; set; }

        public DatHen()
        {
            Status = 0;
            Label = "0";
            AllDay = false;
            EventType = 0;
            KichHoat = true;
            DaNhacHen = false;
            Email = "";
            MaNguoiTao = "ADMIN";
        }
    }

}
