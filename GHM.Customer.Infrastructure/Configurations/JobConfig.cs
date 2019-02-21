using GHM.Customer.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace GHM.Customer.Infrastructure.Configurations
{
 public   class JobConfig : IEntityTypeConfiguration<Job>
    {
        public void Configure(EntityTypeBuilder<Job> builder)
        {
            builder.Property(x => x.TenantId).IsUnicode(false).IsRequired().HasMaxLength(50);
            builder.Property(x => x.OrderPath).IsUnicode(false).IsRequired().HasMaxLength(500);
            builder.Property(x => x.IdPath).IsUnicode(false).IsRequired().HasMaxLength(500);
            builder.ToTable("Jobs");
        }
    }
}
