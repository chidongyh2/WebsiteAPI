using System.Collections.Generic;

namespace GHM.Product.Domain.ModelMetas
{
    public class ProductAttributeValueMeta
    {
        public string ConcurrencyStamp { get; set; }
        public bool IsActive { get; set; }
        public List<ProductAttributeValueTranslationMeta> Translations { get; set; }
    }
}
