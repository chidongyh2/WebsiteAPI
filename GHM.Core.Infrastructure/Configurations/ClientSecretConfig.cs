using System;
using GHM.Core.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Core.Infrastructure.Configurations
{
    public class ClientSecretConfig : IEntityTypeConfiguration<ClientSecret>
    {
        public void Configure(EntityTypeBuilder<ClientSecret> builder)
        {
            builder.HasBaseType((Type)null);
            builder.Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Property(x => x.ClientId).HasMaxLength(100).IsRequired();
            builder.Property(x => x.Value).HasMaxLength(4000).IsRequired();
            builder.Property(x => x.Description).HasMaxLength(4000).IsRequired(false);
            builder.Property(x => x.Expiration).IsRequired(false);
            builder.Property(x => x.Type).HasMaxLength(4000).IsRequired();
            builder.ToTable("clientsecret").HasKey(x => x.Id);
        }
    }
}
