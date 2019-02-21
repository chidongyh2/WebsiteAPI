using GHM.Customer.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace GHM.Customer.Infrastructure.Configurations
{
 public   class CustomerResourceConfig : IEntityTypeConfiguration<CustomerResource>
    {
        public void Configure(EntityTypeBuilder<CustomerResource> builder)
        {
            builder.Property(x => x.Id).IsRequired().HasMaxLength(50).IsUnicode(false);
            builder.Property(x => x.TenantId).IsRequired().HasMaxLength(50).IsUnicode(false);
            builder.Property(x => x.ConcurrencyStamp).IsRequired().HasMaxLength(50).IsUnicode(false);
            builder.ToTable("CustomerResources").HasKey(x => x.Id);
        }
    }
}
