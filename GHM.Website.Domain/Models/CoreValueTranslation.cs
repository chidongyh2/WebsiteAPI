namespace GHM.Website.Domain.Models
{
    public class CoreValueTranslation
    {
        public string TenantId { get; set; }
        public string LanguageId { get; set; }
        public string CoreValueId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string UnsignName { get; set; }
        public bool IsDelete { get; set; }

        public CoreValueTranslation()
        {
            IsDelete = false;
        }

        public CoreValue CoreValue { get; set; }
    }
}
