using System;
using System.Globalization;
using System.Linq;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using FluentValidation.AspNetCore;
using GHM.Core.Infrastructure;
using GHM.Core.Infrastructure.AutofacModules;
using GHM.EventBus;
using GHM.EventBus.Abstractions;
using GHM.EventBusRabbitMQ;
using GHM.Infrastructure.Extensions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using RabbitMQ.Client;

namespace GHM.Core.Api
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
            // Add IIS support.
            services.Configure<IISOptions>(options =>
            {
                options.ForwardClientCertificate = false;
            });

            // Add resources support.            
            services.AddLocalization(options => options.ResourcesPath = "Resources");
            services.AddApiVersioning(options =>
            {
                options.ReportApiVersions = true;
                options.AssumeDefaultVersionWhenUnspecified = true;
                options.DefaultApiVersion = new ApiVersion(1, 0);
            });
            services.AddOptions();
            services.AddMemoryCache();
            services.AddCors();
            services.AddMvcCore()
                .AddAuthorization()
                .AddJsonFormatters()
                .AddFluentValidation()
                .AddViewLocalization(LanguageViewLocationExpanderFormat.Suffix)
                .AddDataAnnotationsLocalization();

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddAuthentication("Bearer")
                .AddIdentityServerAuthentication(options =>
                {
                    var authority = Configuration.GetApiUrl("Authority");
                    options.Authority = string.IsNullOrEmpty(authority) ? "http://localhost:5000" : authority;
                    options.RequireHttpsMetadata = false;
                    options.ApiName = "GHM_Core_Api";
                });

            services.AddDbContext<CoreDbContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("CoreConnectionString"));
            });

            //services.AddEventBus(Configuration);

            #region Register Autofac.
            var builder = new ContainerBuilder();
            builder.Populate(services);
            builder.RegisterModule(new ApplicationModule(""));
            builder.RegisterModule(new ValidationModule());
            ApplicationContainer = builder.Build();
            #endregion
            return new AutofacServiceProvider(ApplicationContainer); ;
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else if(env.IsProduction())
            {
                app.UseHsts();
                app.UseHttpsRedirection();
            }

            #region Localizations
            var supportedCultures = new[]
            {
                new CultureInfo("vi-VN"),
                new CultureInfo("en"),
                new CultureInfo("en-US"),
            };

            app.UseRequestLocalization(new RequestLocalizationOptions
            {
                DefaultRequestCulture = new RequestCulture("vi-VN"),
                // Formatting numbers, dates, etc.
                SupportedCultures = supportedCultures,
                // UI strings that we have localized.
                SupportedUICultures = supportedCultures
            });
            #endregion

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
    public static class StartupHelper
    {
        public static void AddEventBus(this IServiceCollection services, IConfiguration configuration)
        {
            // Add notfication event bus.
            var eventBusConfigs = configuration.GetEventBusConfigs();
            services.AddSingleton<IRabbitMQPersistentConnection>(sp =>
            {
                var logger = sp.GetRequiredService<ILogger<DefaultRabbitMQPersistentConnection>>();
                var factory = new ConnectionFactory
                {
                    HostName = !string.IsNullOrEmpty(eventBusConfigs.HostName)
                        ? eventBusConfigs.HostName
                        : "localhost"
                };

                if (!string.IsNullOrEmpty(eventBusConfigs.UserName))
                {
                    factory.UserName = eventBusConfigs.UserName;
                }

                if (!string.IsNullOrEmpty(eventBusConfigs.Password))
                {
                    factory.Password = eventBusConfigs.Password;
                }

                var retryCount = 5;
                if (!string.IsNullOrEmpty(eventBusConfigs.RetryCount))
                {
                    retryCount = int.Parse(eventBusConfigs.RetryCount);
                }

                return new DefaultRabbitMQPersistentConnection(factory, logger, retryCount);
            });            
            services.AddSingleton<IEventBus, EventBusRabbitMQ.EventBusRabbitMQ>(sp =>
            {
                var rabbitMQPersistentConnection = sp.GetRequiredService<IRabbitMQPersistentConnection>();
                var iLifetimeScope = sp.GetRequiredService<ILifetimeScope>();
                var logger = sp.GetRequiredService<ILogger<EventBusRabbitMQ.EventBusRabbitMQ>>();
                var eventBusSubcriptionsManager = sp.GetRequiredService<IEventBusSubscriptionsManager>();

                var retryCount = 5;
                if (!string.IsNullOrEmpty(eventBusConfigs.RetryCount))
                {
                    retryCount = int.Parse(eventBusConfigs.RetryCount);
                }
                
                return new EventBusRabbitMQ.EventBusRabbitMQ(rabbitMQPersistentConnection, logger, iLifetimeScope,
                    eventBusSubcriptionsManager, eventBusConfigs.NotificationClientName, retryCount);
            });
            services.AddSingleton<IEventBusSubscriptionsManager, InMemoryEventBusSubscriptionsManager>();
        }
    }
}
