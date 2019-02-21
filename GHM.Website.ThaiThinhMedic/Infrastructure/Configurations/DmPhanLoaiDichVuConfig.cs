
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using DatabaseGeneratedOption = System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Configurations
{
    public class DmPhanLoaiDichVuConfig : IEntityTypeConfiguration<DmPhanLoaiDichVu>
    {
        public void Configure(EntityTypeBuilder<DmPhanLoaiDichVu> builder)
        {
            builder.Property(x => x.MaPhanLoaiDichVu).IsRequired().IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.TenPhanLoaiDichVu).IsRequired(false).HasMaxLength(250);
            builder.Property(x => x.MaLoaiDichVu).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.GhiChu).IsRequired(false).HasMaxLength(250);
            builder.Property(x => x.Stt).IsRequired(false);

            builder.ToTable("DmPhanLoaiDichVu").HasKey(x => x.MaPhanLoaiDichVu);
        }
    }
}
