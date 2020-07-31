using System.ComponentModel.DataAnnotations;

namespace GHM.Authentication.Models.AccountViewModels
{
    public class ExternalLoginViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
