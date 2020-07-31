using System;

namespace GHM.Authentication.Models
{
    public class ClientAllowedGrantTypes
    {
        public Guid Id { get; set; }
        public string ClientId { get; set; }
        public string AllowedGrantType { get; set; }

        public ClientAllowedGrantTypes(string clientId, string allowedGrantType)
        {
            ClientId = clientId;
            AllowedGrantType = allowedGrantType;
        }
    }
}
