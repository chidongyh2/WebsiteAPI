using System.ComponentModel.DataAnnotations;
using System;
namespace GHM.WebSite.Nelly.Models
{
    public class AgencyMeta
    {
        [StringLength(255, ErrorMessage = "Họ tên không được nhỏ hơn 5 ký tự và lớn hơn 255 ký tự", MinimumLength = 5)]
        [Required(ErrorMessage = "Họ tên không được để trống")]
        [Display(Name = "Họ tên")]
        public string FullName { get; set; }

        [StringLength(50, ErrorMessage = "Email không được nhỏ hơn 5 ký tự và lớn hơn 50 ký tự", MinimumLength = 5)]
        [EmailAddress(ErrorMessage = "Đinh dạng email không đúng")]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [StringLength(50, ErrorMessage = "Số điện thoại không được nhỏ hơn 5 ký tự và lớn hơn 50 ký tự", MinimumLength = 5)]
        [Required(ErrorMessage = "Số điện thoại không được bỏ trống")]
        [Display(Name = "Số điện thoại")]
        public string PhoneNumber { get; set; }

        [StringLength(1000, ErrorMessage = "Địa chỉ không được nhỏ hơn 10 ký tự và lớn hơn 1000 ký tự", MinimumLength = 10)]
        [Required(ErrorMessage = "Địa chỉ không được bỏ trống")]
        [Display(Name = "Địa chỉ")]
        public string Address { get; set; }

        [StringLength(50, ErrorMessage = "SỐ CMND không được nhỏ hơn 9 ký tự và lớn hơn 50 ký tự", MinimumLength = 9)]
        [Display(Name = "SỐ CMND")]
        public string IdCard { get; set; }

        [Display(Name = "Ngày cấp")]
        [DataType(DataType.Date)]
        public DateTime? IdCardDate { get; set; }

        [StringLength(500, ErrorMessage = "Nơi cấp không được nhỏ hơn 5 ký tự và lớn hơn 500 ký tự", MinimumLength = 5)]
        [Display(Name = "Nơi cấp")]
        public string IdCardAddress { get; set; }

        [StringLength(255, ErrorMessage = "Tên đại lý không được nhỏ hơn 5 ký tự và lớn hơn 255 ký tự", MinimumLength = 5)]
        [Required(ErrorMessage = "Tên đại lý không được để trống")]
        [Display(Name = "Tên đại lý")]
        public string AgencyName { get; set; }

        [Display(Name = "Tỉnh/TP")]
        [Required(ErrorMessage = "Tỉnh/TP không được để trống")]
        public int ProvinceId { get; set; }

        public string ProvinceName { get; set; }

        [Display(Name = "Tỉnh/TP")]
        [Required(ErrorMessage = "Tỉnh/TP không được để trống")]
        public int DistrictId { get; set; }

        public string DistrictName { get; set; }

        [StringLength(1000, ErrorMessage = "Địa chỉ đăng ký đại lý không được nhỏ hơn 10 ký tự và lớn hơn 1000 ký tự", MinimumLength = 10)]
        [Required(ErrorMessage = "Địa chỉ đăng ký đại lý không được bỏ trống")]
        [Display(Name = "Địa chỉ đăng ký đại lý")]
        public string AddressRegistered { get; set; }

        [Range(0, double.MaxValue, ErrorMessage = "Chiều dài phải là số")]
        [Display(Name = "Chiều dài(m)")]
        public double? Length { get; set; }

        [Range(0, double.MaxValue, ErrorMessage = "Chiều rộng phải là số")]
        [Display(Name = "Chiều rộng(m)")]
        public double? Width { get; set; }

        [Range(0, double.MaxValue, ErrorMessage = "Chiều cao phải là số")]
        [Display(Name = "Chiều cao(m)")]
        public double? Height { get; set; }

        [Range(0, double.MaxValue, ErrorMessage = "Tổng diện tích phải là số")]
        [Display(Name = "Tổng diện tích(m2)")]
        public double? TotalArea { get; set; }

        [Display(Name = "Ngày bắt đầu")]
        [DataType(DataType.Date)]
        public DateTime? StartTime { get; set; }

        [StringLength(250, ErrorMessage = "Website lớn hơn 250 ký tự")]
        [Display(Name = "Website")]
        public string Website { get; set; }
    }
}
