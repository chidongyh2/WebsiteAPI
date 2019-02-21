using Autofac;
using FluentValidation;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Commands.Category;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Commands.Course;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Commands.Menu;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.ModelMetas;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Validations;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.AutofacModules
{
    public class ValidationModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<UpdateCategoryCommandValidator>()
                .As<IValidator<CategoryCommand>>()
                .InstancePerLifetimeScope();

            builder.RegisterType<CreateClassCommandValidator>()
                .As<IValidator<CreateClassCommand>>()
                .InstancePerLifetimeScope();

            builder.RegisterType<CreateCourseRegisterCommandValidator>()
                .As<IValidator<CreateCourseRegisterCommand>>()
                .InstancePerLifetimeScope();

            builder.RegisterType<CourseValidator>()
                .As<IValidator<Course>>()
                .InstancePerLifetimeScope();

            builder.RegisterType<ClassValidator>()
                .As<IValidator<Classes>>()
                .InstancePerLifetimeScope();

            builder.RegisterType<CourseRegisterValidator>()
                .As<IValidator<CourseRegister>>()
                .InstancePerLifetimeScope();

            builder.RegisterType<VideoMetaValidator>()
                .As<IValidator<VideoMeta>>()
                .InstancePerLifetimeScope();

            builder.RegisterType<CreateMenuCommandValidator>()
                .As<IValidator<CreateMenuCommand>>()
                .InstancePerLifetimeScope();
        }
    }

}
