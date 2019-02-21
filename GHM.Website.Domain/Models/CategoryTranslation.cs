using System.Collections.Generic;
using GHM.Infrastructure.Extensions;

namespace GHM.Website.Domain.Models
{
    public class CategoryTranslation
    {
        public string TenantId { get; set; }
        public int CategoryId { get; set; }
        public string LanguageId { get; set; }
        public string Name { get; set; }
        public string MetaTitle { get; set; }
        public string UnsignName { get; set; }
        public string Description { get; set; }
        public string MetaDescription { get; set; }
        public string SeoLink { get; set; }
        //public List<Tag> Tags { get; set; }
        public bool IsDelete { get; set; }

        public Category Category { get; set; }

        public CategoryTranslation()
        {
            IsDelete = false;
        }

        public CategoryTranslation(int categoryId, string languageId, string name, string description, string seoLink)
        {
            CategoryId = categoryId;
            LanguageId = languageId;
            Name = name.Trim();
            UnsignName = name.Trim().StripVietnameseChars().ToUpper();
            Description = description?.Trim();
            SeoLink = string.IsNullOrEmpty(seoLink) ? name.Trim().ToUrlString() : seoLink;
            IsDelete = false;
        }
    }
}
