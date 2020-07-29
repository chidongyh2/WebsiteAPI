namespace GHM.Website.Truck.Models
{
    public class CategoryTranslationViewModel
    {
        public string TenantId { get; set; }
        public int CategoryId { get; set; }
        public string LanguageId { get; set; }
        public string Name { get; set; }
        public string MetaTitle { get; set; }
        public string Description { get; set; }
        public string MetaDescription { get; set; }
        public string SeoLink { get; set; }
        public int ChildCount { get; set; }
    }
}
