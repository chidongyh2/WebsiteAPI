using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Configurations
{
    public class CourseRegisterConfig : IEntityTypeConfiguration<CourseRegister>
    {
        public void Configure(EntityTypeBuilder<CourseRegister> builder)
        {
            builder.Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Property(x => x.CourseId).IsRequired();
            builder.Property(x => x.ClassId).IsRequired();
            builder.Property(x => x.UserId).IsRequired(false);
            builder.Property(x => x.FullName).IsRequired().HasMaxLength(50);
            builder.Property(x => x.PhoneNumber).IsRequired().HasMaxLength(20);
            builder.Property(x => x.Email).IsRequired(false).HasMaxLength(500);
            builder.Property(x => x.Address).IsRequired().HasMaxLength(500);
            builder.Property(x => x.Note).IsRequired(false).HasMaxLength(4000);
            builder.Property(x => x.Status).IsRequired();
            builder.ToTable("CourseRegister").HasKey(x => x.Id);
        }
    }
}
