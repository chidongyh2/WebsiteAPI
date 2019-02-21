using GHM.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models
{
    public class Feedback : EntityBase<string>
    {
        public string CustomerId { get; set; }
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string UnsignName { get; set; }
        public string Content { get; set; }
    }
}
