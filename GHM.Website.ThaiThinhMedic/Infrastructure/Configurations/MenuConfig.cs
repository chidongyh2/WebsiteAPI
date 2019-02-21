using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Configurations
{
    public class MenuConfig : IEntityTypeConfiguration<Menu>
    {
        public void Configure(EntityTypeBuilder<Menu> builder)
        {
            builder.Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Property(x => x.Name).IsRequired().HasMaxLength(500);
            builder.Property(x => x.UnsignName).IsRequired().HasMaxLength(500);
            builder.Property(x=> x.CreateTime).IsRequired().HasColumnType("datetime");
            builder.Property(x => x.CreatorId).IsRequired().IsUnicode(false).HasColumnType("varchar").HasMaxLength(50);
            builder.Property(x => x.CreatorFullName).IsRequired().HasColumnType("nvarchar").HasMaxLength(50);
            builder.ToTable("Menu").HasKey(x => new { x.Id, x.Name, x.UnsignName, x.CreateTime, x.CreatorId, x.CreatorFullName });
        }
    }
}
