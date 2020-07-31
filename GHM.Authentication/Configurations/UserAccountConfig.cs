using System;
using GHM.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Authentication.Configurations
{
    public class UserAccountConfig : IEntityTypeConfiguration<UserAccount>
    {
        public void Configure(EntityTypeBuilder<UserAccount> builder)
        {
            builder.Property(x => x.Id).IsRequired().HasMaxLength(50).IsUnicode(false);
            builder.Property(x => x.Avatar).IsRequired(false).HasMaxLength(500).IsUnicode(false);
            builder.Property(x => x.ConcurrencyStamp).IsRequired().HasMaxLength(50).IsUnicode(false);
            builder.Property(x => x.Email).IsRequired(false).HasMaxLength(256).IsUnicode(false);
            builder.Property(x => x.NormalizedEmail).IsRequired(false).HasMaxLength(256).IsUnicode(false);
            builder.Property(x => x.UserName).IsRequired().HasMaxLength(256).IsUnicode(false);
            builder.Property(x => x.NormalizedUserName).IsRequired().HasMaxLength(256).IsUnicode(false);
            builder.Property(x => x.PhoneNumber).IsRequired().HasMaxLength(20).IsUnicode(false);
            builder.Property(x => x.SecurityStamp).IsRequired(false).HasMaxLength(500).IsUnicode(false);
            builder.Property(x => x.FullName).IsRequired().HasMaxLength(50);
            builder.Property(x => x.TenantId).IsRequired().HasMaxLength(50).IsUnicode(false);
            builder.ToTable("UserAccounts").HasKey(x => x.Id);
        }
    }
}
