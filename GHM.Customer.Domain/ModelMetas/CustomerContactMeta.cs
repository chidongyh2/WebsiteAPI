using GHM.Customer.Domain.Constants;
using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Customer.Domain.ModelMetas
{
    public class CustomerContactMeta
    {
        public string CustomerId { get; set; }

        public string ConcurrencyStamp { get; set; }

        public ContactType ContactType { get; set; }

        public string ContactValue { get; set; }

    }
}
