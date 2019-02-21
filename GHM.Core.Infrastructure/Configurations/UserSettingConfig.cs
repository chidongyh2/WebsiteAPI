using GHM.Core.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Core.Infrastructure.Configurations
{
    public class UserSettingConfig : IEntityTypeConfiguration<UserSetting>
    {
        public void Configure(EntityTypeBuilder<UserSetting> builder)
        {
            builder.Property(x => x.UserId).IsRequired().HasMaxLength(50).IsUnicode(false);
            builder.Property(x => x.Key).IsRequired().HasMaxLength(256).IsUnicode(false);
            builder.Property(x => x.Value).IsRequired().HasMaxLength(256);
            builder.Property(x => x.GroupKey).IsRequired().HasMaxLength(256);
            builder.ToTable("UserSettings").HasKey(x => new { x.UserId, x.Key });
        }
    }
}
