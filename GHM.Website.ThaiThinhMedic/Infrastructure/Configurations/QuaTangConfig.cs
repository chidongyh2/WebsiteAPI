using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Configurations
{
    public class QuaTangConfig : IEntityTypeConfiguration<QuaTang>
    {
        public void Configure(EntityTypeBuilder<QuaTang> builder)
        {

            builder.Property(x => x.MaQuaTang).IsRequired().HasMaxLength(50);
            builder.Property(x => x.Nhom).IsRequired(false).HasMaxLength(50);
            builder.Property(x => x.TenQuaTang).IsRequired(false).HasMaxLength(250);
            builder.Property(x => x.NgayApDung).IsRequired(false).HasColumnType("datetime");
            builder.Property(x => x.MucDich).IsRequired(false).HasMaxLength(250);
            builder.Property(x => x.GhiChu).IsRequired(false).HasMaxLength(250);
            builder.Property(x => x.Loai).IsRequired(false);
            builder.Property(x => x.Dung).IsRequired(false);

            builder.ToTable("QuaTang").HasKey(x => x.MaQuaTang);
        }
    }
}
