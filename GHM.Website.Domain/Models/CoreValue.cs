using System;
using System.Collections.Generic;

namespace GHM.Website.Domain.Models
{
  public  class CoreValue
    {
        public string Id { get; set; }

        public string TenantId { get; set; }

        public bool IsActive { get; set; }

        public bool IsDelete { get; set; }

        public int Order { get; set; }

        public string ConcurrencyStamp { get; set; }

        public DateTime? CreateTime { get; set; }

        public string CreatorId { get; set; }

        public string CreatorFullName { get; set; }

        public DateTime? LastUpdate { get; set; }

        public string LastUpdateUserId { get; set; }

        public string LastUpdateFullName { get; set; }

        public CoreValue()
        {
            IsDelete = false;
            IsActive = true;
            CreateTime = DateTime.Now;

        }

        public List<CoreValueTranslation> CoreValueTranslations { get; set; }
    }
}
