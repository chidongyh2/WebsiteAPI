using System.Collections.Generic;

namespace GHM.Warehouse.Domain.ViewModels
{
    public class ProductCategoryDetailViewModel
    {
        public int Order { get; set; }

        public int? ParentId { get; set; }

        public bool IsActive { get; set; }

        public int ChildCount { get; set; }

        public string ConcurrencyStamp { get; set; }

        public List<ProductCategoryTranslationViewModel> Translations { get; set; }

        public List<ProductCategoriesAttributeViewModel> ProductCategoryAttributes { get; set; }
    }
}
