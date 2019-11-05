using Autofac;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Services;
using GHM.WebsiteClient.Api.Domain.IServices;
using GHM.WebsiteClient.Api.Domain.Resources;
using GHM.WebsiteClient.Api.Infrastructure.Services;
using System.Reflection;
using Module = Autofac.Module;

namespace GHM.WebsiteClient.Api.Infrastructure.AutofacModules
{
    public class ApplicationModule : Module
    {
        public string WebsiteConnectionString { get; }
        public string EventConnectionString { get; }
        public string WarehouseConnectionString { get; }
        public string CoreConnectionString { get; }

        public ApplicationModule(string websiteConnectionString, string eventConnectionString,
            string warehouseConnectionString, string coreConnectionString)
        {
            WebsiteConnectionString = websiteConnectionString;
            EventConnectionString = eventConnectionString;
            WarehouseConnectionString = warehouseConnectionString;
            CoreConnectionString = coreConnectionString;
        }

        protected override void Load(ContainerBuilder builder)
        {
            var assembly = Assembly.GetExecutingAssembly();

            #region Resources
            builder.RegisterType<ResourceService<GhmWebsiteResource>>()
                .As<IResourceService<GhmWebsiteResource>>()
                .InstancePerLifetimeScope();
            #endregion

            #region Service            
            builder.RegisterAssemblyTypes(assembly)
               .Where(t => t.Name.EndsWith("Service"))
              .AsImplementedInterfaces()
              .WithParameter(new TypedParameter(typeof(string), WebsiteConnectionString));
            #endregion

            builder.RegisterType<EventService>()
             .As<IEventService>()
             .InstancePerLifetimeScope()
              .WithParameter(new TypedParameter(typeof(string), EventConnectionString));

            builder.RegisterType<ProductSevice>()
            .As<IProductService>()
            .InstancePerLifetimeScope()
             .WithParameter(new TypedParameter(typeof(string), WarehouseConnectionString));

            builder.RegisterType<CoreService>()
           .As<ICoreService>()
           .InstancePerLifetimeScope()
            .WithParameter(new TypedParameter(typeof(string), CoreConnectionString));

            builder.RegisterType<AgencyInfoService>()
        .As<IAgencyInfoService>()
        .InstancePerLifetimeScope()
         .WithParameter(new TypedParameter(typeof(string), WebsiteConnectionString));
        }
    }
}
