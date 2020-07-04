using System;
using System.Linq;
using System.Text.Json;
using IdentityServer4.AccessTokenValidation;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Ocelot.DependencyInjection;
using Ocelot.Middleware;
using Ocelot.Provider.Polly;

namespace GHM.Web.ApiGateway
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Config IIS support.
            services.Configure<IISOptions>(options =>
            {
                options.ForwardClientCertificate = false;
            });
            services.AddMvc().AddJsonOptions(opts =>
            {
                opts.JsonSerializerOptions.DictionaryKeyPolicy = JsonNamingPolicy.CamelCase;
                opts.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
            });
            var authenticationProviderKey = "IdentityApiKey";
                services.AddAuthentication("Bearer")
                    .AddIdentityServerAuthentication(authenticationProviderKey, options =>
                    {
                        options.Authority = Configuration.GetSection("Authority").Value;
                        options.RequireHttpsMetadata = false;
                        options.ApiName = "GHM_Internal_Api_Gateway";
                        options.SupportedTokens = SupportedTokens.Both;
                        // options.ApiSecret = Configuration.GetSection("ApiSecret").Value;
                    });      
            services.AddOcelot();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app)
        {
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
            app.UseExceptionHandler("/error");
            app.UseAuthentication();
            app.UseHttpsRedirection();
            app.UseOcelot().Wait();
        }
    }
}
