using GHM.Notifications.Api.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Notifications.Api.Infrastructure.Configurations
{
    public class NotificationConfig : IEntityTypeConfiguration<Notification>
    {
        public void Configure(EntityTypeBuilder<Notification> builder)
        {
            builder.Property(x => x.Id).IsRequired().HasMaxLength(50).IsUnicode(false);
            builder.Property(x => x.TenantId).IsRequired().IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.Title).IsRequired().HasMaxLength(256);
            builder.Property(x => x.Content).IsRequired().HasMaxLength(4000);
            builder.Property(x => x.SenderId).IsRequired().IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.SenderFullName).IsRequired().HasMaxLength(50);
            builder.Property(x => x.SenderAvatar).IsRequired(false).IsUnicode(false).HasMaxLength(500);
            builder.Property(x => x.ReceiverId).IsRequired().IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.Url).IsRequired().IsUnicode(false).HasMaxLength(500);
            builder.Property(x => x.Image).IsRequired(false).IsUnicode(false).HasMaxLength(500);
            builder.ToTable("Notifications").HasKey(x => x.Id);
        }
    }
}
