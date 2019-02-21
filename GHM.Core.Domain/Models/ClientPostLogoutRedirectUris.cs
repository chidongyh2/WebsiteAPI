using System;

namespace GHM.Core.Domain.Models
{
    public class ClientPostLogoutRedirectUris
    {
        public Guid Id { get; set; }
        public string ClientId { get; set; }
        public string Uri { get; set; }

        public ClientPostLogoutRedirectUris()
        {

        }

        public ClientPostLogoutRedirectUris(string clientId, string uri)
        {
            ClientId = clientId;
            Uri = uri;
        }
    }
}
