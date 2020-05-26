using System;
using System.Linq;
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
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

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
            // Config IIS support.
            services.Configure<IISOptions>(options =>
            {
                options.ForwardClientCertificate = false;
            });

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
            services.AddTransient<IDbContext, CoreDbContext>();
            services.AddTransient<IUserStore<UserAccount>, UserAccountRepository>();
            services.AddTransient<IClientStore, ClientRepository>();
            services.AddTransient<IResourceStore, ResourceRepository>();

            services.AddMvcCore();
            services.AddDbContextPool<CoreDbContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("CoreConnectionString"));
            });

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
                .AddInMemoryPersistedGrants()
                //.AddConfigurationStore(options =>
                //{
                //    options.ConfigureDbContext = b => b.UseSqlServer(Configuration.GetConnectionString("CoreConnectionString"));
                //})
                .AddResourceStore<ResourceRepository>()
                .AddClientStore<ClientRepository>()
                .AddProfileService<ProfileRepository>()
                //.AddInMemoryIdentityResources(IdentityConfig.GetIdentityResources())
                //.AddInMemoryApiResources(IdentityConfig.GetApiResources())
                //.AddInMemoryClients(IdentityConfig.GetClients())
                //.AddTestUsers(IdentityConfig.GetUsers())
                //.AddProfileService<ProfileRepository>()
                .AddAspNetIdentity<UserAccount>()
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
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            #region Allow Origin
            var allowOrigins = Configuration.GetSection("AllowOrigins")
                .GetChildren().Select(x => x.Value).ToArray();
            app.UseCors(builder =>
            {
                builder.WithOrigins(allowOrigins);
                builder.AllowAnyHeader();
                builder.AllowAnyMethod();
                builder.AllowCredentials();
            });
            #endregion

            app.UseHttpsRedirection();
            app.UseIdentityServer();
            app.UseAuthentication();
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvcWithDefaultRoute();
        }
    }
}