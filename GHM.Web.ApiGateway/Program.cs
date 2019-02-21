using System;
using System.IO;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Ocelot.DependencyInjection;
using Ocelot.Middleware;

namespace GHM.Web.ApiGateway
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //new WebHostBuilder()
            //    .UseKestrel()
            //    .UseContentRoot(Directory.GetCurrentDirectory())

            //    .ConfigureLogging((hostingContext, logging) =>
            //    {
            //        //add your logging
            //    })
            //    .UseIISIntegration()
            //    .Build()
            //    .Run();

            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseKestrel()
                .UseIISIntegration()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .ConfigureAppConfiguration((hostingContext, config) =>
                {
                    config
                        .SetBasePath(hostingContext.HostingEnvironment.ContentRootPath)
                        .AddJsonFile($"appsettings.{hostingContext.HostingEnvironment.EnvironmentName}.json", true, true)
                        .AddJsonFile($"configuration.{hostingContext.HostingEnvironment.EnvironmentName}.json", false, true)
                        .AddEnvironmentVariables();
                })
                .UseStartup<Startup>();
    }
}
