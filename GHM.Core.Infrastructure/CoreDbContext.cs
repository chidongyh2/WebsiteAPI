using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using GHM.Core.Domain.Models;
using GHM.Core.Infrastructure.Configurations;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.SqlServer;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Client = GHM.Core.Domain.Models.Client;

namespace GHM.Core.Infrastructure
{
    public class CoreDbContext : IdentityDbContext<UserAccount, Role, string>, IDbContext
    {
        private readonly Lazy<EntityQueryFilterProvider> _filterProviderInitializer = new Lazy<EntityQueryFilterProvider>();

        public CoreDbContext(DbContextOptions<CoreDbContext> options)
            : base(options)
        {
            this.ChangeTracker.LazyLoadingEnabled = false;
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            #region Configurations
            builder.ApplyConfiguration(new PageConfig());
            builder.ApplyConfiguration(new PageTranslationConfig());
            builder.ApplyConfiguration(new ClientPostLogoutRedirectUrisConfig());
            builder.ApplyConfiguration(new ClientRedirectUrisConfig());
            builder.ApplyConfiguration(new ClientSecretConfig());
            builder.ApplyConfiguration(new ClientClaimConfig());
            builder.ApplyConfiguration(new ClientPropertyConfig());
            builder.ApplyConfiguration(new ClientIdentityProviderRestrictionConfig());
            builder.ApplyConfiguration(new ClientAllowedCorsOriginConfig());
            builder.ApplyConfiguration(new ClientAllowedScopeConfig());
            builder.ApplyConfiguration(new ClientConfig());
            builder.ApplyConfiguration(new ApiResourceConfig());
            builder.ApplyConfiguration(new IdentityResourceConfig());
            builder.ApplyConfiguration(new TenantConfig());
            builder.ApplyConfiguration(new TenantPageConfig());
            builder.ApplyConfiguration(new RoleConfig());
            builder.ApplyConfiguration(new LanguageConfig());
            builder.ApplyConfiguration(new UserAccountConfig());
            builder.ApplyConfiguration(new TenantLanguageConfig());
            builder.ApplyConfiguration(new UserSettingConfig());
            builder.ApplyConfiguration(new RolesPagesConfig());
            builder.ApplyConfiguration(new NationalConfig());
            builder.ApplyConfiguration(new EthnicConfig());
            builder.ApplyConfiguration(new ReligionConfig());
            #endregion

            #region Table mapping.            
            builder.Entity<District>(x => x.ToTable("Districts"));
            builder.Entity<Province>(x => x.ToTable("Provinces"));
            builder.Entity<IdentityUserClaim<string>>(x => x.ToTable("UserClaims"));
            builder.Entity<IdentityUserToken<string>>(x => x.ToTable("UserTokens"));
            builder.Entity<IdentityUserRole<string>>(x => x.ToTable("UsersRoles"));
            builder.Entity<IdentityRoleClaim<string>>(x => x.ToTable("RoleClaims"));
            builder.Entity<IdentityUserLogin<string>>(x => x.ToTable("UserLogins"));
            builder.Entity<Client>(x => x.ToTable("Client"));
            builder.Entity<ClientClaim>(x => x.ToTable("ClientClaim"));
            builder.Entity<ClientIdentityProviderRestriction>(x => x.ToTable("ClientIdentityProviderRestriction"));


            // Tag
            builder.Entity<Tag>().ToTable("Tags").HasKey(x => x.Id);
            builder.Entity<SubjectTag>()
                .ToTable("SubjectTags")
                .HasKey(x => new { x.SubjectId, x.TagId });

            builder.Entity<ApproverConfig>().ToTable("ApproverConfigs").HasKey(x => new {x.UserId , x.Type});

            #endregion
        }

        public Task<int> SaveChangesAsync()
        {
            return SaveChangesAsync(new CancellationToken());
        }

        public IRepository<T> GetRepository<T>() where T : class
        {
            return new EfRepository<T>(this);
        }

        public IQueryable<T> RawFromSql<T>(string queryText) where T : class
        {
            return Set<T>().FromSqlRaw(queryText);
        }

        public IQueryable<T> RawFromSql<T>(string queryText, params object[] parameters) where T : class
        {
            return Set<T>().FromSqlRaw(queryText, parameters);
        }

        public QueryFilterProvider Filters => _filterProviderInitializer.Value;
    }
}
