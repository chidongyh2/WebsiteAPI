using GHM.Authentication.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Authentication.Configurations
{
    public class ClientPostLogoutRedirectUrisConfig : IEntityTypeConfiguration<ClientPostLogoutRedirectUris>
    {
        public void Configure(EntityTypeBuilder<ClientPostLogoutRedirectUris> builder)
        {
            builder.Property(x => x.Id).IsRequired().ValueGeneratedOnAdd();
            builder.Property(x => x.ClientId).HasMaxLength(100).IsRequired();
            builder.Property(x => x.Uri).HasMaxLength(500).IsRequired();
            builder.ToTable("ClientPostLogoutRedirectUris").HasKey(x => x.Id);
        }
    }
}
