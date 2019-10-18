using GHM.Warehouse.Domain.Constants;
using System;
using System.Collections.Generic;

namespace GHM.Warehouse.Domain.ModelMetas
{
    public class OrderMeta
    {
        public string Code { get; set; } // Mã đơn hàng
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
        public OrderStatus? Status { get; set; } // Trạng thái đơn hàng
        public string ConcurrencyStamp { get; set; }
        public DateTime? DeliveryDate { get; set; }
        public List<OrderDetailMeta> OrderDetails { get; set; }

    }
}
