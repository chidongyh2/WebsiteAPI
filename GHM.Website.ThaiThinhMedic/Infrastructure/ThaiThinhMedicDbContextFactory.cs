using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace GHM.Website.ThaiThinhMedic.Infrastructure
{
    public class ThaiThinhMedicDbContextFactory : IDesignTimeDbContextFactory<ThaiThinhMedicDbContext>
    {
        public ThaiThinhMedicDbContext CreateDbContext(string[] args)
        {
            var configurationBuilder = new ConfigurationBuilder();
            var path = Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json");
            configurationBuilder.AddJsonFile(path, false);

            var configs = configurationBuilder.Build();
            var connectionString = configs.GetConnectionString("ThaiThinhMedicWebsiteConnectionString");

            var optionsBuilder = new DbContextOptionsBuilder<ThaiThinhMedicDbContext>();
            optionsBuilder.UseSqlServer(connectionString);
            return new ThaiThinhMedicDbContext(optionsBuilder.Options);

        }
    }
}
