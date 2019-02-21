using System.Collections.Generic;

namespace GHM.Customer.Domain.ViewModels
{
    public class CustomerContactDetailViewModel
    {
        public string CustomerId { get; set; }
        public string ConcurrencyStamp { get; set; }

        public List<CustomerContactViewModel> ContactCustomers { get; set; }
    }
}
