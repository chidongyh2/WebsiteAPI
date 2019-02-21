using Microsoft.EntityFrameworkCore;
using GHM.Customer.Domain.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Customer.Infrastructure.Configurations
{
    public class CustomerSubjectTranslationConfig : IEntityTypeConfiguration<CustomerSubjectTranslation>
    {
        public void Configure(EntityTypeBuilder<CustomerSubjectTranslation> builder)
        {
            builder.Property(x => x.CustomerSubjectId).IsRequired();
            builder.Property(x => x.LanguageId).IsRequired().HasMaxLength(30).IsUnicode(false);
            builder.Property(x => x.Name).IsRequired().HasMaxLength(250).IsUnicode();
            builder.Property(x => x.UnsignName).IsRequired().HasMaxLength(250).IsUnicode(false);
            builder.Property(x => x.Description).IsRequired(false).HasMaxLength(4000).IsUnicode();
            builder.ToTable("CustomerSubjectTranslations").HasKey(x => new {x.CustomerSubjectId, x.LanguageId });
        }
    }
}
