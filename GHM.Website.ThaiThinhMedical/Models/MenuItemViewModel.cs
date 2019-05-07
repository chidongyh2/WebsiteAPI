using GHM.Infrastructure.Constants;

namespace GHM.Website.ThaiThinhMedical.Models
{
    public class MenuItemViewModel
    {
        public int Id { get; set; }
        public string MenuId { get; set; }
        public string SubjectId { get; set; }
        public SubjectType SubjectType { get; set; }
        public string Icon { get; set; }
        public string Image { get; set; }
        public string Url { get; set; }
        public bool IsActive { get; set; }
        public int? ParentId { get; set; }
        public string IdPath { get; set; }
        public int Order { get; set; }
        public string OrderPath { get; set; }
        public int Level { get; set; }
        public int ChildCount { get; set; }
        public string Name { get; set; }
        public string ParentName { get; set; }
        public string NamePath { get; set; }
        public string Description { get; set; }
    }
}
