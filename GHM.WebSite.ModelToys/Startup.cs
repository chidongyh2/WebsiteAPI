﻿using Autofac;
using Autofac.Extensions.DependencyInjection;
using FluentValidation.AspNetCore;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.ModelBinders;
using GHM.WebsiteClient.Api.Infrastructure.AutofacModules;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text.Json;
using WebMarkupMin.AspNetCore2;

namespace GHM.Website.ModelToys
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
            services.Configure<KestrelServerOptions>(options =>
            {
                options.AllowSynchronousIO = true;
            });
            services.AddLocalization(options => options.ResourcesPath = "Resources");
            services.AddCors();
            services.AddMvcCore(options =>
            {
                options.Conventions.Add(new DefaultFromBodyBindingConvention());
                options.ModelBinderProviders.Insert(0, new DateTimeModelBinderProvider());
            })
            .AddJsonOptions(opts =>
            {
                opts.JsonSerializerOptions.DictionaryKeyPolicy = JsonNamingPolicy.CamelCase;
                opts.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
                opts.JsonSerializerOptions.Converters.Add(new CustomDateTimeConverter());
            })
                .AddFluentValidation();

            services.AddMemoryCache();
            services.AddResponseCaching();
            services.AddSingleton<IConfiguration>(Configuration);
            services.AddSession(opts =>
            {
                opts.Cookie.IsEssential = true; // make the session cookie Essential
                opts.IdleTimeout = TimeSpan.FromDays(1);
            });
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            services.Configure<RequestLocalizationOptions>(options =>
            {
                options.DefaultRequestCulture = new RequestCulture(new CultureInfo("vi-VN"));
            });
            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => false;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Latest).AddViewLocalization(LanguageViewLocationExpanderFormat.Suffix, options =>
            {
                options.ResourcesPath = "Resources";
            }).AddDataAnnotationsLocalization().AddNewtonsoftJson(options =>
            {
                options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
                options.SerializerSettings.PreserveReferencesHandling = PreserveReferencesHandling.Objects;
            });

            services.AddWebMarkupMin(
            options =>
            {
                options.AllowMinificationInDevelopmentEnvironment = true;
                options.AllowCompressionInDevelopmentEnvironment = true;
            })
            .AddHtmlMinification(
                options =>
                {
                    options.MinificationSettings.RemoveRedundantAttributes = true;
                    options.MinificationSettings.RemoveHttpProtocolFromAttributes = false;
                })
            .AddHttpCompression();

            //Config Autofac.
            var builder = new ContainerBuilder();
            builder.Populate(services);

            builder.RegisterModule(new ApplicationModule(Configuration.GetConnectionString("WebsiteConnectionString"), Configuration.GetConnectionString("EventConnectionString"), Configuration.GetConnectionString("WarehouseConnectionString"), Configuration.GetConnectionString("CoreConnectionString")));
            builder.RegisterModule(new ValidationModule());
            var autofacServiceProvider = new AutofacServiceProvider(builder.Build());
            return autofacServiceProvider;
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app)
        {
            app.UseRouting();
            app.UseDeveloperExceptionPage();
            app.UseExceptionHandler("/Home/Error");
            app.UseResponseCaching();
            // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            app.UseHsts();
            #region Localizations
            var supportedCultures = new[]
            {
                new CultureInfo("vi-VN"),
                new CultureInfo("en-US"),
            };

            app.UseMiddleware<RequestLocalizationMiddleware>();

            var defaultCulture = new CultureInfo("vi-VN");
            var localizationOptions = new RequestLocalizationOptions()
            {
                SupportedCultures = supportedCultures,
                SupportedUICultures = supportedCultures,
                DefaultRequestCulture = new RequestCulture(defaultCulture),
                FallBackToParentCultures = false,
                FallBackToParentUICultures = false,
                RequestCultureProviders = new List<IRequestCultureProvider>
                {
                    new QueryStringRequestCultureProvider(),
                    new CookieRequestCultureProvider()
                },
            };
            app.UseRequestLocalization(localizationOptions);
            #endregion
            app.UseHttpsRedirection();
            app.UseSession();
            app.UseStaticFiles(
                new StaticFileOptions
                {
                    OnPrepareResponse = context =>
                    {
                        // Cache static file for 7 day
                        string path = context.Context.Request.Path;
                        if (path.EndsWith(".css") || path.EndsWith(".js") || path.EndsWith(".ttf") || path.EndsWith(".gif") || path.EndsWith(".jpg") || path.EndsWith(".png") || path.EndsWith(".svg")
                        || path.EndsWith(".otf") || path.EndsWith(".ico") || path.EndsWith(".Jpeg"))
                        {
                            TimeSpan maxAge = new TimeSpan(30, 0, 0, 0); // 1 ngày
                            context.Context.Response.Headers.Append("Cache-Control", "max-age=" + maxAge.TotalSeconds.ToString("0"));
                        }
                    }
                }
            );
            app.UseWebMarkupMin();//Minify content
            app.UseCookiePolicy();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
                endpoints.MapControllerRoute(
                      "Slug",
                      "{*segment}",
                      new { controller = "Home", action = "Coordinator" },
                      new { segment = new CustomUrlConstraint(Configuration) }
                  );
            });
        }

        public class CustomUrlConstraint : IRouteConstraint
        {
            private readonly IConfiguration _configuration;
            public CustomUrlConstraint(IConfiguration configuration)
            {
                _configuration = configuration;
            }

            public bool Match(HttpContext httpContext, IRouter route, string parameterName, RouteValueDictionary values, RouteDirection routeDirection)
            {
                if (values[parameterName] != null && !values[parameterName].ToString().Equals("lien-he")
                    && !values[parameterName].ToString().Contains("giai-phap/")
                    && !values[parameterName].ToString().Equals("video")
                    && !values[parameterName].ToString().Equals("san-pham")
                    && !values[parameterName].ToString().Contains(".js")
                    && !values[parameterName].ToString().Contains(".scss")
                    && !values[parameterName].ToString().Contains(".png")
                    && !values[parameterName].ToString().Contains(".svg")
                    && !values[parameterName].ToString().Contains(".jpg")
                    && !values[parameterName].ToString().Contains(".less")
                    && !values[parameterName].ToString().Contains("lib/")
                       && !values[parameterName].ToString().Contains(".gif")
                    && !values[parameterName].ToString().Contains("fonts/")
                    && !values[parameterName].ToString().Contains("image/")
                    && !values[parameterName].ToString().Contains("images/")
                    && !values[parameterName].ToString().Contains(".ico")
                    && !values[parameterName].ToString().Contains(".ttf")
                    && !values[parameterName].ToString().Contains(".css"))
                {
                    return true;
                }

                return false;
            }
        }
    }
}