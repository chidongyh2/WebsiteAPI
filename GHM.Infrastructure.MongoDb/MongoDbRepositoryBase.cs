using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Infrastructure.MongoDb
{
    public class MongoDbRepositoryBase : IDisposable
    {
        protected IMongoDbContext Context;

        /// <summary>
        /// Khởi tạo class<see cref="MongoDbRepositoryBase"/>
        /// </summary>
        /// <param name="context">Mongodb context</param>
        protected MongoDbRepositoryBase(IMongoDbContext context)
        {
            Context = context;
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                Context = null;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
