using Autofac;
using GHM.Infrastructure.MongoDb;
using GHM.Infrastructure.SqlServer;
//using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Repository;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.AutofacModules
{
    public class ApplicationModule : Module
    {
        private string _connectionString;

        public ApplicationModule(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<ThaiThinhMedicDbContext>()
                .Named<IDbContext>("Website")
                .InstancePerLifetimeScope();

            builder.RegisterType<ThaiThinhMedicClinicDbContext>()
                //.Named<IDbContext>("Desktop")
                .InstancePerLifetimeScope();

            builder.RegisterType<MongoDbContext>()
                .As<IMongoDbContext>()
                .WithParameter("connectionString", _connectionString);

            builder.RegisterType<NewsCategoryRepository>()
                .As<INewsCategoryRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<CategoryRepository>()
                .As<ICategoryRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<NewsRepository>()
                .As<INewsRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<MenuRepository>()
                .As<IMenuRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<CourseRepository>()
                .As<ICourseRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<CourseRegisterRepository>()
                .As<ICourseRegisterRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<ClassRepository>()
                .As<IClassRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<VideoRepository>()
                .As<IVideoRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<PromotionRepository>()
                .As<IPromotionRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<PromotionVoucherRepository>()
                .As<IPromotionVoucherRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<PromotionSubjectRepository>()
                .As<IPromotionSubjectRepository>()
                .InstancePerLifetimeScope();
        }
    }
}
