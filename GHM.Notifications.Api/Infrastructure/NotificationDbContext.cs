using GHM.Infrastructure.SqlServer;
using GHM.Notifications.Api.Infrastructure.Configurations;
using GHM.Notifications.Api.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;

namespace GHM.Notifications.Api.Infrastructure
{
    public class NotificationDbContext : DbContextBase
    {
        public NotificationDbContext(DbContextOptions<NotificationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ApplyConfiguration(new NotificationConfig());
            builder.Entity<UserConnection>().ToTable("UserConnections").HasKey(x => new { x.UserId, x.ConnectionId });
        }
    }
}
