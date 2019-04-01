using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace GHM.Authentication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                //.UseSetting(WebHostDefaults.DetailedErrorsKey, "true")
                //.UseKestrel((builderContext, options) =>
                //{
                //    options.Configure(builderContext.Configuration.GetSection("Kestrel"));
                //})
                //.UseContentRoot(Directory.GetCurrentDirectory())
                //.UseIISIntegration()
                .UseStartup<Startup>()
                .UseUrls("http://localhost:50000")
                .Build();
    }
}
