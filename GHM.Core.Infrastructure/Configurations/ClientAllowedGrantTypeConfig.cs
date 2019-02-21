using GHM.Core.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Core.Infrastructure.Configurations
{
    public class ClientAllowedGrantTypeConfig : IEntityTypeConfiguration<ClientAllowedGrantTypes>
    {
        public void Configure(EntityTypeBuilder<ClientAllowedGrantTypes> builder)
        {
            builder.Property(x => x.Id).IsRequired().ValueGeneratedOnAdd();
            builder.Property(x => x.ClientId).HasMaxLength(100).IsRequired();
            builder.Property(x => x.AllowedGrantType).HasMaxLength(256).IsRequired();
            builder.ToTable("ClientAllowedGrantTypes").HasKey(x => x.Id);
        }
    }
}
