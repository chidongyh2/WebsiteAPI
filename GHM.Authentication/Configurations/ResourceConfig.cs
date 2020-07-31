using GHM.Authentication.Domain.Models;
using IdentityServer4.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Authentication.Configurations
{
    public class ResourceConfig : IEntityTypeConfiguration<Resource>
    {
        public void Configure(EntityTypeBuilder<Resource> builder)
        {
            builder.Ignore(x => x.UserClaims);
            builder.ToTable("Resource").HasKey(x => x.Name);
        }
    }
}
