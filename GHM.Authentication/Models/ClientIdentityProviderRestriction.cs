using System;

namespace GHM.Authentication.Models
{
    public class ClientIdentityProviderRestriction
    {
        public Guid Id { get; set; }
        public string ClientId { get; set; }
        public string IdentityProviderRestriction { get; set; }
    }
}
