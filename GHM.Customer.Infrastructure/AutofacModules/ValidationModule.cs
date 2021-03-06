﻿using System.Reflection;
using Autofac;
using Module = Autofac.Module;

namespace GHM.Customer.Infrastructure.AutofacModules
{
    /// <summary>
    /// Module đăng ký các validations cho các model metas.
    /// </summary>
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
