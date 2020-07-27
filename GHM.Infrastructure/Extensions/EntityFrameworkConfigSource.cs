using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace GHM.Infrastructure.Extensions
{
    public class EntityFrameworkConfigSource<T> : IConfigurationSource where T : DbContext
    {
        private readonly IDbConnection _connection;

        public EntityFrameworkConfigSource(IDbConnection connection)
        {
            _connection = connection;
        }


        public IConfigurationProvider Build(IConfigurationBuilder builder)
        {
            return new EntityFrameworkConfigProvider<T>(_connection);
        }
    }
}
