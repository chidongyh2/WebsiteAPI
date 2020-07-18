using System;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using GHM.EventBus;
using GHM.EventBus.Abstractions;
using GHM.EventBusRabbitMQ;
using GHM.Events;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.SqlServer;
using GHM.Notifications.Api.Hubs;
using GHM.Notifications.Api.Infrastructure;
using GHM.Notifications.Api.Infrastructure.AutofacModules;
using GHM.Notifications.Api.Infrastructure.IntergrationEvents.EventHandlings;
using GHM.Notifications.Api.Infrastructure.IRepository;
using GHM.Notifications.Api.Infrastructure.IServices;
using GHM.Notifications.Api.Infrastructure.Repository;
using GHM.Notifications.Api.Infrastructure.Services;
using GHM.Notifications.Api.Resources;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Primitives;
using Newtonsoft.Json;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using RawRabbit.DependencyInjection.Autofac;
using RawRabbit.vNext;

namespace GHM.Notifications.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            // Config IIS support.
            services.Configure<IISOptions>(options =>
            {
                options.ForwardClientCertificate = false;
            });
            services.AddApiVersioning(options =>
            {
                options.ReportApiVersions = true;
                options.AssumeDefaultVersionWhenUnspecified = true;
                options.DefaultApiVersion = new ApiVersion(1, 0);
            });
            services.AddAutofac();
            services.AddAuthentication("Bearer")
                .AddIdentityServerAuthentication(options =>
                {
                    var authority = Configuration.GetApiUrl("Authority");
                    options.Authority = !string.IsNullOrEmpty(authority) ? authority : "http://localhost:50000";
                    options.RequireHttpsMetadata = false;
                    // options.ApiName = "GHM_Notification_Api";
                });

            services.AddSignalR();
            // Add resources support.            
            services.AddLocalization(options => options.ResourcesPath = "Resources");
            services.AddOptions();
            services.AddMemoryCache();
            services.AddCors();
            services.AddMvcCore()
                .AddAuthorization()
                .AddJsonOptions(opts =>
                {
                    opts.JsonSerializerOptions.DictionaryKeyPolicy = JsonNamingPolicy.CamelCase;
                    opts.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
                })
                .AddViewLocalization(LanguageViewLocationExpanderFormat.Suffix)
                .AddDataAnnotationsLocalization();

            #region Register DI
            services.AddTransient<IDbContext, NotificationDbContext>();
            services.AddTransient<INotificationRepository, NotificationRepository>();
            services.AddTransient<INotificationService, NotificationService>();
            #endregion

            RegisterEventBus(services);

            services.AddDbContext<NotificationDbContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("NotificationConnectionString"));
            });

            services.AddRawRabbit();

            // Config Autofac.
            var container = new ContainerBuilder();
            container.Populate(services);
            container.RegisterModule(new ApplicationModule());
            container.RegisterRawRabbit();
            var autofacServiceProvider = new AutofacServiceProvider(container.Build());

            // Event bus.
            //AddEventBus(autofacServiceProvider);

            return autofacServiceProvider;
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app)
        {
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
            //ConfigureEventBus(app);
            app.UseSignalrRequestToken();
            app.UseAuthentication();
            app.UseSignalR(routes =>
            {
                routes.MapHub<NotificationHub>("/notifications");
            });
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            app.UseRabbitMQ(Configuration);
            ConfigureEventBus(app);
        }

        private void RegisterEventBus(IServiceCollection services)
        {
            services.AddSingleton<IRabbitMQPersistentConnection>(sp =>
            {
                var logger = sp.GetRequiredService<ILogger<DefaultRabbitMQPersistentConnection>>();
                var factory = new ConnectionFactory()
                {
                    HostName = "rabbitmq",
                    Port = 5672,
                    UserName = "guest",
                    Password = "guest"
                };

                //if (!string.IsNullOrEmpty(Configuration["EventBusUserName"]))
                //{
                //    factory.UserName = Configuration["EventBusUserName"];
                //}

                //if (!string.IsNullOrEmpty(Configuration["EventBusPassword"]))
                //{
                //    factory.Password = Configuration["EventBusPassword"];
                //}

                var retryCount = 5;
                if (!string.IsNullOrEmpty(Configuration["EventBusRetryCount"]))
                {
                    retryCount = int.Parse(Configuration["EventBusRetryCount"]);
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
                if (!string.IsNullOrEmpty(Configuration["EventBusRetryCount"]))
                {
                    retryCount = int.Parse(Configuration["EventBusRetryCount"]);
                }

                return new EventBusRabbitMQ.EventBusRabbitMQ(rabbitMQPersistentConnection, logger, iLifetimeScope,
                    eventBusSubcriptionsManager,
                    "GHM_WebManager_Notification", retryCount);
            });
            services.AddSingleton<IEventBusSubscriptionsManager, InMemoryEventBusSubscriptionsManager>();
            services.AddTransient<NotificationEventHandler>();
        }

        private void ConfigureEventBus(IApplicationBuilder app)
        {
            var eventBus = app.ApplicationServices.GetRequiredService<IEventBus>();

            eventBus.Subscribe<NotificationEvent, NotificationEventHandler>();
        }
    }

    public static class StartupHelper
    {
        public static void UseSignalrRequestToken(this IApplicationBuilder app)
        {
            app.Use(async (context, next) =>
            {
                var x = context.Request.Path.Value;
                if (x.StartsWith("/notifications"))
                {
                    StringValues token;
                    if (context.Request.Query.TryGetValue("token", out token))
                    {
                        context.Request.Headers.Add("Authorization", new[] { "bearer " + token });
                    }
                }
                await next();
            });
        }

        public static IApplicationBuilder UseRabbitMQ(this IApplicationBuilder app, IConfiguration configuration)
        {
            var applicationLifeTime = app.ApplicationServices.GetService<IApplicationLifetime>();
            applicationLifeTime.ApplicationStarted.Register(RegisterNotificationEvent);

            return app;

            void RegisterNotificationEvent()
            {
                var hostName = configuration.GetSection("EventBusHostName").Value;
                var userName = configuration.GetSection("EventBusUserName").Value;
                var password = configuration.GetSection("EventBusPassword").Value;

                var factory = new ConnectionFactory()
                {
                    HostName = string.IsNullOrEmpty(hostName) ? "rabbitmq" : hostName,
                    UserName = string.IsNullOrEmpty(userName) ? "guest" : userName,
                    Password = string.IsNullOrEmpty(password) ? "guest" : password,
                };
                using (var connection = factory.CreateConnection())
                {
                    using (var channel = connection.CreateModel())
                    {
                        channel.QueueDeclare(queue: "GHM_WebManager_Notification",
                        durable: true,
                        exclusive: false,
                        autoDelete: false,
                        arguments: null);

                        var consumer = new EventingBasicConsumer(channel);
                        consumer.Received += (model, ea) =>
                        {
                            var body = ea.Body;
                            var message = Encoding.UTF8.GetString(body.Span);
                            ProcessEvent(message);
                        };
                        channel.BasicConsume(queue: "GHM_WebManager_Notification",
                            autoAck: true,
                            consumer: consumer);
                    }
                }
            }

            void ProcessEvent(string message)
            {
                var notificationService = app.ApplicationServices.GetService<INotificationService>();
                var userConnectionRepository = app.ApplicationServices.GetService<IUserConnectionRepository>();
                var notificationHub = app.ApplicationServices.GetService<IHubContext<NotificationHub>>();
                var resourceService = app.ApplicationServices.GetService<IResourceService<GhmNotificationResource>>();

                var intergrationEvent = JsonConvert.DeserializeObject<NotificationEvent>(message);
                new NotificationEventHandler(notificationService, userConnectionRepository, notificationHub, resourceService)
                    .Handle(intergrationEvent);
            }
        }
    }
}
