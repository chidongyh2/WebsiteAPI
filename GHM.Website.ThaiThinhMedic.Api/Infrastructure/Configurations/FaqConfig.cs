using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Configurations
{
    public class FaqConfig : IEntityTypeConfiguration<Faq>
    {
        public void Configure(EntityTypeBuilder<Faq> builder)
        {
            builder.Property(x => x.Id).ValueGeneratedOnAdd();            
            builder.Property(x => x.Question).IsRequired().HasMaxLength(500);
            builder.Property(x => x.Answer).IsRequired().HasMaxLength(4000);
            builder.Property(x => x.CreatorId).IsRequired();
            builder.Property(x => x.CreatorName).IsRequired().HasMaxLength(50);
            builder.ToTable("Faq").HasKey(x => x.Id);
        }
    }
}
