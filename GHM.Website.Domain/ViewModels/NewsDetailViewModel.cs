using System;
using System.Collections.Generic;
using System.Text;
using GHM.Website.Domain.Constants;

namespace GHM.Website.Domain.ViewModels
{
    public class NewsDetailViewModel
    {
        public string Id { get; set; }
        public string ConcurrencyStamp { get; set; }
        public long LikeCount { get; set; }
        public long CommentCount { get; set; }
        public long ViewCount { get; set; }
        public DateTime CreateTime { get; set; }
        public string CreatorId { get; set; }
        public string CreatorFullName { get; set; }
        public string CreatorAvatar { get; set; }
        public bool IsActive { get; set; }
        public string FeatureImage { get; set; }
        public string BannerImage { get; set; }
        public string AltImage { get; set; }
        public string Source { get; set; }
        public ApproverStatus Status { get; set; }
        public DateTime? SentTime { get; set; }
        public DateTime? ApprovedTime { get; set; }
        public string ApproverUserId { get; set; }
        public string ApproverFullName { get; set; }
        public string ApproverAvatar { get; set; }
        public string ApproverComment { get; set; }
        public DateTime? LastUpdate { get; set; }
        public string LastUpdateUserId { get; set; }
        public string LastUpdateFullName { get; set; }
        public string LastUpdateAvatar { get; set; }
        public bool? IsHot { get; set; }
        public DateTime? LastUpdateIsHot { get; set; }
        public bool? IsHomePage { get; set; }
        public DateTime? LastUpdateIsHomePage { get; set; }
        public bool IsApprove { get; set; }
        public string SeoLink { get; set; }
        public List<NewsTranslationViewModel> NewsTranslations { get; set; }
        public List<CategoriesNewsViewModel> CategoriesNews { get; set; }
    }
}
