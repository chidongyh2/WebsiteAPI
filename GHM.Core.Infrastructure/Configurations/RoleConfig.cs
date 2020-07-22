using System;
using GHM.Core.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Core.Infrastructure.Configurations
{
    public class RoleConfig : IEntityTypeConfiguration<Role>
    {
        public void Configure(EntityTypeBuilder<Role> builder)
        {
            builder.Property(x => x.Id).IsRequired().HasMaxLength(50);
            builder.Property(x => x.ConcurrencyStamp).IsRequired().HasMaxLength(50);
            builder.Property(x => x.Name).IsRequired().HasMaxLength(256);
            builder.Property(x => x.NormalizedName).IsRequired().HasMaxLength(256).IsUnicode(false);
            builder.Property(x => x.TenantId).IsRequired().HasMaxLength(50);
            builder.Property(x => x.Type).IsRequired();
            builder.ToTable("roles").HasKey(x => x.Id);
        }
    }
}
