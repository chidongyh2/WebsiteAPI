using GHM.Core.Domain.Constants;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using Microsoft.AspNetCore.Identity;

namespace GHM.Core.Domain.Models
{
    public sealed class Role : IdentityRole<string>
    {
        public string TenantId { get; set; }
        public string Description { get; set; }
        public RoleType Type { get; set; }

        public Role()
        {
            Type = RoleType.BuiltIn;
        }

        public Role(string id, string name, string description, string tenantId, string concurrencyStamp)
        {
            Id = id;
            Name = name.Trim();
            Description = description?.Trim();
            TenantId = tenantId;
            NormalizedName = name.Trim().StripVietnameseChars().ToUpper();
            ConcurrencyStamp = concurrencyStamp;
            Type = RoleType.BuiltIn;
        }
    }
}
