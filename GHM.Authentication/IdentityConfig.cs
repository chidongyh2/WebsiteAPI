using System.Collections.Generic;
using System.Security.Claims;
using IdentityServer4;
using IdentityServer4.Models;
using IdentityServer4.Test;

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
                   ClientId = "mvc",
                    ClientName = "MVC Client",
                    AllowedGrantTypes = GrantTypes.Implicit,

                    // where to redirect to after login
                    RedirectUris = { "http://localhost:2002/signin-oidc" },

                    // where to redirect to after logout
                    PostLogoutRedirectUris = { "http://localhost:2002/signout-callback-oidc" },

                    AllowedScopes = new List<string>
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile
                    }

                }
            };
        }

        public static List<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
                //new IdentityResource("GHM_Hr_Api", new List<string>{""}),                
                //new IdentityResource("roles", new List<string> { "role" })
            };
        }
        public static List<TestUser> GetUsers()
        {
            return new List<TestUser>
    {
         new TestUser
                {
                    SubjectId = "1",
                    Username = "marko",
                    Password = "proteron",

                    Claims = new []
                    {
                        new Claim("name", "Marko"),
                        new Claim("website", "http://www.proteron.hr")
                    }
                },
                new TestUser
                {
                    SubjectId = "2",
                    Username = "dario",
                    Password = "proteron",

                    Claims = new []
                    {
                        new Claim("name", "Dario"),
                        new Claim("website", "http://www.proteron.hr")
                    }
                }
    };
        }
    }
}
