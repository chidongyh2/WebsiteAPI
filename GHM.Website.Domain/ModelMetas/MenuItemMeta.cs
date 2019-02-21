using System.Collections.Generic;
using GHM.Infrastructure.Constants;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.ModelMetas
{
    public class MenuItemMeta
    {
        public string SubjectId { get; set; }
        public SubjectType SubjectType { get; set; }
        public string Icon { get; set; }
        public string Image { get; set; }
        public string Url { get; set; }
        public bool IsActive { get; set; }
        public int? ParentId { get; set; }
        public int Order { get; set; }
        public string ConcurrencyStamp { get; set; }
        public List<MenuItemTranslationMeta> MenuItemTranslations { get; set; }
        public List<MenuItemSelectedViewModel> ListMenuItemSelected { get; set; }
    }
}
