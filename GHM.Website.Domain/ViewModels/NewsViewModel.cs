using System;
using System.Collections.Generic;
using GHM.Website.Domain.Constants;

namespace GHM.Website.Domain.ViewModels
{
    public class NewsViewModel
    {
        public string Id { get; set; }
        public string ConcurrencyStamp { get; set; }
        public long LikeCount { get; set; }
        public long CommentCount { get; set; }
        public long ViewCount { get; set; }
        public DateTime CreateTime { get; set; }
        public string CreatorId { get; set; }
        public string CreatorFullName { get; set; }
        public bool IsActive { get; set; }
        public string FeatureImage { get; set; }
        public string Source { get; set; }
        public ApproverStatus Status { get; set; }
        public DateTime? LastUpdate { get; set; }
        public bool? IsHot { get; set; }
        public bool? IsHomePage { get; set; }
        public string Title { get; set; }

        public List<string> CategoriesNames { get; set; }
    }
}
