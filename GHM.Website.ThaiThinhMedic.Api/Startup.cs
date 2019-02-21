using System;
using System.Linq;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using FluentValidation.AspNetCore;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.AutofacModules;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace GHM.Website.ThaiThinhMedic.Api
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
            services.AddMvc()
                .AddFluentValidation();
            services.AddCors();
            services.AddMediatR();
            services.AddDbContext<ThaiThinhMedicDbContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("GHM_ThaiThinhMedic_Website"));
            });

            services.AddDbContext<ThaiThinhMedicClinicDbContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("GHM_ThaiThinhMedic_Clinic"));
            });

            services.AddAuthentication("Bearer")
                .AddIdentityServerAuthentication(options =>
                {
                    options.Authority = Configuration.GetApiUrl("Authority");
                    options.RequireHttpsMetadata = false;
                    options.ApiName = "GHM_ThaiThinhMedic_Website_Api";
                });

            // Config Autofac.
            var container = new ContainerBuilder();
            container.Populate(services);
            container.RegisterModule(new ApplicationModule(Configuration.GetConnectionString("GHM_ThaiThinhMedic_Website_MongoDb")));
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
            app.UseMvc();
        }
    }
}
