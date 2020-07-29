using System;
using System.Collections.Generic;

namespace GHM.Warehouse.Domain.Models
{
    public class Attribute
    {
        public string Id { get; set; }

        public string TenantId { get; set; }

        public string ConcurrencyStamp { get; set; }

        public bool IsActive { get; set; }

        public bool IsDelete { get; set; }

        public bool IsRequire { get; set; }

        public bool IsMultiple { get; set; }

        public bool IsSelfContent { get; set; }

        public DateTime CreateTime { get; set; }

        public string CreatorId { get; set; }

        public string CreatorFullName { get; set; }

        public string CreatorAvatar { get; set; }

        public string LastUpdateUserId { get; set; }

        public string LastUpdateFullName { get; set; }

        public DateTime? LastUpdateTime { get; set; }

        public Attribute()
        {

            CreateTime = DateTime.Now;
            IsDelete = false;
            IsActive = true;
        }

        public List<AttributeTranslation> Translations { get; set; }
    }
}
