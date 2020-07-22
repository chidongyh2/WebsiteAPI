using GHM.Core.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Core.Infrastructure.Configurations
{
    public class PageTranslationConfig : IEntityTypeConfiguration<PageTranslation>
    {
        public void Configure(EntityTypeBuilder<PageTranslation> builder)
        {
            builder.Property(x => x.PageId).IsRequired();
            builder.Property(x => x.Name).HasMaxLength(250).IsRequired().IsUnicode();
            builder.Property(x => x.UnsignName).HasMaxLength(250).IsRequired().IsUnicode(false);
            builder.Property(x => x.Description).IsRequired(false).IsUnicode();
            builder.Property(x => x.LanguageId).IsRequired().IsUnicode(false).HasMaxLength(10);
            builder.Property(x => x.IsDelete).IsRequired().HasDefaultValue(false);
            builder.ToTable("pagetranslations").HasKey(x => new { x.PageId, x.LanguageId });
        }
    }
}
