using System;
using System.Collections.Generic;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.ViewModels
{
    public class NewsDetailViewModel : NewsSearchViewModel
    {
        public string Content { get; set; }
        public string Source { get; set; }
        public List<int> CategoryIds { get; set; }

        public NewsDetailViewModel(int id, string title, string description, DateTime createTime, string image,
            bool isActive, bool? isHot, bool isHomePage, string content, string source)
        {
            Id = id;
            Title = title;
            Description = description;
            CreateTime = createTime;
            Image = image;
            IsActive = isActive;
            IsHot = isHot;
            IsHomePage = isHomePage;
            Content = content;
            Source = source;            
        }
    }
}
