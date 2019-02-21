using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace GHM.Interactive.Infrastructure
{
    public class CustomerDbContextFactory : IDesignTimeDbContextFactory<InteractiveDbContext>
    {
        public InteractiveDbContext CreateDbContext(string[] args)
        {
            var configurationBuilder = new ConfigurationBuilder();
            var path = Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json");
            configurationBuilder.AddJsonFile(path, false);

            var configs = configurationBuilder.Build();
            var connectionString = configs.GetConnectionString("CustomerConnectionString");

            var optionsBuilder = new DbContextOptionsBuilder<InteractiveDbContext>();
            optionsBuilder.UseSqlServer(connectionString);
            return new InteractiveDbContext(optionsBuilder.Options);
        }
    }
}
