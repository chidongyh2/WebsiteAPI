using System.ComponentModel.DataAnnotations;

namespace GHM.WebSite.Nelly.Models
{
    public class AgencyMeta
    {
        [StringLength(255, ErrorMessage = "Họ tên không được nhỏ hơn 6 ký tự và lớn hơn 255 ký tự", MinimumLength = 6)]
        [Required(ErrorMessage = "Họ tên không được để trống")]
        [Display(Name = "Họ tên")]
        public string Name { get; set; }

        [StringLength(50, ErrorMessage = "Email không được nhỏ hơn 5 ký tự và lớn hơn 50 ký tự", MinimumLength = 5)]
        [EmailAddress(ErrorMessage = "Đinh dạng email không đúng")]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [StringLength(50, ErrorMessage = "Số điện thoại không được nhỏ hơn 5 ký tự và lớn hơn 50 ký tự", MinimumLength = 5)]
        [Required(ErrorMessage = "Số điện thoại không được bỏ trống")]
        [Display(Name = "Số điện thoại")]
        public string PhoneNumber { get; set; }
    }
}
