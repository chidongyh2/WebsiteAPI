namespace GHM.Website.Domain.Models
{
    public class FaqGroupTranslation
    {
        public string TenantId { get; set; }
        public string LanguageId { get; set; }
        public string FaqGroupId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string UnsignName { get; set; }
        public bool IsDelete { get; set; }

        public FaqGroupTranslation()
        {
            IsDelete = false;
        }

        public FaqGroup FaqGroup { get; set; }
    }
}
