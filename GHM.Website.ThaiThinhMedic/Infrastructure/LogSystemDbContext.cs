using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Infrastructure.Configurations;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace GHM.Website.ThaiThinhMedic.Infrastructure
{
    public class LogSystemDbContext : DbContextBase
    {
        private readonly Lazy<EntityQueryFilterProvider> _filterProviderInitializer = new Lazy<EntityQueryFilterProvider>();

        public LogSystemDbContext(DbContextOptions<LogSystemDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Configurations:
            builder.ApplyConfiguration(new LoginLogConfig());

            // Entities Register:
            builder.Entity<LoginLog>(x => x.ToTable("LoginLog"));
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
