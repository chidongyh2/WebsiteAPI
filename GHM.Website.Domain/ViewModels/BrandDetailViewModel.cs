namespace GHM.Website.Domain.ViewModels
{
    public class BrandDetailViewModel
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public bool IsActive { get; set; }

        public string Description { get; set; }

        public string Email { get; set; }

        public string PhoneNumber { get; set; }

        public string Website { get; set; }

        public string Address { get; set; }
        public string Logo { get; set; }

        public string ConcurrencyStamp { get; set; }
    }
}
