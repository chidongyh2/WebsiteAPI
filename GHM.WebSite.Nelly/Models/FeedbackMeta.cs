using DataAnnotationsExtensions;
using System.ComponentModel.DataAnnotations;

namespace GHM.Website.Nelly.Models
{
    public class FeedbackMeta
    {
        [StringLength(50, ErrorMessage = "Email không được nhỏ hơn 6 ký tự và lớn hơn 50 ký tự", MinimumLength = 6)]
        [Required(ErrorMessage = "Emai không được để trống")]
        [Email(ErrorMessage = "Đinh dạng email không đúng")]
        public string Email { get; set; }

        [StringLength(255, ErrorMessage = "Họ tên không được nhỏ hơn 6 ký tự và lớn hơn 255 ký tự", MinimumLength = 6)]
        [Required(ErrorMessage = "Họ tên không được để trống")]
        public string FullName { get; set; }

        [StringLength(50, ErrorMessage = "Số điện thoại không được nhỏ hơn 6 ký tự và lớn hơn 50 ký tự", MinimumLength = 6)]
        [Required(ErrorMessage = "Số điện thoại không được bỏ trống")]
        [RegularExpression(@"^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$", ErrorMessage = "Số điện thoại không đúng định dạng")]
        public string PhoneNumber { get; set; }
        public string Title { get; set; }

        [StringLength(255, ErrorMessage = "Nội dung không được nhỏ hơn 6 ký tự và lớn hơn 500 ký tự", MinimumLength = 6)]
        [Required(ErrorMessage = "Nội dung không được để trống")]
        public string Content { get; set; }
    }
}
