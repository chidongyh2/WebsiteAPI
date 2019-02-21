using Autofac;
using GHM.FileManagement.Domain.Resources;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.Services;
using GHM.Infrastructure.SqlServer;

namespace GHM.FileManagement.Infrastructure.AutofacModules
{
    public class ApplicationModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<FileManagementDbContext>()
                .As<IDbContext>()
                .InstancePerLifetimeScope();

            //builder.RegisterType<HttpClientService>()
            //    .As<IHttpClientService>()
            //    .InstancePerLifetimeScope();

            #region Resources
            builder.RegisterType<ResourceService<SharedResource>>()
                .As<IResourceService<SharedResource>>()
                .InstancePerLifetimeScope();

            builder.RegisterType<ResourceService<GhmFileManagementResource>>()
                .As<IResourceService<GhmFileManagementResource>>()
                .InstancePerLifetimeScope();
            #endregion                       

            #region Repositories            
            builder.RegisterAssemblyTypes(ThisAssembly)
                .Where(t => t.Name.EndsWith("Repository"))
                .AsImplementedInterfaces();
            #endregion

            #region Services            
            builder.RegisterAssemblyTypes(ThisAssembly)
                .Where(t => t.Name.EndsWith("Service"))
                .AsImplementedInterfaces();
            #endregion
        }
    }
}
