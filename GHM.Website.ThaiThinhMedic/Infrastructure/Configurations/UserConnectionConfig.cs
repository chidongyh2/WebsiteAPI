using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Configurations
{
    public class UserConnectionConfig : IEntityTypeConfiguration<UserConnection>
    {
        public void Configure(EntityTypeBuilder<UserConnection> builder)
        {
            builder.HasKey(x => new { x.UserId, x.ConnectionId });

            builder.Property(x => x.UserId).HasColumnName("UserId").IsRequired().IsUnicode(false).HasColumnType("varchar").HasMaxLength(50);
            builder.Property(x => x.ConnectionId).HasColumnName("ConnectionId").IsRequired().IsUnicode(false).HasColumnType("varchar").HasMaxLength(50);
            builder.Property(x => x.UserType).HasColumnName("UserType").IsRequired().HasColumnType("tinyint");
            builder.ToTable("UserConnection");
        }
    }
}
