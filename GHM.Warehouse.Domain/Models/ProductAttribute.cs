using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Warehouse.Domain.Models
{
    public class ProductAttribute
    {
        public string ProductId { get; set; }
        public string AttributeId { get; set; }
        public string TenantId { get; set; }
        public string Value { get; set; }
        public string Id { get; set; }
        public bool IsDelete { get; set; }
        public bool IsShowClient { get; set; }
        public string CreatorId { get; set; }
        public string CreatorFullName { get; set; }
        public DateTime CreateTime { get; set; }
        public string LastUpdateUserId { get; set; }
        public string LastUpdateFullName { get; set; }
        public DateTime? LastUpdateTime { get; set; }

        public List<ProductAttributeValue> ProductAttributeValues { get; set; }

        public ProductAttribute()
        {
            Id = Guid.NewGuid().ToString();
            CreateTime = DateTime.Now;
            IsDelete = false;
        }
    }
}
