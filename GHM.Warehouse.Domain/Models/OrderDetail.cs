using System;

namespace GHM.Warehouse.Domain.Models
{
    public class OrderDetail
    {
        public string Id { get; set; }
        public string TenantId { get; set; }
        public string OrderId { get; set; }
        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public decimal Quantity { get; set; }
        public string UnitId { get; set; }
        public decimal Price { get; set; } // Giá bán sản phẩm
        public decimal? Discount { get; set; } // Giá trị giảm giá
        public byte? DiscountType { get; set; } // Loại giảm giá, 0: tiền, 1 phần trăm
        public decimal Amount { get; set; } // Tổng tiền
        public bool IsDelete { get; set; }
        public string ConcurrencyStamp { get; set; }
        public DateTime? CreateTime { get; set; }
        public string CreatorId { get; set; }
        public string CreatorFullName { get; set; }
        public DateTime? LastUpdate { get; set; }
        public string LastUpdateUserId { get; set; }
        public string LastUpdateFullName { get; set; }
        public Order Order { get; set; }

        public OrderDetail()
        {
            var id = Guid.NewGuid().ToString();
            Id = id;
            ConcurrencyStamp = id;
            IsDelete = false;
            CreateTime = DateTime.Now;
        }
    }
}
