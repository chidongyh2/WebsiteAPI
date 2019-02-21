using GHM.Infrastructure.SqlServer;
using Microsoft.EntityFrameworkCore;

namespace GHM.Interactive.Infrastructure
{
    public class InteractiveDbContext : DbContextBase
    {
        public InteractiveDbContext(DbContextOptions<InteractiveDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
