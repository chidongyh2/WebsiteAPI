using GHM.Product.Domain.Constants;

namespace GHM.Product.Domain.ViewModels
{
    public class ContactSearchViewModel
    {
        public string Id { get; set; }

        public string FullName { get; set; }

        public string PositionName { get; set; }

        public string Email { get; set; }

        public string PhoneNumber { get; set; }

        public string ConcurrencyStamp { get; set; }
        public string Description { get; set; }

        public ContactStatus Status { get; set; }

    }
}
