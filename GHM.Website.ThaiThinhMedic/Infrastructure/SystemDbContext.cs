using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Infrastructure.Configurations;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;

namespace GHM.Website.ThaiThinhMedic.Infrastructure
{
    public class SystemDbContext : DbContextBase
    {
        //private readonly Lazy<EntityQueryFilterProvider> _filterProviderInitializer = new Lazy<EntityQueryFilterProvider>();

        public SystemDbContext(DbContextOptions<SystemDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Configurations:
            builder.ApplyConfiguration(new UserConnectionConfig());
            builder.ApplyConfiguration(new UserSessionLoginConfig());

            // Entities Register:
            builder.Entity<UserSessionLogin>(x => x.ToTable("UserSessionLogin"));
        }

        //public Task<int> SaveChangesAsync()
        //{
        //    return SaveChangesAsync(new CancellationToken());
        //}

        //public IRepository<T> GetRepository<T>() where T : class
        //{
        //    return new EfRepository<T>(this);
        //}

        //public QueryFilterProvider Filters => _filterProviderInitializer.Value;
    }
}
