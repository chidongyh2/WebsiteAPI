using GHM.Customer.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace GHM.Customer.Infrastructure.Configurations
{
  public  class CustomerResourceTranslationConfig : IEntityTypeConfiguration<CustomerResourceTranslation>
    {
        public void Configure(EntityTypeBuilder<CustomerResourceTranslation> builder)
        {
            builder.Property(x => x.CustomerResourceId).IsRequired().HasMaxLength(50);
            builder.Property(x => x.LanguageId).IsRequired().HasMaxLength(10).IsUnicode(false);
            builder.Property(x => x.Name).IsRequired().HasMaxLength(256);
            builder.Property(x => x.UnsignName).IsRequired().HasMaxLength(256).IsUnicode(false);
            builder.Property(x => x.Description).IsRequired(false).HasMaxLength(500);
            builder.ToTable("CustomerResourceTranslations").HasKey(x => new { x.CustomerResourceId, x.LanguageId });
        }
    }
}
