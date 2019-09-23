using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Warehouse.Domain.ModelMetas
{
    public class ProductCategoryMeta
    {
        public int Order { get; set; }

        public int? ParentId { get; set; }

        public bool IsActive { get; set; }

        public bool? IsHot { get; set; }

        public string Image { get; set; }

        public bool? IsHomePage { get; set; }

        public bool? IsSolution { get; set; }

        public string ConcurrencyStamp { get; set; }

        public List<ProductCategoryTranslationMeta> Translations { get; set; }

        public List<ProductCategoriesAttribute> ProductCategoryAttributes { get; set; }
    }
}
