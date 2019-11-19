using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.WebSite.Nelly.Models
{
    public class CommentMeta
    {
        public string TenantId { get; set; }
        public string ObjectId { get; set; }
        public int ObjectType { get; set; }

        [StringLength(255, ErrorMessage = "Họ tên không được nhỏ hơn 5 ký tự và lớn hơn 255 ký tự", MinimumLength = 5)]
        [Required(ErrorMessage = "Họ tên không được để trống")]
        [Display(Name = "Họ tên")]
        public string FullName { get; set; }

        [StringLength(255, ErrorMessage = "Họ tên không được nhỏ hơn 5 ký tự và lớn hơn 255 ký tự", MinimumLength = 5)]
        [Required(ErrorMessage = "Họ tên không được để trống")]
        [Display(Name = "Họ tên")]
        public string Email { get; set; }

        [StringLength(500, ErrorMessage = "Avatar không được lớn hơn 500 ký tự")]
        public string Avatar { get; set; }

        [StringLength(255, ErrorMessage = "Nội dung không được nhỏ hơn 5 ký tự và lớn hơn 1000 ký tự", MinimumLength = 5)]
        [Required(ErrorMessage = "Nội dung không được để trống")]
        [Display(Name = "Nội dung")]
        public string Content { get; set; }

        public int? ParentId { get; set; }
        public string UserId { get; set; }
        public int? UserType { get; set; }
    }
}
