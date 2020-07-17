using System;
using System.Linq;
using System.Text.Json;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using GHM.Authentication.Validators;
using GHM.Core.Infrastructure;
using GHM.Core.Infrastructure.AutofacModules;
using GHM.Core.Infrastructure.Repository;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.SqlServer;
using IdentityServer4.Stores;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.AspNetCore.Routing;
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
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddApiVersioning(options =>
            {
                options.ReportApiVersions = true;
                options.AssumeDefaultVersionWhenUnspecified = true;
                options.DefaultApiVersion = new ApiVersion(1, 0);
            });
            services
                .AddRouting(options => options.LowercaseUrls = true)
                .AddControllers();
            services.AddOptions();
            services.AddCors();

            //services.AddHsts(options =>
            //{
            //    options.Preload = true;
            //    options.IncludeSubDomains = true;
            //    options.MaxAge = TimeSpan.FromDays(60);
            //    options.ExcludedHosts.Add("auth.ghmsoft.vn");
            //    options.ExcludedHosts.Add("www.auth.ghmsoft.vn");
            //});
            //services.AddHttpsRedirection(options =>
            //{
            //    options.RedirectStatusCode = StatusCodes.Status301MovedPermanently;
            //    options.HttpsPort = 5001;
            //});

            // Identity Services.
            services.AddScoped<IDbContext, CoreDbContext>();
            services.AddScoped<IUserStore<UserAccount>, UserAccountRepository>();
            services.AddScoped<IClientStore, ClientRepository>();
            services.AddScoped<IResourceStore, ResourceRepository>();

            services.AddMvc().AddJsonOptions(opts =>
            {
                opts.JsonSerializerOptions.DictionaryKeyPolicy = JsonNamingPolicy.CamelCase;
                opts.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
            }).AddNewtonsoftJson(options =>
            {
                options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
                options.SerializerSettings.PreserveReferencesHandling = PreserveReferencesHandling.Objects;
            });
            services.AddDbContextPool<CoreDbContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("CoreConnectionString"));
            });

            services.AddMemoryCache();
            #region Identity config
            services.AddIdentity<UserAccount, Core.Domain.Models.Role>(options =>
                {
                    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
                    options.Lockout.MaxFailedAccessAttempts = 5;
                    options.Lockout.AllowedForNewUsers = true;
                })
                .AddEntityFrameworkStores<CoreDbContext>()
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

            #region Autofac Config.
            // Config Autofac.
            var container = new ContainerBuilder();
            container.Populate(services);

            container.RegisterModule(new ApplicationModule(Configuration.GetConnectionString("CoreConnectionString")));
            var autofacServiceProvider = new AutofacServiceProvider(container.Build());
            return autofacServiceProvider;

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