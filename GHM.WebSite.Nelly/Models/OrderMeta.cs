using DataAnnotationsExtensions;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GHM.WebSite.Nelly.Models
{
    public class OrderMeta
    {
        [StringLength(255, ErrorMessage = "Họ tên không được nhỏ hơn 6 ký tự và lớn hơn 255 ký tự", MinimumLength = 6)]
        [Required(ErrorMessage = "Họ tên không được để trống")]
        public string FullName { get; set; }

        [StringLength(50, ErrorMessage = "Email không được nhỏ hơn 6 ký tự và lớn hơn 50 ký tự", MinimumLength = 6)]
        [Required(ErrorMessage = "Emai không được để trống")]
        [Email(ErrorMessage = "Đinh dạng email không đúng")]
        public string Email { get; set; }

        [StringLength(50, ErrorMessage = "Số điện thoại không được nhỏ hơn 6 ký tự và lớn hơn 50 ký tự", MinimumLength = 6)]
        [Required(ErrorMessage = "Số điện thoại không được bỏ trống")]
        public string PhoneNumber { get; set; }

        [StringLength(1000, ErrorMessage = "Địa chỉ không được nhỏ hơn 10 ký tự và lớn hơn 1000 ký tự", MinimumLength = 10)]
        [Required(ErrorMessage = "Địc chỉ không được bỏ trống")]
        public string Address { get; set; }

        [StringLength(4000, ErrorMessage = "StringMinMaxLength", MinimumLength = 6)]
        public string Note { get; set; }
        public string SessionId { get; set; }

        public List<ProductOrder> ListProduct { get; set; }
    }

    public class ProductOrder
    {
        public string ProductId { get; set; }
        public int Quantity { get; set; }

        public byte DisCountType { get; set; }

        public double Discount { get; set; }

        public ProductOrder()
        {
            DisCountType = 0;
            Discount = 0;
        }
    }
}
