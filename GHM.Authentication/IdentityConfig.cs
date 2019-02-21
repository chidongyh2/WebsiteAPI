using System.Collections.Generic;
using IdentityServer4.Models;

namespace GHM.Authentication
{
    public class IdentityConfig
    {
        public static IEnumerable<ApiResource> GetApiResources()
        {
            return new List<ApiResource>
            {
                new ApiResource("GHM_Hr_Api", "Thai Thinh Medic Core Api Resources."),
                new ApiResource("GHM_Core_Api", "Thai Thinh Medic Hr managerment resources."),
                new ApiResource("api1", "test api 1")
            };
        }

        public static IEnumerable<Client> GetClients()
        {
            return new List<Client>
            {
                new Client
                {
                    ClientId = "2e624d77-973b-4a70-9773-a6134597938b",
                    AllowedGrantTypes = GrantTypes.ClientCredentials,
                    RequireClientSecret = true,
                    ClientSecrets =
                    {
                        new Secret("SG9hbmdEZXBUcmFp".Sha256())
                    },
                    AllowedScopes = { "GHM_Core_Api" }
                }
            };
        }

        public static List<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
                new IdentityResource("GHM_Hr_Api", new List<string>{""}),                
                new IdentityResource("roles", new List<string> { "role" })
            };
        }
    }
}
