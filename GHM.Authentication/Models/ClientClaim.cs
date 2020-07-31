
using System;

namespace GHM.Authentication.Models
{
    public class ClientClaim
    {
        public Guid Id { get; set; }
        public string ClientId { get; set; }
        public string ClaimType { get; set; }
        public string ClaimValue { get; set; }
    }
}
