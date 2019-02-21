using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Configurations
{
    public class NewsCategoryConfig : IEntityTypeConfiguration<NewsCategory>
    {
        public void Configure(EntityTypeBuilder<NewsCategory> builder)
        {
            builder.Property(x => x.NewsId).IsRequired();
            builder.Property(x => x.CategoryId).IsRequired();
            builder.Property(x => x.NewsSeoLink).IsRequired().HasMaxLength(1000);
            builder.Property(x => x.CategoryName).IsRequired().HasMaxLength(250);
            builder.Property(x => x.CategorySeoLink).IsRequired().HasMaxLength(500);
            builder.ToTable("NewsCategory").HasKey(x => new { x.NewsId, x.CategoryId });
        }
    }
}
