namespace GHM.Core.Domain.ViewModels
{
    public class TenantLanguageViewModel
    {
        public string LanguageId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsDefault { get; set; }
        public bool IsActive { get; set; }
    }
}
