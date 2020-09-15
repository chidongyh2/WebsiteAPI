using System.Collections.Generic;

namespace GHM.Website.ModelToys.Models
{
    public class MenuObject
    {
        public List<MenuItemViewModel> ListMenuItem { get; set; }
        public int? ParentId { get; set; }
    }
}
