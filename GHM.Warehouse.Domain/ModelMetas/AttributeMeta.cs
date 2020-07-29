using System.Collections.Generic;

namespace GHM.Warehouse.Domain.ModelMetas
{
    public class AttributeMeta
    {
        public string ConcurrencyStamp { get; set; }
        public bool IsActive { get; set; }
        public bool IsRequire { get; set; }
        public bool IsMultiple { get; set; }
        public bool IsSelfContent { get; set; }
        public List<AttributeTranslationMeta> Translations { get; set; }
    }
}
