using System.Collections.Generic;

namespace GHM.Warehouse.Domain.ModelMetas
{
    public class ProductMeta
    {
        public bool IsActive { get; set; }
        public string ConcurrencyStamp { get; set; }
        public bool? IsManagementByLot { get; set; }
        public string Thumbnail { get; set; }
        public string UnitId { get; set; }
        public decimal SalePrice { get; set; }
        public List<ProductTranslationMeta> Translations { get; set; }
        public List<ProductImageMeta> Images { get; set; }
        public List<int> Categories { get; set; }
        public List<ProductConversionUnitMeta> ConversionUnits { get; set; }
        public List<ProductAttributeMeta> Attributes { get; set; }
    }
}
