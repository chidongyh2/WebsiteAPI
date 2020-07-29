using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Warehouse.Domain.ModelMetas
{
    /// <summary>
    /// Model mapping với bảng trong database.
    /// </summary>

    public class Brand
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string UnsignName { get; set; }

        public bool IsActive { get; set; }

        public string Description { get; set; }

        public bool IsDelete { get; set; }

        public string ConcurrencyStamp { get; set; }

        public DateTime CreateTime { get; set; }

        public string TenantId { get; set; }


        public string CreatorId { get; set; }

        public string CreatorFullName { get; set; }

        public string LastUpdateUserId { get; set; }

        public string LastUpdateFullName { get; set; }

        public DateTime? LastUpdateTime { get; set; }

        public string Email { get; set; }

        public string PhoneNumber { get; set; }

        public string Website { get; set; }

        public string Address { get; set; }

        public Brand()
        {
            Id = Guid.NewGuid().ToString();
            Name = "";
            UnsignName = "";
            IsActive = false;
            IsDelete = false;
            ConcurrencyStamp = "";
            CreateTime = DateTime.Now;
            TenantId = "";
            CreatorId = "";
            CreatorFullName = "";
        }
    }

}
