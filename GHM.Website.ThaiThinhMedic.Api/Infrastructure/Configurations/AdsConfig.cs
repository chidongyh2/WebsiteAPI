using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Configurations
{
    public class AdsConfig : IEntityTypeConfiguration<Ads>
    {
        public void Configure(EntityTypeBuilder<Ads> builder)
        {
            builder.Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Property(x => x.Name).IsRequired().HasMaxLength(250);
            builder.Property(x => x.Description).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.Image).IsRequired().HasMaxLength(500);
            builder.Property(x => x.Url).IsRequired().HasMaxLength(500);
            builder.ToTable("Ads").HasKey(x => x.Id);
        }
    }
}
