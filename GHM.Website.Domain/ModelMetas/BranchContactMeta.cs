using System.Collections.Generic;

namespace GHM.Website.Domain.ModelMetas
{
    public class BranchContactMeta
    {
        public string ConcurrencyStamp { get; set; }
        public string WorkTime { get; set; }
        public string Link { get; set; }
        public string Website { get; set; }
        public int Order { get; set; }
        public string Logo { get; set; }
        public bool? IsOffice { get; set; }

        public List<BranchContactTranslationMeta> BranchContactTranslations { get; set; }
        public List<BranchContactDetailMeta> BranchContactDetails { get; set; }
    }
}
