using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Configurations
{
    public class ClassesConfig : IEntityTypeConfiguration<Classes>
    {
        public void Configure(EntityTypeBuilder<Classes> builder)
        {
            builder.Property(x => x.Id).IsRequired().ValueGeneratedOnAdd();
            builder.Property(x => x.Name).IsRequired().HasMaxLength(256);
            builder.Property(x => x.UnsignName).IsRequired().HasMaxLength(256).IsUnicode(false);
            builder.Property(x => x.CourseId).IsRequired();
            builder.Property(x => x.Description).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.IsActive).IsRequired();
            builder.Property(x => x.StartDate).IsRequired(false);
            builder.Property(x => x.EndDate).IsRequired(false);
            builder.Property(x => x.Address).IsRequired().HasMaxLength(500);
            builder.ToTable("Classes").HasKey(x => x.Id);
        }
    }
}
