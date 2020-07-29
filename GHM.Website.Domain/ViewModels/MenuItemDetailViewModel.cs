using System;
using System.Collections.Generic;
using GHM.Infrastructure.Constants;
using GHM.Website.Domain.Constants;

namespace GHM.Website.Domain.ViewModels
{
    public class MenuItemDetailViewModel
    {
        public string MenuId { get; set; }
        public string SubjectId { get; set; }
        public SubjectType SubjectType { get; set; }
        public string Icon { get; set; }
        public string Image { get; set; }
        public string Url { get; set; }
        public bool IsActive { get; set; }
        public int? ParentId { get; set; }
        public int Order { get; set; }
        public int Level { get; set; }
        public int ChildCount { get; set; }
        public string ConcurrencyStamp { get; set; }
        public List<MenuItemTranslationViewModel> MenuItemTranslations { get; set; }
        public List<MenuItemSelectedViewModel> MenuItemsSelected { get; set; }
    }
}
