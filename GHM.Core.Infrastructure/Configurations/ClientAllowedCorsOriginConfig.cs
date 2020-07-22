using GHM.Core.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Core.Infrastructure.Configurations
{
    public class ClientAllowedCorsOriginConfig : IEntityTypeConfiguration<ClientAllowedCorsOrigin>
    {
        public void Configure(EntityTypeBuilder<ClientAllowedCorsOrigin> builder)
        {
            builder.Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Property(x => x.ClientId).HasMaxLength(100).IsRequired();
            builder.Property(x => x.Domain).HasMaxLength(500).IsRequired();
            builder.ToTable("clientallowedcorsorigin").HasKey(x => x.Id);
        }
    }
}
