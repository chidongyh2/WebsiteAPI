using GHM.FileManagement.Domain.Models;
//using GHM.FileManagement.Infrastructure.Configurations;
using GHM.Infrastructure.SqlServer;
using Microsoft.EntityFrameworkCore;

namespace GHM.FileManagement.Infrastructure
{
    public class FileManagementDbContext : DbContextBase
    {
        public FileManagementDbContext(DbContextOptions<FileManagementDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Configurations:     
            //builder.ApplyConfiguration(new FileConfig());

            builder.Entity<Folder>()
                .ToTable("folders")
                .HasKey(t => new { t.Id });

            builder.Entity<File>()
                .ToTable("files")
                .HasKey(t => new { t.Id });
            
        }
    }
}
