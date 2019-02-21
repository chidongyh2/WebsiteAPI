using GHM.Customer.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Customer.Infrastructure.Configurations
{
    public class JobTranslationConfig : IEntityTypeConfiguration<JobTranslation>
    {
        public void Configure(EntityTypeBuilder<JobTranslation> builder)
        {
            builder.Property(x => x.JobId).IsRequired();
            builder.Property(x => x.LanguageId).IsRequired().HasMaxLength(50).IsUnicode(false);
            builder.Property(x => x.Description).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.Name).IsRequired().HasMaxLength(256);
            builder.Property(x => x.ParentName).IsRequired(false).HasMaxLength(256);
            builder.Property(x => x.UnsignName).IsRequired().HasMaxLength(256);
            builder.ToTable("JobTranslations").HasKey(x => new { x.JobId, x.LanguageId });
        }
    }
}