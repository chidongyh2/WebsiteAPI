using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using FluentValidation.AspNetCore;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.ModelBinders;
using GHM.Infrastructure.Services;
using GHM.WebsiteClient.Api.Infrastructure.AutofacModules;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using WebMarkupMin.AspNetCore2;

namespace GHM.Website.Truck
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
            services.AddLocalization(options => options.ResourcesPath = "Resources");
            services.AddCors();
            services.AddMvcCore(options =>
            {
                options.Conventions.Add(new DefaultFromBodyBindingConvention());
                options.ModelBinderProviders.Insert(0, new DateTimeModelBinderProvider());
            })
                .AddJsonFormatters()
                .AddJsonOptions(options =>
                {
                    options.SerializerSettings.DateFormatString = "dd/MM/yyyy";
                })
                .AddFluentValidation();

            services.AddMemoryCache();
            services.AddSingleton<IConfiguration>(Configuration);
            services.AddScoped<IHttpClientService, HttpClientFactoryService>();
            services.AddSession();
            services.Configure<RequestLocalizationOptions>(options =>
            {
                options.DefaultRequestCulture = new RequestCulture(new CultureInfo("vi-VN"));
            });
            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1)
            .AddViewLocalization(LanguageViewLocationExpanderFormat.Suffix, options =>
            {
                options.ResourcesPath = "Resources";
            }).AddDataAnnotationsLocalization()
            .Services
               .AddHttpClient<IHttpClientService, HttpClientFactoryService>();
            
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

            builder.RegisterModule(new ApplicationModule(Configuration.GetConnectionString("DefaultConnection"), Configuration.GetConnectionString("DefaultConnection"), Configuration.GetConnectionString("DefaultConnection"), Configuration.GetConnectionString("DefaultConnection")));
            builder.RegisterModule(new ValidationModule());
            var autofacServiceProvider = new AutofacServiceProvider(builder.Build());
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
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
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
            app.UseHttpsRedirection();
            app.UseStaticFiles(
                //new StaticFileOptions
                //{
                //    OnPrepareResponse = context =>
                //    {
                //        // Cache static file for 7 day
                //        string path = context.Context.Request.Path;
                //        if (path.EndsWith(".css") || path.EndsWith(".js") || path.EndsWith(".gif") || path.EndsWith(".jpg") || path.EndsWith(".png") || path.EndsWith(".svg"))
                //        {
                //            TimeSpan maxAge = new TimeSpan(1, 0, 0, 0); // 1 ngày
                //            context.Context.Response.Headers.Append("Cache-Control", "max-age=" + maxAge.TotalSeconds.ToString("0"));
                //        }
                //    }
                //}
            );
            app.UseWebMarkupMin();//Minify content
            app.UseCookiePolicy();
            #endregion
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
                routes.MapRoute(
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
            private readonly IHttpClientService _httpClientService;
            public CustomUrlConstraint(IConfiguration configuration)
            {
                _configuration = configuration;
            }
            public bool Match(HttpContext httpContext, IRouter route, string parameterName, RouteValueDictionary values, RouteDirection routeDirection)
            {
                if (values[parameterName] != null && !values[parameterName].ToString().Equals("lien-he"))
                {
                    var permalink = values[parameterName].ToString();
                    if(permalink.Contains("?fbclid"))
                    {
                        var source = permalink.Split("?fbclid");
                        permalink = source[0];
                    }
                    string[] link = permalink.Split('.');
                    var requestUrl = _configuration.GetApiUrl();
                    var apiService = _configuration.GetApiServiceInfo();
                    var httpClientService = new HttpClientService();
                    var isCategoryExist = httpClientService.PostAsync<bool>($"{requestUrl.ApiGatewayUrl}/api/v1/website/categories/check-category-exist",
                        new Dictionary<string, string>
                        {
                            {"TenantId", apiService.TenantId},
                            {"seoLink", link[0] },
                            {"languageId",  CultureInfo.CurrentCulture.Name}
                        });
                    var isNewsExist = httpClientService.PostAsync<bool>($"{requestUrl.ApiGatewayUrl}/api/v1/website/news/check-exist", new Dictionary<string, string>
                        {
                            {"TenantId", apiService.TenantId},
                            {"seoLink", link[0] },
                            {"languageId",  CultureInfo.CurrentCulture.Name}
                        });
                    return isCategoryExist.Result || isNewsExist.Result;
                }
                return false;
            }
        }
    }
}
