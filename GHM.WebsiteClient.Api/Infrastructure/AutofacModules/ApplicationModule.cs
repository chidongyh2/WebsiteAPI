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
        public string ConnectionString { get; }
        public ApplicationModule(string connectionString)
        {
            ConnectionString = connectionString;
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
              .WithParameter(new TypedParameter(typeof(string), ConnectionString));
            #endregion

            builder.RegisterType<EventService>()
             .As<IEventService>()
             .InstancePerLifetimeScope()
              .WithParameter(new TypedParameter(typeof(string), "Data Source=172.16.200.8;Initial Catalog=GHM_Website_Event;Integrated Security=False;Persist Security Info=False;User ID=sa;Password=@pk125tt@"));
        }
    }
}
