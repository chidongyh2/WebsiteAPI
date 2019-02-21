
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Configurations
{
    public class DmPhongKhamConfig : IEntityTypeConfiguration<DmPhongKham>
    {
        public void Configure(EntityTypeBuilder<DmPhongKham> builder)
        {
            builder.Property(x => x.MaPhongKham).IsRequired().IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.TenPhongKham).IsRequired(false).HasMaxLength(50);
            builder.Property(x => x.DiaChi).IsRequired(false).HasMaxLength(200);
            builder.Property(x => x.DienThoai).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.MaKhoa).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.MaKham).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.GhiChu).IsRequired(false).HasMaxLength(250);
            builder.Property(x => x.KhamDoan).IsRequired(false).HasColumnType("bit");
            builder.Property(x => x.SoPhong).IsRequired(false).HasColumnType("nvarchar").HasMaxLength(50);

            builder.ToTable("DmPhongKham").HasKey(x => x.MaPhongKham);
        }
    }

}
