using System.Data.Entity.ModelConfiguration;
using DatabaseGeneratedOption = System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption;

namespace Clinic.DataAccess
{
    public class SoCaLamViecConfig : EntityTypeConfiguration<SoCaLamViec>
    {
        public SoCaLamViecConfig()
            : this("dbo")
        {
        }

        public SoCaLamViecConfig(string schema)
        {
            ToTable(schema + ".SoCaLamViec");
            HasKey(x => x.Id);

            Property(x => x.Id).HasColumnName("ID").IsRequired().HasColumnType("bigint").HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            Property(x => x.Ngay).HasColumnName("Ngay").IsOptional().HasColumnType("datetime");
            Property(x => x.CaLamViec).HasColumnName("CaLamViec").IsOptional().IsUnicode(false).HasColumnType("varchar").HasMaxLength(50);
            Property(x => x.MaBacSy).HasColumnName("MaBacSy").IsOptional().IsUnicode(false).HasColumnType("varchar").HasMaxLength(50);
            Property(x => x.MaPhongKham).HasColumnName("MaPhongKham").IsOptional().IsUnicode(false).HasColumnType("varchar").HasMaxLength(50);
            Property(x => x.MaDichVu).HasColumnName("MaDichVu").IsOptional().IsUnicode(false).HasColumnType("varchar").HasMaxLength(50);
            Property(x => x.SoCa).HasColumnName("SoCa").IsOptional().HasColumnType("int");
            Property(x => x.ThoiGianMotCa).HasColumnName("ThoiGianMotCa").IsOptional().HasColumnType("int");
            Property(x => x.DonGiaDichVu).HasColumnName("DonGiaDichVu").IsOptional().HasColumnType("float");
            Property(x => x.PhanTramKm).HasColumnName("PhanTramKM").IsOptional().HasColumnType("int");
            Property(x => x.DonGiaKm).HasColumnName("DonGiaKM").IsOptional().HasColumnType("float");
        }
    }

}
