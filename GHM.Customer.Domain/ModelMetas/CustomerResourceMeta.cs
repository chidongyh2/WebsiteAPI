using System.Collections.Generic;

namespace GHM.Customer.Domain.ModelMetas
{
    public class CustomerResourceMeta
    {
        public bool IsActive { get; set; }
        public string ConcurrencyStamp { get; set; }
        public int Order { get; set; }
        public List<CustomerResourceTranslationMeta> CustomerResourceTranslations { get; set; }
    }
}
