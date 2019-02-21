using System;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.ViewModels
{
    public class NewsSearchViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreateTime { get; set; }
        public string Image { get; set; }
        public bool IsActive { get; set; }
        public bool? IsHot { get; set; }
        public bool? IsHomePage { get; set; }

        public NewsSearchViewModel()
        {

        }

        public NewsSearchViewModel(int id, string title, string description, DateTime createTime, string image,
            bool isActive, bool? isHot, bool isHomePage)
        {
            Id = id;
            Title = title;
            Description = description;
            CreateTime = createTime;
            Image = image;
            IsActive = isActive;
            IsHot = isHot;
            IsHomePage = isHomePage;
        }
    }
}
