using System.Collections.Generic;

namespace GHM.Website.Domain.ModelMetas
{
   public class CoreValueMeta
    {
        public bool IsActive { get; set; }
        public int Order { get; set; }
        public string ConcurrencyStamp { get; set; }
        public List<CoreValueTranslationMeta> Translations { get; set; }
    }
}
