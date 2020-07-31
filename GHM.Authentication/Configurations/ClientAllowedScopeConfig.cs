using GHM.Authentication.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Authentication.Configurations
{
    public class ClientAllowedScopeConfig : IEntityTypeConfiguration<ClientAllowedScope>
    {
        public void Configure(EntityTypeBuilder<ClientAllowedScope> builder)
        {
            builder.Property(x => x.ClientId).HasMaxLength(100).IsRequired();
            builder.Property(x => x.Scope).HasMaxLength(500).IsRequired();
            builder.ToTable("ClientAllowedScope").HasKey(x => new { x.ClientId, x.Scope });
        }
    }
}
