using GHM.Customer.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Customer.Infrastructure.Configurations
{
    public class CustomerContactConfig : IEntityTypeConfiguration<Domain.Models.CustomerContact>
    {
        public void Configure(EntityTypeBuilder<CustomerContact> builder)
        {
            builder.Property(x => x.ContactValue).IsRequired().HasMaxLength(100).IsUnicode();
            builder.ToTable("CustomerContacts");
        }
    }
}
