using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace GHM.Website.Infrastructure
{
    public class WebsiteDbContextFactory : IDesignTimeDbContextFactory<WebsiteDbContext>
    {
        public WebsiteDbContext CreateDbContext(string[] args)
        {
            var configurationBuilder = new ConfigurationBuilder();
            var path = Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json");
            configurationBuilder.AddJsonFile(path, false);

            var configs = configurationBuilder.Build();
            var connectionString = configs.GetConnectionString("WebsiteConnectionString");

            var optionsBuilder = new DbContextOptionsBuilder<WebsiteDbContext>();
            optionsBuilder.UseNpgsql(connectionString);
            return new WebsiteDbContext(optionsBuilder.Options);
        }
    }
}
