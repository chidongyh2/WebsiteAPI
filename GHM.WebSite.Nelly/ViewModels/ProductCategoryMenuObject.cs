using System.Collections.Generic;

namespace GHM.Website.Nelly.ViewModels
{
    public class ProductCategoryMenuObject
    {
        public List<ProductCategorySearchViewModel> ListMenuItem{ get; set; }
        public int? ParentId { get; set; }
    }
}
