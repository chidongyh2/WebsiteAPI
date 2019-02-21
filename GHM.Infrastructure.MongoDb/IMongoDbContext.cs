using System;
using System.Collections.Generic;
using System.Text;
using MongoDB.Driver;
using MongoDB.Driver.Linq;

namespace GHM.Infrastructure.MongoDb
{
    public interface IMongoDbContext
    {
        IMongoDatabase Database { get; }

        IMongoDbRepository<T, TKey> GetRepository<T, TKey>() where T : IEntity<TKey>;

        IMongoQueryable<T> Set<T>();

            /// <summary>
        /// Các bộ lọc cho từng nguồn dữ liệu
        /// </summary>
        /// <value>Các bộ lọc.</value>
        IQueryFilterProvider Filters { get; }
    }
}
