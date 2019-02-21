using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Customer.Domain.ModelMetas
{
    public class ContactCustomerMeta
    {
        public string CustomerId { get; set; }

        public string ConcurrencyStamp { get; set; }

        public string FullName { get; set; }

        public string PhoneNumber { get; set; }

    }
}
