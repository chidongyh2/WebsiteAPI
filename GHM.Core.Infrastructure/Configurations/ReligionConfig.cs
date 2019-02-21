using GHM.Core.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Core.Infrastructure.Configurations
{
    public class ReligionConfig : IEntityTypeConfiguration<Religion>
    {
        public void Configure(EntityTypeBuilder<Religion> builder)
        {
            builder.Property(x => x.Id).IsRequired().UseSqlServerIdentityColumn();
            builder.Property(x => x.Name).IsRequired().HasMaxLength(256);
            builder.Property(x => x.LanguageId).IsRequired().HasMaxLength(50);
            builder.ToTable("Religions").HasKey(x => x.Id);
        }
    }
}
