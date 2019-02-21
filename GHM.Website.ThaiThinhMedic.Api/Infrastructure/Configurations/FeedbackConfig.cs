using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Configurations
{
    public class FeedbackConfig : IEntityTypeConfiguration<Feedback>
    {
        public void Configure(EntityTypeBuilder<Feedback> builder)
        {
            builder.Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Property(x => x.CustomerId).IsRequired().HasMaxLength(50);
            builder.Property(x => x.FullName).IsRequired().HasMaxLength(50);
            builder.Property(x => x.PhoneNumber).IsRequired().HasMaxLength(20);
            builder.Property(x => x.Email).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.UnsignName).IsRequired().HasMaxLength(100);
            builder.Property(x => x.Content).IsRequired().HasMaxLength(2000);
            builder.Property(x => x.CreateTime).ValueGeneratedOnAdd();
            builder.ToTable("Feedback").HasKey(x => x.Id);
        }
    }
}
