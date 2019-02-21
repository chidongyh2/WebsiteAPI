using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Infrastructure.Configurations;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;

namespace GHM.Website.ThaiThinhMedic.Infrastructure
{
    public class ThaiThinhMedicDbContext : DbContextBase
    {
        public ThaiThinhMedicDbContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Configurations:
            builder.ApplyConfiguration(new CategoryConfig());
            builder.ApplyConfiguration(new NewsConfig());
            builder.ApplyConfiguration(new AdsConfig());
            builder.ApplyConfiguration(new MenuConfig());
            builder.ApplyConfiguration(new FaqConfig());
            builder.ApplyConfiguration(new FeedbackConfig());
            builder.ApplyConfiguration(new NewsCategoryConfig());
            builder.ApplyConfiguration(new CourseConfig());
            builder.ApplyConfiguration(new ClassesConfig());
            builder.ApplyConfiguration(new CourseRegisterConfig());

            // Entities Register:
            builder.Entity<Menu>(x => x.ToTable("Menu"));
            builder.Entity<MenuItem>(x => x.ToTable("MenuItem"));
        }
    }
}
