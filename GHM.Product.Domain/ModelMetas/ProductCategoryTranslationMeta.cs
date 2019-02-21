using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Product.Domain.ModelMetas
{
    public class ProductCategoryTranslationMeta
    {
        public int ProductCategoryId { get; set; }

        public string LanguageId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
    }
}
