using GHM.Core.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Core.Infrastructure.Configurations
{
    public class RolesPagesConfig : IEntityTypeConfiguration<RolesPages>
    {
        public void Configure(EntityTypeBuilder<RolesPages> builder)
        {
            builder.Property(x => x.RoleId).IsRequired().HasMaxLength(50);
            builder.Property(x => x.PageId).IsRequired();
            builder.Property(x => x.Permissions).IsRequired();
            builder.ToTable("RolesPages").HasKey(x => new { x.RoleId, x.PageId });
        }
    }
}
