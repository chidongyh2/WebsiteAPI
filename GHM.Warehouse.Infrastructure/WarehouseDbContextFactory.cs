using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace GHM.Warehouse.Infrastructure
{
    public class WarehouseDbContextFactory : IDesignTimeDbContextFactory<WarehouseDbContext>
    {
        public WarehouseDbContext CreateDbContext(string[] args)
        {
            var configurationBuilder = new ConfigurationBuilder();
            var path = Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json");
            configurationBuilder.AddJsonFile(path, false);

            var configs = configurationBuilder.Build();
            var connectionString = configs.GetConnectionString("WarehouseConnectionString");

            var optionsBuilder = new DbContextOptionsBuilder<WarehouseDbContext>();
            optionsBuilder.UseSqlServer(connectionString);
            return new WarehouseDbContext(optionsBuilder.Options);
        }
    }
}
