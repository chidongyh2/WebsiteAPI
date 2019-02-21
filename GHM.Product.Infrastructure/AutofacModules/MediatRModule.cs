using System.Reflection;
using Autofac;
using MediatR;
using Module = Autofac.Module;

namespace GHM.Product.Infrastructure.AutofacModules
{
    public class MediatRModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(typeof(IMediator).GetTypeInfo().Assembly)
                .AsImplementedInterfaces();         
        }
    }
}
