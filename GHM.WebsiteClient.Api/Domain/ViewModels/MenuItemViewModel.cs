using GHM.WebsiteClient.Api.Domain.Constants;

namespace GHM.WebsiteClient.Api.Domain.ViewModels
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
        public string ConcurrencyStamp { get; set; }
    }
}
