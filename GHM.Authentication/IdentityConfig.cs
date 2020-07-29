using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using IdentityServer4;
using IdentityServer4.Models;
using IdentityServer4.Test;

namespace GHM.Authentication
{
    public class IdentityConfig
    {
        public static IEnumerable<ApiScope> GetApiScopes()
        {
            return new List<ApiScope>
            {
                new ApiScope("GHM_Core_Api", "GHM_Core_Api"),
                new ApiScope("GHM_Notification_Api", "GHM_Notification_Api"),
                new ApiScope("GHM_File_Management_Api", "GHM_File_Management_Api"),
                new ApiScope("GHM_Website_Api", "GHM_Website_Api"),
                new ApiScope("GHM_Event_Api", "GHM_Event_Api"),
                new ApiScope("GHM_Warehouse_Api", "GHM_Warehouse_Api."),
                new ApiScope("GHM_Internal_Api_Gateway", "GHM_Internal_Api_Gateway"),
                new ApiScope("GHM_Customer_Api", "GHM_Customer_Api")
            };
        }
        public static IEnumerable<ApiResource> GetApiResources()
        {
            var lst = new List<ApiResource>
            {
                new ApiResource("GHM_Core_Api", "GHM_Core_Api"),
                new ApiResource("GHM_Notification_Api", "GHM_Notification_Api"),
                new ApiResource("GHM_File_Management_Api", "GHM_File_Management_Api"),
                new ApiResource("GHM_Website_Api", "GHM_Website_Api"),
                new ApiResource("GHM_Event_Api", "GHM_Event_Api"),
                new ApiResource("GHM_Warehouse_Api", "GHM_Warehouse_Api."),
                new ApiResource("GHM_Internal_Api_Gateway", "GHM_Internal_Api_Gateway"),
                new ApiResource("GHM_Customer_Api", "GHM_Customer_Api")
            };
            foreach(var item in lst)
            {
                item.Scopes.Add(item.Name);
            }
            return lst;
        }
        public static IEnumerable<Client> GetClients()
        {
            return new List<Client>
            {
                new Client
                {
                    ClientId = "a3a3b45c-3665-44b2-931a-f840fdfca572",
                    ClientName = "GHM_Application",
                    Enabled = true,
                    AllowedGrantTypes = GrantTypes.ResourceOwnerPassword,
                    AccessTokenType = AccessTokenType.Jwt,
                    AccessTokenLifetime = 86400,  //thời gian token 86400
                    IdentityTokenLifetime = 86400,
                    AuthorizationCodeLifetime = 86400,
                    UpdateAccessTokenClaimsOnRefresh = true,
                    SlidingRefreshTokenLifetime = 30,
                    AllowOfflineAccess = true,
                    RefreshTokenExpiration = TokenExpiration.Absolute,
                    RefreshTokenUsage = TokenUsage.OneTimeOnly,
                    AlwaysSendClientClaims = true,
                    RequireClientSecret = false,
                    ProtocolType = "oidc",
                    EnableLocalLogin = true,
                    IncludeJwtId = true,
                    ClientSecrets =
                    {
                        new Secret("GHMSOFT".Sha256())
                    },
                    AllowedScopes = { "GHM_Core_Api", "GHM_Notification_Api" , "GHM_File_Management_Api", "GHM_Website_Api", "GHM_Event_Api", "GHM_Warehouse_Api", "GHM_Internal_Api_Gateway", "GHM_Customer_Api" },
                    
                    //RedirectUris = new List<string>
                    //{
                    //    "https://localhost:3000",
                    //},

                    //PostLogoutRedirectUris = new List<string>
                    //{
                    //    "https://localhost:3000",
                    //},
                }
            };
        }

        public static List<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile()
            };
        }

        public static List<TestUser> GetUsers()
        {
            return new List<TestUser>
            {
                new TestUser
                {
                    SubjectId = "1",
                    Username = "alice",
                    Password = "password"
                },
                new TestUser
                {
                    SubjectId = "2",
                    Username = "bob",
                    Password = "password"
                }
            };
        }
    }
}
