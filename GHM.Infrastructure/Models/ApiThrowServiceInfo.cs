using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Infrastructure.Models
{
    public class ApiThrowServiceInfo
    {
        public string GrantType { get; set; }
        public string ClientId { get; set; }
        public string Scopes { get; set; }
        public string ApiGatewayUrl { get; set; }
        public string AuthenticationUrl { get; set; }
        public string TenantId { get; set; }
        public string ClientSecret { get; set; }
    }
}
