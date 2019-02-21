using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Configurations
{
    public class DatHenConfig :  IEntityTypeConfiguration<DatHen>
    {
        public void Configure(EntityTypeBuilder<DatHen> builder)
        {

            builder.Property(x => x.Id).HasColumnName("ID").IsRequired().ValueGeneratedOnAdd();
            builder.Property(x => x.ResourceId).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.Status).IsRequired(false);
            builder.Property(x => x.Subject).IsRequired(false).HasMaxLength(250);
            builder.Property(x => x.Description).IsRequired(false).IsUnicode(false).HasMaxLength(500);
            builder.Property(x => x.Label).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.StartTime).IsRequired(false);
            builder.Property(x => x.EndTime).IsRequired(false);
            builder.Property(x => x.Location).IsRequired(false).HasMaxLength(250);
            builder.Property(x => x.AllDay).IsRequired(false);
            builder.Property(x => x.EventType).IsRequired(false);
            builder.Property(x => x.RecurrenceInfo).IsRequired(false);
            builder.Property(x => x.ReminderInfo).IsRequired(false);
            builder.Property(x => x.MaBenhNhan).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.SoPhieuDatHen).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.CaHenKham).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.KichHoat).IsRequired(false);
            builder.Property(x => x.DaNhacHen).IsRequired(false);
            builder.Property(x => x.GioDatHen).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.MaDichVu).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.MaBacSy).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.TenBacSy).IsRequired(false).HasMaxLength(250);
            builder.Property(x => x.Email).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.DiaChi).IsRequired(false).HasMaxLength(1000);
            builder.Property(x => x.MaNguoiTao).IsRequired(false).HasMaxLength(50);
            builder.Property(x => x.Email).IsRequired(false).HasMaxLength(50);
            builder.Property(x => x.PromotionCode).IsRequired(false).IsUnicode(false).HasMaxLength(50);
            builder.Property(x => x.PromotionDiscountPrice).IsRequired();
            builder.Property(x => x.PromotionDiscountPercent).IsRequired();

            builder.ToTable("DatHen").HasKey(x => x.Id);
        }
    }
}
