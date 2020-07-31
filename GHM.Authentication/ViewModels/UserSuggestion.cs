using GHM.Infrastructure.Models;

namespace GHM.Authentication.ViewModels
{
    public class UserSuggestion : Suggestion<string>
    {
        public string Avatar { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
    }
}
