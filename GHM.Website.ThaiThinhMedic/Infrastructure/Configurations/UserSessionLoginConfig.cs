using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Configurations
{
    public class UserSessionLoginConfig : IEntityTypeConfiguration<UserSessionLogin>
    {
        public void Configure(EntityTypeBuilder<UserSessionLogin> builder)
        {
            builder.HasKey(x => new { x.UserId, x.SessionId });

            builder.Property(x => x.UserId).HasColumnName("UserId").IsRequired().IsUnicode(false).HasColumnType("varchar").HasMaxLength(50);
            builder.Property(x => x.SessionId).HasColumnName("SessionId").IsRequired().IsUnicode(false).HasColumnType("varchar").HasMaxLength(50);
            builder.Property(x => x.Type).HasColumnName("Type").IsRequired().HasColumnType("tinyint");

            builder.ToTable("UserSessionLogin");
        }
    }
}
