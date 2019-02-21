using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Configurations
{
    public class MenuItemConfig : IEntityTypeConfiguration<MenuItem>
    {
        public void Configure(EntityTypeBuilder<MenuItem> builder)
        {
            builder.Property(x => x.Id).IsRequired().ValueGeneratedOnAdd();
            builder.Property(x => x.Name).IsRequired().IsUnicode(true).HasColumnType("nvarchar").HasMaxLength(500);
            builder.Property(x => x.UnsignName).IsRequired().IsUnicode(false).HasColumnType("varchar").HasMaxLength(500);
            builder.Property(x => x.MenuId).IsRequired().HasColumnType("int");
            builder.Property(x => x.ObjectId).IsRequired(false).HasColumnType("bigint");
            builder.Property(x => x.ObjectType).IsRequired().HasColumnType("tinyint");
            builder.Property(x => x.Url).IsRequired(false).IsUnicode(false).HasColumnType("varchar").HasMaxLength(500);
            builder.Property(x => x.IsActive).IsRequired().HasColumnType("bit");
            builder.Property(x => x.ParentId).IsRequired(false).HasColumnType("int");
            builder.Property(x => x.IdPath).IsRequired().IsUnicode(false).HasColumnType("varchar").HasMaxLength(500);
            builder.Property(x => x.NamePath).IsRequired().IsUnicode(false).HasColumnType("varchar").HasMaxLength(2000);
            builder.Property(x => x.CreateTime).IsRequired().HasColumnType("datetime");
            builder.Property(x => x.CreatorId).IsRequired().IsUnicode(false).HasColumnType("varchar").HasMaxLength(50);
            builder.Property(x => x.CreatorFullName).IsRequired().IsUnicode(true).HasColumnType("nvarchar").HasMaxLength(50);
            builder.Property(x => x.Order).HasColumnName("Order").IsRequired().HasColumnType("tinyint");
            builder.ToTable("MenuItem").HasKey(x => x.Id);
        }
    }
}
