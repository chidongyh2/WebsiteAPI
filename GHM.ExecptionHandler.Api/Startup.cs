using System;
using System.Linq;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using GHM.ExecptionHandler.Api.Infrastructure;
using GHM.ExecptionHandler.Api.Infrastructure.Autofac;
using GHM.ExecptionHandler.Api.Infrastructure.IRepository;
using GHM.ExecptionHandler.Api.Infrastructure.IServices;
using GHM.ExecptionHandler.Api.Infrastructure.Repository;
using GHM.ExecptionHandler.Api.Infrastructure.Services;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.SqlServer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NServiceBus;

namespace GHM.ExecptionHandler.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        IContainer ApplicationContainer { get; set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddMvcCore()
                .AddAuthorization()
                .AddJsonFormatters();

            services.AddAuthentication("Bearer")
                .AddIdentityServerAuthentication(options =>
                {
                    var authority = Configuration.GetApiUrl("Authority");
                    options.Authority = string.IsNullOrEmpty(authority) ? "http://localhost:5000" : authority;
                    options.RequireHttpsMetadata = false;
                    options.ApiName = "GHM_ExceptionHandler";
                });

            services.AddDbContext<ExceptionDbContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("ExceptionConnectionString"));
            });

            #region Service DI.
            services.AddTransient<IDbContext, ExceptionDbContext>();
            services.AddTransient<IExceptionRepository, ExceptionRepository>();
            services.AddTransient<IExceptionService, ExceptionService>();
            #endregion            

            #region Register NServiceBus
            var endpointConfiguration = new EndpointConfiguration("GHM.ExceptionHandler");
            endpointConfiguration.UseTransport<LearningTransport>();
            endpointConfiguration.UsePersistence<LearningPersistence>();
            //endpointConfiguration.UseContainer<AutofacBuilder>(customizations: customizations =>
            //{
            //    customizations.ExistingLifetimeScope(ApplicationContainer);
            //});
            endpointConfiguration.UseTransport<LearningTransport>();
            var endpointInstance = Endpoint.Start(endpointConfiguration).GetAwaiter().GetResult();
            services.AddSingleton<IMessageSession>(endpointInstance);
            #endregion

            #region Register Autofac.
            var builder = new ContainerBuilder();
            builder.Populate(services);
            builder.RegisterModule(new ApplicationModule());
            ApplicationContainer = builder.Build();
            #endregion
            return new AutofacServiceProvider(ApplicationContainer);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            #region Allow Origins
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
            app.UseAuthentication();
            app.UseMvcWithDefaultRoute();
        }
    }
}
