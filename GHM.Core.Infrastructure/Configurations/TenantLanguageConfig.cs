using GHM.Core.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Core.Infrastructure.Configurations
{
    public class TenantLanguageConfig : IEntityTypeConfiguration<TenantLanguage>
    {
        public void Configure(EntityTypeBuilder<TenantLanguage> builder)
        {
            builder.Property(x => x.TenantId).IsRequired().HasMaxLength(50);
            builder.Property(x => x.LanguageId).IsRequired().HasMaxLength(10);
            builder.Property(x => x.IsActive).IsRequired();
            builder.Property(x => x.IsDefault).IsRequired().HasDefaultValue(false);
            builder.Property(x => x.Name).IsRequired().HasMaxLength(256);
            builder.ToTable("TenantLanguages").HasKey(x => new { x.TenantId, x.LanguageId });
        }
    }
}
