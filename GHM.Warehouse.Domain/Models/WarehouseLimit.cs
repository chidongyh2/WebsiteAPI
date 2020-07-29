using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Warehouse.Domain.Models
{
    public class WarehouseLimit
    {
        public string TenantId { get; set; }
        public string WarehouseId { get; set; }
        public string ProductId { get; set; }
        public string UnitId { get; set; }
        public int Quantity { get; set; }
        public DateTime? LastUpdateTime { get; set; }
        public string CreatorId { get; set; }
        public string CreatorFullName { get; set; }
        public DateTime CreateTime { get; set; }
        public string LastUpdateUserId { get; set; }
        public string LastUpdateFullName { get; set; }
        public WarehouseLimit()
        {
            CreateTime = DateTime.Now;
        }
    }
}
