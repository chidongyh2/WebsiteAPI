using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.Website.Pyrexar.Models
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
    }
}
