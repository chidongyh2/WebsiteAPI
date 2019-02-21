using System.ComponentModel.DataAnnotations;

namespace GHM.Core.Domain.Models.AccountViewModels
{
    public class ForgotPasswordViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
