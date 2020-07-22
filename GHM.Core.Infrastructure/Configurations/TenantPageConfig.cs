using GHM.Core.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Core.Infrastructure.Configurations
{
    public class TenantPageConfig : IEntityTypeConfiguration<TenantPage>
    {
        public void Configure(EntityTypeBuilder<TenantPage> builder)
        {
            builder.Property(x => x.TenantId).IsRequired().HasMaxLength(50).IsUnicode(false);
            builder.Property(x => x.PageId).IsRequired();
            builder.Property(x => x.IsDelete).IsRequired();
            builder.ToTable("tenantspages").HasKey(x => new { x.TenantId, x.PageId });
        }
    }
}
