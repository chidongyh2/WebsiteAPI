using System.Reflection;
using Autofac;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.Services;
using GHM.Infrastructure.SqlServer;
using GHM.Product.Domain.Resources;
using Module = Autofac.Module;

namespace GHM.Product.Infrastructure.AutofacModules
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
            builder.RegisterType<ProductDbContext>()
                .As<IDbContext>()
                .InstancePerLifetimeScope();

            //builder.RegisterType<HttpClientService>()
            //    .As<IHttpClientService>()
            //    .InstancePerLifetimeScope();

            #region Resources
            builder.RegisterType<ResourceService<SharedResource>>()
                .As<IResourceService<SharedResource>>()
                .InstancePerLifetimeScope();

            builder.RegisterType<ResourceService<GhmProductResource>>()
                .As<IResourceService<GhmProductResource>>()
                .InstancePerLifetimeScope();
            #endregion

            #region Repositories            
            builder.RegisterAssemblyTypes(assembly)
                .Where(t => t.Name.EndsWith("Repository"))
                .AsImplementedInterfaces();
            #endregion

            #region Services            
            builder.RegisterAssemblyTypes(assembly)
                .Where(t => t.Name.EndsWith("Service"))
                .AsImplementedInterfaces();
            #endregion
        }
    }
}
