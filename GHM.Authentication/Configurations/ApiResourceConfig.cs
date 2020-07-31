using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GHM.Authentication.Configurations
{
    public class ApiResourceConfig : IEntityTypeConfiguration<Domain.Models.ApiResource>
    {
        public void Configure(EntityTypeBuilder<Domain.Models.ApiResource> builder)
        {
            builder.Ignore(x => x.ApiSecrets);            
            builder.Ignore(x => x.Scopes);
            builder.Ignore(x => x.UserClaims);
            builder.Ignore(x => x.Properties);
            builder.Ignore(x => x.ShowInDiscoveryDocument);
            builder.Ignore(x => x.AllowedAccessTokenSigningAlgorithms);
            builder.ToTable("ApiResource").HasKey(x => x.Name);            
        }
    }
}
