using System.Collections.Generic;

namespace GHM.Website.Domain.ModelMetas
{
    public class FaqGroupMeta
    {
        public bool IsActive { get; set; }
        public int Order { get; set; }
        public string ConcurrencyStamp { get; set; }
        public bool IsQuickUpdate { get; set; }
        public List<FaqGroupTranslationMeta> Translations { get; set; }
    }
}
