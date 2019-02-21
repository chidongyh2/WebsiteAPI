using System;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Constants;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models
{
    public class Video : EntityBase<string>
    {
        public string VideoId { get; set; }
        public string Url { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Thumbnail { get; set; }
        public bool IsActive { get; set; }
        public bool IsDelete { get; set; }
        public string UnsignName { get; set; }
        public int Order { get; set; }
        public VideoType Type { get; set; }

        public Video()
        {
            IsDelete = false;
            CreateTime = DateTime.Now;
        }

        public Video(string videoId, string url, string title, string description, string thumbnail, bool isActive, int order, VideoType videoType)
        {
            VideoId = videoId;
            Url = url.Trim();
            Title = title.Trim();
            Description = description?.Trim();
            Thumbnail = thumbnail?.Trim();
            IsActive = isActive;
            UnsignName = Title.StripVietnameseChars().ToUpper();
            Order = order;
            Type = videoType;
        }
    }
}
