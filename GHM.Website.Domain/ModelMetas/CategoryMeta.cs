using System.Collections.Generic;

namespace GHM.Website.Domain.ModelMetas
{
    public class CategoryMeta
    {
        public bool IsActive { get; set; }
        public int? ParentId { get; set; }
        public string BannerImage { get; set; }
        public string CreatorId { get; set; }
        public string CreatorFullName { get; set; }
        public string CreatorAvatar { get; set; }
        public string ConcurrencyStamp { get; set; }
        public int Order { get; set; }
        public bool? IsHomePage { get; set; }
        public List<CategoryTranslationMeta> CategoryTranslations { get; set; }
    }
}
