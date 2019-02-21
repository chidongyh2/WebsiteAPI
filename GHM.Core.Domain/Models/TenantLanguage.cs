namespace GHM.Core.Domain.Models
{
    public class TenantLanguage
    {
        public string TenantId { get; set; }
        public string LanguageId { get; set; }
        public bool IsActive { get; set; }
        public bool IsDefault { get; set; }
        public string Name { get; set; }
        public bool IsDelete { get; set; }
    }
}
