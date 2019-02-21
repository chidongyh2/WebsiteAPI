using System;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Models
{
    public class News : EntityBase<string>
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string UnsignName { get; set; }
        public string SeoLink { get; set; }
        public string Content { get; set; }
        public string CreatorId { get; set; }
        public string CreatorFullName { get; set; }
        public string CreatorImage { get; set; }
        public int ViewCount { get; set; }
        public int CommentCount { get; set; }
        public int LikeCount { get; set; }
        public string Source { get; set; }
        public bool IsActive { get; set; }
        public bool IsDelete { get; set; }
        public string Attachments { get; set; }
        public string Image { get; set; }
        public bool IsHot { get; set; }
        public bool IsHomePage { get; set; }
        public int? Priority { get; set; } // Thứ tự ưu tiên trên trang chủ. Thứ tự càng lớn càng được ưu tiên trước
        public DateTime? LastUpdate { get; set; }
        //public List<int> CategoryIds { get; set; }

        public News()
        {
            ViewCount = 0;
            CommentCount = 0;
            LikeCount = 0;
            IsDelete = false;
            IsHot = false;
            IsHomePage = false;
        }

        public News(string title, string description, string content, string source, string creatorId, string creatorFullName, string creatorImage, bool isActive, string attachments, string image, bool isHot,
            int? priority)
        {
            Title = title.Trim();
            Description = description.Trim();
            Content = content.Trim();
            UnsignName = Title.StripVietnameseChars();
            SeoLink = Title.ToUrlString().ToLower();
            Source = source?.Trim();
            CreatorId = creatorId;
            CreatorFullName = creatorFullName;
            CreatorImage = creatorImage;
            IsActive = isActive;
            Attachments = attachments;
            Image = image;
            IsHot = isHot;
            Priority = priority;
            ViewCount = 0;
            CommentCount = 0;
            LikeCount = 0;
            IsDelete = false;
        }
    }
}
