using System.Collections.Generic;

namespace GHM.Customer.Domain.ViewModels
{
 public   class CustomerResourceDetailViewModel
    {
        public string Id { get; set; }
        public bool IsActive { get; set; }
        public string ConcurrencyStamp { get; set; }
        public int Order { get; set; }
        public List<CustomerResourceTranslationViewModel> CustomerResourceTranslations { get; set; }
    }
}
