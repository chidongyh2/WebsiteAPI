using System;
using System.IO;
using GHM.Core.Infrastructure;
using GHM.Core.Infrastructure.SeedData;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace GHM.Core.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = BuildWebHost(args);
            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                try
                {
                    //SeedData.Initialize(services);
                    //PageSeedData.Initialize(services);
                }
                catch (Exception ex)
                {
                    var logger = services.GetRequiredService<ILogger<Program>>();
                    logger.LogError(ex, "An error occurred seeding the DB.");
                }
                host.Run();
            }
            //BuildWebHost(args).Run();
        }
        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                //    .UseKestrel((builderContext, options) =>
                //    {
                //        options.Configure(builderContext.Configuration.GetSection("Kestrel"));
                //    })
                //    .UseContentRoot(Directory.GetCurrentDirectory())
                //    .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();
    }
}
