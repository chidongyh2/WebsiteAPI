using System.Collections.Generic;

namespace GHM.Warehouse.Domain.ModelMetas
{
    public class AttributeValueMeta
    {
        public string ConcurrencyStamp { get; set; }
        public bool IsActive { get; set; }
        public List<AttributeValueTranslationMeta> Translations { get; set; }
    }
}
