using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models
{
    public class Category : EntityBase<string>
    {
        public string TenantId { get; set; }
        public string Name { get; set; }
        public string UnsignName { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public bool IsDelete { get; set; }
        public string IdPath { get; set; }
        public string SeoLink { get; set; }
        public string ParentId { get; set; }

        public Category() { }

        public Category(string name, string description, bool isActive, string parentId)
        {
            Name = name.Trim();
            UnsignName = Name.StripVietnameseChars().ToUpper();
            SeoLink = Name.ToUrlString().ToLower();
            Description = description;
            IsActive = isActive;
            ParentId = parentId;
        }
    }
}
