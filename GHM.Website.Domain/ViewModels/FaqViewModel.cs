using System;

namespace GHM.Website.Domain.ViewModels
{
    public class FaqViewModel
    {
        public string Id { get; set; }
        public string TenantId { get; set; }
        public string FaqGroupId { get; set; }
        public string Photo { get; set; }
        public int Order { get; set; }
        public bool IsActive { get; set; }
        public string ConcurrencyStamp { get; set; }
        public DateTime? CreateTime { get; set; }
        public DateTime? LastUpdate { get; set; }
        public string LanguageId { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
    }
}
