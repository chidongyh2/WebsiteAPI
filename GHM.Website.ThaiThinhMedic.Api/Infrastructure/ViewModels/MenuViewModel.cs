using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Constants;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.ViewModels
{
    public class MenuViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public string IdPath { get; set; }
        public string Url { get; set; }
        public string Icon { get; set; }
        public int Order { get; set; }
        public int? ParentId { get; set; }
        public int ChildCount { get; set; }
        public int? ReferenceId { get; set; }
        public ReferenceType ReferenceType { get; set; }

        public MenuViewModel(int id, string name, bool isActive, string idPath, string url, string icon, int order, int? parentId, int childCount,
            int? referenceId, ReferenceType referenceType)
        {
            Id = id;
            Name = name;
            IsActive = isActive;
            IdPath = idPath;
            Url = url;
            Icon = icon;
            Order = order;
            ParentId = parentId;
            ChildCount = childCount;
            ReferenceId = referenceId;
            ReferenceType = referenceType;
        }
    }
}
