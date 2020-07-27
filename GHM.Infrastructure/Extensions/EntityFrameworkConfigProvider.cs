﻿using Dapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace GHM.Infrastructure.Extensions
{
    public class EntityFrameworkConfigProvider<T> : ConfigurationProvider where T : DbContext
    {
        private readonly IDbConnection _connection;

        public EntityFrameworkConfigProvider(IDbConnection connection)
        {
            _connection = connection;
        }

        public override void Load()
        {
            try
            {
                _connection.Open();
                var items = _connection.Query<dynamic>(@"select * from evp_configurations");
            }
            catch (MissingMethodException)
            {
                Console.WriteLine($"Type {typeof(T).Name} must has a constructor with only DbContextOptions parameter to use as config value store");
            }
            catch (InvalidOperationException)
            {
                Console.WriteLine($"Type {typeof(T).Name} must has a Configuration DbSet");
            }
            catch (Exception)
            {
                Console.WriteLine("[FATAL] Please run dotnet ef database update first");
            }
            finally
            {
                _connection?.Close();
            }
        }
    }
}
