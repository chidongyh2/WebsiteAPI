using System.Collections.Generic;

namespace GHM.Product.Domain.ModelMetas
{
    public class ProductAttributeMeta
    {
        public string ConcurrencyStamp { get; set; }
        public bool IsActive { get; set; }
        public bool IsRequire { get; set; }
        public bool IsMultiple { get; set; }
        public bool IsSelfContent { get; set; }
        public List<ProductAttributeTranslationMeta> Translations { get; set; }
    }
}
