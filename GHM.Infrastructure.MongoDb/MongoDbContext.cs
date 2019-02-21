using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson.Serialization.Conventions;
using MongoDB.Driver;
using MongoDB.Driver.Linq;

namespace GHM.Infrastructure.MongoDb
{
    public class MongoDbContext : IMongoDbContext, IDisposable
    {
        private readonly Lazy<QueryFilterProvider> _filterProviderInitializer = new Lazy<QueryFilterProvider>();
        private IMongoClient _client;
        private IMongoDatabase _database;
        public IMongoDatabase Database => _database;

        public MongoDbContext()
        {
        }

        public MongoDbContext(string connectionString)
        {
            // Đăng ký conventionPack
            RegisterConventionPack();
            var mongoUrl = new MongoUrl(connectionString);
            _client = new MongoClient(mongoUrl);
            _database = _client.GetDatabase(mongoUrl.DatabaseName);
        }

        private void RegisterConventionPack()
        {
            var conventionPack = new ConventionPack { new CamelCaseElementNameConvention() };
            ConventionRegistry.Register("camelCase", conventionPack, t => true);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                _client = null;
                _database = null;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public IMongoDbRepository<T, TKey> GetRepository<T, TKey>() where T : IEntity<TKey>
        {
            return new MongoDbRepository<T, TKey>(this);
        }

        public IMongoQueryable<T> Set<T>() => _database.GetCollection<T>(nameof(T)) as IMongoQueryable<T>;

        public IQueryFilterProvider Filters => _filterProviderInitializer.Value;
    }
}
