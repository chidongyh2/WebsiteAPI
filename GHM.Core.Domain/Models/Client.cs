using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Claims;
using IdentityServer4;
using IdentityServer4.Models;

namespace GHM.Core.Domain.Models
{
    public class Client : IdentityServer4.Models.Client
    {
        /// <summary>
        /// Tên không dấu hỗ trợ tìm kiếm.
        /// </summary>
        public string UnsignName { get; set; }

        /// <summary>
        /// Dánh dấu client đã bị xóa.
        /// </summary>
        public bool IsDelete { get; set; }

        public DateTime CreateTime { get; set; }

        public string ClientAllowedGrantTypes { get; set; }

        [NotMapped]
        public new ICollection<string> AllowedGrantTypes { get; set; }

        [NotMapped]
        public new ICollection<Secret> ClientSecrets { get; set; }

        [NotMapped]
        public new ICollection<string> PostLogoutRedirectUris { get; set; }

        [NotMapped]
        public new ICollection<string> RedirectUris { get; set; }

        [NotMapped]
        public new ICollection<string> AllowedCorsOrigins { get; set; }

        [NotMapped]
        public new ICollection<string> AllowedScopes { get; set; }

        [NotMapped]
        public new ICollection<string> IdentityProviderRestrictions { get; set; }

        [NotMapped]
        public new ICollection<string> Properties { get; set; }

        [NotMapped]
        public new ICollection<Claim> Claims { get; set; }

        public Client()
        {
            IsDelete = false;
            CreateTime = DateTime.Now;
            ProtocolType = IdentityServerConstants.ProtocolTypes.OpenIdConnect;
        }
    }
}
