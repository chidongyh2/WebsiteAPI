using GHM.Core.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Core.Infrastructure.Configurations
{
    public class NationalConfig : IEntityTypeConfiguration<National>
    {
        public void Configure(EntityTypeBuilder<National> builder)
        {
            builder.Property(x => x.Id).IsRequired().UseSqlServerIdentityColumn();
            builder.Property(x => x.Name).IsRequired().HasMaxLength(256);
            builder.Property(x => x.LanguageId).IsRequired().HasMaxLength(50);
            builder.ToTable("nationals").HasKey(x => x.Id);
        }
    }
}
