using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Customer.Domain.ViewModels
{
    public class CustomerSummaryViewModel
    {

        public string Id { get; set; }
        public string CustomerCode { get; set; }
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }

    }
}
