using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Configurations
{
    public class MenuConfig : IEntityTypeConfiguration<Menu>
    {
        public void Configure(EntityTypeBuilder<Menu> builder)
        {
            builder.Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Property(x => x.Name).IsRequired().HasMaxLength(500);
            builder.Property(x => x.UnsignName).IsRequired().HasMaxLength(500);
            builder.Property(x => x.IdPath).IsRequired().HasMaxLength(500);
            builder.Property(x => x.Url).IsRequired().HasMaxLength(500);
            builder.Property(x => x.Icon).IsRequired(false).HasMaxLength(20);
            builder.Property(x => x.ChildCount).HasDefaultValue(0);            
            builder.Property(x => x.ReferenceId).IsRequired(false);
            builder.Property(x => x.ReferenceType).IsRequired();
            builder.ToTable("Menu").HasKey(x => x.Id);
        }
    }
}
