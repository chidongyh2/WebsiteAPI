using GHM.Customer.Domain.Models;
using System.Collections.Generic;

namespace GHM.Customer.Domain.ModelMetas
{
    public class CutomerSubjectMeta
    {
        public string CustomerSubjectId { get; set; }
        public string ConcurrencyStamp{ get; set; }
        public bool IsActive { get; set; }
        public int Order { get; set; }
        public float? TotalReduction { get; set; }
        public List<CustomerSubjectTranslation> CustomerSubjectTranslations { get; set; }
    }
}
