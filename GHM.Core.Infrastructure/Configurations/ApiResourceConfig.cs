using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Core.Infrastructure.Configurations
{
    public class ApiResourceConfig : IEntityTypeConfiguration<Domain.Models.ApiResource>
    {
        public void Configure(EntityTypeBuilder<Domain.Models.ApiResource> builder)
        {
            builder.Ignore(x => x.ApiSecrets);            
            builder.Ignore(x => x.Scopes);
            builder.Ignore(x => x.UserClaims);                        
            builder.ToTable("ApiResource").HasKey(x => x.Name);            
        }
    }
}
