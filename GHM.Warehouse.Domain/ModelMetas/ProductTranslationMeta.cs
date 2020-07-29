using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Warehouse.Domain.ModelMetas
{
    public class ProductTranslationMeta
    {
        public string LanguageId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string MetaDescription { get; set; }
        public string MetaKeyword { get; set; }
        public string SeoLink { get; set; }
        public string Content { get; set; }
    }
}
