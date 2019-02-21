using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Configurations
{
    public class VideoConfig : IEntityTypeConfiguration<Video>
    {
        public void Configure(EntityTypeBuilder<Video> builder)
        {
            builder.Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Property(x => x.VideoId).IsRequired(false).IsUnicode(false).HasMaxLength(100);
            builder.Property(x => x.Url).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.Title).IsRequired().HasMaxLength(256);
            builder.Property(x => x.UnsignName).IsRequired().IsUnicode(false).HasMaxLength(256);
            builder.Property(x => x.Description).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.Thumbnail).IsRequired(false).HasMaxLength(500);            
            builder.ToTable("Video").HasKey(x => x.Id);
        }
    }
}
