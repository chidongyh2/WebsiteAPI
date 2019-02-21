using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using DatabaseGeneratedOption = System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Configurations
{
    public class VideoChupThuThuatConfig : IEntityTypeConfiguration<VideoChupThuThuat>
    {
        public void Configure(EntityTypeBuilder<VideoChupThuThuat> builder)
        {

            builder.Property(x => x.IDs).IsRequired().ValueGeneratedOnAdd();
            builder.Property(x => x.IdPhieuKham).IsRequired(false);
            builder.Property(x => x.SoPhieuKham).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.MaBenhNhan).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.NgayDenKham).IsRequired(false);
            builder.Property(x => x.MaBacSy).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.MaYTa).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.DuongDanFileAnh).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.TenFileVideo).IsRequired(false).HasMaxLength(250);
            builder.Property(x => x.DuongDan).IsRequired(false);
            builder.Property(x => x.LinkWeb).IsRequired(false);
            builder.Property(x => x.LayDiaCd).IsRequired(false);
            builder.Property(x => x.DaGui).IsRequired(false);
            builder.Property(x => x.DaConvert).IsRequired(false);
            builder.Property(x => x.PublicVideo).IsRequired(false);
            builder.Property(x => x.ThoiLuongVideo).IsRequired(false);

            builder.ToTable("VideoChupThuThuat").HasKey(x => x.IDs);
        }
    }

}
