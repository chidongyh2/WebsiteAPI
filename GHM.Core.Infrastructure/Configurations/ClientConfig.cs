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
            builder.ToTable("Client").HasKey(x => x.ClientId);
            builder.Property(x => x.ClientId).HasMaxLength(100).IsRequired();
            builder.Property(x => x.ClientName).HasMaxLength(450).IsRequired();
            builder.Property(x => x.UnsignName).HasMaxLength(450).IsRequired(false).IsUnicode(false);

        }
    }
}
