using System.Collections.Generic;
using GHM.Infrastructure.Models;

namespace GHM.Website.Domain.Models
{
    public class Category : EntityBase<int>
    {
        public string TenantId { get; set; }
        public bool IsActive { get; set; }
        public bool IsDelete { get; set; }
        public string IdPath { get; set; }
        public int? ParentId { get; set; }
        public string CreatorAvatar { get; set; }
        public string BannerImage { get; set; }
        public int Order { get; set; }
        public string OrderPath { get; set; }
        public bool? IsHomePage { get; set; }

        public List<CategoryTranslation> CategoryTranslations { get; set; }
        public Category() { }

        public Category(bool isActive, int? parentId)
        {

            IdPath = "-1";
            IsActive = isActive;
            ParentId = parentId;
        }
    }
}
