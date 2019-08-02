using Autofac;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Services;
using GHM.WebsiteClient.Api.Domain.Resources;
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
                
        }
    }
}
