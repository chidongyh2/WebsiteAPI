using System.ComponentModel.DataAnnotations;

namespace GHM.Core.Domain.Models.AccountViewModels
{
    public class ExternalLoginViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
