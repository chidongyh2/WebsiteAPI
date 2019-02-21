using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace GHM.ExecptionHandler.Api.Infrastructure
{
    public class ExceptionDbContextFactory : IDesignTimeDbContextFactory<ExceptionDbContext>
    {
        public ExceptionDbContext CreateDbContext(string[] args)
        {
            var configurationBuilder = new ConfigurationBuilder();
            var path = Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json");
            configurationBuilder.AddJsonFile(path, false);

            var configs = configurationBuilder.Build();
            var connectionString = configs.GetConnectionString("ExceptionConnectionString");

            var optionsBuilder = new DbContextOptionsBuilder<ExceptionDbContext>();
            optionsBuilder.UseSqlServer(connectionString);
            return new ExceptionDbContext(optionsBuilder.Options);

        }
    }
}
