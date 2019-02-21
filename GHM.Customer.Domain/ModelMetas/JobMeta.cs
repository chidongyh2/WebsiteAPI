using System.Collections.Generic;

namespace GHM.Customer.Domain.ModelMetas
{
    public class JobMeta
    {
        public int Order { get; set; }
        public int? ParentId { get; set; }
        public bool IsActive { get; set; }
        public List<JobTranslationMeta> JobTranslations { get; set; }
    }
}
