using System;

namespace GHM.Website.Domain.ViewModels
{
    public class VideoGroupViewModel
    {
        public string Id { get; set; }
        public string TenantId { get; set; }
        public bool IsActive { get; set; }
        public string ConcurrencyStamp { get; set; }
        public DateTime? CreateTime { get; set; }
        public DateTime? LastUpdate { get; set; }
        public string LanguageId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string UnsignName { get; set; }
    }
}
