using System;
using System.Collections.Generic;
using System.Text;
using GHM.Core.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Core.Infrastructure.Configurations
{
    public class ClientConfig : IEntityTypeConfiguration<Client>
    {
        public void Configure(EntityTypeBuilder<Client> builder)
        {
            builder.Ignore(x => x.AllowedIdentityTokenSigningAlgorithms);
            builder.Ignore(x => x.DeviceCodeLifetime);
            builder.Ignore(x => x.RequireRequestObject);
            builder.Ignore(x => x.UserCodeType);
            builder.Ignore(x => x.UserSsoLifetime);
            builder.Ignore(x => x.Description);
            builder.ToTable("Client").HasKey(x => x.ClientId);
            builder.Property(x => x.ClientId).HasMaxLength(100).IsRequired();
            builder.Property(x => x.ClientName).HasMaxLength(450).IsRequired();
            builder.Property(x => x.UnsignName).HasMaxLength(450).IsRequired(false).IsUnicode(false);

        }
    }
}
