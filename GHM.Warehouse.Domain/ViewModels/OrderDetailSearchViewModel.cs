using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Warehouse.Domain.ViewModels
{
    public class OrderDetailSearchViewModel
    {
        public string Id { get; set; }
        public string OrderId { get; set; }
        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public decimal Quantity { get; set; }
        public string UnitId { get; set; }
        public decimal Price { get; set; } // Giá bán sản phẩm
        public decimal? Discount { get; set; } // Giá trị giảm giá
        public byte? DiscountType { get; set; } // Loại giảm giá, 0: tiền, 1 phần trăm
        public decimal Amount { get; set; } // Tổng tiền
        public string ConcurrencyStamp { get; set; }
        public string UnitName { get; set; }
    }
}
