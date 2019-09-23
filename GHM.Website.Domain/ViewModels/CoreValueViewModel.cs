using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.ViewModels
{
    public class CoreValueViewModel
    {
        public string Id { get; set; }
        public string TenantId { get; set; }
        public bool IsActive { get; set; }
        public int Order { get; set; }
        public string ConcurrencyStamp { get; set; }
        public DateTime? CreateTime { get; set; }
        public DateTime? LastUpdate { get; set; }
        public string LanguageId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string UnsignName { get; set; }
        public string Image { get; set; }
    }
}
