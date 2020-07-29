using System;
namespace GHM.Warehouse.Domain.Models
{
    public class ProductUnit
    {
        public string Id { get; set; }
        public string TenantId { get; set; }
        public string ProductId { get; set; }
        public string UnitId { get; set; }
        public bool IsDefault { get; set; }
        public decimal? SalePrice { get; set; }
        public DateTime CreateTime { get; set; }
        public string CreatorId { get; set; }
        public string CreatorFullName { get; set; }
        public DateTime? ToDate { get; set; }
        public bool IsDelete { get; set; }

        public ProductUnit()
        {
            Id = Guid.NewGuid().ToString();
            CreateTime = DateTime.Now;
            IsDelete = false;
            IsDefault = false;
        }
    }
}
