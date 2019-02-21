using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Configurations
{
    public class CourseConfig : IEntityTypeConfiguration<Course>
    {
        public void Configure(EntityTypeBuilder<Course> builder)
        {
            builder.Property(x => x.Id).IsRequired().ValueGeneratedOnAdd();
            builder.Property(x => x.Name).IsRequired().HasMaxLength(256);
            builder.Property(x => x.UnsignName).IsRequired().HasMaxLength(256).IsUnicode(false);
            builder.Property(x => x.Description).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.Content).IsRequired();
            builder.Property(x => x.IsActive).IsRequired();
            builder.Property(x => x.SeoLink).IsRequired().HasMaxLength(256).IsUnicode(false);
            builder.ToTable("Course").HasKey(x => x.Id);
        }
    }
}
