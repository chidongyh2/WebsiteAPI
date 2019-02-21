using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Configurations
{
    public class NguoiThamGiaCungConfig : IEntityTypeConfiguration<NguoiThamGiaCung>
    {
        public void Configure(EntityTypeBuilder<NguoiThamGiaCung> builder)
        {

            builder.Property(x => x.ID).HasColumnName("ID").IsRequired().ValueGeneratedOnAdd();
            builder.Property(x => x.IDQuaTang).IsRequired(false);
            builder.Property(x => x.TenNguoiThamGiaCung).IsRequired(false).HasMaxLength(50);
            builder.ToTable("NguoiThamGiaCung").HasKey(x => x.ID);
        }
    }
}
