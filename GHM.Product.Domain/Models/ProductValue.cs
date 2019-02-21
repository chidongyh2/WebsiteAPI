using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Product.Domain.Models
{
    public class ProductValue
    {
        public string ProductId { get; set; }
        public string ProductAttributeId { get; set; }
        public string Value { get; set; }
        public string Id { get; set; }
        public string ProductAttributeValueId { get; set; }
        public bool IsDelete { get; set; }
        public bool IsShowClient { get; set; }
        public string CreatorId { get; set; }
        public string CreatorFullName { get; set; }
        public DateTime CreateTime { get; set; }
        public string LastUpdateUserId { get; set; }
        public string LastUpdateFullName { get; set; }
        public DateTime? LastUpdateTime { get; set; }

        public ProductValue()
        {
            CreateTime = DateTime.Now;
            IsDelete = false;
        }
    }
}
