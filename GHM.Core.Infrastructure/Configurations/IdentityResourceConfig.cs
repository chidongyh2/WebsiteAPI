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
            builder.ToTable("IdentityResource").HasKey(x => x.Name);
        }
    }
}
