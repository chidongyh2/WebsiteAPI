using System.Reflection;
using Autofac;
using Module = Autofac.Module;

namespace GHM.Product.Infrastructure.AutofacModules
{
    public class ValidationModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            var assembly = Assembly.GetExecutingAssembly();
            builder.RegisterAssemblyTypes(assembly)
                .Where(t => t.Name.EndsWith("Validator"))
                .AsImplementedInterfaces();
        }
    }
}
