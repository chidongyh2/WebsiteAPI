using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Configurations;
using Microsoft.EntityFrameworkCore;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure
{
    public class ThaiThinhMedicDbContext : DbContextBase
    {
        public ThaiThinhMedicDbContext(DbContextOptions options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
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
            builder.ApplyConfiguration(new VideoConfig());
        }
    }
}
