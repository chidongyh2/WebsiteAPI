using GHM.Infrastructure.Models;

namespace GHM.Customer.Domain.Models
{
    public class CustomerRelativesContact : EntityBase<string>
    {
        public string CustomerId { get; set; }
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
    }
}
