namespace GHM.Authentication.Domain.Models
{
    public class ApiResource : IdentityServer4.Models.ApiResource
    {
        public ApiResource()
        {

        }

        public ApiResource(string name, string description, string displayName, bool enabled)
        {
            Name = name;
            Description = description;
            DisplayName = displayName;
            Enabled = enabled;
        }
    }
}
