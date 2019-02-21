using System;

namespace GHM.Core.Domain.Models
{
    public class ClientAllowedCorsOrigin
    {
        public Guid Id { get; set; }
        public string ClientId { get; set; }
        public string Domain { get; set; }
    }
}
