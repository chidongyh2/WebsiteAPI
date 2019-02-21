using System.Collections.Generic;
using GHM.Core.Domain.Models;

namespace GHM.Core.Domain.ModelMetas
{
    public class TenantMeta
    {
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public bool IsActive { get; set; }
        public string Note { get; set; }
        public string Logo { get; set; }
        public List<TenantLanguageMeta> Languages { get; set; }
        public List<TenantPage> Pages { get; set; }
    }
}
