using System.Collections.Generic;
using GHM.Website.Domain.Constants;

namespace GHM.Website.Domain.ModelMetas
{
    public class NewsMeta
    {
        public string ConcurrencyStamp { get; set; }
        public bool IsActive { get; set; }
        public string FeatureImage { get; set; }
        public string BannerImage { get; set; }
        public string AltImage { get; set; }
        public string Source { get; set; }
        public ApproverStatus Status { get; set; }
        public bool? IsHot { get; set; }
        public bool? IsHomePage { get; set; }

        public List<NewsTranslationMeta> NewsTranslations { get; set; }
        public List<int> CategoriesNews { get; set; }
    }
}
