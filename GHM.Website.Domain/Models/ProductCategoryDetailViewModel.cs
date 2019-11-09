using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.Models
{
    public class ProductCategoryDetailViewModel
    {
        public int Order { get; set; }

        public int? ParentId { get; set; }

        public bool IsActive { get; set; }

        public bool? IsHot { get; set; }

        public bool? IsHomePage { get; set; }

        public bool? IsSolution { get; set; }

        public int ChildCount { get; set; }

        public string Image { get; set; }

        public string ConcurrencyStamp { get; set; }

        public List<ProductCategoryTranslationViewModel> Translations { get; set; }

    }

    public class ProductCategoryTranslationViewModel
    {
        public string LanguageId { get; set; }

        public string Name { get; set; }

        public string SeoLink { get; set; }

        public string ParentName { get; set; }

        public string Description { get; set; }
    }
}
