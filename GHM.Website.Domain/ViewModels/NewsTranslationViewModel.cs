using System.Collections.Generic;

namespace GHM.Website.Domain.ViewModels
{
    public class NewsTranslationViewModel
    {
        public string LanguageId { get; set; }
        public string Title { get; set; }
        public string MetaTitle { get; set; }
        public string UnsignName { get; set; }
        public string Description { get; set; }
        public string MetaDescription { get; set; }
        public string MetaKeyword { get; set; }
        public string SeoLink { get; set; }
        public string Content { get; set; }
        public List<SubjectTagViewModel> Tags { get; set; }
    }
}
