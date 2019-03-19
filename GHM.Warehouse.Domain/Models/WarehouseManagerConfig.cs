using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Warehouse.Domain.Models
{
    public class WarehouseManagerConfig
    {
        public string TenantId { get; set; }
        public string UserId { get; set; }
        public string WarehouseId { get; set; }
        public string FullName { get; set; }
        public string Avatar { get; set; }
        public string UnsignName { get; set; }
        public int Permissions { get; set; }
        public DateTime? LastUpdateTime { get; set; }
        public string CreatorId { get; set; }
        public string CreatorFullName { get; set; }
        public DateTime CreateTime { get; set; }
        public string LastUpdateUserId { get; set; }
        public string LastUpdateFullName { get; set; }
        public string PhoneNumber { get; set; }
        public bool IsDelete { get; set; }
        public WarehouseManagerConfig()
        {
            CreateTime = DateTime.Now;
            IsDelete = false;
        }
    }
}
