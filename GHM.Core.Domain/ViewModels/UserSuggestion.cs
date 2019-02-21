using GHM.Infrastructure.Models;

namespace GHM.Core.Domain.ViewModels
{
    public class UserSuggestion : Suggestion<string>
    {
        public string Avatar { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
    }
}
