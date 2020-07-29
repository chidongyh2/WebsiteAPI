using System.Collections.Generic;

namespace GHM.Website.Nelly.Models
{
    public class MenuObject
    {
        public List<MenuItemViewModel> ListMenuItem { get; set; }
        public int? ParentId { get; set; }
    }
}
