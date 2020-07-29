using Autofac;
using Autofac.Extensions.DependencyInjection;
using FluentValidation.AspNetCore;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.ModelBinders;
using GHM.WebsiteClient.Api.Infrastructure.AutofacModules;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Serilog;
using System;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text.Json;

namespace GHM.WebsiteClient.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            Log.Logger = new LoggerConfiguration()
           .ReadFrom.Configuration(Configuration)
           .CreateLogger();
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.Configure<IISOptions>(options =>
            {
                options.ForwardClientCertificate = false;
                options.AutomaticAuthentication = false;
            });
            services.AddLocalization(options => options.ResourcesPath = "Resources");
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Latest);
            services.AddOptions();
            services.AddMemoryCache();
            services.AddResponseCaching();
            services.AddCors();
            services.AddMvcCore(options =>
            {
                options.Filters.Add(typeof(ModelStateFilter));
                options.Conventions.Add(new DefaultFromBodyBindingConvention());
                options.ModelBinderProviders.Insert(0, new DateTimeModelBinderProvider());
            }).AddFluentValidation()
                .AddJsonOptions(opts =>
                {
                    opts.JsonSerializerOptions.DictionaryKeyPolicy = JsonNamingPolicy.CamelCase;
                    opts.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
                })
                .AddViewLocalization(LanguageViewLocationExpanderFormat.Suffix, options => { options.ResourcesPath = "Resources"; })
                .AddDataAnnotationsLocalization();
            services.AddDataProtection().PersistKeysToFileSystem(new DirectoryInfo(Directory.GetCurrentDirectory()));

            //Config Autofac.
            var builder = new ContainerBuilder();
            builder.Populate(services);


            builder.RegisterModule(new ApplicationModule(Configuration.GetConnectionString("DefaultConnection"), Configuration.GetConnectionString("DefaultConnection"), Configuration.GetConnectionString("DefaultConnection"), Configuration.GetConnectionString("DefaultConnection")));
            builder.RegisterModule(new ValidationModule());
            var autofacServiceProvider = new AutofacServiceProvider(builder.Build());
            return autofacServiceProvider;
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app)
        {
            app.UseDeveloperExceptionPage();
            // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            app.UseHsts();
            #region Localizations

            var supportedCultures = new[]
                {
                    new CultureInfo("vi-VN"),
                    new CultureInfo("en-US")
                };

            app.UseRequestLocalization(new RequestLocalizationOptions
            {
                DefaultRequestCulture = new RequestCulture("vi-VN"),
                // Formatting numbers, dates, etc.
                SupportedCultures = supportedCultures,
                // UI strings that we have localized.
                SupportedUICultures = supportedCultures,
                RequestCultureProviders = new IRequestCultureProvider[]
                {
                    new QueryStringRequestCultureProvider(),
                    new AcceptLanguageHeaderRequestCultureProvider()
                }
            });

            #endregion
            app.UseRouting();
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
            //app.UseHttpsRedirection();
            app.UseResponseCaching();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
