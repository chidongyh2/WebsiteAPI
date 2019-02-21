using System;
namespace GHM.Product.Domain.Models
{
   public class ProductUnit
    {
        public string Id { get; set; }
        public string ProductId { get; set; }
        public string UnitId { get; set; }
        public bool IsDefault { get; set; }
        public decimal SalePrice { get; set; }
        public DateTime CreateTime { get; set; }
        public string CreatorId { get; set; }
        public string CreatorFullName { get; set; }
        public DateTime? ToDate { get; set; }
        public string ProductUnitGroupId { get; set; }

        public ProductUnit()
        {
            CreateTime = DateTime.Now;
        }
    }
}
