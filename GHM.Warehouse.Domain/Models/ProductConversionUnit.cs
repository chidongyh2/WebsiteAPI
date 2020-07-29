using System;

namespace GHM.Warehouse.Domain.Models
{
    public class ProductConversionUnit
    {
        public string Id { get; set; }
        public string TenantId { get; set; }
        public string ProductId { get; set; }
        public string UnitId { get; set; }
        public string ConversionUnitId { get; set; }
        public decimal Value { get; set; }
        public bool IsDelete { get; set; }
        public DateTime CreateTime { get; set; }
        public DateTime? ToDate { get; set; }
        public string ConversionUnitGroupId { get; set; }
        public ProductConversionUnit()
        {
            Id = Guid.NewGuid().ToString();
            IsDelete = false;
            CreateTime = DateTime.Now;
        }
    }
}
