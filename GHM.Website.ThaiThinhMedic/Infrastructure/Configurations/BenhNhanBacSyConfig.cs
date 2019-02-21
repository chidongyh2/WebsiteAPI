using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Clinic.DataAccess
{
    public class BenhNhanBacSyConfig : IEntityTypeConfiguration<BenhNhanBacSy>
    {
        public void Configure(EntityTypeBuilder<BenhNhanBacSy> builder)
        {
            builder.Property(x => x.Id).IsRequired().ValueGeneratedOnUpdate();
            builder.Property(x => x.NgayDenKham).IsRequired(false);
            builder.Property(x => x.IdPhieuKham).IsRequired(false);
            builder.Property(x => x.SoPhieuKham).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.MaBacSy).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.MaBenhNhan).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.DichVuLam).IsRequired(false);
            builder.Property(x => x.CaLamViec).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.TrangThai).IsRequired(false);
            builder.Property(x => x.Stt).IsRequired(false);
            builder.Property(x => x.MaPhongKham).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.LyDoKham).IsRequired(false);
            builder.Property(x => x.TrieuChung).IsRequired(false);
            builder.Property(x => x.ChanDoan).IsRequired(false);
            builder.Property(x => x.ChiDinhDieuTri).IsRequired(false);
            builder.Property(x => x.LoiDan).IsRequired(false);
            builder.Property(x => x.NoiDungTaiKham).IsRequired(false);
            builder.Property(x => x.MaYTaHoTro).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.UuTien).IsRequired(false);
            builder.Property(x => x.GioDatHen).IsRequired(false).IsUnicode(false).HasMaxLength(10);
            builder.Property(x => x.BatThuong).IsRequired(false);
            builder.Property(x => x.GhiChu).IsRequired(false);
            builder.Property(x => x.KiemTra).IsRequired(false);
            builder.Property(x => x.CachThuc).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.TrinhBay).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.SoChiTiet).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.Do).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.NhanDinh).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.NhanXet).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.NoiDungChuyenMon).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.Col1).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.Col2).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.Col3).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.TenBacSy).IsRequired(false).HasMaxLength(50);
            builder.Property(x => x.MaDoiTuong).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.MaNhanVien).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.NgayHenKham).IsRequired(false);

            builder.ToTable("BenhNhanBacSy").HasKey(x => x.Id);
        }
    }

}
