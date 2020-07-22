using IdentityServer4.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Core.Infrastructure.Configurations
{
    public class IdentityResourceConfig : IEntityTypeConfiguration<IdentityResource>
    {
        public void Configure(EntityTypeBuilder<IdentityResource> builder)
        {
            builder.Ignore(x => x.UserClaims);
            builder.Ignore(x => x.Properties);
            builder.ToTable("identityresource").HasKey(x => x.Name);
        }
    }
}
