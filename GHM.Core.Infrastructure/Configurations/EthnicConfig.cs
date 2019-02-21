using GHM.Core.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Core.Infrastructure.Configurations
{
    public class EthnicConfig : IEntityTypeConfiguration<Ethnic>
    {
        public void Configure(EntityTypeBuilder<Ethnic> builder)
        {
            builder.Property(x => x.Id).IsRequired().UseSqlServerIdentityColumn();
            builder.Property(x => x.Name).IsRequired().HasMaxLength(256);
            builder.Property(x => x.UnsignName).IsRequired().HasMaxLength(256).IsUnicode(false);
            builder.Property(x => x.GroupId).IsRequired();
            builder.Property(x => x.GroupName).IsRequired().HasMaxLength(150);
            builder.Property(x => x.LanguageId).IsRequired().HasMaxLength(50);
            builder.ToTable("Ethnics").HasKey(x => x.Id);
        }
    }
}
