using System;

namespace GHM.Authentication.Models
{
    public class ClientAllowedCorsOrigin
    {
        public Guid Id { get; set; }
        public string ClientId { get; set; }
        public string Domain { get; set; }
    }
}
