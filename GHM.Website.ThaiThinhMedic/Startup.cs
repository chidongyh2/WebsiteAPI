using System;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using GHM.Website.ThaiThinhMedic.Infrastructure;
using GHM.Website.ThaiThinhMedic.Infrastructure.AutofacModules;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json.Serialization;

namespace GHM.Website.ThaiThinhMedic
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
            services.AddMvc().AddJsonOptions(options => options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver());

            services.AddAuthentication("MyCookies")
                .AddCookie("MyCookies", options =>
                {
                    options.ExpireTimeSpan = TimeSpan.FromDays(1);
                    options.LoginPath = "http://localhost:50000";
                    options.LogoutPath = "http://localhost:50000/logout";
                });

            services.AddDbContext<ThaiThinhMedicDbContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("ThaiThinhMedicWebsiteConnectionString"));
                
            });

            services.AddDbContext<ThaiThinhClinicDbContext>(options =>
            {                
                options.UseSqlServer(Configuration.GetConnectionString("ThaiThinhMedicClinicConenctionString"));
            });

            services.AddDbContext<LogSystemDbContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("LogSystemConenctionString"));
            });

            services.AddDbContext<ThaiThinhClinicDbContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("SystemConenctionString"));
            });
            // Config Autofac.
            var container = new ContainerBuilder();
            container.Populate(services);

            container.RegisterModule(new ApplicationModule());
            //container.RegisterModule(new ValidationModule());
            var autofacServiceProvider = new AutofacServiceProvider(container.Build());
            return autofacServiceProvider;
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {                
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Schedule}/{action=Index}/{id?}");
            });
        }
    }
}
