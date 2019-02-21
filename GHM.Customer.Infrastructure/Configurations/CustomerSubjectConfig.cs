using Microsoft.EntityFrameworkCore;
using GHM.Customer.Domain.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Customer.Infrastructure.Configurations
{
    public class CustomerSubjectConfig : IEntityTypeConfiguration<CustomerSubject>
    {
        public void Configure(EntityTypeBuilder<CustomerSubject> builder)
        {
            builder.Property(x => x.TenantId).IsRequired().HasMaxLength(50).IsUnicode(false);
            builder.Property(x => x.ConcurrencyStamp).IsRequired().HasMaxLength(50).IsUnicode(false);
            builder.Property(x => x.TotalReduction).IsRequired(false);
            builder.ToTable("CustomerSubjects").HasKey(x => x.Id);
        }
    }
}
