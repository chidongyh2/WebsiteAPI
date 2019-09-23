using System.Collections.Generic;

namespace GHM.Website.Domain.ModelMetas
{
    public class FaqMeta
    {
        public string FaqGroupId { get; set; }
        public string Photo { get; set; }
        public int Order { get; set; }
        public bool IsActive { get; set; }
        public string ConcurrencyStamp { get; set; }
        public List<FaqTranslationMeta> FaqTranslations { get; set; }
    }
}
