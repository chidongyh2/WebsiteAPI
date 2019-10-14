using GHM.Warehouse.Domain.Constants;
using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Warehouse.Domain.ViewModels
{
    public class OrderDetailViewModel
    {
        public string Id { get; set; }
        public string Code { get; set; } // Mã đơn hàng
        public string Name { get; set; }
        public string CustomerId { get; set; }
        public string CustomerName { get; set; }
        public string PhoneNumber { get; set; } // Số điện thoại khách hàng
        public string Email { get; set; }
        public decimal? TotalPrice { get; set; } // Tổng tiền
        public decimal? Discount { get; set; } // Giá trị giảm giá
        public byte? DiscountType { get; set; } // Loại giảm giá, 0: tiền, 1 phần trăm
        public decimal? Transport { get; set; } // Phí vận chuyển
        public decimal? Quantity { get; set; } // Tổng số sản phẩm
        public OrderStatus? Status { get; set; } // Trạng thái đơn hàng
        public byte? Type { get; set; } // 0: Online, 1: Hệ thống
        public DateTime? DeliveryDate { get; set; }
        public DateTime? CreateTime { get; set; }
        public string CreatorFullName { get; set; }
        public string ConcurrencyStamp { get; set; }

        public List<OrderDetailSearchViewModel> OrderDetails { get; set; }
    }
}
