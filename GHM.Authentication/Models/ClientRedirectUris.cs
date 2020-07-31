using System;

namespace GHM.Authentication.Models
{
    public class ClientRedirectUris
    {
        public Guid Id { get; set; }
        public string ClientId { get; set; }
        public string Uri { get; set; }

        public ClientRedirectUris() { }

        public ClientRedirectUris(string clientId, string uri)
        {
            ClientId = clientId;
            Uri = uri;
        }
    }
}
