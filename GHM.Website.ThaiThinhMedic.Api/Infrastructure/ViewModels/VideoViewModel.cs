using System;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Constants;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.ViewModels
{
    public class VideoViewModel : EntityBase<string>
    {
        public string Url { get; set; }
        public string VideoId { get; set; }
        public string Title { get; set; }
        public bool IsActive { get; set; }
        public string Description { get; set; }
        public string Thumbnail { get; set; }
        public int Order { get; set; }
        public VideoType Type { get; set; }

        public VideoViewModel(string id, string videoId, string url, string title, string description, string thumbnail, bool isActive, DateTime createTime, int order, VideoType type)
        {
            Id = id;
            VideoId = videoId;
            Url = url;
            Title = title;
            Description = description;
            Thumbnail = thumbnail;
            IsActive = isActive;
            CreateTime = createTime;
            Order = order;
            Type = type;
        }
    }
}
