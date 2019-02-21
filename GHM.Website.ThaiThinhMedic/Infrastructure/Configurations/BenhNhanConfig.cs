using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Configurations
{
    public class BenhNhanConfig : IEntityTypeConfiguration<BenhNhan>
    {
        public void Configure(EntityTypeBuilder<BenhNhan> builder)
        {

            builder.Property(x => x.MaBenhNhan).IsRequired().IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.HoTenBenhNhan).IsRequired(false).HasMaxLength(100);
            builder.Property(x => x.NgayThang).IsRequired(false);
            builder.Property(x => x.NgaySinh).IsRequired(false).IsUnicode(false).HasMaxLength(5);
            builder.Property(x => x.ThangSinh).IsRequired(false).IsUnicode(false).HasMaxLength(5);
            builder.Property(x => x.NamSinh).IsRequired(false).IsUnicode(false).HasMaxLength(5);
            builder.Property(x => x.NgayThangNamSinh).IsRequired(false);
            builder.Property(x => x.Tuoi).IsRequired(false).IsUnicode(false).HasMaxLength(5);
            builder.Property(x => x.MaGioiTinh).IsRequired(false);
            builder.Property(x => x.MaDanToc).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.ThonPhoXaPhuong).IsRequired(false).HasMaxLength(200);
            builder.Property(x => x.MaTinhThanh).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.MaQuanHuyen).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.DiaChi).IsRequired(false).HasMaxLength(200);
            builder.Property(x => x.NoiCongTac).IsRequired(false).HasMaxLength(200);
            builder.Property(x => x.SoCmnd).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.MaNgheNghiep).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.MaDoiTuong).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.MaNguonKhach).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.SoDienThoai).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.Email).IsRequired(false).HasMaxLength(50);
            builder.Property(x => x.NgayVaoKham).IsRequired(false);
            builder.Property(x => x.NgayKhamCuoi).IsRequired(false);
            builder.Property(x => x.MaDoanKham).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.NguoiLienHe).IsRequired(false).HasMaxLength(50);
            builder.Property(x => x.DienThoaiNguoiLienHe).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.MaQuanHe).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.GhiChu).IsRequired(false).HasMaxLength(250);
            builder.Property(x => x.Col1).IsRequired(false).HasMaxLength(50);
            builder.Property(x => x.Col2).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.Col3).IsRequired(false).HasMaxLength(50);
            builder.Property(x => x.Col4).IsRequired(false).HasMaxLength(50);
            builder.Property(x => x.Col5).IsRequired(false).HasMaxLength(50);
            builder.Property(x => x.Col6).IsRequired(false);
            builder.Property(x => x.Col7).IsRequired(false);
            builder.Property(x => x.Col8).IsRequired(false);
            builder.Property(x => x.Col9).IsRequired(false);
            builder.Property(x => x.Col10).IsRequired(false);
            builder.Property(x => x.NgayTuoi).IsRequired(false);
            builder.Property(x => x.ThangTuoi).IsRequired(false);
            builder.Property(x => x.MatKhau).IsRequired(false);
            builder.Property(x => x.UserName).IsRequired(false);
            builder.Property(x => x.PasswordSalt).IsRequired(false).HasMaxLength(16);
            builder.Property(x => x.PasswordHash).IsRequired(false).HasMaxLength(64);

            builder.ToTable("BenhNhan").HasKey(x => x.MaBenhNhan);
        }
    }

}
