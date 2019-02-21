using System.Collections.Generic;

namespace GHM.Product.Domain.ViewModels
{
    public class ProductTranslationViewModel
    {
        public string LanguageId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string UnsignName { get; set; }
        public string MetaTitle { get; set; }
        public string Content { set; get; }
        public string MetaKeyword { get; set; }
        public string MetaDescription { get; set; }
        public string SeoLink { get; set; }
        public List<SubjectTagViewModel> Tags { get; set; }
    }
}
