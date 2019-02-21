using System;

namespace GHM.Core.Domain.Models
{
    public class ClientIdentityProviderRestriction
    {
        public Guid Id { get; set; }
        public string ClientId { get; set; }
        public string IdentityProviderRestriction { get; set; }
    }
}
