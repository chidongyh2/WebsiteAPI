using GHM.Website.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Website.Infrastructure.Configurations
{
    public class CategoryConfig : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> builder)
        {
            builder.Property(x => x.Id).ValueGeneratedOnAdd();            
            builder.Property(x => x.TenantId).IsRequired().HasMaxLength(50).IsUnicode(false);            
            builder.Property(x => x.CreatorId).IsRequired().HasMaxLength(50).IsUnicode(false);            
            builder.Property(x => x.CreatorFullName).IsRequired().HasMaxLength(50);            
            builder.Property(x => x.ParentId).IsRequired(false);
            builder.Property(x => x.IdPath).IsRequired().HasMaxLength(4000);            
            builder.Property(x => x.CreateTime).ValueGeneratedOnAdd();
            builder.ToTable("Categories").HasKey(x => x.Id);
        }
    }
}
