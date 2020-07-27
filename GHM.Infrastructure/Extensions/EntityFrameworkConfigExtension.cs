using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace GHM.Infrastructure.Extensions
{
    public static class EntityFrameworkConfigExtension
    {
        public static IConfigurationBuilder AddEntityFrameworkConfig<T>(this IConfigurationBuilder builder, IDbConnection connection) where T : DbContext
        {
            return builder.Add(new EntityFrameworkConfigSource<T>(connection));
        }
    }
}
