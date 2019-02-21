using System;
using GHM.Core.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Core.Infrastructure.Configurations
{
    public class TenantConfig : IEntityTypeConfiguration<Tenant>
    {
        public void Configure(EntityTypeBuilder<Tenant> builder)
        {
            builder.Property(x => x.Id).IsRequired().HasMaxLength(50);
            builder.Property(x => x.Name).IsRequired().HasMaxLength(256);
            builder.Property(x => x.UnsignName).IsRequired().HasMaxLength(1000).IsUnicode(false);
            builder.Property(x => x.Address).IsRequired().HasMaxLength(500);
            builder.Property(x => x.PhoneNumber).IsRequired().HasMaxLength(50);
            builder.Property(x => x.Email).IsRequired().HasMaxLength(500);
            builder.Property(x => x.Note).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.Logo).IsRequired(false).HasMaxLength(500).IsUnicode(false);
            builder.Property(x => x.CreateTime).IsRequired().ValueGeneratedOnAdd();
            builder.ToTable("Tenant").HasKey(x => x.Id);
        }
    }
}
