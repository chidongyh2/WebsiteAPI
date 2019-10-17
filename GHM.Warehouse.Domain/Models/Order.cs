using GHM.Warehouse.Domain.Constants;
using System;
using System.Collections.Generic;

namespace GHM.Warehouse.Domain.Models
{
    public class Order
    {
        public string Id { get; set; }
        public string Code { get; set; } // Mã đơn hàng
        public string TenantId { get; set; }
        public string UnsignName { get; set; }
        public string Name { get; set; }
        public string CusomerId { get; set; } // Mã khách hàng
        public string CustomerName { get; set; }
        public string PhoneNumber { get; set; } // Số điện thoại khách hàng
        public string Email { get; set; }
        public string Address { get; set; }
        public string Note { get; set; } // Ghi chú
        public decimal? TotalPrice { get; set; } // Tổng tiền
        public decimal? Discount { get; set; } // Giá trị giảm giá
        public byte? DiscountType { get; set; } // Loại giảm giá, 0: tiền, 1 phần trăm
        public decimal? Transport { get; set; } // Phí vận chuyển
        public decimal? Quantity { get; set; } // Tổng số sản phẩm
        public bool IsDelete { get; set; }
        public OrderStatus? Status { get; set; } // Trạng thái đơn hàng
        public byte? Type { get; set; } // 0: Online, 1: Hệ thống
        public string SessionId { get; set; } // Session
        public string ConcurrencyStamp { get; set; }
        public DateTime? DeliveryDate { get; set; }
        public DateTime? CreateTime { get; set; }
        public string CreatorId { get; set; }
        public string CreatorFullName { get; set; }
        public DateTime? LastUpdate { get; set; }
        public string LastUpdateUserId { get; set; }
        public string LastUpdateFullName { get; set; }
        public List<OrderDetail> OrderDetails { get; set; }

        public Order()
        {
            var id = Guid.NewGuid().ToString();
            Id = id;
            ConcurrencyStamp = id;
            Type = 1;
            OrderDetails = new List<OrderDetail>();
            IsDelete = false;
            CreateTime = DateTime.Now;
        }
    }
}
