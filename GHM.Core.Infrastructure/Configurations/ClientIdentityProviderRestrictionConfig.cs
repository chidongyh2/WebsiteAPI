using GHM.Core.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Core.Infrastructure.Configurations
{
    public class ClientIdentityProviderRestrictionConfig : IEntityTypeConfiguration<ClientIdentityProviderRestriction>
    {
        public void Configure(EntityTypeBuilder<ClientIdentityProviderRestriction> builder)
        {
            builder.Property(x => x.Id).IsRequired().ValueGeneratedOnAdd();
            builder.Property(x => x.ClientId).HasMaxLength(100).IsRequired();
            builder.Property(x => x.IdentityProviderRestriction).HasMaxLength(500).IsRequired();
            builder.ToTable("clientidentityproviderrestriction").HasKey(x => x.Id);
        }
    }
}
