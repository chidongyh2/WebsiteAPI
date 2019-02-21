using GHM.Infrastructure.SqlServer;
using GHM.Customer.Infrastructure.Configurations;
using Microsoft.EntityFrameworkCore;

namespace GHM.Customer.Infrastructure
{
    public class CustomerDbContext : DbContextBase
    {
        public CustomerDbContext(DbContextOptions<CustomerDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Configurations:
            builder.ApplyConfiguration(new JobConfig());
            builder.ApplyConfiguration(new JobTranslationConfig());
            builder.ApplyConfiguration(new CustomerResourceConfig());
            builder.ApplyConfiguration(new CustomerResourceTranslationConfig());
            builder.ApplyConfiguration(new CustomerConfig());
            builder.ApplyConfiguration(new CustomerSubjectConfig());
            builder.ApplyConfiguration(new CustomerSubjectTranslationConfig());
            builder.ApplyConfiguration(new CustomerContactConfig());
            builder.ApplyConfiguration(new CustomerRelativesContactConfig());
        }
    }
}
