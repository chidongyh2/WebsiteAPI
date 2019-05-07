using System;

namespace GHM.Website.ABC.ViewModels
{
    public class NewsSearchViewModel
    {
        //public string Id { get; set; }
        //public long LikeCount { get; set; }
        //public long CommentCount { get; set; }
        //public long ViewCount { get; set; }
        //public string FeatureImage { get; set; }
        //public string AltImage { get; set; }
        //public string Source { get; set; }
        //public string Title { get; set; }
        //public string MetaTitle { get; set; }
        //public string Description { get; set; }
        //public string MetaKeyword { get; set; }
        //public string SeoLink { get; set; }
        //public DateTime CreateTime { get; set; }
        //public DateTime? LastUpdate { get; set; }
        public string Id { get; set; }
        public string FeatureImage { get; set; }
        public string AltImage { get; set; }
        public string Source { get; set; }
        public string Title { get; set; }
        public string MetaTitle { get; set; }
        public string Description { get; set; }
        public string SeoLink { get; set; }
        public DateTime CreateTime { get; set; }
        public DateTime? LastUpdate { get; set; }
        public int LikeCount { get; set; }
        public int CommentCount { get; set; }
        public int ViewCount { get; set; }
        public bool? IsHot { get; set; }
    }
}
