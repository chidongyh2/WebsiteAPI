using GHM.Customer.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Customer.Infrastructure.Configurations
{
    public class CustomerRelativesContactConfig : IEntityTypeConfiguration<CustomerRelativesContact>
    {
        public void Configure(EntityTypeBuilder<CustomerRelativesContact> builder)
        {
            builder.Property(x => x.FullName).IsRequired().HasMaxLength(100).IsUnicode(true);
            builder.Property(x => x.PhoneNumber).IsRequired().HasMaxLength(50).IsUnicode();
            builder.ToTable("CustomerRelativesContacts");
        }
    }
}
