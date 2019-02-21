using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Configurations
{
    public class CategoryConfig : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> builder)
        {
            builder.Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Property(x => x.Name).IsRequired().HasMaxLength(250);
            builder.Property(x => x.UnsignName).IsRequired().HasMaxLength(250).IsUnicode(false);
            builder.Property(x => x.Description).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.ParentId).IsRequired(false);
            builder.Property(x => x.IdPath).IsRequired().HasMaxLength(4000);
            builder.Property(x => x.SeoLink).IsRequired().HasMaxLength(500);
            builder.Property(x => x.CreateTime).ValueGeneratedOnAdd();
            builder.ToTable("Category").HasKey(x => x.Id);
        }
    }
}
