using System.Collections.Generic;

namespace GHM.Product.Domain.ModelMetas
{
    public class ProductMeta
    {
        public bool IsActive { get; set; }
        public string ConcurrencyStamp { get; set; }
        public bool? IsManagementByLot { get; set; }
        public string Thumbnail { get; set; }
        public bool? IsHot { get; set; }
        public bool? IsHomePage { get; set; }
        public List<ProductTranslationMeta> Translations { get; set; }
        public List<ProductImageMeta> Images { get; set; }
        public List<int> Categories { get; set; }
        public ProductListUnitMeta ProductListUnit { get; set; }
    }
}
