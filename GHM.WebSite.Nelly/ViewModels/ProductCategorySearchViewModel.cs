using System.Collections.Generic;

namespace GHM.Website.Nelly.ViewModels
{
    public class ProductCategorySearchViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public bool IsActive { get; set; }
        public bool? IsHot { get; set; }
        public bool? IsHomePage { get; set; }
        public int ChildCount { get; set; }
        public string SeoLink { get; set; }

        public string IdPath { get; set; }
        public int? ParentId { get; set; }
    }

    public class ProductCategoryMenuObject
    {
        public List<ProductCategorySearchViewModel> ListMenuItem { get; set; }
        public int? ParentId { get; set; }
    }
}
