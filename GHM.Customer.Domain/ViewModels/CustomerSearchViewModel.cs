using System;

namespace GHM.Customer.Domain.ViewModels
{
    public class CustomerSearchViewModel
    {
        public string Id { get; set; }
        
        public DateTime? CreateTime { get; set; }

        public string CustomerCode { get; set; }

        public string FullName { get; set; }

        public string PhoneNumber { get; set; }

        public string Email { get; set; }

        public string Address { get; set; }

        public string ContactPerson { get; set; }

        public string ContactPhoneNumber { get; set; }
        
        public DateTime? Birthday { get; set; }        

        public DateTime? LastDay { get; set; }

    }   
}
