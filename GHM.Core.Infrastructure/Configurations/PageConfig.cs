﻿using GHM.Core.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Core.Infrastructure.Configurations
{
    public class PageConfig : IEntityTypeConfiguration<Page>
    {
        public void Configure(EntityTypeBuilder<Page> builder)
        {
            builder.Property(x => x.Id).IsRequired().ValueGeneratedNever();
            builder.Property(x => x.BgColor).HasMaxLength(10).IsRequired(false).IsUnicode(false);
            builder.Property(x => x.Icon).HasMaxLength(50).IsRequired(false).IsUnicode(false);
            builder.Property(x => x.ChildCount).IsRequired().HasDefaultValue(0);
            builder.Property(x => x.IdPath).IsRequired().IsUnicode(false);
            builder.Property(x => x.IsActive).IsRequired();
            builder.Property(x => x.IsDelete).IsRequired();
            builder.Property(x => x.OrderItem).IsRequired();
            builder.Property(x => x.ParentId).IsRequired(false);
            builder.Property(x => x.Url).IsRequired(false).IsUnicode(false).HasMaxLength(500);
            builder.ToTable("pages").HasKey(x => x.Id);
        }
    }
}
