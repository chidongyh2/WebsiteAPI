using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Warehouse.Domain.Models
{
    public class WarehouseConfig
    {
        public string TenantId { get; set; }

        public string LanguageId { get; set; }

        public string Key { get; set; }

        public string Value { get; set; }

        public string DisplayName { get; set; }

        public string ConcurrencyStamp { get; set; }

        public DateTime CreateTime { get; set; }

        public string CreatorId { get; set; }

        public string CreatorFullName { get; set; }

        public string LastUpdateUserId { get; set; }

        public string LastUpdateFullName { get; set; }

        public DateTime? LastUpdate { get; set; }

        public string WarehouseId { get; set; }

        public DateTime? ToDate { get; set; }

        public WarehouseConfig()
        {
            CreateTime = DateTime.Now;
            ConcurrencyStamp = Guid.NewGuid().ToString();
        }
    }
}
