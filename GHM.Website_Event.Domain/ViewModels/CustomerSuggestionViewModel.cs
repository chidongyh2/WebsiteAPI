using GHM.Infrastructure.Models;

namespace GHM.Website.Event.Domain.ViewModels
{
    public class CustomerSuggestionViewModel : Suggestion<string>
    {
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
    }
}
