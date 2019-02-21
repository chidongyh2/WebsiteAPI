using System;
using System.Collections.Generic;
namespace GHM.Product.Domain.Models
{
    public class Products
    {
        public string Id { get; set; }
        public string TenantId { get; set; }
        public bool IsActive { get; set; }
        public string ConcurrencyStamp { get; set; }
        public bool IsDelete { get; set; }
        public bool? IsManagementByLot { get; set; }
        public string Thumbnail { get; set; }
        public DateTime CreateTime { get; set; }
        public string CreatorId { get; set; }
        public string CreatorFullName { get; set; }
        public string LastUpdateUserId { get; set; }
        public string LastUpdateFullName { get; set; }
        public DateTime? LastUpdateTime { get; set; }
        public bool? IsHot { get; set; }
        public bool? IsHomePage { get; set; }

        /// <summary>
        /// Giá xuất kho.
        /// </summary>
        public decimal ExWarehousePrice { get; set; }
        public Products()
        {
            CreateTime = DateTime.Now;
            IsDelete = false;
            IsActive = true;
            ExWarehousePrice = 0;
            ConcurrencyStamp = Guid.NewGuid().ToString();
        }

        public List<ProductTranslation> Translations { get; set; }
    }
}
