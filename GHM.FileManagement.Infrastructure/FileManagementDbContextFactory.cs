using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace GHM.FileManagement.Infrastructure
{
    public class FileManagementDbContextFactory : IDesignTimeDbContextFactory<FileManagementDbContext>
    {
        public FileManagementDbContext CreateDbContext(string[] args)
        {
            var configurationBuilder = new ConfigurationBuilder();
            var path = Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json");
            configurationBuilder.AddJsonFile(path, false);

            var configs = configurationBuilder.Build();
            var connectionString = configs.GetConnectionString("FileManagementConnectionString");

            var optionsBuilder = new DbContextOptionsBuilder<FileManagementDbContext>();
            optionsBuilder.UseSqlServer(connectionString);
            return new FileManagementDbContext(optionsBuilder.Options);
        }
    }
}
