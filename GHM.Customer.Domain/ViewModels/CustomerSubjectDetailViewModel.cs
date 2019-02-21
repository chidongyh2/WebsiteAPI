using System.Collections.Generic;

namespace GHM.Customer.Domain.ViewModels
{
    public class CustomerSubjectDetailViewModel
    {
        public string CustomerSubjectId { get; set; }
        public string ConcurrencyStamp { get; set; }
        public bool IsActive { get; set; }
        public int Order { get; set; }
        public float? TotalReduction { get; set; }
        public List<CustomerSubjectTranslationViewModel> CustomerSubjectTranslations { get; set; }
    }
}
