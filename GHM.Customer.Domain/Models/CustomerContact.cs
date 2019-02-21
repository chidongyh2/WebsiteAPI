using GHM.Infrastructure.Models;
using GHM.Customer.Domain.Constants;

namespace GHM.Customer.Domain.Models
{
    public class CustomerContact : EntityBase<string>
    {
        public string CustomerId { get; set; }
        public ContactType ContactType { get; set; }
        public string ContactValue { get; set; }
    }
}
