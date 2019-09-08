using System.Collections.Generic;

namespace GHM.Warehouse.Domain.ViewModels
{
    public class ProductCategoryDetailViewModel
    {
        public int Order { get; set; }

        public int? ParentId { get; set; }

        public bool IsActive { get; set; }

        public bool? IsHot { get; set; }

        public bool? IsHomePage { get; set; }

        public int ChildCount { get; set; }

        public string Image { get; set; }

        public string ConcurrencyStamp { get; set; }

        public List<ProductCategoryTranslationViewModel> Translations { get; set; }

        public List<ProductCategoriesAttributeViewModel> ProductCategoryAttributes { get; set; }
    }
}
