using System.Reflection;
using Autofac;
using GHM.Warehouse.Domain.Commands;
using MediatR;
using Module = Autofac.Module;

namespace GHM.Warehouse.Infrastructure.AutofacModules
{
    public class MediatRModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(typeof(IMediator).GetTypeInfo().Assembly)
                .AsImplementedInterfaces();

            builder.RegisterAssemblyTypes(typeof(UpdateGoodsReceiptNoteCommand).GetTypeInfo().Assembly).
                AsClosedTypesOf(typeof(INotificationHandler<>));
        }
    }
}
