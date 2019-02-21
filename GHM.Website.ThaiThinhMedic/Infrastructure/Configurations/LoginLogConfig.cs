using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Configurations
{
    public class LoginLogConfig : IEntityTypeConfiguration<LoginLog>
    {
        public void Configure(EntityTypeBuilder<LoginLog> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Id).HasColumnName("Id").IsRequired().HasColumnType("int").UseSqlServerIdentityColumn();
            builder.Property(x => x.UserId).HasColumnName("UserId").IsRequired().IsUnicode(false).HasColumnType("varchar").HasMaxLength(50);
            builder.Property(x => x.FullName).HasColumnName("FullName").IsRequired().HasColumnType("nvarchar").HasMaxLength(50);
            builder.Property(x => x.UnsignName).HasColumnName("UnsignName").IsRequired().HasColumnType("nvarchar").HasMaxLength(250).IsUnicode(false);
            builder.Property(x => x.Time).HasColumnName("Time").IsRequired().HasColumnType("datetime");
            builder.Property(x => x.Ip).HasColumnName("Ip").IsRequired().IsUnicode(false).HasColumnType("varchar").HasMaxLength(150);
            builder.Property(x => x.Browser).HasColumnName("Browser").IsRequired().IsUnicode(false).HasColumnType("varchar").HasMaxLength(150);
            builder.Property(x => x.Os).HasColumnName("Os").IsRequired().IsUnicode(false).HasColumnType("varchar").HasMaxLength(150);
            builder.Property(x => x.Version).HasColumnName("Version").IsRequired().IsUnicode(false).HasColumnType("varchar").HasMaxLength(50);
            builder.Property(x => x.Type).HasColumnName("Type").IsRequired().HasColumnType("tinyint");
            builder.Property(x => x.IsSuccess).HasColumnName("IsSuccess").IsRequired().HasColumnType("bit");

            builder.ToTable("LoginLog");
        }
    }
}
