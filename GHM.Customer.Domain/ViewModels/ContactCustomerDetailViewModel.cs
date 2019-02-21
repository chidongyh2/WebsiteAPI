using System.Collections.Generic;

namespace GHM.Customer.Domain.ViewModels
{
    public class ContactCustomerDetailViewModel
    {
        public string CustomerId { get; set; }

        public string ConcurrencyStamp { get; set; }

        public List<ContactCustomerViewModel> ContactCustomers { get; set; }
    }
}
