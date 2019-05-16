using System;

namespace GHM.Website.Nelly.ViewModels
{
    public class NewsSearchViewModel
    {
        public string Id { get; set; }
        public long LikeCount { get; set; }
        public long CommentCount { get; set; }
        public long ViewCount { get; set; }
        public string FeatureImage { get; set; }
        public string AltImage { get; set; }
        public string Source { get; set; }
        public string Title { get; set; }
        public string MetaTitle { get; set; }
        public string Description { get; set; }
        public string MetaKeyword { get; set; }
        public string SeoLink { get; set; }
        public DateTime CreateTime { get; set; }
        public DateTime? LastUpdate { get; set; }
        public bool? IsHot { get; set; }
    }
}
