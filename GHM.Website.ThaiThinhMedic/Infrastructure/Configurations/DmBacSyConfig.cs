using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Configurations
{
    public class DmBacSyConfig : IEntityTypeConfiguration<DmBacSy>
    {
        public void Configure(EntityTypeBuilder<DmBacSy> builder)
        {

            builder.Property(x => x.MaBacSy).IsRequired().IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.HoTen).IsRequired(false).HasMaxLength(100);
            builder.Property(x => x.MaKhoa).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.NoiCongTac).IsRequired(false).HasMaxLength(200);
            builder.Property(x => x.DienThoai).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.DiaChi).IsRequired(false).HasMaxLength(200);
            builder.Property(x => x.ChuyenNganh).IsRequired(false).HasMaxLength(200);
            builder.Property(x => x.BangCapChuyenMon).IsRequired(false).HasMaxLength(250);
            builder.Property(x => x.QuaTrinhCongTac).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.KeDon).IsRequired(false);
            builder.Property(x => x.HienSoDienThoai).IsRequired(false);
            builder.Property(x => x.Dung).IsRequired(false);
            builder.Property(x => x.Col1).IsRequired(false).HasMaxLength(200);
            builder.Property(x => x.Col2).IsRequired(false).HasMaxLength(200);
            builder.Property(x => x.Col3).IsRequired(false).HasMaxLength(200);
            builder.Property(x => x.Col4).IsRequired(false).HasMaxLength(200);
            builder.Property(x => x.Col5).IsRequired(false).HasMaxLength(200);
            builder.Property(x => x.GhiChu).IsRequired(false).HasMaxLength(200);
            builder.Property(x => x.KhamDoan).IsRequired(false);
            builder.Property(x => x.QueQuan).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.NgayBatDauLamViec).IsRequired(false);
            builder.Property(x => x.ChuyenMonSau).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.DanhGiaCuaKhachHang).IsRequired(false);
            builder.Property(x => x.MaHocHam).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.MaHocVi).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.NgaySinh).IsRequired(false);
            builder.Property(x => x.MaChucDanh).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.MaChucVu).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.Anh).IsRequired(false).HasMaxLength(2147483647);
            builder.Property(x => x.ChiaSeThongTin).IsRequired(false).HasColumnType("bit");
            builder.Property(x => x.SoCaSangKm).IsRequired(false).HasColumnType("int");
            builder.Property(x => x.SoCaChieuKm).IsRequired(false);
            builder.Property(x => x.SoCaToiKm).IsRequired(false);

            builder.ToTable("DmBacSy").HasKey(x => x.MaBacSy);
        }
    }

}
