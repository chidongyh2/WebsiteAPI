using Autofac;

namespace GHM.Core.Infrastructure.AutofacModules
{
    public class ValidationModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(ThisAssembly)
                .Where(t => t.Name.EndsWith("Validator"))
                .AsImplementedInterfaces();
        }
    }
}
