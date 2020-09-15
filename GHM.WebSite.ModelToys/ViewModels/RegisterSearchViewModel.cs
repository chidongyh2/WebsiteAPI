using GHM.Website.ModelToys.Constants;

namespace GHM.Website.ModelToys.ViewModels
{
    public class RegisterSearchViewModel
    {
        public string FullName { get; set; }
        public string Avatar { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string Note { get; set; }
        public RegisterRole? Role { get; set; }
    }
}
