using System;
using System.Linq;
using System.Text.Json;
using GHM.Authentication.IRepository;
using GHM.Authentication.Repository;
using GHM.Authentication.Validators;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.SqlServer;
using IdentityServer4.Stores;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;

namespace GHM.Authentication
{
    public class Startup
    {
        public IConfiguration Configuration { get; set; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services
                .AddRouting(options => options.LowercaseUrls = true)
                .AddControllers();
            services.AddOptions();
            services.AddCors();
            // Identity Services.
            services.AddScoped<IDbContext, AuthDbContext>();
            services.AddScoped<IUserStore<UserAccount>, UserAccountRepository>();
            services.AddScoped<IClientStore, ClientRepository>();
            services.AddScoped<IResourceStore, ResourceRepository>();
            services.AddScoped<IClientAllowedCorsOriginsRepository, ClientAllowedCorsOriginsRepository>();
            services.AddScoped<IClientAllowedGrantTypeRepository, ClientAllowedGrantTypeRepository>();
            services.AddScoped<IClientClaimRepository, ClientClaimRepository>();
            services.AddScoped<IClientIdentityProviderRestrictionRepository, ClientIdentityProviderRestrictionRepository>();
            services.AddScoped<IClientPostLogoutRedirectUrisRepository, ClientPostLogoutRedirectUrisRepository>();
            services.AddScoped<IClientPropertyRepository, ClientPropertyRepository>();
            services.AddScoped<IClientRedirectUrisRepository, ClientRedirectUrisRepository>();
            services.AddScoped<IClientSecretRepository, ClientSecretRepository>();
            services.AddScoped<IClientAllowedScopesRepository, ClientAllowedScopeRepository>();
            services.AddScoped<IUserAccountRepository, UserAccountRepository>();

            services.AddMvc().AddJsonOptions(opts =>
            {
                opts.JsonSerializerOptions.DictionaryKeyPolicy = JsonNamingPolicy.CamelCase;
                opts.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
            }).AddNewtonsoftJson(options =>
            {
                options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
                options.SerializerSettings.PreserveReferencesHandling = PreserveReferencesHandling.Objects;
            });
            services.AddDbContextPool<AuthDbContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("CoreConnectionString"));
            });
            services.AddMemoryCache();
            #region Identity config
            services.AddIdentity<UserAccount, Models.Role>(options =>
                {
                    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
                    options.Lockout.MaxFailedAccessAttempts = 5;
                    options.Lockout.AllowedForNewUsers = true;
                })
                .AddEntityFrameworkStores<AuthDbContext>()
                .AddDefaultTokenProviders();

            services.AddIdentityServer()
                //.AddSigningCredential("id_rsa")
                .AddDeveloperSigningCredential()
                //.AddResourceStore<ResourceRepository>()
                //.AddClientStore<ClientRepository>()
                //.AddProfileService<ProfileRepository>()
                //.AddInMemoryIdentityResources(IdentityConfig.GetIdentityResources())
                //.AddInMemoryApiScopes(IdentityConfig.GetApiScopes())
                //.AddInMemoryApiResources(IdentityConfig.GetApiResources())
                //.AddInMemoryClients(IdentityConfig.GetClients())
                .AddInMemoryCaching()
                .AddClientStoreCache<ClientRepository>()
                .AddResourceStoreCache<ResourceRepository>()
                .AddProfileService<ProfileRepository>()
                .AddResourceOwnerValidator<ResourceOwnerPasswordValidator>();
            #endregion
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app)
        {

            #region Allow Origin
            var allowOrigins = Configuration.GetSection("AllowOrigins")
                .GetChildren().Select(x => x.Value).ToArray();
            app.UseCors(builder =>
            {
                builder.AllowAnyHeader();
                builder.AllowAnyMethod();
                builder.AllowCredentials();
                builder.SetIsOriginAllowed(origin => true);
            });
            #endregion
            app.UseExceptionHandler("/error");
            app.UseRouting();
            app.UseIdentityServer();
            app.UseAuthorization();
            app.UseStaticFiles();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}