using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation.AspNetCore;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.ModelBinders;
using GHM.Infrastructure.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using WebMarkupMin.AspNetCore2;

namespace GHM.WebSite.JadesSpa
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
            services.AddSession();
            services.Configure<RequestLocalizationOptions>(options =>
            {
                options.DefaultRequestCulture = new RequestCulture("vi-VN");
            });
            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });


            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1).AddViewLocalization(LanguageViewLocationExpanderFormat.Suffix, options =>
            {
                options.ResourcesPath = "Resources";
            })
                    .AddDataAnnotationsLocalization();

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
            app.UseHttpsRedirection();
            app.UseStaticFiles();
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
            public CustomUrlConstraint(IConfiguration configuration)
            {
                _configuration = configuration;
            }
            public bool Match(HttpContext httpContext, IRouter route, string parameterName, RouteValueDictionary values, RouteDirection routeDirection)
            {
               
                if(values[parameterName] != null && !values[parameterName].ToString().Equals("lien-he"))
                {
                    var permalink = values[parameterName].ToString();
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
                //var menuRepository = DependencyResolver.Current.GetService<IMenuRepository>();
                //var categoryReposiroty = DependencyResolver.Current.GetService<ICategoryRepository>();
                //if (values[parameterName] != null)
                //{
                //    var permalink = values[parameterName].ToString();
                //    var isMenuExists = menuRepository.CheckNamePathExists(permalink);
                //    var isCategoryExists = categoryReposiroty.CheckCateogryIsContainBySeoLink(permalink);
                //    return isMenuExists || isCategoryExists;
                //}
                return false;
            }   
        }
    }
}
