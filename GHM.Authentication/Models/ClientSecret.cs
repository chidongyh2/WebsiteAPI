using System;
using IdentityServer4.Models;

namespace GHM.Authentication.Models
{
    public class ClientSecret : Secret
    {
        public Guid Id { get; set; }
        public string ClientId { get; set; }



        public ClientSecret() { }

        public ClientSecret(string clientId, Secret secret)
        {
            ClientId = clientId;
            Value = secret.Value;
            Description = secret.Description;
            Expiration = secret.Expiration;
            Type = secret.Type;
        }
    }
}
