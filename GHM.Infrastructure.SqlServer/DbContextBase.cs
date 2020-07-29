using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace GHM.Infrastructure.SqlServer
{
    public class DbContextBase : DbContext, IDbContext
    {
        private readonly Lazy<EntityQueryFilterProvider> _filterProviderInitializer = new Lazy<EntityQueryFilterProvider>();

        public DbContextBase(DbContextOptions options) : base(options)
        {
        }

        public Task<int> SaveChangesAsync()
        {
            return SaveChangesAsync(new CancellationToken());
        }

        public IRepository<T> GetRepository<T>() where T : class
        {
            return new EfRepository<T>(this);
        }

        public IQueryable<T> RawFromSql<T>(string queryText) where T : class
        {
            return Set<T>().FromSqlRaw(queryText);
        }

        public IQueryable<T> RawFromSql<T>(string queryText, params object[] parameters) where T : class
        {
            return Set<T>().FromSqlRaw(queryText, parameters);
        }

        public QueryFilterProvider Filters => _filterProviderInitializer.Value;
    }
}
