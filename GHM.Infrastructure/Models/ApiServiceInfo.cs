using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Infrastructure.Models
{
    public class ApiServiceInfo
    {
        public string ClientId { get; set; }
        public string TenantId { get; set; }
        public string ClientSecret { get; set; }
        public string Scopes { get; set; }
    }
}
