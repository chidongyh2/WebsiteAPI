using GHM.Customer.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Customer.Infrastructure.Configurations
{
    public class CustomerConfig : IEntityTypeConfiguration<Domain.Models.Customer>
    {
        public void Configure(EntityTypeBuilder<Domain.Models.Customer> builder)
        {
            builder.Property(x => x.TenantId).IsRequired().HasMaxLength(50).IsUnicode(false);
            builder.Property(x => x.ConcurrencyStamp).IsRequired().HasMaxLength(100).IsUnicode();
            builder.Property(x => x.LastUpdate).IsRequired(false);
            builder.Property(x => x.CustomerCode).HasMaxLength(50).IsUnicode();
            builder.Property(x => x.FullName).IsRequired().HasMaxLength(100).IsUnicode();
            builder.Property(x => x.UnsignName).IsRequired().HasMaxLength(100).IsUnicode(false);
            builder.Property(x => x.Birthday).IsRequired().HasMaxLength(100).IsUnicode();
            builder.Property(x => x.Gender).IsRequired(false);
            builder.Property(x => x.CustomerResourceId).HasMaxLength(50).IsRequired(false);
            builder.Property(x => x.IdCardNumber).HasMaxLength(30).IsUnicode();
            builder.Property(x => x.JobId).IsRequired(false);
            builder.Property(x => x.NationalId).IsRequired(false);
            builder.Property(x => x.NationalName).IsRequired(false).HasMaxLength(150).IsUnicode();
            builder.Property(x => x.EthnicId).IsRequired(false);
            builder.Property(x => x.EthnicName).IsRequired(false).HasMaxLength(150).IsUnicode();
            builder.Property(x => x.ReligionId).IsRequired(false);
            builder.Property(x => x.ReligionName).IsRequired(false).HasMaxLength(150).IsUnicode();
            builder.Property(x => x.ProvinceId).IsRequired(false);
            builder.Property(x => x.ProvinceName).IsRequired(false).HasMaxLength(150).IsUnicode();
            builder.Property(x => x.DistrictId).IsRequired(false);
            builder.Property(x => x.DistrictName).IsRequired(false).HasMaxLength(150).IsUnicode();
            builder.Property(x => x.Address).IsRequired(false).HasMaxLength(500).IsUnicode();
            builder.ToTable("Customers");
        }
    }        
}
