using GHM.Core.Domain.Models;
using IdentityServer4.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Core.Infrastructure.Configurations
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
