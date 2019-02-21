using System.ComponentModel.DataAnnotations;

namespace GHM.Core.Domain.Models.AccountViewModels
{
    public class RegisterViewModel
    {
        [Required]
        [StringLength(50, ErrorMessage = "Tên đăng nhập phải lớn {0} và tối đa {1}.", MinimumLength = 4)]
        [Display(Name = "Tên đăng nhập")]
        public string UserName { get; set; }

        [Required]
        [StringLength(50, ErrorMessage = "Họ tên phải lớn {0} và nhỏ hơn {1}.", MinimumLength = 4)]
        [Display(Name = "Họ tên")]
        public string FullName { get; set; }

        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }

        public string PhoneNumber { get; set; }

        [Required]
        [StringLength(50, ErrorMessage = "{0} phải chứa ít nhât {2} ký tự và nhiều nhất {1} ký tự.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Mật khẩu")]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Nhập lại mật khẩu")]
        [Compare("Password", ErrorMessage = "Nhập lại mật khẩu chưa chính xác.")]
        public string ConfirmPassword { get; set; }

        public bool IsActive { get; set; }

        /// <summary>
        /// Ảnh đại diện.
        /// </summary>
        public string Avatar { get; set; }
    }
}
