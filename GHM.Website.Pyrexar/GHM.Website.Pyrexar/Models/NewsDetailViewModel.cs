namespace GHM.Website.Pyrexar.ViewModels
{
    public class NewsDetailViewModel
    {
        public string Id { get; set; }
        public long LikeCount { get; set; }
        public long CommentCount { get; set; }
        public long ViewCount { get; set; }
        //   public DateTime CreateTime { get; set; }
        public string FeatureImage { get; set; }
        public string BannerImage { get; set; }
        public string AltImage { get; set; }
        public string Source { get; set; }
        //  public DateTime? LastUpdate { get; set; }
        public bool? IsHot { get; set; }
        //   public DateTime? LastUpdateIsHot { get; set; }
        public bool? IsHomePage { get; set; }
        //   public DateTime? LastUpdateIsHomePage { get; set; }
        public string Title { get; set; }
        public string MetaTitle { get; set; }
        public string UnsignName { get; set; }
        public string Description { get; set; }
        public string MetaDescription { get; set; }
        public string MetaKeyword { get; set; }
        public string SeoLink { get; set; }
        public string Content { get; set; }
    }
}
