using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Configurations
{
    public class NewsConfig : IEntityTypeConfiguration<News>
    {
        public void Configure(EntityTypeBuilder<News> builder)
        {
            builder.Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Property(x => x.Title).IsRequired().HasMaxLength(256);
            builder.Property(x => x.Description).IsRequired().HasMaxLength(500);
            builder.Property(x => x.UnsignName).IsRequired().HasMaxLength(256);
            builder.Property(x => x.Content).IsRequired();
            builder.Property(x => x.CreateTime).ValueGeneratedOnAdd();
            builder.Property(x => x.CreatorId).IsRequired();
            builder.Property(x => x.CreatorFullName).IsRequired().HasMaxLength(50);
            builder.Property(x => x.CreatorImage).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.Source).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.Attachments).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.Image).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.Priority).IsRequired(false);
            builder.ToTable("News").HasKey(x => x.Id);
        }
    }
}
