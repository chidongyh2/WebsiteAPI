using System;

namespace GHM.Authentication.Models
{
    public class ClientProperty
    {
        public Guid Id { get; set; }
        public string ClientId { get; set; }
        public string Key { get; set; }
        public string Value { get; set; }
    }
}
