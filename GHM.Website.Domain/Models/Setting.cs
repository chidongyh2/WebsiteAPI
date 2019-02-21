using System;

namespace GHM.Website.Domain.Models
{
    public class Setting
    {
        public string TenantId { get; set; }

        public string Key { get; set; }

        public string GroupId { get; set; }

        public string LanguageId { get; set; }

        public string DisplayName { get; set; }

        public string Value { get; set; }
        public DateTime LastUpdate { get; set; }

        public string LastUpdateUserId { get; set; }

        public string LastUpdateFullName { get; set; }

        public string ConcurrencyStamp { get; set; }
    }
}
