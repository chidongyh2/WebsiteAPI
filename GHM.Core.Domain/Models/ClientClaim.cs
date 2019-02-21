
using System;

namespace GHM.Core.Domain.Models
{
    public class ClientClaim
    {
        public Guid Id { get; set; }
        public string ClientId { get; set; }
        public string ClaimType { get; set; }
        public string ClaimValue { get; set; }
    }
}
