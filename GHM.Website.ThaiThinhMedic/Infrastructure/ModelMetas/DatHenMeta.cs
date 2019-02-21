using Microsoft.ApplicationInsights.AspNetCore;
using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.ModelMetas
{

    public class DatHenMeta
    {
        public long Id { get; set; }

        [DisplayName(@"Tên bệnh nhân")]
        [Required(ErrorMessageResourceType = typeof(Resources), ErrorMessageResourceName = "Require")]
        public string FullName { get; set; }

        [DisplayName(@"Ngày tháng năm sinh")]
        [Required(ErrorMessageResourceType = typeof(Resources), ErrorMessageResourceName = "Require")]
        public DateTime Birthday { get; set; }

        [DisplayName(@"Số điện thoại")]
        [Required(ErrorMessageResourceType = typeof(Resources), ErrorMessageResourceName = "Require")]
        public string PhoneNumber { get; set; }

        [DisplayName(@"Địa chỉ")]
        [Required(ErrorMessageResourceType = typeof(Resources), ErrorMessageResourceName = "Require")]
        public string Address { get; set; }

        [DisplayName(@"Email")]
        public string Email { get; set; }

        public string DoctorId { get; set; }

        public string DoctorName { get; set; }

        [DisplayName(@"Ngày đặt hẹn")]
        [Required(ErrorMessageResourceType = typeof(Resources), ErrorMessageResourceName = "Require")]
        public DateTime StartTime { get; set; }

        public DateTime? EndTime { get; set; }

        [DisplayName(@"Giờ đặt hẹn")]
        [Required(ErrorMessageResourceType = typeof(Resources), ErrorMessageResourceName = "Require")]
        public string Hours { get; set; }

        [DisplayName(@"Dịch vụ")]
        [Required(ErrorMessageResourceType = typeof(Resources), ErrorMessageResourceName = "Require")]
        public string ServiceId { get; set; }

        public string ServiceName { get; set; }

        public string Note { get; set; }

        public string Shift { get; set; }

        public string PromotionCode { get; set; }

        public decimal? PromotionServicePrice { get; set; }

        public decimal PromotionDiscountPrice { get; set; }

        public byte? PromotionDiscountPercent { get; set; }

        public decimal? PromotionTotalPayable { get; set; }
    }
}
