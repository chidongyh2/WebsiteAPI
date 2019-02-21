using GHM.Website.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Website.Infrastructure.Configurations
{
    public class CategoryTranslationConfig : IEntityTypeConfiguration<CategoryTranslation>
    {
        public void Configure(EntityTypeBuilder<CategoryTranslation> builder)
        {
            builder.Property(x => x.CategoryId).IsRequired();
            builder.Property(x => x.TenantId).IsRequired().HasMaxLength(50).IsUnicode(false);
            builder.Property(x => x.Name).IsRequired().HasMaxLength(256);
            builder.Property(x => x.MetaTitle).IsRequired(false).HasMaxLength(256);
            builder.Property(x => x.Description).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.MetaDescription).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.UnsignName).IsRequired().HasMaxLength(256).IsUnicode(false);
            builder.ToTable("Categories");
        }
    }
}
