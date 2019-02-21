using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models
{
    public class Course : EntityBase<string>
    {
        public string Name { get; set; }
        public string UnsignName { get; set; }
        public string Description { get; set; }
        public string Content { get; set; }
        public bool IsActive { get; set; }
        public bool IsDelete { get; set; }
        public string SeoLink { get; set; }

        public Course()
        {
            IsDelete = false;
        }

        public Course(string name, string description, string content, bool isActive)
        {
            Name = name.Trim();
            Description = description?.Trim();
            Content = content?.Trim();
            IsActive = isActive;
            UnsignName = Name.StripVietnameseChars().ToUpper();
            SeoLink = Name.ToUrlString();
        }
    }
}
