using Autofac;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.Services;
using GHM.Notifications.Api.Infrastructure.IntergrationEvents.EventHandlings;
using GHM.Notifications.Api.Resources;

namespace GHM.Notifications.Api.Infrastructure.AutofacModules
{
    public class ApplicationModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<ResourceService<SharedResource>>()
                .As<IResourceService<SharedResource>>()
                .InstancePerLifetimeScope();

            builder.RegisterType<ResourceService<GhmNotificationResource>>()
                .As<IResourceService<GhmNotificationResource>>()
                .InstancePerLifetimeScope();

            builder.RegisterAssemblyTypes(ThisAssembly)
                .Where(x => x.Name.EndsWith("Handler"))
                .InstancePerDependency();

            builder.RegisterAssemblyTypes(ThisAssembly)
                .Where(x => x.Name.EndsWith("Repository"))
                .AsImplementedInterfaces();

            builder.RegisterAssemblyTypes(ThisAssembly)
                .Where(x => x.Name.EndsWith("Service"))
                .AsImplementedInterfaces();
        }
    }
}
