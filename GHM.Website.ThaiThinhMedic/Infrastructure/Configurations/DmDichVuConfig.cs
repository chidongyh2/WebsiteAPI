using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Configurations
{
    public class DmDichVuConfig : IEntityTypeConfiguration<DmDichVu>
    {
        public void Configure(EntityTypeBuilder<DmDichVu> builder)
        {

            builder.Property(x => x.MaDichVu).IsRequired().IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.TenDichVu).IsRequired(false).HasMaxLength(100);
            builder.Property(x => x.DonViTinh).IsRequired(false).HasMaxLength(50);
            builder.Property(x => x.DonGiaDichVu).IsRequired(false);
            builder.Property(x => x.DonGiaTinhLuong).IsRequired(false);
            builder.Property(x => x.DonGiaDemRaNgoaiLam).IsRequired(false);
            builder.Property(x => x.DonGiaBaoHiem).IsRequired(false);
            builder.Property(x => x.TienTruVtyt).IsRequired(false);
            builder.Property(x => x.CanCuTinhLuong).IsRequired(false);
            builder.Property(x => x.MaPhanLoaiDichVu).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.MaViTriCoThe).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.PhanTramChiDinh).IsRequired(false).HasColumnType("int");
            builder.Property(x => x.TienChiDinh).IsRequired(false).HasColumnType("float");
            builder.Property(x => x.KhamThuThuat).IsRequired(false).HasColumnType("bit");
            builder.Property(x => x.MaPhieuKhamMau).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.Dung).IsRequired(false).HasColumnType("bit");
            builder.Property(x => x.GhiChu).IsRequired(false).HasMaxLength(50);
            builder.Property(x => x.Stt).IsRequired(false);
            builder.Property(x => x.Ttin).IsRequired(false);
            builder.Property(x => x.Col1).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.Col2).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.Col3).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.Col4).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.Col5).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.Col6).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.Col7).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.Col8).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.Col9).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.Col10).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.Col11).IsRequired(false);
            builder.Property(x => x.Col12).IsRequired(false);
            builder.Property(x => x.Col13).IsRequired(false);
            builder.Property(x => x.Col14).IsRequired(false);
            builder.Property(x => x.Col15).IsRequired(false);
            builder.Property(x => x.PhanTramKm).IsRequired(false);
            builder.Property(x => x.DonGiaKm).IsRequired(false);

            builder.ToTable("DmDichVu").HasKey(x => x.MaDichVu);
        }
    }

}
