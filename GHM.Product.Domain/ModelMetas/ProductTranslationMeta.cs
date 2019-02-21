using System.Collections.Generic;

namespace GHM.Product.Domain.ModelMetas
{
    public class ProductTranslationMeta
    {
        public string LanguageId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string MetaDescription { get; set; }
        public string MetaKeyword { get; set; }
        public string MetaTitle { get; set; }
        public string SeoLink { get; set; }
        public string Content { get; set; }
        public List<SubjectTagMeta> Tags { get; set; }
    }
}
