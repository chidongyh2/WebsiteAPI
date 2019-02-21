using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace GHM.Website.Event.Infrastructure
{
  public  class WebsiteEventDbContextFactory : IDesignTimeDbContextFactory<WebsiteEventDbContext>
    {
        public WebsiteEventDbContext CreateDbContext(string[] args)
        {
            var configurationBuilder = new ConfigurationBuilder();
            var path = Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json");
            configurationBuilder.AddJsonFile(path, false);

            var configs = configurationBuilder.Build();
            var connectionString = configs.GetConnectionString("WebsiteEventConnectionString");

            var optionsBuilder = new DbContextOptionsBuilder<WebsiteEventDbContext>();
            optionsBuilder.UseSqlServer(connectionString);
            return new WebsiteEventDbContext(optionsBuilder.Options);
        }
    }
}
