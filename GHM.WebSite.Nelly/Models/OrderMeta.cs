﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GHM.WebSite.Nelly.Models
{
    public class OrderMeta
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
        [RegularExpression(@"^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$", ErrorMessage = "Số điện thoại không đúng định dạng")]
        [Display(Name = "Số điện thoại")]
        public string PhoneNumber { get; set; }

        [StringLength(1000, ErrorMessage = "Địa chỉ không được nhỏ hơn 10 ký tự và lớn hơn 1000 ký tự", MinimumLength = 10)]
        [Required(ErrorMessage = "Địa chỉ không được bỏ trống")]
        [Display(Name = "Địa chỉ")]
        public string Address { get; set; }

        [StringLength(4000, ErrorMessage = "Ghi chú không được nhỏ hơn 10 ký tự và lớn hơn 4000 ký tự", MinimumLength = 5)]
        [Display(Name = "Ghi chú")]
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
