using System;
using System.Collections.Generic;

namespace GHM.Website.Event.Domain.ModelMetas
{
    public class EventTranslationMeta
    {
        public string Name { get; set; }
        public string LanguageId { get; set; }
        public string Description { get; set; }
        public string Content { get; set; }
        public string SeoLink { get; set; }
        public string MetaTitle { get; set; }
        public string MetaDescription { get; set; }
        public string Address { get; set; }
        public List<SubjectTagMeta> Tags { get; set; }
    }
}
