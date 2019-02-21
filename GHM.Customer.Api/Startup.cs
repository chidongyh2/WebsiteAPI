using System;
using System.Globalization;
using System.Linq;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using FluentValidation.AspNetCore;
using GHM.Customer.Infrastructure;
using GHM.Customer.Infrastructure.AutofacModules;
using GHM.Infrastructure.Extensions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Logging;

namespace GHM.Customer.Api
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
            IdentityModelEventSource.ShowPII = true;
            // Config IIS support.
            services.Configure<IISOptions>(options =>
            {
                options.ForwardClientCertificate = false;
            });

            services.AddLocalization(options => options.ResourcesPath = "Resources");
            services.AddApiVersioning(options =>
            {
                options.ReportApiVersions = true;
                options.AssumeDefaultVersionWhenUnspecified = true;
                options.DefaultApiVersion = new ApiVersion(1, 0);
            });
            services.AddMemoryCache();
            services.AddCors();
            services.AddMvcCore()
                .AddAuthorization()
                .AddJsonFormatters()
                .AddJsonOptions(options =>
                {
                    options.SerializerSettings.DateFormatString = "dd/MM/yyyy hh:mm:ss";
                })
                .AddFluentValidation();

            services.AddAuthentication("Bearer")
                .AddIdentityServerAuthentication(options =>
                {
                    var authority = Configuration.GetApiUrl("Authority");
                    options.Authority = !string.IsNullOrEmpty(authority) ? authority : "http://localhost:5000";
                    options.RequireHttpsMetadata = false;
                    options.ApiName = "GHM_Customer_Api";
                });

            services.AddDbContext<CustomerDbContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("PatientConnectionString"));
            });

            // Config Autofac.
            var container = new ContainerBuilder();
            container.Populate(services);

            container.RegisterModule(new ApplicationModule(Configuration.GetConnectionString("PatientConnectionString")));
            container.RegisterModule(new ValidationModule());
            var autofacServiceProvider = new AutofacServiceProvider(container.Build());
            return autofacServiceProvider;
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
}
