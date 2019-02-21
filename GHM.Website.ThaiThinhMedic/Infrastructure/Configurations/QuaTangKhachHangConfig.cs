using System.ComponentModel.DataAnnotations.Schema;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Configurations
{
    public class QuaTangKhachHangConfig : IEntityTypeConfiguration<QuaTangKhachHang>
    {
        public void Configure(EntityTypeBuilder<QuaTangKhachHang> builder)
        {
            builder.Property(x => x.IDQuaTang).IsRequired().ValueGeneratedOnAdd();
            builder.Property(x => x.Ngay).IsRequired(false);
            builder.Property(x => x.MaQuanTang).IsRequired(false).HasMaxLength(50);
            builder.Property(x => x.MaKhachHang).IsRequired().HasMaxLength(50);
            builder.Property(x => x.MaNguoiPhat).IsRequired(false).HasMaxLength(50);
            builder.Property(x => x.Dung).IsRequired(false);

            builder.ToTable("QuaTangKhachHang").HasKey(x => x.IDQuaTang);
        }
    }
}
