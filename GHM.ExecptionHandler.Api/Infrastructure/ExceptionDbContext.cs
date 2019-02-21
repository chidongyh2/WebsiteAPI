using GHM.ExecptionHandler.Api.Infrastructure.Models;
using GHM.Infrastructure.SqlServer;
using Microsoft.EntityFrameworkCore;

namespace GHM.ExecptionHandler.Api.Infrastructure
{
    public class ExceptionDbContext : DbContextBase
    {
        public ExceptionDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Configurations:
            builder.Entity<CustomException>().ToTable("Exceptions").HasKey(x => x.Id);
        }
    }
}
