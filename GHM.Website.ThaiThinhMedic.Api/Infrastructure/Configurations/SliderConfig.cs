using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Configurations
{
    public class SliderConfig : IEntityTypeConfiguration<Slider>

    {
        public void Configure(EntityTypeBuilder<Slider> builder)
        {
            builder.Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Property(x => x.Name).IsRequired().HasMaxLength(250);
            builder.Property(x => x.UnsignName).IsRequired().HasMaxLength(250);
            builder.Property(x => x.Description).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.CreateTime).ValueGeneratedOnAdd();
            builder.Property(x => x.CreatorId).IsRequired();
            builder.Property(x => x.CreatorName).IsRequired().HasMaxLength(50);
            builder.Property(x => x.Type).IsRequired().HasMaxLength(50);
            builder.ToTable("Slider").HasKey(x => x.Id);
        }
    }
}
