using System.Collections.Generic;

namespace GHM.Website.ModelToys.ViewModels
{
    public class ProductCategoryMenuObject
    {
        public List<ProductCategorySearchViewModel> ListMenuItem { get; set; }
        public int? ParentId { get; set; }
    }
}
